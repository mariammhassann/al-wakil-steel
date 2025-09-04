import React from 'react'
import steel1 from '../../assets/steel1.jpg'

export default function Experience() {
  return (
    <section id='experience' className='relative overflow-hidden bg-black py-12 sm:py-16'>
      {/* خلفية دائرية ذهبية */}
      <div className='absolute top-[60px] left-1/2 transform -translate-x-1/2 flex items-center justify-center'>
        <div className='h-64 w-64 sm:h-80 sm:w-80 bg-gradient-to-br from-[#ff910a] via-[#ffdb12] to-yellow-500 opacity-30 blur-3xl rounded-full'></div>
      </div>

      <div className='container mx-auto flex flex-col-reverse md:flex-row items-center px-4 sm:px-6 md:px-12 lg:px-20 relative z-10'>
        
        {/* النصوص */}
        <div 
          data-aos='fade-left' 
          data-aos-delay='300'
          className='md:w-1/2 w-full text-right md:pr-10 space-y-5 sm:space-y-6'>
         
          <p className='text-white leading-relaxed text-base sm:text-lg'>
            شركة <span className="text-yellow-400 font-bold">الوكيل ستيل</span> لتشكيل المعادن وصناعة البالتات.  
            نحن متخصصون في تقديم حلول صناعية عالية الجودة بخبرة تمتد لسنوات لضمان منتجات قوية، عملية، ومصممة خصيصاً لتناسب احتياجاتكم
          </p>

          <ul className='text-white text-sm sm:text-lg space-y-3 sm:space-y-4'>
            <li>✅ بمعايير لحام دقيقة لضمان المتانة</li>
            <li>✅ دهان الكتروستاتيك ضد الصدأ لمقاومة الظروف القاسية</li>
            <li>✅ تصميم هندسي يتحمل درجات حرارة من -18 حتى -20 درجة</li>
            <li>✅ قدرة تحمل تصل إلى 1700 كجم</li>
            <li>✅ ضمان 3 سنوات ضد عيوب الصناعة</li>
          </ul>

          <p className='mt-6 sm:mt-8 text-yellow-400 font-semibold text-lg sm:text-xl'>
            الوكيل ستيل... قوة التصنيع وجودة تدوم.
          </p>
        </div>

        {/* صورة الخبرة */}
        <div 
          data-aos='fade-right' 
          data-aos-delay='100'
          className='md:w-1/2 w-full flex justify-center mb-8 md:mb-0 relative'>
          
          <div className='absolute h-[260px] w-[260px] sm:h-[350px] sm:w-[350px] bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-200 rounded-full opacity-30 blur-2xl -z-10'></div>
          
          <img 
            src={steel1} 
            alt="خبرات الوكيل ستيل" 
            className='rounded-lg shadow-lg w-[220px] h-[300px] sm:w-[300px] sm:h-[400px] md:w-[350px] md:h-[480px] object-cover' 
          />
        </div>
      </div>
    </section>
  )
}
