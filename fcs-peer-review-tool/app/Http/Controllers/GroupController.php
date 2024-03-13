<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Group;
use App\Models\User;
use DB;
use Illuminate\Http\Request;

class GroupController extends Controller
{
    public static function createGroupInCourse(Request $request)
    {
        $course = Course::find($request->course_id);
        if (!$course) {
            return response()->json(['message' => 'Course not found'], 404);
        }
        $groups = $course->groups;
        foreach ($groups as $group) {
            if ($group->name == $request->name) {
                return response()->json(['message' => 'Group already exists in course'], 400);
            }
        }
        //Create the group
        $group = new Group();
        $group->name = $request->name;
        $group->save();
        $course->groups()->attach($group);
        $studentIds = $request->students;
        foreach ($studentIds as $studentId) {
            $user = User::find($studentId);
            if (!$user) {
                return response()->json(['message' => 'User not found'], 404);
            }
            $group->users()->attach($user, ['course_id' => $course->id]);
        }
        return response()->json(['message' => 'Group successfully created'], 200);
    }
    public static function getGroupsInCourse(Request $request)
    {
        $course = Course::find(1);
        if (!$course) {
            return response()->json(['message' => 'Course not found'], 404);
        }
        $groups = $course->groups;
        if (!$groups) {
            return response()->json(['message' => 'No groups found in course'], 404);
        }
        return response()->json(['message' => 'Groups found in course', $groups], 200);
    }

    public static function getCourseGroupsWithUsers($course_id)
    {
        $course = Course::find($course_id);
        if (!$course) {
            return response()->json(['message' => 'Course not found'], 404);
        }
        $groups = $course->groups;
        //Avoid duplicates
        $groupIds = [];
        $uniqueGroups = [];
        foreach ($groups as $group) {
            if (!in_array($group->id, $groupIds)) {
                $groupIds[] = $group->id;
                $uniqueGroups[] = $group;
            }
        }
        $groups = $uniqueGroups;
        if (!$groups) {
            return response()->json(['message' => 'No groups found in course'], 404);
        }
        foreach ($groups as $group) {
            $users = $group->users;
            $group->users = $users;
        }
        return $groups;
    }

    public static function getGroupInCourse(Request $request)
    {
        $course = Course::find(1);
        if (!$course) {
            return response()->json(['message' => 'Course not found'], 404);
        }
        //get all groups in a course by using findAllGroupsInACourse function
        $groups = Group::findAllGroupsInACourse($course->id);
        if (!$groups) {
            return response()->json(['message' => 'No groups found in course'], 404);
        }
        $group = null;
        foreach ($groups as $g) {
            if ($g->name == 'test') {
                $group = $g;
            }
        }
        $users = $group->users;
        if (!$users) {
            return response()->json(['message' => 'No users found in group'], 404);
        }
        return response()->json(['message' => 'Users found in group', $users], 200);
    }

    public function addUsersToCourseGroup(Request $request)
    {
        $group = Group::find($request->group_id);
        $course = Course::find($request->course_id);

        $studentIds = $request->students;
        foreach ($studentIds as $studentId) {
            $user = User::find($studentId);
            if (!$user) {
                return response()->json(['message' => 'User not found'], 404);
            }
            $group->users()->attach($user, ['course_id' => $course->id]);
        }
        return response()->json(['message' => 'Users successfully added to group'], 200);
    }


    public static function addUserToGroupInCourse(Request $request)
    {
        $course = Course::find(1);
        if (!$course) {
            return response()->json(['message' => 'Course not found'], 404);
        }
        $group = Group::find(4);
        if (!$group) {
            return response()->json(['message' => 'Group not found'], 404);
        }
        $user = User::find(1);
        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }
        $group->users()->attach($user, ['course_id' => $course->id]);
        return response()->json(['message' => 'User added to group', $group], 200);
    }

    public static function removeUserFromGroupInCourse(Request $request)
    {
        $course = Course::find($request->course_id);
        if (!$course) {
            return response()->json(['message' => 'Course not found'], 404);
        }
        $group = Group::find($request->group_id);
        if (!$group) {
            return response()->json(['message' => 'Group not found'], 404);
        }
        $user = User::find($request->user_id);
        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }
        $group->users()->detach($user, ['course_id' => $course->id]);
        return response()->json(['message' => 'User successfully removed'], 200);
    }

    //TODO: This function has been created but not tested yet.
    public static function randomlyAssignStudentsByStudents(Request $request)
    {
        $course = Course::find($request->course_id);
        if (!$course) {
            return response()->json(['message' => 'Course not found'], 404);
        }
        $students = $course->students;
        if (!$students) {
            return response()->json(['message' => 'No students found in course'], 404);
        }
        $numberOfStudentsInOneGroup = $request->number_of_students_in_one_group;
        $numberOfGroups = count($students) / $numberOfStudentsInOneGroup;
        $groups = [];
        for ($i = 0; $i < $numberOfGroups; $i++) {
            $group = new Group();
            $group->name = 'Group' . $i;
            $group->save();
            $course->groups()->attach($group);
            $groups[$i] = $group;
        }
        $i = 0;
        //
        foreach ($students as $student) {
            $groups[$i]->users()->attach($student, ['course_id' => $course->id]);
            $i++;
        }
        return response()->json(['message' => 'Students randomly assigned to groups', $groups], 200);


    }

    public static function deleteGroupInCourse(Request $request)
    {
        $course = Course::find($request->course_id);

        if (!$course) {
            return response()->json(['message' => 'Course not found with course id ' . $request->course_id], 404);
        }
        //get all groups in a course by using findAllGroupsInACourse function
        $group = Group::find($request->group_id);
        $group->users()->detach();
        $course->groups()->detach($group);
        $group->delete();
        return response()->json(['message' => 'Course successfully deleted'], 200);
    }

}
