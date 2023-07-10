/* eslint-disable no-unused-vars */
import { content } from '../Content'

const Hireme = () => {
  const { Hireme } = content
  return (
    <section className='bg-bg_light_primary'>
      <div className='md:container px-5 pt-14'>
        <h2 className='title'>{Hireme.title}</h2>
        <h4 className='subtitle'>{Hireme.subtitle}</h4>
        <br />
        <div className='flex items-center flex-col-reverse md:flex-row'>
          <img src={Hireme.image1} className='max-w-sm md:block hidden' />
          <img src={Hireme.image2} className='max-w-sm md:hidden' />
          <div className='border-2 border-dark_primary max-w-sm shadow-sm rounded-xl p-6 rounded-br-[8rem] sm:min-w-[22rem]'>
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
