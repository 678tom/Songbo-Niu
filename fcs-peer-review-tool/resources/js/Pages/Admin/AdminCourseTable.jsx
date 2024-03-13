import { SearchBar } from "@/Components/Inputs";
import { Table } from "@/Components/Table";
import { courseTableProps } from "@/Schemas/admin-table-schemas";
import { useMemo, useState } from "react";

const getFilteredCourses = (courses, search) => {
    return courses.filter(
        (course) =>
            course.name.toLowerCase().includes(search.toLowerCase()) ||
            course.code.toString().toLowerCase().includes(search.toLowerCase()) ||
            course.crn.toString().toLowerCase().includes(search.toLowerCase()) ||
            course.term.toLowerCase().includes(search.toLowerCase()) ||
            course.year.toString().toLowerCase().includes(search.toLowerCase())
    );
};

export const AdminCourseTable = ({ courses }) => {
    const [search, setSearch] = useState("");
    const filteredCourses = useMemo(
        () => getFilteredCourses(courses, search),
        [courses, search]
    );

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    return (
        <div className="flex flex-col gap-4 w-full">
            <div className="flex justify-end m-1">
                <SearchBar
                    value={search}
                    onChange={handleSearch}
                    className="w-min"
                    placeholder="Search courses"
                />
            </div>
            <div className="overflow-y-auto max-h-[calc(100vh-530px)]  ">

                <Table {...courseTableProps(filteredCourses)} />
            </div>
        </div>
    );
};
