import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import p1 from '../../assets/p1.jpg'
import p2 from '../../assets/p2.jpg'
import p3 from '../../assets/p3.jpg'
import p4 from '../../assets/p4.jpg'
import p5 from '../../assets/p5.jpg'
import p7 from '../../assets/p7.jpg'
import updated from '../../assets/updated.jpg'
const image = p1
const image2 = p2
const image3 = p3
const image4 = p4
const image5 = p5
const image7 = p7
const image8 = updated

export default function Projects() {
    const listProjects = [
                {id:7, image:image7, title:'تحمل درجات الحرارة', description:'منتجات مصممة لتحمل درجات حرارة من -18 حتى -20 درجة مئوية.'},
                        {id:5, image:image5, title:'منتجات مخصصة', description:'تصميمات هندسية خاصة حسب طلب العملاء لضمان الحلول المثالية.'},
        {id:8, image:image8, title:'ضمان الجودة', description:'ضمان لمدة 3 سنوات ضد عيوب الصناعة لتأكيد ثقة عملائنا في منتجاتنا.'},
        {id:4, image:image4, title:'دهان الكتروستاتيك', description:'طلاء ضد الصدأ يضمن الحماية الكاملة حتى في أصعب الظروف.'},

        {id:1, image:image, title:'تصميم باليتات معدنية', description:'باليتات قوية مصممة لتحمل الأوزان الثقيلة وتناسب بيئات التخزين المختلفة.'},
        {id:2, image:image2, title:'تشكيل معادن صناعي', description:'قطع معدنية دقيقة الصنع باستخدام أحدث تقنيات التشكيل الصناعي.'},
        {id:3, image:image3, title:'لحام Co2', description:'تنفيذ لحام عالي الجودة بمعايير دقيقة يضمن المتانة والصلابة.'},
    ];

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow:3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 780,
                settings:{
                    slidesToShow: 1,
                }
            }
        ]
    };

  return (
    <section 
      data-aos='fade-up' 
      data-aos-delay='100' 
      id='projects' 
      className='relative overflow-hidden flex flex-col text-white body-font bg-black'
    >
        <div className='container px-5 py-24 mx-auto'>
            <h2 className='text-4xl font-bold text-center mb-12 text-yellow-400'>مشاريعنا</h2>
            <Slider {...settings}>
                {
                    listProjects.map((project)=>(
                        <div key={project.id} className='p-4'>
                            <div className='h-full border-2 border-yellow-400 shadow-[0_0_20px_rgba(255,215,0,0.6)] border-opacity-80 rounded-lg overflow-hidden bg-[#111]'>
                                <img 
                                  src={project.image} 
                                  alt={project.title} 
                                  className='w-full h-56 object-cover object-center' 
                                />
                                <div className='p-6'>
                                    <h2 className='text-xl font-bold text-yellow-400 mb-2'>{project.title}</h2>
                                    <p className='leading-relaxed text-gray-200'>{project.description}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>

        {/* تعديل ألوان النقاط الخاصة بالسلايدر */}
        <style>{`
          .slick-dots li button:before {
            color: #FFD700 !important;
            font-size: 12px;
          }
          .slick-dots li.slick-active button:before {
            color: #FFA500 !important;
          }
        `}</style>
    </section>
  )
}
