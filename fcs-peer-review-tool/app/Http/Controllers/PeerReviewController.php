<?php

namespace App\Http\Controllers;

use App\Models\Assignments;
use App\Models\PeerReviews;
use App\Models\User;
use Illuminate\Http\Request;

class PeerReviewController extends Controller
{
    //Create a wrapper method for createPeerReview
    public static function createPeerReviewRequest(Request $request){
        $assignmentId = $request->assignmentId;
        $authorUserId = $request->authorUserId;
        $subjectUserId = $request->subjectUserId;
        $startDoing = $request->startDoing;
        $stopDoing = $request->stopDoing;
        $continueDoing = $request->continueDoing;
        $general = $request->general;

        return self::createPeerReview($assignmentId, $authorUserId, $subjectUserId, $startDoing, $stopDoing, $continueDoing, $general);
    }
    public static function createPeerReview($assignmentId, $authorUserId, $subjectUserId, $startDoing, $stopDoing, $continueDoing, $general){
        //Get the assignment
        $assignment = Assignments::find($assignmentId);
        if(!$assignment){
            return response()->json(['message' => 'Assignment not found'], 404);
        }
        //Get the users
        $author_user = User::find($authorUserId);
        if(!$author_user){
            return response()->json(['message' => 'Author user not found'], 404);
        }
        $subject_user = User::find($subjectUserId);
        if(!$subject_user){
            return response()->json(['message' => 'Subject user not found'], 404);
        }
        //Create the peer review
        $peer_review = new PeerReviews();
        $peer_review->start_doing = $startDoing;
        $peer_review->stop_doing = $stopDoing;
        $peer_review->continue_doing = $continueDoing;
        $peer_review->general = $general;
        $peer_review->save();
        //Attach the peer review to the assignment
        $peer_review->createRelationshipInAssignmentUserReviews($author_user->id, $subject_user->id, $peer_review->id, $assignment->id);

        return response()->json(['message' => 'Peer review created', $peer_review], 200);
    }

    //Get all peer reviews in an assignment
    public static function getPeerReviewsInAssignment(Request $request){
        $assignment = Assignments::find(1);
        if(!$assignment){
            return response()->json(['message' => 'Assignment not found'], 404);
        }
        $peer_reviews = $assignment->assignment_user_reviews;
        if(!$peer_reviews){
            return response()->json(['message' => 'No peer reviews found in assignment'], 404);
        }
        return response()->json(['message' => 'Peer reviews found in assignment', $peer_reviews], 200);
    }

    //Get all the reviews where the author is the user and the subject is the user
    public static function getPeerReviewsByUser(Request $request){
        $author_user = User::find(1);
        if(!$author_user){
            return response()->json(['message' => 'Author user not found'], 404);
        }
        $subject_user = User::find(2);
        if(!$subject_user){
            return response()->json(['message' => 'Subject user not found'], 404);
        }
        $peer_reviews = $author_user->author_user_reviews;
        if(!$peer_reviews){
            return response()->json(['message' => 'No peer reviews found for user'], 404);
        }
        return response()->json(['message' => 'Peer reviews found for user', $peer_reviews], 200);
    }

    //Get all the reviews written by the user and written for the user.
    public static function getPeerReviewsForUser(Request $request){
        $author_user = User::find(1);
        if(!$author_user){
            return response()->json(['message' => 'Author user not found'], 404);
        }
        $subject_user = User::find(2);
        if(!$subject_user){
            return response()->json(['message' => 'Subject user not found'], 404);
        }
        $peer_reviews = $subject_user->subject_user_reviews;
        if(!$peer_reviews){
            return response()->json(['message' => 'No peer reviews found for user'], 404);
        }
        return response()->json(['message' => 'Peer reviews found for user', $peer_reviews], 200);
    }




}
