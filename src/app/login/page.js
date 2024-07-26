'use client';

import { authenticate } from '@/lib/actions.js';
import { useFormState, useFormStatus } from 'react-dom';

export default function Page() {
    const [errorMessage, dispatch] = useFormState(authenticate, undefined);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Login</h2>
                <form action={dispatch} className="space-y-4">
                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                        />
                    </div>
                    <div>
                        {errorMessage && (
                            <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
                        )}
                    </div>
                    <LoginButton />
                </form>
            </div>
        </div>
    );
}

function LoginButton() {
    const { pending } = useFormStatus();

    const handleClick = (event) => {
        if (pending) {
            event.preventDefault();
        }
    };

    return (
        <button
            aria-disabled={pending}
            type="submit"
            onClick={handleClick}
            className={`w-full px-4 py-2 font-semibold rounded-lg shadow-lg transition duration-300 ease-in-out ${pending ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'
                }`}
        >
            {pending ? 'Loading...' : 'Login'}
        </button>
    );
}
