/* eslint-disable no-unused-vars */
import { content } from '../Content'

const Hireme = () => {
  const { Hireme } = content
  return (
    <section className='bg-bg_light_primary'>
      <div className='md:container px-5 pt-14'>
        <h2 className='title' data-aos='fade-down'>
          {Hireme.title}
        </h2>
        <h4 className='subtitle' data-aos='fade-down'>
          {Hireme.subtitle}
        </h4>
        <br />
        <div className='flex items-center flex-col-reverse md:flex-row'>
          <img src={Hireme.image1} data-aos='fade-right' className='max-w-sm md:block hidden' />
          <img src={Hireme.image2} data-aos='fade-up' className='max-w-sm md:hidden' />
          <div
            data-aos='fade-right'
            className='border-2 border-dark_primary max-w-sm shadow-sm rounded-xl p-6 rounded-br-[8rem] sm:min-w-[22rem]'
          >
            <p className='leading-7'>{Hireme.para}</p>
            <br />
            <button className='btn bg-dark_primary text-white'>{Hireme.btnText}</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hireme
