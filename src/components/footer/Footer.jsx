import React from 'react'
import { FaFacebookF, FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 mt-10 border-t border-gray-700">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-right">
        
        {/* معلومات الشركة */}
        <div>
          <h2 className="text-xl font-bold text-yellow-400 mb-3">شركة الوكيل ستيل</h2>
          <p className="text-sm leading-relaxed">
           ادارة م/وائل حسن الوكيل<br />
          </p>
        </div>

        {/* بيانات التواصل */}
        <div className="flex flex-col gap-3 items-center md:items-end">
          <a 
            href="https://www.google.com/maps?q=المنطقه+الصناعيه+الرابعه,+الهناجر+القديمه,+مدينه+السادات" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-yellow-400 transition"
          >
            <FaMapMarkerAlt className="text-yellow-400" />
            <span className="text-sm">المنطقه الصناعيه الرابعة - الهناجر القديمة - مدينة السادات</span>
          </a>

          <a href="tel:+201011343238" className="flex items-center gap-2 hover:text-yellow-400 transition">
            <FaPhoneAlt className="text-yellow-400" />
            <span className="text-sm">01011343238</span>
          </a>

          <a 
            href="https://wa.me/201011343238" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-green-400 transition"
          >
            <FaWhatsapp className="text-green-400" />
            <span className="text-sm">واتساب</span>
          </a>
        </div>

        {/* روابط السوشيال ميديا */}
        <div className="flex justify-center md:justify-end items-center gap-6">
          <a 
            href="https://www.facebook.com/share/1JWWBeT67w/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition text-xl"
          >
            <FaFacebookF />
          </a>
          <a 
            href="https://wa.me/201011343238" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-green-400 transition text-xl"
          >
            <FaWhatsapp />
          </a>
          <a 
            href="tel:+201011343238" 
            className="hover:text-yellow-400 transition text-xl"
          >
            <FaPhoneAlt />
          </a>
        </div>
      </div>

      {/* حقوق النشر */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} جميع الحقوق محفوظة لشركة{' '}
        <span className="text-yellow-400">الوكيل ستيل</span>
      </div>
    </footer>
  )
}
