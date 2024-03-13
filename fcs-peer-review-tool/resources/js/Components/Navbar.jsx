import React from "react";
import { useForm } from "@inertiajs/react";
import Button from "@/Components/Button";


const getUserInitials = (user) => {
    const firstNameInitial = user.first_name.charAt(0).toUpperCase();
    const lastNameInitial = user.last_name.charAt(0).toUpperCase();
    return `${firstNameInitial}${lastNameInitial}`;
}

function Navbar(props) {
    const { post } = useForm();
    const userInitials = getUserInitials(props.user);

    const submitLogout = (e) => {
        e.preventDefault();
        post(route("logout"));
    };

    if (!props.links) {
        return <></>;
    }
    return (
        <nav className="flex items-center justify-between gap-8 py-3 px-2 bg-gray-700">
            <div className="flex items-center gap-4">
                <a href="/">
                    <h1 className="hidden 2xs:block text-md xs:text-2xl md:text-4xl pl-2 text-white font-bold cursor-pointer">
                        FCS Peer Review
                    </h1>
                </a>

                <ul className="flex items-center gap-3">
                    {props.links.map((link, index) => (
                        <Button variant="nav" className="ml-4" key={index}>
                            <a href={link.url}>{link.label}</a>
                        </Button>
                    ))}
                </ul>
            </div>
            <div className="flex items-center gap-2">
                {userInitials && (
                    <div class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                        <span class="text-gray-700 text-2xl">
                            {userInitials}
                        </span>
                    </div>
                )}

                <form onSubmit={submitLogout}>
                    <Button variant="logout" className="p-2" type="submit">
                        <p>Logout</p>
                    </Button>
                </form>
            </div>
        </nav>
    );
}

export default Navbar;
