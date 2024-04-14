import React from 'react'
import './navbar.css'

const Navbar = (props) => {
  return (
    <div className='flex justify-between items-center h-24 mx-auto px-16 w-full'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>AGILE DASHBOARD.</h1>
      <ul className='flex h-24 align-bottom font-bold'>
        <li className='p-10 hover:border-b-4 border-[#00df9a] duration-150'>Home</li>
        <li className='p-10 hover:border-b-4 border-[#00df9a] duration-150'>Teams</li>
        <li className='p-10 hover:border-b-4 border-[#00df9a] duration-150'>Resources</li>
        <li className='p-10 hover:border-b-4 border-[#00df9a] duration-150'>Contributors</li>
        
      </ul>
    </div>
  )
}

export default Navbar