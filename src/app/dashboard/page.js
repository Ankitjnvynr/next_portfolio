// pages/dashboard.js
"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Dashboard = () => {
    const router = useRouter();

    useEffect(() => {
        // Check if user is authenticated
        const isLoggedIn = /* implement your authentication check */ true;
        if (!isLoggedIn) {
            router.push('/login');
        }
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            {/* Dashboard content */}
        </div>
    );
};

export default Dashboard;
