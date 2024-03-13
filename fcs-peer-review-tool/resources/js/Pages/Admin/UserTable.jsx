import Button from "@/Components/Button";
import { twMerge } from "tailwind-merge";
import Modal from "@/Components/Modal";
import { DropDown, DropDownOption } from "@/Components/Dropdown";
import { SYSTEM_ROLES, SYSTEM_ROLES_ARRAY } from "@/Utils/constants";
import { useUserForm } from "./useUserTable";
import {
    ERROR_INPUT_STYLE,
    SearchBar,
    Select,
    TextField,
} from "@/Components/Inputs";
import { Table } from "@/Components/Table";
import { useState } from "react";
import { FormModal } from "@/Components/FormModal";
import {
    BANNER_ID_REGEX,
    DAL_EMAIL_REGEX,
    FIRST_NAME_REGEX,
} from "@/Utils/validation-utils";
import { router } from "@inertiajs/react";
import { userTableProps } from "@/Schemas/admin-table-schemas";
import { useSnackBar } from "@/Hooks/useSnackbar";

export const userFieldsMap = {
    first_name: {
        placeholder: "Enter first name",
        required: true,
        validation: {
            regex: FIRST_NAME_REGEX,
            message: "First name must only contain letters",
        },
    },
    last_name: {
        placeholder: "Enter last name",
        required: true,
    },
    email: {
        type: "email",
        placeholder: "Enter email",
        required: true,
        validation: {
            regex: DAL_EMAIL_REGEX,
            message: "Email must end with @dal.ca",
        },
    },
    banner_id: {
        placeholder: "Enter banner id",
        required: true,
        validation: {
            regex: BANNER_ID_REGEX,
            message: "Enter a valid banner id",
        },
    },
    role: {
        options: SYSTEM_ROLES_ARRAY,
    },
    reset_password: {},
    delete: {},
};

const defaultUser = {
    first_name: "",
    last_name: "",
    email: "",
    banner_id: "",
    role: SYSTEM_ROLES.ADMIN,
};

function NewUserForm({ onCancel }) {
    const [newCourseCreator, setNewCourseCreator] = useState(defaultUser);
    const [showError, setShowError] = useState(false);

    const handleChangeNewCourseCreator = (field, value) => {
        const changedCourseCreator = {
            ...newCourseCreator,
            [field]: value,
        };
        setNewCourseCreator(changedCourseCreator);
    };

    const getIsFormValidated = () => {
        return Object.keys(newCourseCreator).every((field) => {
            const { validation } = userFieldsMap[field];
            const value = newCourseCreator[field];
            return !validation || validation.regex.test(value);
        });
    };

    const handleBlur = () => {
        setShowError(true);
    };

    const handleSave = () => {
        router.post(route("admin.user.create"), newCourseCreator, {
            onSuccess: () => {
                router.visit(
                    "/admin",
                    { search: newCourseCreator.first_name },
                    { only: ["users"] }
                );
                onCancel();
            },
            onError: (error) => {
                console.error("Error creating user:", error);
            },
        });
    };

    return (
        <div className="flex flex-col m-2 gap-2">
            <p className="text-xl">Add new user</p>
            <div className="flex items-start gap-2">
                {Object.keys(newCourseCreator).map((field) => {
                    const { validation, ...inputProps } = userFieldsMap[field];
                    const value = newCourseCreator[field];
                    const error =
                        showError &&
                        validation &&
                        !validation.regex.test(value);

                    return (
                        <div className="flex-grow" key={field}>
                            {field === "role" ? (
                                <Select
                                    value={newCourseCreator.role}
                                    onChange={(e) =>
                                        handleChangeNewCourseCreator(
                                            field,
                                            e.target.value
                                        )
                                    }
                                    options={SYSTEM_ROLES_ARRAY.map((role) => ({
                                        key: role,
                                        value: role,
                                    }))}
                                />
                            ) : (
                                <TextField
                                    value={value}
                                    autoFocus={field === "first_name"}
                                    onChange={(e) =>
                                        handleChangeNewCourseCreator(
                                            field,
                                            e.target.value
                                        )
                                    }
                                    className={twMerge(
                                        error && ERROR_INPUT_STYLE
                                    )}
                                    {...inputProps}
                                    onBlur={handleBlur}
                                />
                            )}

                            <p className="text-red-500 text-sm">
                                {error && validation.message}
                            </p>
                        </div>
                    );
                })}
            </div>
            <div className="flex items-center gap-2">
                <Button disabled={!getIsFormValidated()} onClick={handleSave}>
                    Save
                </Button>
                <Button onClick={onCancel} variant="cancel">
                    Cancel
                </Button>
            </div>
        </div>
    );
}

