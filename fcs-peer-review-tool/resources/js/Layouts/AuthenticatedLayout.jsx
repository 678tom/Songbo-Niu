import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { SnackBarProvider } from "@/Providers/SnackbarProvider";
import { SYSTEM_ROLES } from "@/Utils/constants";



const adminLink = {
    url: "/admin",
    label: "Admin",
};

const coursesLink = {
    url: "/courses",
    label: "Courses",
};

const homeLink = {
    url: "/",
    label: "Home",
}

const userLinksMap = {
    [SYSTEM_ROLES.ADMIN]: [adminLink],
    [SYSTEM_ROLES.COURSE_CREATOR]: [coursesLink],
    [SYSTEM_ROLES.USER]: [coursesLink, homeLink],
};

export default function Authenticated({ user, children }) {
    let links = userLinksMap[user.role];
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <SnackBarProvider>
                <Navbar links={links} user={user}/>
                <div className="flex-grow mb-16">
                    {children}
                </div>
                <Footer />
            </SnackBarProvider>
        </div>
    );
}
