<?php

namespace App\Http\Controllers;

use App\Imports\StudentsImport;
use App\Models\Course;
use App\Models\User;
use DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;

enum CourseRoles: int
{
    case STUDENT = 1;
    case TA = 2;
    case INSTRUCTOR = 3;
}



class CourseController extends Controller
{



    function setuptocoursepage()
    {
        return Inertia::render('Coursepage');
    }

    public function showCourse($course_id)
    {
        $course = DB::table('courses')
            ->where('id', $course_id)
            ->first();

        if (!$course) {
            // Course with the given ID was not found, handle this error
            return redirect()->back()->with('error', 'Course not found');
        }

        $students = $this->getCourseUsersByRole(CourseRoles::STUDENT, $course_id);
        $TAs = $this->getCourseUsersByRole(CourseRoles::TA, $course_id);
        $user_role = UserController::getAuthUserCourseId();

        $course_role_component = [
            CourseRoles::STUDENT->value => 'StudentCourse/StudentCourse',
            CourseRoles::INSTRUCTOR->value => 'InstructorCourse/InstructorCourse',
            CourseRoles::TA->value => 'Course/TACourse',
        ];

        $assignments = AssignmentController::getAssignmentsInCourse($course_id);

        // change CourseRoles::INSTRUCTOR->value to whatever the auth user's role is ($user_role)
        return Inertia::render($course_role_component[CourseRoles::INSTRUCTOR->value], [
            'course' => $course,
            'user' => UserController::getUserWithRole(),
            'students' => $students,
            'courses' => DB::table('courses')->select()->get(),
            'assignments' => $assignments,
            'TAs' => $TAs,
            'groups' => GroupController::getCourseGroupsWithUsers($course_id),
        ]);

    }

    public function getCourseUsersByRole(CourseRoles $role, $courseId)
    {
        $users = DB::table('user_course_role')->select('users.*')->join('users', 'users.id', '=', 'user_course_role.users_id')->join('course_roles', 'course_roles.id', '=', 'user_course_role.course_roles_id')->where('user_course_role.course_id', '=', $courseId)->where("user_course_role.course_roles_id", '=', $role)->get();
        return $users;
    }

    public function saveCourses(Request $request)
    {
        $courseDataArray = $request->input("courseData");
        $dataToInsert = [];

        $lastCourse = DB::table('courses')->latest('id')->first();
        $id = $lastCourse ? $lastCourse->id + 1 : 1;

        foreach ($courseDataArray as $CourseData) {

            $dataToInsert[] = [
                'id' => $id,
                'name' => $CourseData['name'],
                'course_code' => $CourseData['courseCode'],
            ];
            $id++;
        }

        DB::beginTransaction();
        try {
            DB::table('courses')->insert($dataToInsert);
            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['error' => 'An error occurred: ' . $e->getMessage()], 500);
        }

