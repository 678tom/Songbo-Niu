import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { router } from '@inertiajs/react';
import Button from "@/Components/Button";
import { useSnackBar } from '@/Hooks/useSnackbar';

const initialCourses = [
    {
        id: 'course1',
        name: 'Course 1',
        description: 'Description for Course 1',
        courseCode: 'CSCI 3691',
    },
    {
        id: 'course2',
        name: 'Course 2',
        description: 'Description for Course 2',
        courseCode: 'CSCI 2691',
    },
    // Add more course objects as needed
];

function CourseSaveButton({ className = '', courseData, onSaveSuccess }) {
    const { showSuccessNotification, showErrorNotification } = useSnackBar();
    const handleSaveClick = async () => {
        router.post(route('courses.save'), { courseData }, {
            onSuccess: () => {
                // router.visit('/admin', { search: newCourseCreator.first_name }, { only: ['users'] })
                showSuccessNotification('Courses saved successfully.');
                onSaveSuccess();
            },
            onError: error => {
                showErrorNotification('Error saving courses.');
                console.error("An error occurred while saving the course:", error);
            }
        })
    };

    return (
        <button
            className={`bg-gray-700 hover:bg-gray-500 text-white mb-4 w-full p-2 border rounded-md ${className}`}
            onClick={handleSaveClick}
        >
            Save
        </button>
    );
}

export default function Coursepanelpage({ user }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [courses, setCourses] = useState(initialCourses);
    const [selectedCourses, setSelectedCourses] = useState([]);
    const [newCourse, setNewCourse] = useState({
        id: "",
        name: "",
        description: "",
        courseCode: ""
    });

    const handleNewCourseChange = (event) => {
        const { name, value } = event.target;
        setNewCourse((prevCourse) => ({
            ...prevCourse,
            [name]: value
        }));
    };
    const handleSaveSuccess = () => {
        // Update the UI or show a success message
        console.log('Courses saved successfully.');
    };

    const handleAddNewCourse = () => {
        if (newCourse.name && newCourse.description && newCourse.courseCode) {
            setCourses([...courses, { ...newCourse, id: `course${Date.now()}` }]);
            setNewCourse({
                id: "",
                name: "",
                description: "",
                courseCode: ""
            });
        }
    };

    const handleRemoveCourse = (course) => {
        setCourses(courses.filter(item => item.id !== course.id));
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredCourses = courses.filter((course) =>
        course.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleAddCourse = (course) => {
        setSelectedCourses([...selectedCourses, course]);
        setCourses(courses.filter(item => item.id !== course.id));
        setCourseData({
            name: course.name,
        });
    };

    const handleDeleteCourse = (course) => {
        setCourses([...courses, course]);
        setSelectedCourses(selectedCourses.filter(item => item.id !== course.id));
        setCourseData({
            name: '',
        });
    };

    const [courseData, setCourseData] = useState({
        name: ''
    });

    return (
        <>
            <AuthenticatedLayout user={user}>
                <div className="flex h-screen">
                    {/* left */}
                    <div className="flex-1 bg-gray-100 p-4 overflow-y-auto">
                        <h1 className="text-2xl font-bold mb-4">Course List</h1>
                        <h2 className="text-xl font-bold mb-4">Add New Course</h2>
                        <input
                            type="text"
                            placeholder="Course Name"
                            name="name"
                            value={newCourse.name}
                            onChange={handleNewCourseChange}
                            className="mb-4 w-full p-2 border rounded-md"
                        />
                        <input
                            type="text"
                            placeholder="Course Description"
                            name="description"
                            value={newCourse.description}
                            onChange={handleNewCourseChange}
                            className="mb-4 w-full p-2 border rounded-md"
                        />
                        <input
                            type="text"
                            placeholder="Course Code"
                            name="courseCode"
                            value={newCourse.courseCode}
                            onChange={handleNewCourseChange}
                            className="mb-4 w-full p-2 border rounded-md"
                        />
                        <Button
                            className="mb-4 w-full p-2"
                            onClick={handleAddNewCourse}
                        >
                            Add New Course
                        </Button>
                        <input
                            type="text"
                            placeholder="Search Courses..."
                            className="mb-4 w-full p-2 border rounded-md"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                        <div>
                            {filteredCourses.map((course) => (
                                <div key={course.id} className="mb-4 p-4 bg-white rounded-md shadow-md">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h2 className="text-xl font-semibold">{course.name}</h2>
                                            <p>{course.description}</p>
                                            <p className="text-gray-600">{course.courseCode}</p>
                                        </div>
                                        <div>
                                            <Button
                                                className="mr-2"
                                                onClick={() => handleAddCourse(course)}
                                            >
                                                Add
                                            </Button>
                                            <Button
                                                className="ml-2"
                                                variant="error"
                                                onClick={() => handleRemoveCourse(course)}
                                            >
                                                Remove
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* right */}
                    <div className="flex-1 bg-gray-200 p-4 overflow-y-auto">
                        <h1 className="text-2xl font-bold mb-4">Your Course List</h1>
                        <CourseSaveButton onSaveSuccess={handleSaveSuccess} courseData={selectedCourses}></CourseSaveButton>
                        <div>
                            {selectedCourses.map((course) => (
                                <div key={course.id} className="mb-4 p-4 bg-white rounded-md shadow-md">
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <h2 className="text-xl font-semibold">{course.name}</h2>
                                            <p>{course.description}</p>
                                            <p className="text-gray-600">{course.courseCode}</p>
                                        </div>
                                        <Button
                                            variant="error"
                                            className="py-2 px-4 rounded mr-2"
                                            onClick={() => handleDeleteCourse(course)}
                                        >
                                            Delete
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
