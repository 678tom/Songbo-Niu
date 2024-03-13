import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Button from "@/Components/Button";
import axios from 'axios';
import { router } from '@inertiajs/react';


const students = [
    { id: 1, name: 'Student 1' },
    { id: 2, name: 'Student 2' },
    // Add more student objects as needed
];

const studentsPerPage = 3; // Adjust this to display more or fewer students per page

export default function ReviewPage({ user }) {
  const [selectedStudent, setSelectedStudent] = useState('');
  const [file, setFile] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(students.length / studentsPerPage);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };


  const handleFileSubmit = (u_id) => {
    if (file) {
        // Create a FormData object and append the file, assignmentId, and userId
        const formData = new FormData();
        formData.append('document', file);
        formData.append('assignmentId', 1);  // Append assignmentId
        formData.append('userId', u_id);        // Append userId

        // POST request with axios
        axios.post(route("documentReview.save.document"), formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then((res) => {
            router.visit(window.location.pathname, {
                only: ["groups"],
            });
            alert('Successfully uploaded file: ' + file.name);
        })
        .catch((error) => {
            console.error("Error submitting file:", error);
        });

        // Reset file state
        setFile(null);
    } else {
        console.error('No file selected.');
    }
};



  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  };

  const goToPreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const handleReturn = () => {
    // Logic to return to the homepage
  };

  const studentsToShow = students.slice(
    currentPage * studentsPerPage,
    (currentPage + 1) * studentsPerPage
  );

  return (
    <>
      <AuthenticatedLayout user={user}>
        <div className="flex flex-col items-center h-screen p-4 bg-gray-100">
          <Button onClick={handleReturn} className="self-start mb-4">Return</Button>
          
          <h1 className="text-4xl font-bold text-blue-900 mb-6 mt-4 shadow-md p-3 rounded-lg bg-white">
            Review Page
          </h1>

          <div className="mb-4 w-full">
            <h2 className="text-xl font-bold mb-2">Students</h2>
            <ul>
            {studentsToShow.map((student) => (
              <li key={student.id} className="mb-2">
                <button
                  className={`w-full text-left p-2 ${selectedStudent?.id === student.id ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
                   onClick={() => setSelectedStudent(student)}
                >
                  {student.name}
                </button>
              </li>
            ))}


            </ul>
            <div className="flex justify-between mt-4">
              <Button onClick={goToPreviousPage} disabled={currentPage === 0}>Back</Button>
              <Button onClick={goToNextPage} disabled={currentPage === totalPages - 1}>Next</Button>
            </div>
          </div>

          <div className="w-full flex flex-col items-center mb-4">
            <input
              type="file"
              onChange={handleFileChange}
              accept="application/pdf"
              className="w-full p-2 border rounded-md mb-2"
            />
            <Button
              onClick={() => handleFileSubmit(selectedStudent?.id)}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit File
            </Button>
          </div>
        </div>
      </AuthenticatedLayout>
    </>
  );
}
