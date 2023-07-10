/* eslint-disable no-unused-vars */
import { content } from '../Content'
import { HiMenuAlt2 } from 'react-icons/hi'
import { GrClose } from 'react-icons/gr'
import { createElement } from 'react'
import { useState } from 'react'
const Navbar = () => {
  const { nav } = content
  const [showMenu, setShowMenu] = useState(false)
  const [active, setActive] = useState(0)

  return (
    <div className='w-full flex justify-center'>
      <div
        onClick={() => setShowMenu(!showMenu)}
        className='sm:cursor-pointer fixed left-10 top-10 z-[999] rounded-lg bg-white/40 p-2'
      >
        {showMenu ? <GrClose size={34} /> : <HiMenuAlt2 size={34} />}
      </div>
      <nav
        className={`fixed bottom-10 z-[999] flex items-center gap-5 bg-slate-200/60 px-6 py-3 backdrop-blur-md rounded-full text-dark_primary duration-300 ${
          showMenu ? 'bottom-10' : 'bottom-[-100%]'
        }`}
      >
        {nav.map((item, i) => (
          <a
            key={i}
            href={item.link}
            onClick={() => setActive(i)}
            className={`text-xl p-2.5 rounded-full z-30 sm:cursor-pointer ${
              i === active ? 'bg-dark_primary text-white' : ''
            }`}
          >
            {createElement(item.icon)}
          </a>
        ))}
      </nav>
    </div>
  )
}

export default Navbar
