import React from 'react'
import './navbar.css'

const Navbar = (props) => {
  return (
    <div className='flex justify-between items-center h-24 mx-auto px-4'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>AGILE DASHBOARD.</h1>
      <ul className='flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Teams</li>
        <li className='p-4'>Resources</li>
        <li className='p-4'>Contributors</li>
        
      </ul>
    </div>
  )
}

export default Navbar