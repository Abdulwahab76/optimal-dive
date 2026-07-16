import { ArrowRight } from "lucide-react";

// Navbar.jsx
export default function Navbar() {
  return (
    <nav className="max-w-5xl mx-auto   border border-gray-100  rounded-bl-2xl rounded-br-2xl px-4 py-4 flex items-center justify-between shadow-[0px_-26px_15px_0px_#2A4CE0]">
      <img src="/images/logo.png" className="h-8" alt="" />

      <ul className="hidden md:flex items-center gap-8 p-2.5  px-6 rounded-full text-sm border border-primary-1 *:font-normal">
        <li>Services</li>
        <li>Industries</li>
        <li>About</li>
        <li>Portfolio</li>
        <li>Blog</li>
      </ul>
      <div className="flex items-center gap-2 bg-linear-to-b from-primary-1 to-primary-2 text-white px-6 py-2   rounded-full">
        <button className="text-sm font-semibold ">Contact</button>
        <ArrowRight size={10}/>
      </div>
    </nav>
  );
}
