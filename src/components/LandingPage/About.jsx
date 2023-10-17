import React from 'react';
import AboutI from '../Image/aabout.png';

const About = () => {
  return (
    <div className='h-[150vh]'>
      <div className='flex max-w-[70%] mx-auto items-center bg-blue-50 shadow-lg rounded-lg  mt-10 h-[600px] hover:drop-shadow-xl'>
        <div className='px-4 py-2'>
          <h1 className='text-6xl text-blue-500 font-semibold  w-[50%] py-2'>About Us</h1>
          <p className='mt-4 font-sans text-lg font-thin'>Welcome to Our Train Booking Website – your one-stop destination for hassle-free and convenient train reservations.

<h3 className='text-3xl text-blue-500 font-semibold  w-[50%] py-2'>Our Mission</h3>

At Our Train Booking Website, our mission is to simplify the train booking process and make travel accessible to everyone. We believe that traveling by train should be an enjoyable and stress-free experience, and we are committed to providing you with the tools and resources you need to plan your journey with ease.

<h3 className='text-3xl text-blue-500 font-semibold  w-[50%] py-2'>Who We Are</h3>

We are a passionate team of travel enthusiasts who understand the importance of efficient and reliable train services. Our team consists of experts in the travel industry, web development, and customer service, all working together to bring you the best train booking platform possible.</p>
        </div>
        <div className='h-[100%]'>
          <img src={AboutI} alt="" />
        </div>
      </div>
    </div>
  )
}

export default About