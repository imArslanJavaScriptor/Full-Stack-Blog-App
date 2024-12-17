import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='w-full bg-[#0c0c0c] p-5 flex items-center justify-between'>
      <div className="logo text-4xl font-bold text-white">Arslan Blogs</div>
      <div className='flex items-center gap-4 text-lg font-medium text-white hover:text-white/80'>
      <NavLink className={``}>Home</NavLink>
      <NavLink>About</NavLink>
      <NavLink>Blogs</NavLink>
      <NavLink>Services</NavLink>
      <NavLink>Contact</NavLink>
      </div>
    </div>
  )
}

export default Navbar