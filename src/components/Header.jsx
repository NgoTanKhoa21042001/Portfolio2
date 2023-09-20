/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react'
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv } from 'react-icons/hi2'
import { HiPlus, HiDotsVertical } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import logo from '../assets/Images/logo.png'
import HeaderItem from './HeaderItem'
import { useState } from 'react'
const Header = () => {
  const [toggle, setToggle] = useState(false)
  const ref = useRef(null)
  const menu = [
    {
      name: 'HOME',
      icon: HiHome
    },
    {
      name: 'SEARCH',
      icon: HiMagnifyingGlass
    },
    {
      name: 'WATCH LIST',
      icon: HiPlus
    },
    {
      name: 'ORIGINALS',
      icon: HiStar
    },
    {
      name: 'MOVIES',
      icon: HiPlayCircle
    },
    {
      name: 'SERIES',
      icon: HiTv
    }
  ]
  useEffect(() => {
    // ấn vào bên ngoài thì đóng menu
    document.body.addEventListener('click', (event) => {
      if (event.target.contains(ref.current)) {
        setToggle(false)
      }
    })
  }, [])
  return (
    <div className='flex items-center justify-between p-5'>
      <div className='flex gap-8 items-center'>
        <img src={logo} alt='' className='w-[80px] object-cover md:w-[115px]' />
        <div className='hidden md:flex gap-8'>
          {menu.map((item) => (
            <HeaderItem name={item.name} Icon={item.icon} />
          ))}
        </div>{' '}
        <div className='flex gap-5 md:hidden'>
          {menu.map((item, index) => index < 3 && <HeaderItem Icon={item.icon} />)}
        </div>
        <div className='md:hidden' onClick={() => setToggle(!toggle)}>
          {toggle ? <HeaderItem name={''} Icon={AiOutlineClose} /> : <HeaderItem name={''} Icon={HiDotsVertical} />}
          {toggle ? (
            <div ref={ref} className='absolute mt-3 bg-[#121212] border-[1px] p-3 border-gray-700 px-5 py-4'>
              {menu.map((item, index) => index > 2 && <HeaderItem name={item.name} Icon={item.icon} />)}
            </div>
          ) : null}
        </div>
      </div>
      <div className=''>
        <img src='https://source.unsplash.com/random' alt='' className='rounded-full object-cover w-[40px] h-[40px]' />
      </div>
    </div>
  )
}

export default Header
