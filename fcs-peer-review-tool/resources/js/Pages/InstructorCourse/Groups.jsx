import Button from "@/Components/Button";
import { SearchBar } from "@/Components/Inputs";
import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { Collapsable } from "@/Components/Collapsable";
import {
    AddStudentDialog,
    CreateGroupDialog,
    DeleteGroupDialog,
    DeleteGroupStudent,
    RandomizeGroupsDialog,
} from "./GroupDialogs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { twMerge } from "tailwind-merge";

const GroupDialogs = {
    CREATE_GROUP: CreateGroupDialog,
    ADD_STUDENT: AddStudentDialog,
    DELETE_GROUP: DeleteGroupDialog,
    REMOVE_STUDENT: DeleteGroupStudent,
    RANDOMIZE_GROUPS: RandomizeGroupsDialog,
};

export const Groups = ({ groups, students }) => {
    const [dialog, setDialog] = useState(null);
    const [filteredGroups, setFilteredGroups] = useState(
        structuredClone(groups)
    );
    const Dialog = dialog && dialog.component;

    const handleChangeDialog = (dialog, props) => () => {
        setDialog({
            component: dialog,
            props,
        });
    };

    const handleCloseDialog = () => {
        setDialog(null);
    };

    const handleChangeSearchValue = (e) => {
        const searchValue = e.target.value.toLowerCase();
        const filteredGroups = groups.filter((group) =>
            group.name.toLowerCase().includes(searchValue)
        );
        setFilteredGroups(filteredGroups);
    };

    return (
        <div className="flex flex-col gap-4">
            {dialog && (
                <Dialog onClose={handleCloseDialog} show {...dialog.props} />
            )}
            <div className="md:flex-row flex-col flex items-center justify-between">
                <SearchBar
                    className="md:w-max md:mb-0 mb-2"
                    onChange={handleChangeSearchValue}
                    placeholder="Search for groups"
                />
                <div className="flex items-center gap-2 md:w-max w-full select-none">
                    <Button
                        className="w-full md:w-max"
                        onClick={handleChangeDialog(
                            GroupDialogs.RANDOMIZE_GROUPS,
                            {
                                courseId: groups[0].pivot.course_id,
                            }
                        )}
                    >
                        Randomize groups
                    </Button>
                    <Button
                        add
                        className="w-full md:w-max justify-center"
                        onClick={handleChangeDialog(GroupDialogs.CREATE_GROUP, {
                            courseId: groups[0].pivot.course_id,
                            students,
                        })}
                    >
                        Create Group
                    </Button>
                </div>
            </div>
            {filteredGroups.map((group) => (
                <Group
                    group={group}
                    onAddStudent={handleChangeDialog(GroupDialogs.ADD_STUDENT, {
                        group,
                        students,
                    })}
                    onDeleteGroup={handleChangeDialog(
                        GroupDialogs.DELETE_GROUP,
                        {
                            group,
                        }
                    )}
                    onDeleteStudent={(student) =>
                        handleChangeDialog(GroupDialogs.REMOVE_STUDENT, {
                            group,
                            student,
                        })
                    }
                />
            ))}
        </div>
    );
};

const Group = ({ group, onAddStudent, onDeleteGroup, onDeleteStudent }) => {
    const [showStudents, setShowStudents] = useState(true);

    const handleToggleShowStudents = () => {
        setShowStudents(!showStudents);
    };

    const collapsableComponent = (mobile) => (
        group.users.length > 0 && (
            <div
                className={twMerge("items-center cursor-pointer select-none", mobile ? "sm:hidden flex" : "hidden sm:flex")}
                onClick={handleToggleShowStudents}
            >
                <p>Students ({group.users.length})</p>
                {showStudents ? (
                    <RiArrowDropDownLine className="w-8 h-8 transform rotate-180" />
                ) : (
                    <RiArrowDropDownLine className="w-8 h-8" />
                )}
            </div>
        )
    )

    return (
        <div className="p-4 bg-gray-50 rounded-md flex-col flex gap-2">
            <div className="flex flex-col sm:flex-row justify-between gap-2">
                <div className="w-full flex flex-col gap-1">
                    <p className="text-3xl font-bold">{group.name}</p>
                    {group.users.length <= 0 && (
                        <p className="text-lg text-gray-400 italic">
                            No students in this group
                        </p>
                    )}
                    {collapsableComponent(false)}

                </div>
                <div className="flex select-none flex-col gap-2 items-end md:items-start">
                    <Button
                        widthClassName="w-full sm:w-max justify-center"
                        add
                        onClick={onAddStudent}
                    >
                        Add Student
                    </Button>
                    <Button
                        widthClassName="w-full"
                        onClick={onDeleteGroup}
                        variant="error"
                    >
                        Delete Group
                    </Button>
                </div>
            </div>
            <div>
                {collapsableComponent(true)}
                {group.users.length > 0 && (
                    <Collapsable show={showStudents}>
                        <div className="flex flex-col gap-2">
                            {group.users.map((student) => (
                                <GroupStudent
                                    student={student}
                                    onDeleteStudent={onDeleteStudent}
                                />
                            ))}
                        </div>
                    </Collapsable>
                )}
            </div>
        </div>
    );
};

const GroupStudent = ({ student, onDeleteStudent }) => {
    return (
        <div
            key={student.id}
            className="flex flex-grow items-center justify-between bg-gray-100 p-2 rounded-md"
            draggable
        >
            <div>
                <div className="flex text-lg font-bold justify-between items-center">
                    <div className="flex gap-1">
                        <p>{student.first_name}</p>
                        <p>{student.last_name}</p>
                    </div>
                </div>
                <div className="flex gap-2 text-base">
                    <p className="">{student.email}</p>
                    <div> - </div>
                    <p className="">{student.banner_id}</p>
                </div>
            </div>
            <AiFillDelete
                onClick={onDeleteStudent(student)}
                className="mr-2 h-6 w-6 text-gray-600 hover:text-gray-500 cursor-pointer"
                title="Remove user from group"
            />
        </div>
    );
};
