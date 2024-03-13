import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import EditCourseForm from "./EditCourseForm.jsx"; 

export const CourseDescription = ({ course }) => {
  const [editMode, setEditMode] = useState(false);
  const [updatedCourse, setUpdatedCourse] = useState(course);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleUpdate = async (formData) => {
    try {
      const response = await axios.put(`/courses/${course.id}`, formData);
      if (response.status === 200) {
        console.log('Course updated successfully:', response.data);
        setUpdatedCourse(response.data.course);
      } else {
        console.error('Failed to update course:', response.data);
      }
      setEditMode(false);
    } catch (error) {
      console.error('An error occurred while updating the course:', error);
    }
  };

  return (
    <div className="bg-gray-200 p-4 rounded-md">
      <div className="flex items-center mb-2">
        <div className="text-xl font-bold">Course Description</div>
        <span className="ml-2">
          <FaEdit className="text-navy-500 cursor-pointer" onClick={handleEditClick} />
        </span>
      </div>

      {editMode ? (
        <EditCourseForm course={updatedCourse} onClose={() => setEditMode(false)} onUpdate={handleUpdate} />
      ) : (
        <div className="border-t pt-3">
          <div className="text-gray-600">
            <strong>Description:</strong> {updatedCourse.description}
          </div>
          <div className="text-gray-600">
            <strong>Academic Term:</strong> {course.term} {updatedCourse.year}
          </div>
          <div className="text-gray-600">
            <strong>Course Start Date:</strong> {updatedCourse.start_date}
          </div>
          <div className="text-gray-600">
            <strong>Course End Date:</strong> {updatedCourse.end_date}
          </div>
        </div>
      )}
    </div>
  );
};