import Authenticated from "../../Layouts/AuthenticatedLayout";
import { Tabs } from "@/Components/Tabs";
import { twMerge } from "tailwind-merge";
import { createContext, useEffect, useState } from "react";
import { BsFillArrowLeftSquareFill } from "react-icons/Bs";
import { CourseStudentTable } from "./StudentTable";
import { TAsTable } from "./TAsTable";
import { Groups } from "./Groups";
import { IoIosMenu } from "react-icons/io";
import { Assignments } from "./Assignments";
import { CourseDescription } from "./CourseDescription";


const COURSE_TABS = {
    STUDENTS: "Students",
    ASSIGNMENTS: "Assignments",
    DESCRIPTION: "Course Description",
    MARKERS: "TA's / Markers",
    GROUPS: "Groups"
};
export const StudentContext = createContext();

export default function InstructorCourse({ user, course, students, TAs, groups, assignments }) {
    const [selectedTab, setSelectedTab] = useState(COURSE_TABS.STUDENTS);
    const [menuOpen, setMenuOpen] = useState(false);
    const renderTab = () => {
        switch (selectedTab) {
            case COURSE_TABS.ASSIGNMENTS:
                return <Assignments assignments={assignments} courseId={course.id} />;
            case COURSE_TABS.STUDENTS:
                return <CourseStudentTable students={students} />;
            case COURSE_TABS.DESCRIPTION:
                return <CourseDescription course={course} />;
            case COURSE_TABS.MARKERS:
                return <TAsTable TAs={TAs} />;
            case COURSE_TABS.GROUPS:
                return <Groups students={students} groups={groups} />
            default:
                return <></>;
        }
    };

    useEffect(() => {
        const selectedTab = localStorage.getItem("selectedTab");
        if (selectedTab) {
            setSelectedTab(selectedTab);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("selectedTab", selectedTab);
    }, [selectedTab])

    const handleToggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const handleMenuTab = (tab) => () => {
        setMenuOpen(false);
        setSelectedTab(tab);
    }

    return (
        <>
            <Authenticated user={user}>
                <div className="w-3/4 mx-auto">
                    <div className="flex mb-4">
                        <div className="flex items-center mb-3 gap-2">
                            <div className="text-gray-700 mt-6 cursor-default text-2xl md:text-3xl">
                                Welcome to <span className="font-bold">{course.name}</span> - <span className="font-extrabold">CSCI{course.code}</span>
                            </div>
                            <div className={twMerge("lg:hidden block cursor-pointer transition-transform", menuOpen && "rotate-90")}>
                                <IoIosMenu onClick={handleToggleMenu} className="w-12 h-12" />
                            </div>
                        </div>
                    </div>
                    <div className="lg:hidden block py-1 select-none">
                        {menuOpen && (
                            <div className="flex flex-col mt-2 bg-gray-700 rounded-md">
                                {Object.values(COURSE_TABS).map((tab) => (
                                    <div
                                        key={tab}
                                        className={twMerge(
                                            "text-center font-bold cursor-pointer text-gray-400 text-lg hover:bg-gray-600 py-1 rounded-md",
                                            selectedTab === tab && "text-white"
                                        )}
                                        onClick={handleMenuTab(tab)}
                                    >
                                        {tab}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="lg:block hidden">
                        <Tabs
                            tabs={Object.values(COURSE_TABS)}
                            selectedTab={selectedTab}
                            setSelectedTab={setSelectedTab}
                        />
                    </div>

                    {renderTab()}
                </div>
            </Authenticated >
        </>
    );
}
