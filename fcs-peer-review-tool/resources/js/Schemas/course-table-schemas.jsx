import { AiFillDelete } from "react-icons/ai";

/**
 * Students Table
 *
 */

const studentHeaders = [
    {
        component: "First Name",
        className: "w-max",
    },
    {
        component: "Last Name",
        className: "w-max",
    },
    {
        component: "Email",
        className: "w-max",
    },
    {
        component: "Banner ID",
        className: "w-max",
    },
    {
        component: "Submissions",
        className: "w-max",
    },
    {
        component: "",
        className: "w-[5%]",
    },
];

const studentRows = (handleDeleteRow) => [
    {
        component: (data) => <div>{data.first_name}</div>,
    },
    { component: (data) => <div>{data.last_name}</div> },
    { component: (data) => <div>{data.email}</div> },
    { component: (data) => <div>{data.banner_id}</div> },
    { component: () => <div>Submissions</div> },
    {
        align: "center",
        component: (data) => (
            <AiFillDelete
                onClick={() => handleDeleteRow(data.id)}
                className="h-8 cursor-pointer text-gray-600 hover:text-gray-400"
            />
        ),
    },
];
export const studentTableProps = (students, handleDeleteRow) => ({
    headers: studentHeaders,
    rows: studentRows(handleDeleteRow),
    data: students,
});
