import React from 'react';
import Heroi from '../Image/Hero2.jpg'
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='h-[90vh]  bg-cover' style={{ backgroundImage: `url(${Heroi})` }}>
      <div className='max-w-[100%] flex justify-between'>
        <div className=' justify-center text-center mx-auto text-white mt-[200px] py-2'>
          <h1 className='text-6xl font-bold'>Train Booking</h1>
          <p className='text-4xl font-semibold'>Your Ticket Booking Partner</p>
          <p className='text-2xl font-thin'>
           <div className='gap-4 py-4'>
            <Link to="/appoinment"><button className='bg-[#115e59] px-4 py-2 hover:bg-white hover:text-blue-600 rounded-lg mr-4'>Booking</button></Link>
            </div>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero