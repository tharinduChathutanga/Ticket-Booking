import React from 'react';
import { BsBookHalf } from "react-icons/bs";
import { BiQrScan } from "react-icons/bi";
import { AiOutlineUserAdd, AiOutlineLaptop } from "react-icons/ai";
import { Link } from 'react-router-dom';

const AdminSide = () => {
    return (
        <div className='h-[100vh] bg-[#303BC6] text-white mt-[-25px] cursor-pointer'>
            <Link to='/admin'><div className='px-6 py-4 mt-6'>
                <h1 className='text-2xl font-semibold '>Admin Dashboard</h1>
            </div>
            </Link>
            <div className='flex items-center px-6 py-2 border-b-2 border-blue-300  ml-4 gap-4 cursor-pointer hover:bg-[#0f766e] justify-between'>
                <h2 className='mt-6 text-xl'><Link to='/admin/appoinments'>Bookings</Link></h2>
                <p className='ml-10 '><BsBookHalf /></p>
            </div>
            <div className='flex items-center px-6 py-2 border-b-2 border-blue-300  ml-4 gap-4 cursor-pointer hover:bg-[#0f766e] justify-between'>
                <h2 className='mt-6 text-xl'><Link to='/admin/doctor-list'>Trains</Link></h2>
                    <p className='ml-10 '><AiOutlineLaptop /></p>
                
            </div>
            <div className='flex items-center px-6 py-2 border-b-2 border-blue-300  ml-4 gap-4 cursor-pointer hover:bg-[#0f766e] justify-between'>
                <h2 className='mt-6 text-xl'><Link to='/admin/schedule-list'>Train Schedule</Link></h2>
                <p className='ml-10 '><AiOutlineLaptop /></p>
            </div>
            

        </div>
    )
}

export default AdminSide