<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Models\SystemRole;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Model;


class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'first_name',
        'last_name',
        'banner_id',
        'email',
        'password',
        'createdAt'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];




    /**
     * THis method defines the user with there specific roles.
     *
     */
    public function hasRole($role)
    {
        return $this->role;
    }

    protected $table = 'users';
    protected $primaryKey = 'id';

    public static function createUserFromCSV($row){
        $user = User::findByBannerId($row[2]);
        if (!$user) {
            $user = new User();
            $user->first_name = $row[0];
            $user->last_name = $row[1];
            $user->banner_id = $row[2];
            $user->email = $row[3];
            $user->password = Hash::make("default");
            $user->save();

            $var = SystemRole::find(3);
            $user->assignSystemRole($var);

        }

    }
    public static function find($id){
        $user = User::all()->where('id', $id)->first();
        return $user;
    }
    public static function findByBannerId($bannerId){
        $user = User::all()->where('banner_id', $bannerId)->first();
        return $user;
    }

    public function getSystemRole()
    {
        return $this->DB::table('user_system_role')
            ->select('system_roles.role as role')
            ->join('system_roles', 'system_roles.id', '=', 'user_system_role.system_roles_id')
            ->where('user_system_role.users_id', '=', $this->id)
            ->get();
    }

    public function courses(){
        return $this->belongsToMany(Course::class, 'user_course_role', 'users_id', 'course_id')
            ->withPivot('course_roles_id');
    }

    public function groups(){
        return $this->belongsToMany(Group::class, 'user_group_role', 'users_id', 'group_id');
    }

    public function author_user_reviews(){
        return $this->belongsToMany(PeerReviews::class, 'assignment_user_reviews', 'author_user_id', 'peer_reviews_id');
    }
    public function subject_user_reviews(){
        return $this->belongsToMany(PeerReviews::class, 'assignment_user_reviews', 'subject_user_id', 'peer_reviews_id');
    }




    public function systemRoles(){
        return $this->belongsToMany(SystemRole::class, 'user_system_role', 'users_id', 'system_roles_id');
    }

    public function assignSystemRole(SystemRole $role){
        $this->systemRoles()->attach($role);
    }


    //To get all the courses the User is enrolled in as a Student
    public function studentCourses(){
        return $this->belongsToMany(Course::class, 'user_course_role', 'users_id', 'course_id')
            ->wherePivot('course_roles_id', 3);
    }

    //To get all the courses the User is enrolled in as a Instructor
    public function instructorCourses(){
        return $this->belongsToMany(Course::class, 'user_course_role', 'users_id', 'course_id')
            ->wherePivot('course_roles_id', 1);
    }

    //To get all the courses the User is enrolled in as a TA
    public function taCourses(){
        return $this->belongsToMany(Course::class, 'user_course_role', 'users_id', 'course_id')
            ->wherePivot('course_roles_id', 2);
    }
    //Relationship with the DocumentReviews using the table user_reviews_documents_assignments
    public function user_reviews_documents_assignments(){
        return $this->belongsToMany(DocumentReviews::class, 'user_reviews_documents_assignments', 'users_id', 'review_documents_id');
    }

}
