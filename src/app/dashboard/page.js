"use client"; // Mark this as a client component

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import LogoutButton from "@/components/button/LogoutButton";

const Dashboard = () => {
    const router = useRouter();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (!user) {
            router.push("/login");
            
        }
    }, [router]);

    return (
        <div>
            <h1>Dashboard</h1>
            <p>This page is only accessible if you're logged in.</p>
            <LogoutButton />
        </div>
    );
};

export default Dashboard;
