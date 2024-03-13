import Button from "@/Components/Button";
import { Select, TextArea, TextField } from "@/Components/Inputs";
import Modal from "@/Components/Modal";
import { cn } from "@/Utils/util-functions";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import _ from "lodash";
import { FormModal } from "@/Components/FormModal";
import { router } from "@inertiajs/react";
import axios from "axios";
import { useSnackBar } from "@/Hooks/useSnackbar";

const FormWizardStages = {
    NAME_TYPE: 1,
    DATES: 2,
    DESCRIPTION: 3,
    ADDITIONAL_INFO: 4,
};

const formStageLabels = {
    [FormWizardStages.NAME_TYPE]: "Name and assignment type",
    [FormWizardStages.DATES]: "Dates",
    [FormWizardStages.DESCRIPTION]: "Description",
    [FormWizardStages.ADDITIONAL_INFO]: "Additional Info",
};

const assignmentTypes = {
    PEER_REVIEW: {
        id: 1,
        label: "Peer Review",
    },
    INDIVIDUAL: {
        id: 2,
        label: "Document Review",
    },
};

const Dates = ({ validateForm, defaultValues, onChange }) => {
    const [formValues, setFormValues] = useState(defaultValues);
    const [errors, setErrors] = useState({});
    const { startDate, dueDate, endDate } = formValues;

    useEffect(() => {
        handleValidation();
    }, [formValues]);

    const handleFormChange = (field) => (e) => {
        const newFormValues = {
            ...formValues,
            [field]: e.target.value,
        };
        setFormValues(newFormValues);
        onChange(newFormValues);
    };

    const handleValidation = () => {
        const errors = {};

        if (new Date(startDate) > new Date(dueDate)) {
            errors.startDate = "Start date must be before due date";
        }

        if (new Date(dueDate) > new Date(endDate)) {
            errors.endDate = "End date must be after due date";
        }

        if (new Date(startDate) > new Date(endDate)) {
            errors.endDate = "End date must be after start date";
        }

        if (new Date(dueDate) > new Date(endDate)) {
            errors.endDate = "End date must be after due date";
        }

        validateForm(_.isEmpty(errors));
        setErrors(errors);
    };

    return (
        <div className="flex flex-col gap-4 mt-2">
            <TextField
                label="Start Date"
                error={errors.startDate}
                value={startDate}
                onChange={handleFormChange("startDate")}
                type="date"
            />
            <TextField
                label="Due Date"
                error={errors.dueDate}
                value={dueDate}
                onChange={handleFormChange("dueDate")}
                type="date"
            />
            <TextField
                label="End Date"
                error={errors.endDate}
                value={endDate}
                onChange={handleFormChange("endDate")}
                type="date"
            />
        </div>
    );
};

const NameAndType = ({ validateForm, defaultValues, onChange }) => {
    const [formValues, setFormValues] = useState(defaultValues);
    const [errors, setErrors] = useState({});
    const { name, type } = formValues;

    useEffect(() => {
        handleValidation();
    }, [formValues]);

    const handleFormChange = (field) => (e) => {
        const newFormValues = {
            ...formValues,
            [field]: e.target.value,
        };
        setFormValues(newFormValues);
        onChange(newFormValues);
    };

    const handleValidation = () => {
        const errors = {};
        Object.entries(formValues).forEach(([key, value]) => {
            if (value === "") {
                errors[key] = `${key} is required`;
            }
        });

        validateForm(_.isEmpty(errors));
        setErrors(errors);
    };

    return (
        <div className="flex flex-col gap-4 mt-2">
            <TextField
                label="Assignment Name"
                error={errors.name}
                value={name}
                onChange={handleFormChange("name")}
                className="border border-gray-300 rounded-md p-2"
            />
            <Select
                label="Assignment Type"
                value={type}
                onChange={handleFormChange("type")}
                options={Object.values(assignmentTypes).map((type) => ({
                    key: type.id,
                    value: type.label,
                }))}
            />
        </div>
    );
};

const Description = ({ defaultValue, onChange }) => {
    const [description, setDescription] = useState(defaultValue);

    const handleFormChange = (e) => {
        setDescription(e.target.value);
        onChange({
            description: e.target.value,
        });
    };

    return (
        <div className="flex flex-col gap-2 mt-2">
            <TextArea
                label="Description"
                value={description}
                onChange={handleFormChange}
                className="border border-gray-300 rounded-md p-2"
            />
        </div>
    );
};

const AssignmentAdditionalInfo = ({ type }) => {
    return (
        <div className="my-2">
            <p className="text-2xl font-bold text-center">You're all set!</p>
        </div>
    );
};

const DEFAULT_FORM_VALUES = {
    name: "",
    type: assignmentTypes.PEER_REVIEW.id,
    startDate: "",
    dueDate: "",
    endDate: "",
    description: "",
};

