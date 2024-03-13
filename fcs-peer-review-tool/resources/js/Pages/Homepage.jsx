import Authenticated from "@/Layouts/AuthenticatedLayout";
import Course from "@/Components/Course";
import React from "react";

export default function Homepage({ user, userPermission, courses }) {
    const submit = (e) => {
        e.preventDefault();
        post(route("logout"));
    };

    return (
        <Authenticated
            userPermission={userPermission}
            user={user}
            courses={courses}
            className="flex-grow"
        >
            <h1 className="text-5xl text-gray-700 font-semibold p-4 mt-2 mb-4">
                Welcome to Peer Review Tool!
            </h1>
            {courses.studentCourses.length > 0 && (
                <>
                    <h3 className="text-3xl text-gray-700 font-semibold p-3 ">
                        Student Course List
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
                        {courses.studentCourses.map(
                            (course) => (
                                <Course key={course.id} {...course} />
                            )
                        )}
                    </div>
                </>
            )}

            {courses.taCourses.length > 0 && (
                <>
                    <h3 className="text-3xl text-gray-700 font-semibold p-3 ">
                        TA Course List
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
                        {courses.taCourses.map((course) => (
                            <Course key={course.id} {...course} />
                        ))}
                    </div>
                </>
            )}

            {courses.instructorCourses.length > 0 && (
                <>
                    <h3 className="text-3xl text-gray-700 font-semibold p-3 ">
                        Instructor Course List
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
                        {courses.instructorCourses.map(
                            (course, index) => (
                                <Course key={index} {...course} />
                            )
                        )}
                    </div>
                </>
            )}
        </Authenticated>
    );
}
