"use client"; // Mark this as a client component

import Link from "next/link";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Clear user cookie
    document.cookie = "user=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    localStorage.removeItem("user")
    router.push("/login");
    };
    
    const navs = {
        "Home":'/dashboard',
        "Images":'/dashboard/images',
        "Videos":'/dashboard/videos',
        "Websites":'/dashboard/websites',
    }

  return (
    <div className="w-64 bg-blue-800 text-white min-h-[55vh] p-4">
      <h2 className="text-xl font-semibold mb-4">Welcome Ankit</h2>
          <ul className="space-y-2">
              {
                  Object.entries(navs).map((nav) => {
                      return (
                        <li>
                          <Link
                            href={nav[1]}
                            className="block p-2 hover:bg-blue-700 rounded">
                            {nav[0]}
                          </Link>
                        </li>
                      );
                  })
              }
        
      </ul>
      <button
        onClick={handleLogout}
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500">
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
