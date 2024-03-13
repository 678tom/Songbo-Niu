import { Table } from "@/Components/Table"
import { studentTableProps } from "@/Schemas/course-table-schemas"

export const TAsTable = ({ TAs }) => {
    return (
        <div className="">
            <p>TAs and Markers</p>
            <div className='flex justify-center'>
                <div className="overflow-y-auto max-h-[calc(100vh-230px)] w-full">
                    <Table {...studentTableProps(TAs)} />
                </div>
            </div>
        </div>
    )
}
