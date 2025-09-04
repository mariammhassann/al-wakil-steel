import React from "react";

export default function Navbar() {
  const listNavbar = [
    { name: "", link: "#home" },
    { name: "الخبرات", link: "#experience" },
    { name: "المشاريع", link: "#projects" },
  ];

  return (
    <header
      dir="rtl"
      data-aos="fade-up"
      className="text-gray-600 body-font z-20 bg-black shadow-md fixed top-0 left-0 w-full"
    >
      <div className="container mx-auto flex flex-wrap p-3 md:p-5 items-center justify-between">
        
        {/* الشعار */}
        <a className="flex title-font font-medium items-center text-yellow-400">
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wide">
            AL-WAKIL STEEL
          </span>
        </a>

        {/* الروابط */}
        <nav className="flex flex-wrap items-center justify-center text-white text-sm sm:text-base space-x-reverse space-x-4 sm:space-x-6 md:space-x-8">
          {listNavbar.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="hover:text-yellow-400 transition-all duration-300"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* بيانات التواصل */}
        <div className="flex flex-col sm:flex-row items-center text-white text-xs sm:text-sm md:text-base mt-2 sm:mt-0 gap-1 sm:gap-4 md:gap-6">
          <p className="font-semibold text-yellow-400">م/ وائل الوكيل</p>
          <a href="tel:+201011343238" className="hover:text-yellow-400 transition">
            📞 01011343238
          </a>
        
        </div>

      
      </div>
    </header>
  );
}
