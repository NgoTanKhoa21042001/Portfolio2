import { content } from '../Content'

const Hero = () => {
  const { hero } = content
  return (
    <section id='home'>
      <div className='min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center'>
        <div
          data-aos='slide-left'
          data-aos-delay='1200'
          className='absolute h-full md:w-4/12 w-8/12 top-0 right-0 bottom-0 bg-primaryLinear -z-10'
        >
          <h1 className='rotate-90 absolute top-[30%] right-[-15%] text-[#eaf2fa] '>
            {hero.firstName} <span className='text-dark_primary'>{hero.LastName}</span>
          </h1>
        </div>
        {/* Year */}
        <div className='pb-16 px-6 pt-5' data-aos='fade-down'>
          <h2>{hero.title}</h2>
          <br />
          <div className=''>
            <button className='btn'>{hero.btnText}</button>
          </div>
          <div className='flex flex-col gap-10 mt-10'>
            {hero.hero_content.map((content, i) => (
              <div
                data-aos='fade-down'
                data-aos-delay={i * 300}
                key={i}
                className={`flex items-center w-80 gap-5 ${i === 1 && 'flex-row-reverse text-right'}`}
              >
                <h3>{content.count}</h3>
                <span>{content.text}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Person */}
        <div className='md:h-[37rem] h-96'>
          <img src={hero.image} alt='...' className='h-full object-cover' data-aos='slide-up' />
        </div>
      </div>
    </section>
  )
}

export default Hero
