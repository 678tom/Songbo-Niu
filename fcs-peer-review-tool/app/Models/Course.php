<?php

namespace App\Models;

use App\Http\Controllers\CourseRoles;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\DB;

class Course extends Model
{
    use HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'crn',
        'code',
        'description',
        'term',
        'year',
        'start_date',
        'end_date',
    ];
    
    public $timestamps = false;

    // Find the course by the course id.
    public static function find($id)
    {
        return Course::all()->where('id', $id)->first();
    }

    public static function findByCRN($crn)
    {
        return Course::all()->where('crn', $crn)->first();
    }


    public function instructors()
    {
        return $this->belongsToMany(User::class, 'user_course_role', 'course_id', 'users_id')
            ->wherePivot('course_roles_id', CourseRoles::INSTRUCTOR->value);
    }

    public function students()
    {
        return $this->belongsToMany(User::class, 'user_course_role', 'course_id', 'users_id')
            ->wherePivot('course_roles_id', CourseRoles::STUDENT->value);
    }

    public function TAs()
    {
        return $this->belongsToMany(User::class, 'user_course_role', 'course_id', 'users_id')
            ->wherePivot('course_roles_id', CourseRoles::TA->value);

    }

    public function groups()
    {
        return $this->belongsToMany(Group::class, 'user_course_group', 'course_id', 'group_id');
    }

    public function assignments()
    {
        return $this->belongsToMany(Assignments::class, 'courses_assignments', 'course_id', 'assignment_id');
    }

    // Assigning Instructor and Getting the Instructor.
    public function assignInstructor(User $instructor)
    {
        $this->instructors()->attach($instructor, ['course_roles_id' => CourseRoles::INSTRUCTOR->value]);
    }
    public function getInstructor()
    {
        return $this->belongsToMany(User::class, 'user_course_role', 'course_id', 'users_id')
            ->wherePivot('course_roles_id', CourseRoles::INSTRUCTOR->value)
            ->first();
    }


    // Assigning Group of Students, Individual Students and Getting the Students.
    public function assignStudents(array $studentIds)
    {
        $this->students()->syncWithoutDetaching($studentIds);
    }
    public function assignStudent(User $student)
    {
        $this->students()->attach($student->id, ['course_roles_id' => CourseRoles::STUDENT->value]);
    }
    public function getStudents()
    {
        return $this->students;
    }


    public function assignTA(User $ta)
    {
        $this->TAs()->attach($ta->id, ['course_roles_id' => CourseRoles::TA->value]);
    }
    public function getTAs()
    {
        return $this->TAs;
    }

    // Getting the Course Role of a User.
    public function getUserRoleInCourse(User $user, Course $course)
    {
        //Just return the role_id of the user in the course provided.
        return $this->belongsToMany(User::class, 'user_course_role', 'course_id', 'users_id')
            ->wherePivot('users_id', $user->id)
            ->wherePivot('course_id', $course->id)
            ->select('course_roles_id')
            ->first();
    }

}
