import Button from "@/Components/Button";
import { Select } from "@/Components/Inputs";
import { ReadMoreText } from "@/Components/ReadmoreText";
import { SYSTEM_ROLES_ARRAY } from "@/Utils/constants";
import { AiFillDelete } from "react-icons/ai";

const firstNameHeader = () => ({
    component: "First Name",
    className: "w-max",
});

const lastNameHeader = () => ({
    component: "Last Name",
    className: "w-max",
});

const emailHeader = () => ({
    component: "Email",
    className: "w-max",
});

const bannerIdHeader = () => ({
    component: "Banner ID",
    className: "w-max",
});

const roleHeader = () => ({
    component: "Role",
    className: "w-max",
});

const resetPasswordHeader = () => ({
    component: "",
    className: "w-[10%]",
});

const deleteHeader = () => ({
    component: "",
    className: "w-[5%]",
});

const userHeaders = {
    first_name: firstNameHeader(),
    last_name: lastNameHeader(),
    email: emailHeader(),
    banner_id: bannerIdHeader(),
    role: roleHeader(),
    reset_password: resetPasswordHeader(),
    delete: deleteHeader(),
};

const firstNameRow = () => ({
    component: (data) => <div>{data.first_name}</div>,
});

const lastNameRow = () => ({
    component: (data) => <div>{data.last_name}</div>,
});

const emailRow = () => ({
    component: (data) => <div>{data.email}</div>,
});

const bannerIdRow = () => ({
    component: (data) => <div>{data.banner_id}</div>,
});

const roleRow = (handleChangeUserRole) => ({
    component: (data) => (
        <Select
            disabled={data.first_name.toLowerCase() === "admin"}
            onChange={(e) => handleChangeUserRole(data.id, e.target.value)}
            className="bg-transparent border-none outline-none"
            options={SYSTEM_ROLES_ARRAY.map((role) => ({
                key: role,
                value: role,
            }))}
            defaultValue={data.role}
        ></Select>
    ),
});

const resetPasswordRow = (handleResetPassword) => ({
    component: (data) => (
        <Button onClick={() => handleResetPassword(data.email)}>
            Reset Password
        </Button>
    ),
});

const deleteRow = (handleDeleteRow) => ({
    align: "center",
    component: (data) => (
        <AiFillDelete
            onClick={() => handleDeleteRow(data.id)}
            className="h-8 cursor-pointer text-gray-600 hover:text-gray-400"
        />
    ),
});

const userRows = (
    handleChangeUserRole,
    handleResetPassword,
    handleDeleteRow
) => ({
    first_name: firstNameRow(),
    last_name: lastNameRow(),
    email: emailRow(),
    banner_id: bannerIdRow(),
    role: roleRow(handleChangeUserRole),
    reset_password: resetPasswordRow(handleResetPassword),
    delete: deleteRow(handleDeleteRow),
});

export const userTableProps = (
    users,
    handleChangeUserRole,
    handleResetPassword,
    handleDeleteRow
) => ({
    headers: userHeaders,
    rows: userRows(handleChangeUserRole, handleResetPassword, handleDeleteRow),
    data: users,
});

/**
 * Courses Table
 */

const courseNameHeader = () => ({
    component: "Name",
    className: "w-max",
});

const courseCRNHeader = () => ({
    component: "CRN",
    className: "w-max",
});

const courseCodeHeader = () => ({
    component: "Course Code",
    className: "w-max",
});

const termHeader = () => ({
    component: "Term",
    className: "w-max",
});

const yearHeader = () => ({
    component: "Year",
    className: "w-max",
});

const descriptionHeader = () => ({
    component: "Description",
});

const courseHeaders = [
    courseNameHeader(),
    courseCodeHeader(),
    courseCRNHeader(),
    termHeader(),
    yearHeader(),
    descriptionHeader(),
    deleteHeader(),
];

const courseNameRow = () => ({
    component: (data) => <div>{data.name}</div>,
});

const courseCodeRow = () => ({
    component: (data) => <div>{data.code}</div>,
});

const courseCRNRow = () => ({
    component: (data) => <div>{data.crn}</div>,
});

const termRow = () => ({
    component: (data) => <div>{data.term}</div>,
});

const yearRow = () => ({
    component: (data) => <div>{data.year}</div>,
});

const descriptionRow = () => ({
    component: (data) => (
        <div className="w-[200px]">
            <ReadMoreText>{data.description}</ReadMoreText>
        </div>
    ),
});

const courseRows = () => [
    courseNameRow(),
    courseCodeRow(),
    courseCRNRow(),
    termRow(),
    yearRow(),
    descriptionRow(),
    deleteRow(),
];

export const courseTableProps = (courses) => ({
    headers: courseHeaders,
    rows: courseRows(),
    data: courses,
});