export const AssignmentFormWizard = ({ courseId, show, onClose }) => {
    const [stage, setStage] = useState(FormWizardStages.NAME_TYPE);
    const [formValues, setFormValues] = useState(DEFAULT_FORM_VALUES);
    const [visitedStages, setVisitedStages] = useState([stage]);
    const isBackDisabled = stage === FormWizardStages.NAME_TYPE;
    const [isStageValidated, setStageValidated] = useState(false);
    const isContinueDisabled =
        !isStageValidated || stage === FormWizardStages.ADDITIONAL_INFO;
    const [confirmCloseDialogOpen, setConfirmCloseDialogOpen] = useState(false);
    const { showSuccessNotification, showErrorNotification } = useSnackBar();

    useEffect(() => {
        setStageValidated(isStageValidated);

        if (!visitedStages.includes(stage)) {
            setVisitedStages([...visitedStages, stage]);
        }
    }, [stage]);

    const handleGotoNextStage = () => {
        handleGotoStage(stage + 1)();
    };

    const handleGotoPreviousStage = () => {
        handleGotoStage(stage - 1)();
    };

    /**
     *
     * @param {number} wizardStage stage you go to
     * @returns
     */
    const handleGotoStage = (wizardStage) => () => {
        const next = wizardStage === stage + 1 || wizardStage === stage - 1; // is the stage next or previous
        const cannotGoToStage =
            !isStageValidated ||
            (!visitedStages.includes(wizardStage) && !next);
        if (cannotGoToStage) return;
        setStage(wizardStage);
    };

    const validateForm = (isValid) => {
        setStageValidated(isValid);
    };

    const handleChange = (values) => {
        const newFormValues = { ...formValues };
        Object.keys(values).forEach((key) => {
            newFormValues[key] = values[key];
        });
        setFormValues(newFormValues);
    };

    const renderStage = () => {
        switch (stage) {
            case FormWizardStages.NAME_TYPE:
                return (
                    <NameAndType
                        onChange={handleChange}
                        validateForm={validateForm}
                        defaultValues={{
                            name: formValues.name,
                            type: formValues.type,
                        }}
                    />
                );
            case FormWizardStages.DATES:
                return (
                    <Dates
                        onChange={handleChange}
                        validateForm={validateForm}
                        defaultValues={{
                            startDate: formValues.startDate,
                            dueDate: formValues.dueDate,
                            endDate: formValues.endDate,
                        }}
                    />
                );
            case FormWizardStages.DESCRIPTION:
                return (
                    <Description
                        onChange={handleChange}
                        defaultValue={formValues.description}
                    />
                );
            case FormWizardStages.ADDITIONAL_INFO:
                return (
                    <AssignmentAdditionalInfo
                        type={formValues.type}
                        onChange={handleChange}
                    />
                );
            default:
                return <></>;
        }
    };

    const handleClose = () => {
        if (_.isEqual(formValues, DEFAULT_FORM_VALUES)) {
            onClose();
        } else {
            setConfirmCloseDialogOpen(true);
        }
    };

    const handleConfirmClose = () => {
        setConfirmCloseDialogOpen(false);
        onClose();
    };

    const handleSubmit = () => {
        const payload = {
            courseId,
            name: formValues.name,
            type: formValues.type,
            startDate: formValues.startDate,
            dueDate: formValues.dueDate,
            endDate: formValues.endDate,
            description: formValues.description,
        };
        axios
            .get(route("assignment.create"), { params: payload })
            .then((res) => {
                router.visit(window.location.pathname, {
                    only: ["assignments"],
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
        <>
            <FormModal
                title="Are you sure you want to discard changes"
                show={confirmCloseDialogOpen}
                onCancel={() => setConfirmCloseDialogOpen(false)}
                onClose={() => setConfirmCloseDialogOpen(false)}
                onSubmit={handleConfirmClose}
            />
            <Modal show={show} onClose={handleClose}>
                <div className="flex flex-col gap-2 p-4">
                    <p className="text-2xl font-bold">Create an assignment</p>
                    <div className="flex items-center my-2 gap-2">
                        {Object.values(FormWizardStages).map(
                            (wizardStage, index) => (
                                <div
                                    key={wizardStage}
                                    onClick={handleGotoStage(wizardStage)}
                                    className={cn(
                                        "py-1 px-2 rounded-t-md box-border ",
                                        {
                                            "border-t-2 border-x-2 border-gray-400 border-b-0":
                                                wizardStage === stage,

                                            "border-t-2 border-x-2 border-x-gray-100 border-t-gray-100":
                                                visitedStages.includes(
                                                    wizardStage
                                                ) && wizardStage !== stage,
                                        }
                                    )}
                                >
                                    <p
                                        className={twMerge(
                                            "cursor-pointer",
                                            wizardStage === stage
                                                ? "text-gray-700"
                                                : "text-gray-300"
                                        )}
                                    >
                                        {index + 1}.{" "}
                                        {formStageLabels[wizardStage]}
                                    </p>
                                </div>
                            )
                        )}
                    </div>
                    <div>{renderStage()}</div>
                    <div className="flex justify-between mt-2">
                        <Button
                            onClick={handleGotoPreviousStage}
                            disabled={isBackDisabled}
                            variant="cancel"
                        >
                            Back
                        </Button>
                        <Button
                            onClick={() => {
                                if (
                                    stage === FormWizardStages.ADDITIONAL_INFO
                                ) {
                                    handleSubmit();
                                } else {
                                    handleGotoNextStage();
                                }
                            }}
                            disabled={
                                stage === FormWizardStages.ADDITIONAL_INFO
                                    ? false
                                    : isContinueDisabled
                            }
                        >
                            {stage === FormWizardStages.ADDITIONAL_INFO
                                ? "Submit"
                                : "Continue"}
                        </Button>
                    </div>
                </div>
            </Modal>
        </>
    );
};
