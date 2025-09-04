import React from 'react' 
import Navbar from '../navbar/Navbar'
import LOGO from '../../assets/LOGO.png'

export default function Hero() {
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[660px] flex flex-col bg-black">
      {/* الدائرة الذهبية شمال */}
      <div className="absolute -top-40 left-0 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[640px] md:h-[720px] 
        bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-400 
        rounded-full transform rotate-12 shadow-[0_0_60px_rgba(255,215,0,0.6)]">
      </div>

      <Navbar /> 

      <section 
        data-aos="fade-up"
        data-aos-delay="250"
        className="text-white body-font z-10 flex-1 flex items-center"
      >
        <div className="container mx-auto flex flex-col-reverse md:flex-row-reverse items-center px-4 sm:px-6 py-12 sm:py-20 gap-8 sm:gap-12">
          
          {/* النصوص يمين */}
          <div className="md:w-1/2 flex flex-col items-center md:items-end text-center md:text-right space-y-6">
            <h1 className="title-font text-2xl sm:text-3xl md:text-4xl font-bold leading-relaxed">
              شركة الوكيل ستيل <br className="block sm:hidden"/> 
              لتشكيل المعادن وصناعة البالتات
            </h1>

           <a 
  href="https://www.facebook.com/share/1JWWBeT67w/" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="w-full sm:w-auto flex justify-center"
>
  <button 
    className="w-full sm:w-auto inline-flex justify-center items-center 
    text-black bg-gradient-to-r from-yellow-400 to-yellow-600 
    border-0 py-2.5 px-6 sm:py-3 sm:px-8 
    focus:outline-none hover:from-yellow-500 hover:to-yellow-700 
    hover:shadow-[0_0_40px_rgba(255,215,0,0.7)] 
    rounded-full text-base sm:text-lg font-semibold tracking-wide transition-all"
  >
    تواصل معنا عبر فيسبوك لمزيد من المعلومات
  </button>
</a>

          </div>

          {/* اللوجو شمال */}
          <div className="md:w-1/2 flex justify-center md:justify-start">
            <img 
              src={LOGO} 
              alt="hero" 
              className="object-cover object-center rounded-full w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
