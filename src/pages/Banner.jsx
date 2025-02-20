import React from "react";

export default function Banner() {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] -mt-16">
      {/* Background (Person Image) - Acts as background for small screens */}
      <div
        className="flex justify-end absolute inset-0 bg-cover bg-center md:hidden"
        style={{ backgroundImage: "url('/src/assets/background_doctor.webp')" }}
      >
        <img
          className=" mt-20 h-auto object-contain relative md:left-0"
          src='/src/assets/dokter_lisa.webp'
        />
        <div className="absolute inset-0 bg-white/60"></div> {/* White Overlay */}
      </div>

      {/* Layout Wrapper */}
      <div className="w-full h-full flex-col md:flex-row items-center  grid grid-cols-2 overflow-hidden">
        {/* Left Section - Person Image (Only for Medium & Up) */}
        <div
          className="hidden md:flex md:justify-center w-full flex-1 h-full bg-auto bg-center aspect-square"
          style={{
            backgroundImage: "url('/src/assets/background_doctor.webp')",
            height: "500px",
          }}
        >
          <img
            className=" mt-20 h-auto object-contain relative md:left-0"
            src='/src/assets/dokter_lisa.webp'
          />
        </div>

        {/* Right Section - Text */}
        <div
          className="relative md:w-1/2 text-center md:text-left z-10 flex flex-col gap-5 pl-10 min-w-min w-auto"
          style={{ width: "auto", paddingRight: '70px' }}
        >
          <div className='flex flex-col gap-1'>
            <div className='text-5xl md:text-8xl lg:text-9xl text-left font-light'>Lisa Yunita</div>
            <div className='text-[8px] md:text-base text-left md:pl-3 font-normal md:font-light flex items-center gap-2'>
              <span className='w-4 border-t-[0.5px] md:w-10' />
              Dokter Spesialis Akupunktur
            </div>
          </div>
          <div className='text-xs md:text-l text-left md:pl-3'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</div>
        </div>

        {/* <div className='flex flex-col justify-center gap-10 p-10'>
          <div className='flex flex-col gap-3'>
            <div className='text-5xl md:text-9xl text-left font-light'>Lisa Yunita</div>
            <div className='text-l md:text-xl text-left pl-3 font-light flex items-center gap-3'>
              <span className='w-10 border-t md:w-20 ' />
              Dokter Spesialis Akupunktur
            </div>
          </div>
          <div className='text-l text-left pl-3'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</div>
        </div> */}
      </div>
    </div>
  );
}
