import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Image/logo.png';


const Navbar = () => {
  return (
    <div className='text-blue-500 bg-white shadow-md '>
      <div className='max-w-[90%] mx-auto flex justify-between items-center'>
        <div className='flex items-center w-24 cursor-pointer'>
          <img src={Logo} alt="rrtr"/>
          <div>
            <Link to='/'><h2 className='text-2xl font-semibold uppercase border-b-2'>Train</h2></Link>
            <h3 className='text-md '>Booking</h3>
          </div>
        </div>
        <div className='flex'>
          <ul className='flex gap-6 px-4 py-2 text-xl font-semibold'>
            <li>
            <Link to='about' className='hover:text-blue-300'>About</Link>
            </li>
            
            <li>
            <Link to='appoinment' className='hover:text-blue-300'>Booking</Link>
            </li>
            <li>
            <Link to='contact' className='hover:text-blue-300'>Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className='px-4 py-2 text-white bg-blue-800 border rounded-md hover:bg-white border-2-blue-600 w-30 text-xxl hover:text-black'>
          <Link to='/login'><button>Login</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar