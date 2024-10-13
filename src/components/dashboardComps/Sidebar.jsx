"use client"; // Mark this as a client component

import Link from "next/link";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Clear user cookie
    document.cookie = "user=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    localStorage.removeItem("user");
    router.push("/login");
  };

  const navs = {
    Home: "/dashboard",
    Creatives: "/dashboard/creatives",
    Videos: "/dashboard/videos",
    Websites: "/dashboard/websites",
  };

  return (
    <div className="w-64 bg-blue-800 text-white  min-h-[55vh] p-4 flex flex-col justify-between">
      <div className="">
        <h2 className="text-xl font-semibold mb-4">Welcome Ankit</h2>
        <ul className="space-y-2">
          {Object.entries(navs).map((nav) => {
            return (
              <li key={nav[0 ]}>
                <Link
                  href={nav[1]}
                  className="block p-2 hover:bg-blue-700 rounded border-t border-blue-500"
                >
                  {nav[0]}
                </Link>
              </li>
            ); 
          })}
        </ul>
      </div>
      <button
        onClick={handleLogout}
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500 flex-end"
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
