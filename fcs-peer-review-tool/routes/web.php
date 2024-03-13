<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\AssignmentController;
use App\Http\Controllers\DocumentReviewController;
use App\Http\Controllers\ForgetPasswordController;
use App\Http\Controllers\InstructorController;
use App\Http\Controllers\PeerReviewController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\TAController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\GroupController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {

    $user = UserController::getUserWithRole();
    $courses = UserController::getUserCourses($user->id);


    return Inertia::render('Homepage', [
        'user' => UserController::getUserWithRole(),
        'courses' => $courses,


    ]);
    

})->middleware(['auth']);
Route::get('/Review', function () {
    return Inertia::render('ReviewPage', [
        'user' => UserController::getUserWithRole(),
    ]);

})->middleware(['auth']);

Route::get('/admin', function () {
    return Inertia::render('Admin/Admin', [
        'users' => DB::table('user_system_role')
            ->select('users.id', 'users.first_name', 'users.last_name', 'system_roles.role as role', 'users.email', 'users.banner_id')
            ->join('users', 'users.id', '=', 'user_system_role.users_id')
            ->join('system_roles', 'system_roles.id', '=', 'user_system_role.system_roles_id')
            ->distinct()
            ->get(),
        'courses' => DB::table('courses')->select()->get(),
        'user' => UserController::getUserWithRole(),
    ]);
})->middleware(['auth']);

Route::get('/csvtest', function () {
    return Inertia::render('CsvTest', [

        'user' => UserController::getUserWithRole(),
    ]);
})->middleware(['auth']);

Route::get("/forgot-password", [ForgetPasswordController::class, "redirectToForgetPasswordPage"])->name('password.forgot.request');

Route::middleware(['web'])->group(function () {
    Route::post("/reset-password", [ForgetPasswordController::class, "sendResetPasswordLink"])->name('password.reset.request');
    Route::post("/reset-password/{token}", [ForgetPasswordController::class, "resetPassword"])->name('password.reset');
});

Route::get('/reset-password/{token}', [ForgetPasswordController::class, "redirectToResetPasswordPage"])->name('password.reset');

//Route to create a new user from the admin Panel using the method createUser from the UserController
Route::post('/admin/createUser', [UserController::class, 'createUser'])->name('admin.user.create')->middleware(['auth']);
Route::post('/admin/editSystemRole', [UserController::class, 'editSystemRole'])->name('admin.user.edit.role')->middleware(['auth']);


//Route to get all the courses of a user enrolled in.
Route::get('/userCourses/{user_id}', [UserController::class, 'getUserCoursesRequest'])->name('user.courses')->middleware(['auth']);
Route::get('/assignInstructor', [CourseController::class, 'assignInstructorToCourse'])->name('course.assign.instructor')->middleware(['auth']);


//Route to assign students through a csv file
Route::post('/assignStudents', [CourseController::class, 'assignStudentsToCourse'])->name('course.assign.students')->middleware(['auth']);
//Route to assign students individually
Route::get('/assignIndividualStudent', [CourseController::class, 'assignIndividualStudent'])->name('course.assign.student')->middleware(['auth']);
//Route to remove a student from a course
Route::get('/removeStudent', [CourseController::class, 'removeStudent'])->name('course.remove.student')->middleware(['auth']);

//Route to assign a TA to a course
Route::get('/assignTA', [CourseController::class, 'assignTA'])->name('course.assign.ta')->middleware(['auth']);
Route::get('/removeTA', [CourseController::class, 'removeTA'])->name('course.remove.ta')->middleware(['auth']);

//Route to create a course and access the courses.
Route::get('/createCourse', [CourseController::class, 'createCourse'])->name('course.create')->middleware(['auth']);
Route::get('/allCourses', [CourseController::class, 'getAllCourses'])->name('course.all')->middleware(['auth']);
Route::get('/course', [CourseController::class, 'getCourse'])->name('course.get')->middleware(['auth']);

//Route to get all the students, TA in a course
Route::get('/studentsInCourse', [CourseController::class, 'getStudentsInCourse'])->name('course.students')->middleware(['auth']);
Route::get('/tasInCourse', [CourseController::class, 'getTAInCourse'])->name('course.tas')->middleware(['auth']);
Route::get('/getInstructors', [UserController::class, 'getAllInstructors'])->name('instructor.courses')->middleware(['auth']);

//Group Routes
Route::get('/createGroup', [GroupController::class, 'createGroupInCourse'])->name('group.create')->middleware(['auth']);
Route::get('/getGroups', [GroupController::class, 'getGroupsInCourse'])->name('group.get')->middleware(['auth']);
Route::get('/getGroup', [GroupController::class, 'getGroupInCourse'])->name('group.get')->middleware(['auth']);
Route::get('/assignUserToGroup', [GroupController::class, 'addUserToGroupInCourse'])->name('group.assign')->middleware(['auth']);
Route::get('/addUsersToCourseGroup', [GroupController::class, 'addUsersToCourseGroup'])->name('group.users.add')->middleware(['auth']);
Route::get('/removeUserFromGroup', [GroupController::class, 'removeUserFromGroupInCourse'])->name('group.user.remove')->middleware(['auth']);
Route::get('/deleteCourseGroup', [GroupController::class, 'deleteGroupInCourse'])->name('group.delete')->middleware(['auth']);


//Assignment Routes
Route::get('/assignment/create', [AssignmentController::class, 'createAssignmentInCourseRequest'])->name('assignment.create')->middleware(['auth']);
Route::get('/assignment/show/all', [AssignmentController::class, 'getAllAssignments'])->name('assignment.show.all')->middleware(['auth']);


//PeerReview Routes
Route::get('/peerReview/create', [PeerReviewController::class, 'createPeerReview'])->name('peerReview.create')->middleware(['auth']);
Route::get('/peerReview/show', [PeerReviewController::class, 'getPeerReviewsInAssignment'])->name('peerReview.show')->middleware(['auth']);
Route::get('/peerReview/show/user', [PeerReviewController::class, 'getPeerReviewsByUser'])->name('peerReview.show.all')->middleware(['auth']);
Route::post('/documentReview/save/document', [DocumentReviewController::class, 'createDocumentReview'])->name('documentReview.save.document')->middleware(['auth']);

require __DIR__ . '/auth.php';

Route::get('/Coursepanelpage', function () {

    return Inertia::render('Coursepanelpage', [
        'user' => UserController::getUserWithRole(),
    ]);

})->middleware(['auth']);

Route::get('/courses/{course}', [CourseController::class, 'showCourse'])
    ->middleware(['auth'])
    ->name('course.show');
    
Route::put('/courses/{courseId}', [CourseController::class, 'updateCourse'])
    ->middleware(['auth'])
    ->name('course.update');

    Route::put('/assignments/{assignmentId}', [CourseController::class, 'updateCourseAssignment'])
    ->middleware(['auth'])
    ->name('course.update.assignment');

Route::post('/courses/saveCourses', [CourseController::class, 'saveCourses'])->middleware(['auth'])->name('courses.save');


