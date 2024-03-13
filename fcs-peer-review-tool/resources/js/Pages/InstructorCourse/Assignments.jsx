import _ from "lodash";
import { AssignmentFormWizard } from "./AssignmentDialogs";
import { useState, useEffect } from "react";
import Button from "@/Components/Button";
import { Table } from "@/Components/Table";
import { assignmentTableProps } from "@/Schemas/assignment-table-schema";
import EditAssignmentForm from "./EditAssignmentForm";

const AssignmentDialogs = {
    CREATE_ASSIGNMENT: AssignmentFormWizard,
    EDIT_ASSIGNMENT: AssignmentFormWizard,
    DELETE_ASSIGNMENT: AssignmentFormWizard,
};

export const Assignments = ({ assignments, courseId }) => {
    const [dialog, setDialog] = useState(null);
    const [editingAssignmentId, setEditingAssignmentId] = useState(null);
    const [shouldRefresh, setShouldRefresh] = useState(false);

    const Dialog = dialog && dialog.component;

    const handleEditAssignment = (assignmentId) => {
        console.log(`Editing assignment with ID: ${assignmentId}`);
        setEditingAssignmentId(assignmentId);
    };

    const handleRefresh = () => {
        setShouldRefresh(true);
    };

    useEffect(() => {
        if (shouldRefresh) {
            window.location.reload();
        }
    }, [shouldRefresh]);

    const handleCancelEdit = () => {
        setEditingAssignmentId(null);
    };

    const handleChangeDialog =
        (dialog, props = {}) =>
            () => {
                setDialog({
                    component: dialog,
                    props,
                });
            };

    const handleCloseDialog = () => {
        setDialog(null);
    };

    return (
        <div className="flex flex-col gap-2">
            <div className="flex justify-end">
                {!editingAssignmentId && (
                    <Button
                        onClick={handleChangeDialog(
                            AssignmentDialogs.CREATE_ASSIGNMENT,
                            { courseId }
                        )}
                        add
                    >
                        Create Assignment
                    </Button>
                )}
            </div>
            <div className="overflow-y-auto max-h-[calc(100vh-230px)] w-full">
                {editingAssignmentId ? (
                    <EditAssignmentForm
                        assignment={_.find(assignments, { id: editingAssignmentId })}
                        onCancel={handleCancelEdit}
                        onUpdate={() => {
                            setEditingAssignmentId(null);
                            setShouldRefresh(true);;
                        }}
                    />
                ) : (
                    <Table {...assignmentTableProps(assignments, handleEditAssignment, shouldRefresh)} />
                )}
            </div>
            {dialog && (
                <Dialog onClose={handleCloseDialog} show {...dialog.props} />
            )}
        </div>
    );
};