        return null;
    }

    public static function createCourse(Request $request)
    {
        //Check if the course is already in the database
        $course = Course::findByCRN($request->crn);
        if ($course) {
            return response()->json(['message' => 'Course already exists'], 400);
        }
        //Create the course
        $course = new Course();
        $course->name = $request->name;
        $course->crn = $request->crn;
        $course->code = $request->code;
        $course->description = $request->description;
        $course->term = $request->term;
        $course->year = $request->year;
        $course->start_date = $request->start_date;
        $course->end_date = $request->end_date;
        $course->save();
        return response()->json(['message' => 'Course created', $course], 200);

    }

    public static function getCourse(Request $request)
    {
        $course = Course::find(1);
        if (!$course) {
            return response()->json(['message' => 'Course not found'], 404);
        }
        return $course;
    }

    public static function getAllCourses(Request $request)
    {
        $courses = Course::all();
        if (!$courses) {
            return response()->json(['message' => 'No courses found'], 404);
        }
        return $courses;
    }

    public static function getStudentsInCourse(Request $request)
    {
        $course = Course::find($request->course_id);
        if (!$course) {
            return response()->json(['message' => 'Course not found'], 404);
        }
        $students = $course->students;
        if (!$students) {
            return response()->json(['message' => 'No students found in course'], 404);
        }
        return response()->json(['message' => 'Students found in course', $students], 200);
    }

    public static function getTAInCourse(Request $request)
    {
        $course = Course::find($request->course_id);
        if (!$course) {
            return response()->json(['message' => 'Course not found'], 404);
        }
        $TAs = $course->TAs;
        if (!$TAs) {
            return response()->json(['message' => 'No TAs found in course'], 404);
        }
        return response()->json(['message' => 'TAs found in course', $TAs], 200);
    }


    public static function assignInstructorToCourse(Request $request)
    {
        $courseId = $request->course_id;
        $userId = $request->user_id;

        $course = Course::find($courseId);
        $user = User::find($userId);

        if (!$course || !$user) {
            return response()->json(['error' => 'Course or instructor not found'], 404);
        }
        $existingRole = $course->getUserRoleInCourse($user, $course);

        if (!$existingRole) {
            $course->assignInstructor($user);
            return response()->json(['success' => 'Instructor assigned to course'], 200);
        } else {
            return response()->json(['error' => 'User already has a role in this course', $user, $course, $existingRole], 400);
        }
    }

    public static function assignStudentsToCourse(Request $request)
    {
        if ($request->hasFile('students')) {
            $path = $request->file('students')->getRealPath();

            $userCollection = Excel::toCollection(new StudentsImport, $path, null, \Maatwebsite\Excel\Excel::CSV);

            $courseId = $request->course_id;
            $course = Course::find(1);

            foreach ($userCollection[0] as $row) {
                // Create user from CSV row
                User::createUserFromCSV($row);
                $user = User::findByBannerId($row[2]);

                $existingRole = $course->getUserRoleInCourse($user, $course);
                if (!$existingRole) {
                    $course->assignStudent($user);
                    Log::info('Student assigned to course', ['user' => $user, 'course' => $course]);
                } else {
                    Log::info('User already has a role in this course', ['user' => $user, 'course' => $course, 'existingRole' => $existingRole]);
                }
            }
            return response()->json(['message' => 'Students assigned successfully'], 200);
        } else {
            return response()->json(['error' => 'No students file provided'], 400);
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

    public static function removeTA(Request $request)
    {
        $course = Course::find($request->course_id);
        $user = User::find($request->user_id);
        if (!$course) {
            return response()->json(['message' => 'Course not found'], 404);
        }

        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }
        if (!$course->TAs->contains($user)) {
            return response()->json(['message' => 'User is not a TA in the course'], 400);
        }
        $course->TAs()->detach($request->user_id);
        return response()->json(['message' => 'TA removed from the course'], 200);
    }

    public static function removeStudent(Request $request)
    {
        $course = Course::find(1);
        $user = User::find(7);

        if (!$course) {
            return response()->json(['message' => 'Course not found'], 404);
        }
        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }
        if (!$course->students->contains($user)) {
            return response()->json(['message' => 'User is not a student in the course'], 400);
        }
        $course->students()->detach($request->user_id);
        return response()->json(['message' => 'Student removed from the course'], 200);
    }
    public static function getCoursesByInstructor(Request $request)
    {
        $user = User::find($request->user_id);
        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }
        $courses = $user->instructor_courses;
        if (!$courses) {
            return response()->json(['message' => 'No courses found for user'], 404);
        }
        return response()->json(['message' => 'Courses found for user', $courses], 200);
    }

    public static function updateCourse(Request $request, $courseId)
    {
        
        $request->validate([
            'description' => 'nullable|string',
            'term' => 'required|string|max:50',
            'year' => 'required|integer',
            'start_date' => 'required|date',
            'end_date' => 'required|date',
        ]);
    
        $course = Course::find($courseId);
    
        if (!$course) {
            return response()->json(['error' => 'Course not found'], 404);
        }
    
        try {
            $start_date = date('Y-m-d H:i:s', strtotime($request->input('start_date')));
            $end_date = date('Y-m-d H:i:s', strtotime($request->input('end_date')));
    
            $course->update([
                'description' => $request->input('description', $course->description),
                'term' => $request->input('term', $course->term),
                'year' => $request->input('year', $course->year),
                'start_date' => $start_date,
                'end_date' => $end_date,
            ]);
    
            return response()->json(['message' => 'Course updated successfully', 'course' => $course], 200);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to update course', 'details' => $e->getMessage()], 500);
        }
    }

    public static function updateCourseAssignment(Request $request)
    {
        $assignmentId = $request->input('assignment_id');
        $assignmentName = $request->input('assignment_name');
        $assignmentDescription = $request->input('assignment_description');
        $assignmentStartDate = $request->input('assignment_start_date');
        $assignmentEndDate = $request->input('assignment_end_date');
        $assignmentDueDate = $request->input('assignment_due_date');

        try {
            $editAssignmentResponse = AssignmentController::editAssignment(
                $assignmentId,
                $assignmentName,
                $assignmentDescription,
                $assignmentStartDate,
                $assignmentEndDate,
                $assignmentDueDate
            );

            if ($editAssignmentResponse->status() === 200) {
                return response()->json(['message' => 'Assignment updated successfully']);
            } else {
                return $editAssignmentResponse;
            }
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to update assignment', 'details' => $e->getMessage()], 500);
        }
    }

    

}
