import { useEffect } from 'react';
// import Checkbox from '@/Components/Checkbox';
import LoginLayout from '@/Layouts/LoginLayout';
import InputError from '@/Components/InputError';
// import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, setError, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const forgotPasswordLink = route('password.forgot.request');

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        // Check if the email has the "@dal.ca" domain
        if (!data.email.toLowerCase().endsWith('@dal.ca')) {
            // Display an error message or take appropriate action.
            setError('email', 'Please enter a valid @dal.ca email address.')
        }

        post(route('login'));
    };

    return (

        <LoginLayout>

            <Head title="Log in" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <form onSubmit={submit}>

                <div>
                    {/*<InputLabel htmlFor="email" value="Email" />*/}

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    {/*<InputLabel htmlFor="password" value="Password" />*/}
                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">

                    <PrimaryButton className="bg-gray-700 mt-1 w-full" disabled={processing}>
                        Log in
                    </PrimaryButton>

                </div>
            </form>
            <div className="mt-4 text-center">
                <a href={forgotPasswordLink} id="forgot-password-link" className="text-gray-600 hover:underline">Forgot your password?</a>
            </div>
        </LoginLayout>
    );
}
