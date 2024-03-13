<?php


namespace App\Http\Controllers;

use App\Imports\StudentsImport;
use App\Models\Course;
use App\Models\User;
use App\SystemRole;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\View;
use Maatwebsite\Excel\Facades\Excel;


class UserController extends Controller
{
    public function checkAuth()
    {
        $role_id = DB::table('user_role')->where('user_id', Auth::id())->value('role_id');
        $role = DB::table('roles')->where('id', $role_id)->value('name');

        echo $role;
        return Inertia::render('Welcome', [
            'testProp' => DB::table('users')->get(),
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => 'Application::VERSION',
            'phpVersion' => PHP_VERSION,
        ]);
    }


    /**
     * @throws \Exception
     */
    public static function createUser(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'first_name' => 'required|string',
                'email' => 'required|email|unique:users',
                'banner_id' => 'required|string|unique:users',
                'role' => 'required|string',
            ]);


            DB::beginTransaction();


            DB::table('users')->insert([
                'first_name' => $validatedData['first_name'],
                'last_name' => $request->last_name ? $request->last_name : '',
                'email' => $validatedData['email'],
                'banner_id' => $validatedData['banner_id'],
                'password' => Hash::make("default")
            ]);


            $user_Id = DB::table('users')->where('email', $request->email)->value('id');
            $role_Id = DB::table('system_roles')->where('role', $request->role)->value('id');


            if ($user_Id === null || $role_Id === null) {
                DB::rollBack();
                throw new \Exception('User or role not found.');
            }


            DB::table('user_system_role')->insert([
                'users_id' => $user_Id,
                'system_roles_id' => $role_Id,
            ]);

            DB::commit();
        } catch (\Exception $e) {
            return response()->json(['error' => 'An error occurred: ' . $e->getMessage()], 500);
        }
        return null;
    }

    public static function editSystemRole(Request $request)
    {

        $system_role_id = DB::table('system_roles')->where('role', $request->role)->value('id');
        if ($system_role_id === null) {
            return response()->json(['error' => 'System role not found'], 404);
        }

        DB::beginTransaction();

        try {
            DB::table('user_system_role')
                ->where('users_id', $request->user_id)
                ->update(['system_roles_id' => $system_role_id]);

            DB::commit();

        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['error' => 'An error occurred: ' . $e->getMessage()], 500);
        }
        return null;
    }

    public static function getUserCoursesRequest(Request $request)
    {
        $courses = self::getUserCourses($request->user_id);
        if (!$courses) {
            return response()->json(['error' => 'User not found'], 404);
        }
        return response()->json(['success' => $courses], 200);
    }

    public static function getUserCourses($user_id)
    {
        $user = User::find($user_id);
        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }

        $studentCourses = $user->studentCourses;
        $instructorCourses = $user->instructorCourses;
        $taCourses = $user->taCourses;
        $data = [
            'studentCourses' => $studentCourses,
            'instructorCourses' => $instructorCourses,
            'taCourses' => $taCourses,
        ];
        return $data;
    }

    // Get all the instructors and their respective courses.
    public static function getAllInstructors(Request $request)
    {
        if ($request->hasFile('students')) {
            $path = $request->file('students')->getRealPath();
            $userCollection = Excel::toCollection(new StudentsImport, $path);

            $courseId = $request->course_id;
            $course = Course::find($courseId);

            foreach ($userCollection[0] as $user) {
                if (!$user->courses->contains($course)) {
                    $user->courses()->attach($course, ['course_roles_id' => 3]);
                } else {
                    return response()->json(['error' => 'User already has a role in this course', $user], 400);
                }
            }
        } else {
            return response()->json(['error' => 'No file uploaded', $request], 400);
        }

    }

    public static function assignIndividualStudent(Request $request)
    {
        $courseId = $request->course_id;
        $userId = $request->user_id;

        $course = Course::find($courseId);
        $user = User::find($userId);

        if (!$course || !$user) {
            return response()->json(['error' => 'Course or student not found'], 404);
        }
        $existingRole = $course->getUserRoleInCourse($user, $course);

        if (!$existingRole) {
            $course->assignStudent($user);
            return response()->json(['success' => 'Student assigned to course'], 200);
        } else {
            return response()->json(['error' => 'User already has a role in this course', $user, $course, $existingRole], 400);
        }
    }

    public static function assignTA(Request $request)
    {
        $courseId = $request->course_id;
        $userId = $request->user_id;

        $course = Course::find(1);
        $user = User::find(3);

        if (!$course || !$user) {
            return response()->json(['error' => 'Course or TA not found'], 404);
        }
        $existingRole = $course->getUserRoleInCourse($user, $course);
        if (!$existingRole) {
            $course->assignTA($user);
            return response()->json(['success' => 'TA assigned to course'], 200);
        } else {
            return response()->json(['error' => 'User already has a role in this course', $user, $course, $existingRole], 400);
        }

    }




    public static function getUserWithRole()
    {
        $user = Auth::user();

        $system_role = DB::table('user_system_role')
            ->select('system_roles.role as role')
            ->join('system_roles', 'system_roles.id', '=', 'user_system_role.system_roles_id')
            ->where('user_system_role.users_id', $user->id)
            ->distinct()
            ->get();

        $new_user = $user;
        if ($system_role->count() > 0) {
            $new_user->role = $system_role[0]->role;
        }

        return $new_user;
    }

    public static function getAuthUserCourseId()
    {
        $user = Auth::user();
        $courseId = DB::table('user_course_role')
            ->select('course_roles_id')
            ->where('users_id', $user->id)
            ->first();
        return $courseId->course_roles_id;
    }

}
