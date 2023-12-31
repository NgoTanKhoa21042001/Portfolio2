/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const HeaderItem = ({ name, Icon }) => {
  return (
    <div className='flex items-center text-white gap-3 text-[15px] font-semibold cursor-pointer hover:underline underline-offset-8 mb-2'>
      <Icon />
      <h2 className=''>{name}</h2>
      <h1>g</h1>
    </div>
  )
}

export default HeaderItem
