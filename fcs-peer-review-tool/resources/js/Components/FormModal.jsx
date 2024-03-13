
import Button from "./Button";
import Modal from "./Modal";


export function FormModal({ onSubmit, onCancel, title, children, show, ...modalProps }) {
    return (
        <Modal show={show} {...modalProps}>
            <p className="text-xl mb-4">{title}</p>
            {children}
            <div className="flex justify-end gap-2">
                <Button
                    onClick={onCancel}
                    variant="cancel"
                >
                    Cancel
                </Button>
                <Button onClick={onSubmit}>Yes</Button>

            </div>
        </Modal>
    );
}
