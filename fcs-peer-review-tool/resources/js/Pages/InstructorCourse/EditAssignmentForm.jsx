import React, { useState, useEffect } from "react";
import Datetime from "react-datetime";
import axios from "axios";
import { TextField } from "@/Components/Inputs";
import Button from "@/Components/Button";
import { useSnackBar } from "@/Hooks/useSnackbar";

const EditAssignmentForm = ({ assignment, onCancel, onUpdate }) => {
    const { showSuccessNotification, showErrorNotification } = useSnackBar()
    const [formData, setFormData] = useState({
        id: assignment.id,
        name: assignment.name,
        description: assignment.description,
        start_date: assignment.start_date,
        due_date: assignment.due_date,
        end_date: assignment.end_date,
    });

    const [isFormChanged, setIsFormChanged] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        setIsFormChanged(true);
    };

    const handleDateChange = (date, fieldName) => {
        setFormData((prevData) => ({
            ...prevData,
            [fieldName]: date,
        }));
        setIsFormChanged(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.put(`/assignments/${formData.id}`, {
                assignment_id: formData.id,
                assignment_name: formData.name,
                assignment_description: formData.description,
                assignment_start_date: formData.start_date,
                assignment_end_date: formData.end_date,
                assignment_due_date: formData.due_date,
            });
            showSuccessNotification("Assignment updated successfully");
            onUpdate(formData);
            setIsFormChanged(false);
        } catch (error) {
            showErrorNotification("Failed to update assignment");
            console.error("Failed to update assignment:", error);
        }
    };

    const handleCancel = () => {
        if (isFormChanged) {
            const userConfirmed = window.confirm(
                "You have unsaved changes. Are you sure you want to cancel?"
            );
            if (userConfirmed) {
                onCancel();
                setIsFormChanged(false);
            }
        } else {
            onCancel();
        }
    };

    useEffect(() => {
        return () => {
            setIsFormChanged(false);
        };
    }, []);

    return (
        <div className="bg-gray-200 p-4 rounded-md">
            <div className="flex items-center mb-2">
                <div className="text-xl font-bold">Edit Assignment</div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Name:
                    </label>
                    <TextField
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Description:
                    </label>
                    <TextField
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Start Date:
                    </label>
                    <Datetime
                        value={formData.start_date}
                        onChange={(date) =>
                            handleDateChange(date, "start_date")
                        }
                        className="w-full bg-white !border-gray-200 p-2 rounded-md [&>input]:border-none"
                        inputProps={{ className: "form-input" }}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Due Date:
                    </label>
                    <Datetime
                        value={formData.due_date}
                        onChange={(date) => handleDateChange(date, "due_date")}
                        className="w-full bg-white border-gray-200 p-2 rounded-md [&>input]:border-none"
                        inputProps={{ className: "form-input" }}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        End Date:
                    </label>
                    <Datetime
                        value={formData.end_date}
                        className="w-full bg-white border-gray-200 p-2 rounded-md outline-none [&>input]:border-none"
                        onChange={(date) => handleDateChange(date, "end_date")}
                        inputProps={{ className: "form-input" }}
                    />
                </div>
                <div className="flex space-x-2">
                    <Button type="submit">Update Assignment</Button>
                    <Button onClick={handleCancel} variant="cancel">
                        Cancel
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default EditAssignmentForm;
