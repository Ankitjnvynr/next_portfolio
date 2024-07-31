"use client"; // Mark this as a client component

import { useEffect } from "react";
import { useRouter } from "next/navigation";


const Settings = () => {
    const router = useRouter();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (!user) {
            router.push("/login");
        }
    }, [router]);

    return (
        
            
            <div className="flex-1 p-6">
                <h1 className="text-2xl font-bold">Settings</h1>
                <p className="mt-4">Settings page content goes here.</p>
           
        </div>
    );
};

export default Settings;
