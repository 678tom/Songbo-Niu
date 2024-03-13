<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class PeerReviews extends Model
{
    use HasFactory;

    protected $fillable = [
        'start_doing',
        'stop_doing',
        'continue_doing',
        'general',
    ];

    public $timestamps = false;


    public static function find($id)
    {
        return PeerReviews::all()->where('id', $id)->first();
    }

    //Relationships

    public function courses()
    {
        return $this->belongsToMany(Course::class, 'courses_assignments', 'assignment_id', 'course_id');
    }

    public function assignment_types()
    {
        return $this->belongsToMany(AssignmentTypes::class, 'assignments_types', 'assignments_id', 'assignment_type_id');
    }

    public function assignment_user_reviews(){
        return $this->belongsToMany(Assignments::class, 'assignment_user_reviews', 'peer_reviews_id', 'Assignments_id');
    }


    public function author_users(){
        return $this->belongsToMany(User::class, 'assignment_user_reviews', 'peer_reviews_id', 'author_user_id');
    }

    public function subject_users(){
        return $this->belongsToMany(User::class, 'assignment_user_reviews', 'peer_reviews_id', 'subject_user_id');
    }
    public function createRelationshipInAssignmentUserReviews($author_user_id, $subject_user_id, $peer_review_id, $assignment_id)
    {
        DB::table('assignment_user_reviews')->insert([
            'author_user_id' => $author_user_id,
            'subject_user_id' => $subject_user_id,
            'peer_reviews_id' => $peer_review_id,
            'assignments_id' => $assignment_id,
        ]);
    }





}
