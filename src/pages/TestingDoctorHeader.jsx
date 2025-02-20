import { useState, useEffect } from "react";
import SidebarMenu from './DoctorSideBar';

export default function TestingDoctorHeader({ setIsOpen, isOpen }) {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsFixed(true);  // Show navbar when scrolled down
      } else {
        setIsFixed(false); // Hide navbar when at the top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Original Navbar (Normal State) */}
      <div className="h-16 bg-white shadow-md flex items-center px-4">
        <h1 className="text-lg font-bold">Normal Navbar</h1>
      </div>

      {/* Fixed Navbar with Slide & Fade Effect */}
      <div
        className={`fixed top-0 left-0 w-full h-16 bg-blue-500 text-white flex items-center px-4 shadow-md z-50 
          transition-all duration-500 ease-in-out 
          ${isFixed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[-100%] pointer-events-none"}`}
      >
        <div className="w-full md:px-10 flex items-center justify-between">
          {/* Logo */}
          <div className="w-10 h-10" />

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {["Home", "Projects", "About", "Contact", "Avatar"].map((item) => (
              item === "Avatar" ? (
                <div key={item} className="group p-2 cursor-pointer transition-all">
                  <img src="/src/assets/avatar.svg" className="w-8 h-8" />
                </div>
              ) : (
                <div key={item} className="group p-2 cursor-pointer transition-all">
                  <span className="text-gray-700 group-hover:text-white group-hover:bg-blue-500 px-3 py-2 rounded-md">
                    {item}
                  </span>
                </div>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800 focus:outline-none"
            style={{ backgroundColor: 'transparent' }}
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Sidebar or other content */}
      <SidebarMenu setIsOpen={setIsOpen} isOpen={isOpen} />

      {/* Dummy Content for Scroll Testing */}
      <div className="h-[200vh] bg-gray-100 p-10">
        <p>Scroll down to 100px to see the navbar fade in and slide down. Scroll back up to fade out and slide up.</p>
      </div>
    </>
  );
}
