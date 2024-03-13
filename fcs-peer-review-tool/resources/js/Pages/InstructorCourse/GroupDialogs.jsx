import Button from "@/Components/Button";
import { TextField } from "@/Components/Inputs";
import Modal from "@/Components/Modal";
import { useState } from "react";
import { router } from "@inertiajs/react";
import { FormModal } from "@/Components/FormModal";
import { useSnackBar } from "@/Hooks/useSnackbar";

const StudentList = ({ students, onChange, selectedStudents }) => {
    return (
        <div className="overflow-y-auto max-h-[calc(100vh-600px)] p-1">
            {students.map((student) => (
                <div
                    key={student.id}
                    className="flex gap-2 items-center cursor-pointer hover:bg-gray-50 py-2 rounded-md "
                    onClick={onChange(student.id)}
                >
                    <input
                        onChange={onChange(student.id)}
                        checked={selectedStudents.includes(student.id)}
                        className="rounded-md w-6 h-6"
                        type="checkbox"
                        name="student"
                        id="student"
                    />
                    <p>
                        {student.first_name} {student.last_name} -{" "}
                        {student.banner_id}
                    </p>
                </div>
            ))}
        </div>
    );
};

export const CreateGroupDialog = ({ show, onClose, courseId, students }) => {
    const [selectedStudents, setSelectedStudents] = useState([]);
    const { showSuccessNotification, showErrorNotification } = useSnackBar();
    const [name, setName] = useState("");
    const isSaveDisabled = !name;

    const handleSelectStudent = (id) => () => {
        if (selectedStudents.includes(id)) {
            setSelectedStudents(
                selectedStudents.filter((student) => student !== id)
            );
        } else {
            setSelectedStudents([...selectedStudents, id]);
        }
    };

    const handleCreateGroup = () => {
        const payload = {
            course_id: courseId,
            name,
            students: selectedStudents,
        };

        axios
            .get(route("group.create"), { params: payload })
            .then((res) => {
                router.visit(window.location.pathname, {
                    only: ["groups"],
                });
                showSuccessNotification(res.data.message);
                onClose();
            })
            .catch((error) => {
                showErrorNotification(error.response.data.message);
                console.error("Error adding users:", error);
            });
    };

    return (
        <Modal show={show} onClose={onClose}>
            <div className="flex flex-col gap-2 m-2">
                <p className="text-3xl font-bold">Create Group</p>
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-bold">
                        Group Name
                    </label>
                    <TextField
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        name="name"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-bold">
                        Select Students
                    </label>
                    {students && (
                        <StudentList
                            students={students}
                            onChange={handleSelectStudent}
                            selectedStudents={selectedStudents}
                        />
                    )}
                </div>
            </div>
            <div className="flex items-center gap-2 justify-end">
                <Button variant="cancel" onClick={onClose}>
                    Cancel
                </Button>
                <Button onClick={handleCreateGroup} disabled={isSaveDisabled}>
                    Create Group
                </Button>
            </div>
        </Modal>
    );
};

