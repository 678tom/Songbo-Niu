// resources/js/ForgotPassword.jsx

import React, { useState } from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";

function ResetPassword({ token }) {
    const resetPassword = async (e) => {
        e.preventDefault();

        const password = document.getElementById('password').value;
        const passwordConfirm = document.getElementById('password-confirm').value;

        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%^&*]).{6,}$/;
        if (!password.match(regex)) {
            const errorMessage = "Password does not meet complexity requirements:\n" +
                "• At least 6 characters long\n" +
                "• At least one lowercase letter\n" +
                "• At least one uppercase letter\n" +
                "• At least one digit\n" +
                "• At least one of the special characters (@#$!%^&*)";
            alert(errorMessage);
            return;
        }
        //Password validation logic
        if ((password !== passwordConfirm)){
            alert("Passwords do not match.");
            return;
        }
        if((password === '' ) || (passwordConfirm === '')) {
            alert("Password can not be empty.");
            return;
        }

        const csrfToken = document.head.querySelector('meta[name="csrf-token"]').content;
        const url = route('password.reset', { token: token });

        const data = {
            _token: csrfToken,
            token: token,
            password: password,
        };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                window.location.href = route('login');
            } else {
                console.error('Password reset failed:', response.status, response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <Router>
            <div className="bg-gray-700 text-white p-4">
                <div className="flex justify-between items-center">
                    <div>FCS Peer Review</div>
                </div>
            </div>

            <div className="flex flex-col items-center mt-20 h-screen">
                <h1 className="max-w-md ml-4 mb-4 text-gray-700 text-bold text-xl cursor-default">Reset Password</h1>
                <div className="w-700">
                    <form className="p-6 rounded shadow-md bg-gray-300">
                        <TextInput
                            id="password"
                            type="password"
                            className="w-full p-2 border rounded mb-4"
                            name="password"
                            placeholder="Password"
                            required
                            autoFocus
                        />
                        <TextInput
                            id="password-confirm"
                            type="password-confirm"
                            className="w-full p-2 border rounded mb-4"
                            name="password-confirm"
                            placeholder="Confirm Password"
                            required
                            autoFocus
                        />
                        <div className="mt-4 text-center">
                            <PrimaryButton type="button" onClick={resetPassword} className="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-600">
                                Reset
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </Router>
    );
}

export default ResetPassword;
