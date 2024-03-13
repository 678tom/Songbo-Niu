<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class DocumentReviews extends Model
{
    use HasFactory;

    protected $fillable = [
      'document'
    ];

    protected $table = 'review_documents';

    protected $primaryKey = 'id';


    public static function find($id)
    {
        return DocumentReviews::all()->where('id', $id)->first();
    }
    public $timestamps = false;

    //Relationships
    //Relationship with user and Assignment on user_reviews_documents_assignments table
    public function user()
    {
        return $this->belongsToMany(User::class, 'user_id');
    }
    public function assignment()
    {
        return $this->belongsToMany(Assignments::class, 'assignment_id');
    }

    public function createRelationshipInUserReviewsDocumentsAssignments($user_id, $assignment_id, $review_document_id)
    {
        DB::table('user_review_documents_assignments')->insert([
            'users_id' => $user_id,
            'Assignments_id' => $assignment_id,
            'review_documents_id' => $review_document_id,
        ]);
    }
    //Relationship with user and Assignment on user_reviews_documents_assignments table











}