import React from "react";

export default function DoctorSidebar({ isOpen, setIsOpen }) {
  return (
    <div
      className={`fixed top-0 left-0 w-64 h-screen  shadow-lg transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      style={{
        backgroundColor: '#45959B'
      }}
    >
      {/* Close Button (X) */}
      <div
        className="absolute top-4 right-4 text-white"
        onClick={() => setIsOpen(false)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </div>

      {/* Sidebar Menu */}
      <nav className="flex flex-col p-10 space-y-4">
        {["Home", "Artikel", "FAQ"].map((item) => (
          <div key={item} href="#" className="text-white p-2 rounded-md">
            {item}
          </div>
        ))}
      </nav>
    </div>
  );
}
