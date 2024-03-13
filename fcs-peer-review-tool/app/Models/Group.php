<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
    ];

    public static function find($id)
    {
        return Group::all()->where('id', $id)->first();
    }

    public static function findAllGroupsInACourse($courseId){
        $groups = Group::all()->where('course_id', $courseId);
        return $groups;
    }

    public function courses(){
        return $this->belongsToMany(Course::class, 'user_course_group', 'group_id', 'course_id');
    }
    public function users(){
        return $this->belongsToMany(User::class, 'user_course_group', 'group_id', 'users_id');
    }
}
