import Button from "@/Components/Button";
import { router } from "@inertiajs/react";


export default function CsvTest() {

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log('ee')
        router.post(route("course.assign.students"), formData);

    }

    return (
        <div className="flex flex-col h-screen">
            <form className="flex-col" onSubmit={handleSubmit}>
                <label>IMPORT CSV FEMIL!?</label>
                <input name="students" type="file" ></input>
                <Button type="submit">POST TO API!</Button>
            </form>
        </div>
    )
}