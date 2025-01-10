"use client"

import Sidebar from "@/components/dashboardComps/Sidebar";
import { useEffect } from "react";

import authService from "@/appwrite/auth";

export default function DashboardLayout({
    children, // will be a page or nested layout
})

{


    useEffect(() => {
        const user = authService.getCurrentUser();
        if (!user) {
            router.push("/login");
        }



    }, []);

    return (
        <div className="max-w-[1300px] w-[95%] m-auto bg-white shadow-lg my-4 rounded-xl overflow-hidden ">

            <section className="flex">
                <Sidebar />

                <div className="overflow-y-scroll flex-1 h-[85vh]">
                    {children}
                </div>
            </section>
        </div>
    )
}