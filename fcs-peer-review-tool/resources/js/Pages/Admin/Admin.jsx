import Authenticated from "@/Layouts/AuthenticatedLayout";
import UserForm from "./UserTable";
import { AdminCourseTable } from "./AdminCourseTable";
import { useState } from "react";
import { Tabs } from "@/Components/Tabs";

const ADMIN_TABS = {
    USERS: "Users",
    COURSES: "Courses",
};

export default function Admin({ users, courses, user }) {
    const [selectedTab, setSelectedTab] = useState(ADMIN_TABS.USERS);

    const renderTab = () => {
        switch (selectedTab) {
            case ADMIN_TABS.USERS:
                return <UserForm users={users} />;
            case ADMIN_TABS.COURSES:
                return <AdminCourseTable courses={courses} />;
            default:
                return <UserForm users={users} />;
        }
    }

    return (
        <Authenticated user={user}>
            <div className="w-screen mt-12 pb-12 ">
                <h1 className="text-5xl font-semibold mb-12 text-center">
                    Administration
                </h1>
                <div className="flex flex-col gap-2 justify-center drop-shadow-md items-start rounded-md mx-auto w-11/12 lg:w-4/5 xl:w-3/5 bg-slate-50 p-8 border-t-8 border-gray-600">
                    <p className="text-left text-3xl font-bold">
                        Manage Entities
                    </p>

                    <Tabs tabs={Object.values(ADMIN_TABS)} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
                    {renderTab()}
                </div>
            </div>
        </Authenticated>
    );
}