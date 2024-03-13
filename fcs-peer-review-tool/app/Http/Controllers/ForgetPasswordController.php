<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\URL;
use Inertia\Inertia;
use Illuminate\Http\Response;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class ForgetPasswordController extends Controller
{

    //This function is responsible for redirecting user to forgot password page
    function redirectToForgetPasswordPage() {
        return Inertia::render('Password/ForgotPassword');
    }

    //This function is responsible for redirecting users to password reset page from their emails
    function redirectToResetPasswordPage($token) {

        //Check if token exists in DB - if it exists then user is authenticated to reset password
        $resetToken = DB::table('password_reset_tokens')->where('token',$token)->first();

        //Otherwise redirect to abort page
        if(!$resetToken) {
            return abort(404);
        }

        //If token does exist then check it's expiry - if expiry is less than 30 minutes then redirect to reset page
        $tokenExpiry = DB::table('password_reset_tokens')
            ->where('token', $resetToken->token) // Replace 'id' with the actual primary key column name
            ->where('token_creation', '<=', now())
            ->whereRaw('TIMESTAMPDIFF(MINUTE, token_creation, NOW()) < 30')
            ->first();

        //If token expiry is more than 30 minutes then redirect the user to abort page
        if(!$tokenExpiry) {
            return abort(404);
        }

        return Inertia::render('Password/ResetPassword',[
            'token' => $token,
        ]);
    }

    //This function is responsible for resetting the user password
    function resetPassword(Request $request) {

        //Get the token and password from user reset page
        $token = $request->input('token');
        $password = $request->input('password');

        //Encrypt the password
        $newHashedPassword =  bcrypt($password);

        //Save the new password in database
        $tokenId = DB::table('password_reset_tokens')->where('token',$token)->select('id')->first()->id;
        $userId = DB::table('user_password_reset_token')->where('password_reset_tokens_id',$tokenId)->select('users_id')->first()->users_id;
        DB::table('users')->where('id',$userId)->update(['password' => $newHashedPassword]);

        //Delete the reset password token and all it's associations to the user
        DB::table('user_password_reset_token')->where('users_id', $userId)->delete();
        DB::table('password_reset_tokens')->where('id', $tokenId)->delete();

        return response()->json(ResponseAlias::HTTP_OK);
    }

    //This function is responsible for sending user the password reset link
    function sendResetPasswordLink(Request $request) {

        //Get the email from the request
        $email = $request->input('email');

        //Query the DB to fetch the user to check if it exists or not
        $exists = DB::table('users')
            ->where('email', $email)
            ->select('id')
            ->first();

        if($exists) {

            //Get the user id
            $userId =  $exists->id;

            //Check if a token already exists for the user
            $tokenExists = DB::table('user_password_reset_token')->where('users_id', $userId)->select('password_reset_tokens_id')->first();

            if($tokenExists)  {

                //fetch the current saved token and refresh its creation time to current time
                DB::table('password_reset_tokens')->where('id',$tokenExists->password_reset_tokens_id)->update(['token_creation' => now()]);
                $token = DB::table('password_reset_tokens')->where('id',$tokenExists->password_reset_tokens_id)->select('token')->first()->token;

                //Send email with the existing token
                Mail::send("emails.forget-password",['token' => $token], function ($message) use ($email) {
                    $message->to($email);
                    $message->subject("FCS Peer Review Reset Password");
                });

            } else {

                //Generate a random 64 character token
                $token = Str::random(64);

                $data = [
                    'token' => $token,
                    'token_creation' => now(),
                ];

                //Save token in DB
                DB::table('password_reset_tokens')->insert($data);

                $tokenId = DB::table('password_reset_tokens')->where('token', $token)->select('id')->first()->id;

                $associateUser = [
                    'users_id' => $userId,
                    'password_reset_tokens_id' => $tokenId,
                ];

                //Associate the token to user
                DB::table('user_password_reset_token')->insert($associateUser);

                //Send email
                Mail::send("emails.forget-password", ['token' => $token], function ($message) use ($email) {
                    $message->to($email);
                    $message->subject("FCS Peer Review Reset Password");
                });
            }

        }

        //Error checking code - DO NOT REMOVE
//        return response()->json([
//            'message' => 'Password reset link sent successfully',
//            'data' => [
//                'record' => $tokenExpiry,
//            ]
//        ], ResponseAlias::HTTP_OK);

        return response()->json(ResponseAlias::HTTP_OK);

    }
}
