import React from 'react'

const Footer = (props) => {
  return (
    <div className='flex justify-between items-center h-18 mx-auto px-4'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Footer.</h1>
      <ul className='flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Teams</li>
      </ul>
    </div>
  )
}

export default Footer;