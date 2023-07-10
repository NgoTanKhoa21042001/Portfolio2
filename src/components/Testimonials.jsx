/* eslint-disable no-unused-vars */
import { content } from '../Content'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import { useState } from 'react'
const Testimonials = () => {
  const { Testimonials } = content
  const [realIndex, setRealIndex] = useState(0)
  return (
    <section>
      <div className='md:container px-5 pt-14'>
        <h2 className='title'>{Testimonials.title}</h2>
        <h4 className='subtitle'>{Testimonials.subtitle}</h4>
        <br />
        <Swiper
          direction={'vertical'}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={40}
          slidesPerView={1.7}
          onSlideChange={(e) => {
            setRealIndex(e.realIndex)
          }}
          modules={[Pagination]}
          className='md:h-96 h-[40rem] max-w-3xl'
        >
          {Testimonials.testimonials_content.map((content, i) => (
            <SwiperSlide key={i}>
              <div
                className={`duration-500 bg-bg_light_primary mx-8 border-2 p-8 h-full rounded-2xl flex md:flex-row flex-col gap-6 items-center border-slate-200 shadow-lg select-none ${
                  realIndex !== i && 'blur-sm scale-75'
                }`}
              >
                <img src={content.img} alt='' className='h-24' />
                <div className=''>
                  <p className='sm:text-base text-sm'>{content.review}</p>
                  <br />
                  <h6>{content.name}</h6>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonials
