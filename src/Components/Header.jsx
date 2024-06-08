import React from 'react'
import { FaBars } from "react-icons/fa6";

const Header = () => {
  return (
    <div className='flex justify-between items-center '>
        <div className='flex gap-2'>
        <img src="./assets/Logo.svg" alt="logo" className='md:h-10' />
        <button className='transition ease-in duration-250 hover:scale-105 bg-gradient-to-r from-orange-400 to-red-500 hover:bg-gradient-to-r from-orange-400 to-red-500 text-white px-3 py-1 md:px-4 md:py-2 justify-center items-center text-xs rounded-3xl font-lato'>Hoster is hiring</button>
        </div>
        <div className='lg:hidden'>
        <FaBars className='md:size-8'/>
        </div>
        <ul className='hidden lg:flex justify-center gap-10'>
            <li className='hover:text-blue-400'><a href="#">Plans</a></li>
            <li className='hover:text-blue-400'><a href="#">Find Domain</a></li>
            <li className='hover:text-blue-400'><a href="#">Why Hosterr</a></li>
        </ul>
      
        <div className='hidden lg:flex justify-center items-center gap-5'>
            <a href="#">Sign in</a>
            <button className='p-5 bg-blue-700 text-white font-bold rounded-md font-lato hover:bg-blue-200 hover:text-black'>Join Waitlist</button>
        </div>
    </div>
  )
}

export default Header