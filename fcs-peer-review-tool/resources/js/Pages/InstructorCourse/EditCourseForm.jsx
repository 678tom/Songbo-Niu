import React, { useState, useEffect } from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

const EditCourseForm = ({ course, onClose, onUpdate }) => {
  const [formData, setFormData] = useState({
    description: "",
    term: "",
    year: "",
    start_date: null,
    end_date: null,
  });

  const [isFormDirty, setIsFormDirty] = useState(false);

  useEffect(() => {
    if (course) {
      setFormData({
        description: course.description,
        term: course.term,
        year: course.year,
        start_date: new Date(course.start_date),
        end_date: new Date(course.end_date),
      });
    }
  }, [course]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setIsFormDirty(true);
  };

  const handleDateChange = (date, fieldName) => {
    setFormData({ ...formData, [fieldName]: date });
    setIsFormDirty(true);
  };

  const handleCancel = () => {
    if (isFormDirty) {
      const confirmCancel = window.confirm("You have unsaved changes. Are you sure you want to cancel?");
      if (confirmCancel) {
        onClose();
      }
    } else {
      onClose();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Description:</label>
        <input type="text" name="description" value={formData.description} onChange={handleChange} className="form-input" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Term:</label>
        <input type="text" name="term" value={formData.term} onChange={handleChange} className="form-input" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Year:</label>
        <input type="text" name="year" value={formData.year} onChange={handleChange} className="form-input" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Start Date:</label>
        <Datetime
          value={formData.start_date}
          onChange={(date) => handleDateChange(date, "start_date")}
          inputProps={{ className: "form-input" }}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">End Date:</label>
        <Datetime
          value={formData.end_date}
          onChange={(date) => handleDateChange(date, "end_date")}
          inputProps={{ className: "form-input" }}
        />
      </div>
      <div className="flex space-x-2">
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Update Course
        </button>
        <button type="button" onClick={handleCancel} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditCourseForm;