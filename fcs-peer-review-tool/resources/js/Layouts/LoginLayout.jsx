// import ApplicationLogo from '@/Components/ApplicationLogo';
// import { Link } from '@inertiajs/react';

import Authenticated from "./AuthenticatedLayout";

export default function LoginLay({ children }) {
    return (
        <div className="flex">
            {/*FCS Peer Review title - left side */}
            <div className="hidden xs:bg-gray-700 xs:flex-1 xs:flex xs:flex-col xs:justify-center xs:items-center">
                <div className="mdlg:text-5xl text-white font-bold text-2xl py-1 cursor-default">FCS Peer Review</div>
                <div className="mdlg:text-5xl text-white/80 font-bold text-2xl py-1 cursor-default">FCS Peer Review</div>
                <div className="mdlg:text-5xl text-white/60 font-bold text-2xl py-1 cursor-default">FCS Peer Review</div>
                <div className="mdlg:text-5xl text-white/40 font-bold text-2xl py-1 cursor-default">FCS Peer Review</div>
                <div className="mdlg:text-5xl text-white/20 font-bold text-2xl py-1 cursor-default">FCS Peer Review</div>
            </div>

            {/*Right side - login info*/}
            <div className="mx-2 h-screen flex flex-col justify-center items-center pt-6 bg-white flex-1">
                <div className=" flex flex-col w-full sm:max-w-md ">

                    <div className="flex-1 flex flex-col justify-center items-center">
                        <div className="mb-5 underline underline-offset-8 xs:hidden text-gray-700 font-bold text-4xl py-1 cursor-default">FCS Peer Review</div>
                    </div>

                    <div className="max-w-md mt-2 ml-2 text-gray-700 text-bold text-xl cursor-default">Login</div>

                    <div className="w-full max-w-md mt-2 px-6 py-4 bg-gray-300 shadow-md overflow-hidden rounded-lg">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
