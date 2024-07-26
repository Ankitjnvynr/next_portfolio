'use server';

import { signIn } from 'next-auth/react';

export async function authenticate(_currentState, formData) {
    console.log('Form Data:', formData);
    try {
        const result = await signIn('credentials', {
            ...formData,
            redirect: false // Ensure the result is returned without redirecting
        });

        // Handle response
        if (result?.error) {
            switch (result.error) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.';
                case 'Signin':
                    return 'Error during sign-in.';
                default:
                    return 'Something went wrong.';
            }
        }

        // If successful
        if (result?.ok) {
            return 'success';
        }

        return 'Unknown error occurred.';
    } catch (error) {
        // Handle unexpected errors
        console.error('Unexpected error during authentication:', error);
        return 'An unexpected error occurred.';
    }
}
