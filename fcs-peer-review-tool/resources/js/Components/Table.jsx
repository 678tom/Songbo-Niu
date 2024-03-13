import { twMerge } from "tailwind-merge";


export function TableCell({ className = "", children, ...rest }) {
    return (
        <td {...rest} className={twMerge(className, "px-2 py-1 border-2 border-gray-100 outline-blue-500 active:outline active:outline-2")}>
            {children}
        </td>
    );
}

export function TableHeader({ children, className }) {
    return (
        <th
            style={{ position: 'sticky', top: 0, zIndex: 10 }}
            className={twMerge("text-left bg-slate-600 text-white p-2", className)}
        >
            {children}
        </th>
    );
}

function TableRow({ row, rows }) {
    return (
        <tr className="bg-gray-300 even:bg-gray-200">
            {Object.keys(rows).map((cell, index) => {
                const { component, ...props } = rows[cell];
                return (
                    <TableCell {...props} key={index}>
                        {component(row)}
                    </TableCell>
                )
            })}
        </tr>
    );
}

/**
 * 
 * data: array of objects. Each object is a row in the table.
 * rows: properties of each object to display in the table.
 * headers: properties of each header of the table.
 * -------------
 * Check out AdminCourseTable.jsx and AdminUserTable.jsx for examples.
 * admin-table-schemas.jsx contains the schemas for the tables.
 */
export function Table({ headers, rows, data, className = "" }) {
    return (
        <table className={twMerge("overflow-x-auto w-full", className)}>
            <thead>
                <tr>
                    {Object.values(headers).map(({ component, ...props }, index) => (
                        <TableHeader {...props} key={index}>{component}</TableHeader>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <TableRow key={index} rows={rows} row={row} />
                ))}

            </tbody>
        </table>
    );
}
