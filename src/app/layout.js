import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ankit Portfolio",
  description: "A Graphic and Web Developer ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} relative`}  >
        <div className="max-w-[1300px] w-[95%] m-auto bg-white shadow-lg my-4 rounded-xl overflow-hidden " >
          <Navbar />
        </div>

        {children}

        <div className="max-w-[1300px] w-[95%] m-auto text-white my-4 rounded-xl overflow-hidden">
          <Footer />
        </div>
      </body>
    </html>
  );
}
