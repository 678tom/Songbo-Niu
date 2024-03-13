import Button from "@/Components/Button";
import { SearchBar } from "@/Components/Inputs";
import { Table } from "@/Components/Table";
import { useSnackBar } from "@/Hooks/useSnackbar";
import { studentTableProps } from "@/Schemas/course-table-schemas";
import { router } from "@inertiajs/react";
import axios from "axios";
import { useEffect, useState } from "react";

export const CourseStudentTable = ({ students }) => {
    const [filteredStudents, setFilteredStudents] = useState(
        structuredClone(students)
    );
    const { showSuccessNotification, showErrorNotification } = useSnackBar();
    const handleSearch = (e) => {
        const searchValue = e.target.value;
        setFilteredStudents(
            students.filter((student) => {
                const fullName =
                    `${student.first_name} ${student.last_name}`.toLowerCase();
                return (
                    student.first_name
                        .toLowerCase()
                        .includes(searchValue.toLowerCase()) ||
                    fullName.includes(searchValue.toLowerCase()) ||
                    student.email
                        .toLowerCase()
                        .includes(searchValue.toLowerCase()) ||
                    student.banner_id
                        .toLowerCase()
                        .includes(searchValue.toLowerCase())
                );
            })
        );
    };

    const handleImportCSV = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const course_id = window.location.pathname.split("/")[2];
        formData.set("course_id", course_id);
        axios
            .post(route("course.assign.students"), formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((res) => {
                router.visit(window.location.pathname, {
                    only: ["groups"],
                });
                showSuccessNotification(res.data.message);
            })
            .catch((e) => {
                showErrorNotification(e.response.data.error);
                console.error(e.response.data.error)
            });
    };

    return (
        <div className="flex flex-col gap-2">
            <div className="md:flex-row flex flex-col gap-2 justify-between">
                <SearchBar
                    className="md:w-max w-full"
                    onChange={handleSearch}
                    placeholder="Search students"
                ></SearchBar>

                <div className="flex items-center gap-2">
                    <form className="flex" onSubmit={handleImportCSV}>
                        <input className="" name="students" type="file"></input>
                        <Button type="submit">CSV Import</Button>
                    </form>
                    <Button add>Add Student</Button>
                    <Button variant="error">Delete All</Button>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="overflow-y-auto max-h-[calc(100vh-230px)] w-full">
                    <Table {...studentTableProps(filteredStudents)} />
                </div>
            </div>
        </div>
    );
};
