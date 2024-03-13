import React from 'react';

export default function SaveButton({ className = '', courseDataArray, onSaveSuccess }) {
    const handleSaveClick = async () => {
        try {
            const response = await fetch('/save-courses', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': window.csrfToken,
                },
                body: JSON.stringify(courseDataArray),
            });

            if (response.ok) {
                onSaveSuccess();
                console.log('Courses saved successfully.');
            } else {
                console.error('Failed to save the courses.');
            }
        } catch (error) {
            console.error('An error occurred while saving the courses:', error);
        }
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
