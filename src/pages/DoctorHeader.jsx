import React, { useEffect, useState } from 'react';
import SidebarMenu from './DoctorSideBar';
import DokterLisaLogoBlack from '../assets/dokter-lisa-name-transparent.png'
import DokterLisaLogoWhite from '../assets/dokter-lisa-name-transparent-white.png'

export default function DoctorHeader({ setIsOpen, isOpen }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Fixed Navbar */}
      <div
        className={`fixed top-0 inset-x-0 w-full h-16 flex items-center z-50 transition-all duration-300 ${isScrolled ? "bg-[#45959B]" : "bg-transparent"
          }`}

      // className={`fixed top-0 h-16 bg-white/90 backdrop-blur-md shadow-md flex items-center z-50 w-full transition-all duration-300 ease-in-out ${isOpen ? "left-64" : "left-0"
      //   }`}
      >
        <div className="w-full px-4 md:px-10 flex items-center justify-between">
          {/* Logo Placeholder */}
          {/* Mobile Menu Button */}
          <div className='w-full grid grid-cols-3'>
            <div
              className={`md:hidden focus:outline-none flex items-center ${isScrolled ? "text-white" : "text-black"}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              ☰
            </div>
            <div
              className='max-md:hidden flex flex-row justify-start items-center gap-5'
            >
              <div className={`text-base ${isScrolled ? 'text-white' : 'text-black'}`}>
                Home
              </div>
              <div className={`text-base ${isScrolled ? 'text-white' : 'text-black'}`}>
                Artikel
              </div>
              <div className={`text-base ${isScrolled ? 'text-white' : 'text-black'}`}>
                FAQ
              </div>
            </div>
            <div className='w-full flex justify-self-center items-center max-w-35'>
              <img
                className='w-full max-w-35 mt-3'
                // src={`/src/assets/dokter-lisa-name-${isScrolled ? 'transparent-white' : 'transparent'}.png`}
                src={isScrolled ? DokterLisaLogoWhite : DokterLisaLogoBlack}
              />
            </div>
            <div className='md:hidden w-full flex items-center justify-end'>
              <div className='md:hidden w-7 h-7  p-1 group'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className={`group-hover:fill-orange-400 ${isScrolled ? 'fill-white' : 'fill-black'}`}>
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </div>
            </div>
            <div className='max-md:hidden flex flex-row gap-3 justify-end items-center'>
              <div className='w-7 h-7 bg-[#EDF2F6] p-1.5 rounded-sm flex items-center justify-center hover:bg-orange-400'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>
              </div>
              <div className='w-7 h-7 bg-[#EDF2F6] p-1.5 rounded-sm flex items-center justify-center hover:bg-orange-400'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" /></svg>
              </div>
              <div className='w-7 h-7 bg-[#EDF2F6] p-1.5 rounded-sm flex items-center justify-center hover:bg-orange-400'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {/* {["Home", "Projects", "About", "Contact", "Avatar"].map((item) => (
              item === "Avatar" ? (
                <div key={item} className="group p-2 cursor-pointer transition-all">
                  <img src="/src/assets/avatar.svg" className="w-8 h-8 rounded-full" />
                </div>
              ) : (
                <div key={item} className="group p-2 cursor-pointer transition-all">
                  <span className="text-gray-700 group-hover:text-white group-hover:bg-blue-500 px-3 py-2 rounded-md">
                    {item}
                  </span>
                </div>
              )
            ))} */}
          </div>


        </div>
      </div>

      {/* Push content down so it's not hidden behind navbar */}
      <div className="pt-16"></div>
    </>
  );
}
