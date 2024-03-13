<?php

namespace App\Http\Controllers;

use App\Models\Assignments;
use App\Models\AssignmentTypes;
use App\Models\Course;
use Illuminate\Http\Request;

class AssignmentController extends Controller
{
    //Wrapper method for createAssignmentInCourse
    public static function createAssignmentInCourseRequest(Request $request)
    {
        $courseId = $request->courseId;
        $name = $request->name;
        $description = $request->description;
        $startDate = $request->startDate;
        $endDate = $request->endDate;
        $dueDate = $request->dueDate;
        $assignmentType = $request->assignmentType;

        return self::createAssignmentInCourse($courseId, $name, $description, $startDate, $endDate, $dueDate, $assignmentType);
    }
    public static function createAssignmentInCourse($courseId, $name, $description, $startDate, $endDate, $dueDate, $assignmentType)
    {
        $course = Course::find($courseId);
        $assignmentType = AssignmentTypes::find($assignmentType);

        if (!$course) {
            return response()->json(['message' => 'Course not found'], 404);
        }
        $assignments = $course->assignments;
        foreach ($assignments as $assignment) {
            if ($assignment->name == $name) {
                return response()->json(['message' => 'Assignment already exists in course'], 400);
            }
        }
        //Create the assignment
        $assignment = new Assignments();
        $assignment->name = $name;
        $assignment->description = $description;
        $assignment->start_date = $startDate;
        $assignment->end_date = $endDate;
        $assignment->due_date = $dueDate;
        $assignment->save();

        //Attach the assignment to the course
        $course->assignments()->attach($assignment);

        //Attach the type of the assignment to the assignment
        $assignment->assignment_type()->attach($assignmentType);
        return response()->json(['message' => 'Assignment created', $assignment], 200);
    }

    public static function editAssignmentRequest(Request $request)
    {
        $assignmentId = $request->assignmentId;
        $name = $request->name;
        $description = $request->description;
        $startDate = $request->startDate;
        $endDate = $request->endDate;
        $dueDate = $request->dueDate;

        return self::editAssignment($assignmentId, $name, $description, $startDate, $endDate, $dueDate);
    }

    //Method to edit an assignment and all the fields in the assignment.
    public static function editAssignment($assignmentId, $name = null, $description = null, $startDate = null, $endDate = null, $dueDate = null)
    {
        $assignment = Assignments::find($assignmentId);

        if (!$assignment) {
            return response()->json(['message' => 'Assignment not found'], 404);
        }

        // Check and update assignment attributes if the parameters are provided
        if ($name !== null) {
            $assignment->name = $name;
        }
        if ($description !== null) {
            $assignment->description = $description;
        }
        if ($startDate !== null) {
            $assignment->start_date = date('Y-m-d H:i:s', strtotime($startDate));
        }
        if ($endDate !== null) {
            $assignment->end_date = date('Y-m-d H:i:s', strtotime($endDate));
        }
        if ($dueDate !== null) {
            $assignment->due_date = date('Y-m-d H:i:s', strtotime($dueDate));
        }

        try {
            $assignment->save();
            return response()->json(['message' => 'Assignment edited', 'assignment' => $assignment], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Failed to edit assignment', 'error' => $e->getMessage()], 500);
        }
    }



    public static function getAssignmentsInCourse($course_id)
    {
        $course = Course::find($course_id);
        if (!$course) {
            return response()->json(['message' => 'Course not found'], 404);
        }
        $assignments = $course->assignments;
        if (!$assignments) {
            return null;
        }
        $assignments = Assignments::with('assignment_type')->get();

        return $assignments;
    }

    //Method to show all the assignments.
    public static function getAllAssignments(Request $request)
    {
        $assignments = Assignments::all();
        if (!$assignments) {
            return response()->json(['message' => 'No assignments found'], 404);
        }
        return response()->json(['message' => 'Assignments found', $assignments], 200);
    }

}
