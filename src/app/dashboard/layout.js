"use client"

import Sidebar from "@/components/dashboardComps/Sidebar";
import { useEffect, useState } from "react";

import authService from "@/appwrite/auth";

export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = authService.getCurrentUser();
    if (!user) {
      router.push("/login");
    }
    setLoading(false);
  }, []);

  return (
    <div className="max-w-[1300px] w-[95%] m-auto bg-white shadow-lg my-4 rounded-xl overflow-hidden ">
      <section className="flex">
        <Sidebar />

        <div className="overflow-y-scroll flex-1 h-[85vh]">
          <div>
            <button type="button" class="bg-indigo-500 ..." disabled>
              <svg
                class="mr-3 size-5 animate-spin ..."
                viewBox="0 0 24 24"
              ></svg>
              Processing…
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}