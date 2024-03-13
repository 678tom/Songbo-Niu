import React, { forwardRef, useImperativeHandle, useState } from "react";
import { twMerge } from "tailwind-merge";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";

export const ResetLinkSentModal = ({onSubmit, onCancel, onClose, children}) => {
    const loginURL = route('login');

    return <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur">
            <form className="p-6 rounded shadow-md bg-gray-300 items-center">
                <h1 className="max-w-md mb-4 text-gray-700 text-bold text-xl cursor-default">Password Reset Link Sent!</h1>
                <a href={loginURL} className="text-gray-600 hover:underline ml-12">Return to Login</a>
            </form>
    </div>
}

