<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Assignments extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'start_date',
        'end_date',
        'due_date',
    ];

    public $timestamps = false;


    public static function find($id)
    {
        return Assignments::all()->where('id', $id)->first();
    }

    //Relationships

    //Relationship with the courses using the table course_assignments
    public function courses()
    {
        return $this->belongsToMany(Course::class, 'courses_assignments', 'assignments_id', 'course_id');
    }

    //Relationship with the assignment_types using the table assignments_types
    public function assignment_type()
    {
        return $this->belongsToMany(AssignmentTypes::class, 'assignments_types', 'Assignments_id', 'assignment_types_id');
    }

    //Relationship with the peer_reviews, users using the table assignment_user_reviews
    public function assignment_user_reviews()
    {
        return $this->belongsToMany(PeerReviews::class, 'assignment_user_reviews', 'assignments_id', 'peer_reviews_id');
    }
    //Relationship with the DocumentReviews using the table user_reviews_documents_assignments
    public function user_reviews_documents_assignments(){
    return $this->belongsToMany(DocumentReviews::class, 'user_reviews_documents_assignments', 'assignments_id', 'review_documents_id');
    }


}
