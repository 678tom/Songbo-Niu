<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\DocumentReviews;

class DocumentReviewController extends Controller   
{
    public function createDocumentReview(Request $request)
    {
        // Validate the request
        $validatedData = $request->validate([
            'userId' => 'required',
            'assignmentId' => 'required',
            'document' => 'required|file',
        ]);

        // Access the validated data
        $userId = $validatedData['userId'];
        $assignmentId = $validatedData['assignmentId'];
        $file = $validatedData['document'];

        // Store the file in a desired directory and get the path
        $path = $file->store('documents');

        // Create and save the DocumentReview
        $document = new DocumentReviews();
        $document->document = $path;
        $document->save();

        $document->createRelationshipInUserReviewsDocumentsAssignments($userId, $assignmentId, $document->id);

        return response()->json(['message' => 'Document created', 'path' => $path]);
    }
}
