import {BrowserRouter as Router, Routes, Route, redirect} from 'react-router-dom';
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import React, { useRef, useState } from 'react';
import {ResetLinkSentModal} from "@/Components/ResetLinkSentModal";

function ForgotPassword() {
    const loginURL = route('login');
    const [modalOpen,setModalOpen] = useState(false);

    const handleSubmit = () => {
        setModalOpen(false)
    }

    const sendPasswordResetLink = async (e) => {
        e.preventDefault();
        const url = route('password.reset.request');
        const email =  document.getElementById('email').value;
        const csrfToken = document.head.querySelector('meta[name="csrf-token"]').content;

        const data = {
            _token: csrfToken,
            email: email,
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
                //error checking code - DO NOT REMOVE
                // const responseData = await response.json();
                // console.log('Response:', responseData);

                setModalOpen(true);
                setTimeout(() => {
                    window.location.href = route('login');
                }, 3000);
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
                <h1 className="max-w-md ml-4 mb-4 text-gray-700 text-bold text-xl cursor-default">Receive Password Reset Link</h1>
                <div className="w-700">
                    <form className="p-6 rounded shadow-md bg-gray-300">
                        <TextInput
                            id="email"
                            type="email"
                            className="w-full p-2 border rounded mb-4"
                            name="email"
                            placeholder="Email"
                            required
                            autoFocus
                        />
                        <div className="mt-4 text-center">
                            <PrimaryButton type="button" onClick={sendPasswordResetLink} className="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-600">
                            Send Password Reset Link
                            </PrimaryButton>
                            <a href={loginURL} className="text-gray-600 hover:underline ml-4">Back to Login</a>
                        </div>
                    </form>
                </div>
            </div>
            {modalOpen &&
                (<ResetLinkSentModal onSubmit={handleSubmit} onCancel={null} onClose={null}>
            </ResetLinkSentModal>)}
        </Router>
    );
}

export default ForgotPassword;
