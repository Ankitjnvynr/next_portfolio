import { signIn } from 'next-auth/react';

export async function authenticate(_currentState, formData) {
    const fixedEmail = 'ankitbkana@outlook.com';
    const fixedPassword = 'ankit';

    if (formData.get('email') !== fixedEmail || formData.get('password') !== fixedPassword) {
        return 'Invalid credentials.';
    }

    try {
        const result = await signIn('credentials', {
            email: formData.get('email'),
            password: formData.get('password'),
            redirect: false,
        });

        if (result?.error) {
            // Handle specific errors, e.g.,
            if (result.error === 'CredentialsSignin') {
                return 'Invalid credentials.';
            } else if (result.error === 'Signin') {
                return 'Error during sign-in.';
            } else {
                return 'Unknown error: ' + result.error;
            }
        }

        if (result?.ok) {
            return 'success';
        }

        return 'Unknown error occurred.';
    } catch (error) {
        console.error('Unexpected error during authentication:', error);
        return 'An unexpected error occurred.';
    }
}
