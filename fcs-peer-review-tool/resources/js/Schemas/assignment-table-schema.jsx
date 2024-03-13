import { AiOutlineEdit, AiOutlineDelete, AiOutlineEye } from "react-icons/ai";

const assignmentHeaders = [
    {
        component: "Title",
        className: "w-max",
    },
    {
        component: "Start Date",
        className: "w-max",
    },
    {
        component: "Due Date",
        className: "w-max",
    },
    {
        component: "End Date",
        className: "w-max",
    },
    {
        component: "Actions",
        className: "w-[15%]",
    },
];

const assignmentRows = (handleEditAssignment, handleDeleteAssignment, handleToggleVisibility) => [
    {
        component: (data) => <div>{data.name}</div>,
    },
    {
        component: (data) => <div>{data.start_date}</div>,
    },
    {
        component: (data) => <div>{data.due_date}</div>,
    },
    {
        component: (data) => <div>{data.end_date}</div>,
    },
    {
        align: "center",
        component: (data) => (
            <div className="flex gap-2">
                <AiOutlineEdit
                    onClick={() => handleEditAssignment(data.id)}
                    className="cursor-pointer text-gray-600 hover:text-gray-700"
                    size="20"
                />
                <AiOutlineEye
                    onClick={() => handleToggleVisibility(data.id)}
                    className="cursor-pointer text-blue-600 hover:text-blue-700"
                    size="20"
                />
                <AiOutlineDelete
                    onClick={() => handleDeleteAssignment(data.id)}
                    className="cursor-pointer text-red-600 hover:text-red-700"
                    size="20"
                />
            </div>
        ),
    },
];

export const assignmentTableProps = (assignments, handleEditAssignment, handleDeleteAssignment, handleToggleVisibility) => ({
    headers: assignmentHeaders,
    rows: assignmentRows(handleEditAssignment, handleDeleteAssignment, handleToggleVisibility),
    data: assignments,
});