export const AddStudentDialog = ({ students, show, onClose, group }) => {
    const [selectedStudents, setSelectedStudents] = useState([]);
    const isSaveDisabled = selectedStudents.length <= 0;
    const filteredStudents = students.filter((student) => {
        return !group.users.find((user) => user.id === student.id);
    });
    const areAllStudentsInGroup = filteredStudents.length === 0;
    const { showSuccessNotification, showErrorNotification } = useSnackBar();

    const handleSelectStudent = (id) => () => {
        if (selectedStudents.includes(id)) {
            setSelectedStudents(
                selectedStudents.filter((student) => student !== id)
            );
        } else {
            setSelectedStudents([...selectedStudents, id]);
        }
    };

    const handleSubmit = () => {
        const payload = {
            course_id: group.pivot.course_id,
            group_id: group.id,
            students: selectedStudents,
        };

        axios
            .get(route("group.users.add"), { params: payload })
            .then((res) => {
                router.visit(window.location.pathname, {
                    only: ["groups"],
                });
                showSuccessNotification(res.data.message);
                onClose();
            })
            .catch((error) => {
                showErrorNotification(error.response.data.message);
                console.error("Error adding users:", error);
            });
    };

    return (
        <Modal show={show} onClose={onClose}>
            <div className="m-2">
                <p className="text-3xl mb-2 font-bold">
                    Add Students to {group.name}
                </p>

                {areAllStudentsInGroup ? (
                    <p className="text-xl mb-2">
                        All students are already in this group
                    </p>
                ) : (
                    <label className="font-bold">Select Students</label>
                )}
                {filteredStudents && (
                    <StudentList
                        students={filteredStudents}
                        onChange={handleSelectStudent}
                        selectedStudents={selectedStudents}
                    />
                )}
                <div className="flex items-center gap-2 mt-2 justify-end">
                    {areAllStudentsInGroup ? (
                        <Button onClick={onClose}>Leave</Button>
                    ) : (
                        <>
                            <Button variant="cancel" onClick={onClose}>
                                Cancel
                            </Button>
                            <Button
                                onClick={handleSubmit}
                                disabled={isSaveDisabled}
                            >
                                Add Students
                            </Button>
                        </>
                    )}
                </div>
            </div>
        </Modal>
    );
};

export const DeleteGroupDialog = ({ show, onClose, group }) => {
    const { showSuccessNotification, showErrorNotification } = useSnackBar();
    const handleDeleteGroup = () => {
        const payload = {
            course_id: group.pivot.course_id,
            group_id: group.id,
        };

        axios
            .get(route("group.delete"), { params: payload })
            .then((res) => {
                router.visit(window.location.pathname, {
                    only: ["groups"],
                });
                showSuccessNotification(res.data.message);
                onClose();
            })
            .catch((error) => {
                showErrorNotification(error.response.data.message);
                console.error("Error deleting group:", error);
            });
    };

    return (
        <FormModal
            title={`Are you sure you want to delete ${group.name}`}
            show={show}
            onClose={onClose}
            onCancel={onClose}
            onSubmit={handleDeleteGroup}
        />
    );
};

export const DeleteGroupStudent = ({ show, onClose, group, student }) => {
    const { showSuccessNotification, showErrorNotification } = useSnackBar();
    const handleDeleteGroupUser = () => {
        const payload = {
            course_id: group.pivot.course_id,
            group_id: group.id,
            user_id: student.id,
        };

        axios
            .get(route("group.user.remove"), { params: payload })
            .then((res) => {
                router.visit(window.location.pathname, {
                    only: ["groups"],
                });
                showSuccessNotification(res.data.message);
                onClose();
            })
            .catch((error) => {
                showErrorNotification(error.response.data.message);
                console.error("Error deleting group:", error);
            });
    };

    return (
        <FormModal
            title={`Are you sure you want to delete ${student.first_name} ${student.last_name} from ${group.name}`}
            show={show}
            onClose={onClose}
            onCancel={onClose}
            onSubmit={handleDeleteGroupUser}
        />
    );
};

export const RandomizeGroupsDialog = ({ show, onClose, courseId }) => {
    const { showSuccessNotification, showErrorNotification } = useSnackBar();
    const [studentsPerGroup, setStudentsPerGroup] = useState(1);

    const handleSubmit = () => {
        const payload = {
            course_id: courseId,
            number_of_students_in_one_group: studentsPerGroup,
        };
        router.get(route("group.randomize"), payload, {
            onSuccess: () => {
                showSuccessNotification("Successfully randomized groups");
                onClose();
            },
            onError: (error) => {
                showErrorNotification("Error randomizing groups");
                console.error("Error randomizing groups:", error);
            },
        });
    };
    return <Modal show={show} onClose={onClose}></Modal>;
};