export default function UserForm({ users }) {
    const {
        searchValue,
        handleChangeSearchValue,
        handleChangeSelectedRole,
        modalRef,
        selectedRoles,
        tableData,
    } = useUserForm(users);
    const [addingUser, setAddingUser] = useState(false);
    const [userBeingDeleted, setUserBeingDeleted] = useState(undefined);
    const handleChangeUserBeingDeleted = (user) => {
        setUserBeingDeleted(user);
    };
    const { showErrorNotification, showSuccessNotification } = useSnackBar();

    const handleChangeUserRole = (id, role) => {
        const payload = {
            user_id: id,
            role,
        };
        router.post(route("admin.user.edit.role"), payload, {
            onError: (error) => {
                console.error("Error edixting user role:", error);
            },
        });
    };

    const handleResetPassword = (email) => {
        router.post(route("password.reset.request"), { email }, {
            onError: (error) => {
                console.error("Error resetting password:", error);
                showErrorNotification("Error resetting password");
            },
            onSuccess: () => {
                showSuccessNotification("Successfully reset password");
            }
        });
    };

    const handleDeleteUser = (id) => {
        // @TODO implement this
    };

    return (
        <div className="flex w-full flex-col rounded-md gap-1">
            <FormModal
                onCancel={() => handleChangeUserBeingDeleted(undefined)}
                onSubmit={handleDeleteUser}
                title={"Are you sure you want to delete a user?"}
                show={userBeingDeleted}
            ></FormModal>
            <div className="flex justify-between items-center gap-2">
                <Button
                    className="w-full text-sm sm:text-base"
                    onClick={() => setAddingUser(true)}
                    add
                    disabled={addingUser}
                >
                    Add User
                </Button>
                <div className="flex gap-2 items-center">
                    <SearchBar
                        placeholder="Search users"
                        value={searchValue}
                        onChange={handleChangeSearchValue}
                    ></SearchBar>
                    <DropDown icon={<Button dropDown>Filter by roles</Button>}>
                        {SYSTEM_ROLES_ARRAY.map((role) => (
                            <DropDownOption
                                key={role}
                                onClick={() => handleChangeSelectedRole(role)}
                            >
                                <div className="flex items-center gap-3">
                                    <input
                                        checked={selectedRoles[role]}
                                        onChange={() =>
                                            handleChangeSelectedRole(role)
                                        }
                                        className="rounded-md"
                                        type="checkbox"
                                    ></input>
                                    <p>{role}</p>
                                </div>
                            </DropDownOption>
                        ))}
                    </DropDown>
                </div>
            </div>

            {addingUser && (
                <NewUserForm onCancel={() => setAddingUser(false)} />
            )}

            <div className="mt-4 overflow-y-auto max-h-[calc(100vh-530px)]">
                <Table
                    {...userTableProps(
                        tableData,
                        handleChangeUserRole,
                        handleResetPassword,
                        handleDeleteUser
                    )}
                />
            </div>
            <Modal
                ref={modalRef}
                className="w-max h-max bg-white p-4 rounded-md"
            ></Modal>
        </div>
    );
}
