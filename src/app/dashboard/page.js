"use client"; // Mark this as a client component

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
    const router = useRouter();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (!user) {
            router.push("/login");
        }
    }, [router]);

    return (


        <div className="flex-1 p-6 ">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="mt-4 min-h-screen">This page is only accessible if you're logged in.</p>
            <p className="mt-4 min-h-screen">This page is only accessible if you're logged in.</p>
            
            {/* Content goes here */}
        </div>

    );
};

export default Dashboard;
