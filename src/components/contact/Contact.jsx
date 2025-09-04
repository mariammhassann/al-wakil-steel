import React from 'react'
import { FaFacebookF, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id='contact' data-aos='fade-up' data-aos-delay='100' className="bg-black py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-yellow-400 mb-12">
          تواصل معنا مباشرة
        </h2>

        <div className="flex justify-center space-x-8 rtl:space-x-reverse">
          {/* Facebook */}
          <a 
            href="https://www.facebook.com/share/1JWWBeT67w/" // غير اللينك باللينك بتاعك
            target="_blank" 
            rel="noopener noreferrer"
            className="w-16 h-16 flex items-center justify-center rounded-full bg-[#1877F2] text-white text-2xl 
                       hover:scale-110 hover:shadow-[0_0_25px_rgba(24,119,242,0.7)] transition-all duration-300"
          >
            <FaFacebookF />
          </a>

          {/* WhatsApp */}
          <a 
            href="https://wa.me/201011343238" // ضع رقم الواتساب بتاعك بصيغة دولية
            target="_blank" 
            rel="noopener noreferrer"
            className="w-16 h-16 flex items-center justify-center rounded-full bg-[#25D366] text-white text-2xl 
                       hover:scale-110 hover:shadow-[0_0_25px_rgba(37,211,102,0.7)] transition-all duration-300"
          >
            <FaWhatsapp />
          </a>

          {/* Phone Call */}
          <a 
            href="tel:+201011343238" // ضع رقم الموبايل بتاعك هنا
            className="w-16 h-16 flex items-center justify-center rounded-full bg-yellow-400 text-black text-2xl 
                       hover:scale-110 hover:shadow-[0_0_25px_rgba(255,200,0,0.7)] transition-all duration-300"
          >
            <FaPhoneAlt />
          </a>
        </div>
      </div>
    </section>
  )
}
