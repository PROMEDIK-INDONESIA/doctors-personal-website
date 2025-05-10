import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // <div
    //   style={{
    //     height: 200,
    //     width: '100%',
    //     backgroundColor: 'red',
    //     display: 'flex',
    //     alignItems: 'center',
    //     position: 'fixed',
    //     zIndex: 50
    //   }}
    // >
    //   <div
    //     style={{
    //       height: 100,
    //       width: '100%',
    //       backgroundColor: 'blue'
    //     }}
    //   >
    //     hehe
    //   </div>
    // </div>

    <div className="fixed top-0 inset-x-0 h-30 bg-white flex items-center z-50">
      <div className="w-full h-12 bg-white flex items-center justify-center border-blue-200 border-1 p-10 rounded-3xl">

        <div className="container mx-auto flex justify-between items-center">
          <img
            src='/src/assets/react.svg'
            style={{ width: 40, height: 40 }}
          />

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {["Home", "Projects", "About", "Contact"].map((item) => (
              <div key={item} className="group p-2 cursor-pointer transition-all">
                <span className="text-gray-700 group-hover:text-white group-hover:bg-blue-500 px-3 py-2 rounded-md">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-row items-center gap-10">
            <div>Notif</div>
            <div>Setting</div>
            <div>
              <img
                src='/src/assets/avatar.svg'
                style={{ width: 30, height: 30 }}
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-2 p-4 bg-gray-100 shadow-md">
            {["Home", "Projects", "About", "Contact", "Notif", "Setting"].map((item) => (
              <div key={item} className="p-2 text-gray-700 hover:bg-blue-500 hover:text-white rounded-md">
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
