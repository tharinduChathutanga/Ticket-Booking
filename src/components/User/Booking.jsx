import React, { useState } from 'react';
import Image from '../Image/scn.png'
import { AiOutlineUser, AiFillCreditCard, AiOutlineHome, AiOutlinePhone, AiOutlineUserAdd } from "react-icons/ai";
import { Link } from 'react-router-dom';
import appoinmentDataService from '../../Services/BookingService';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Booking = () => {

    const [name, setName] = useState("")
    const [nic, setNic] = useState("")
    const [address, setAddress] = useState("")
    const [date, setDate] = useState("")
    const [phone, setPhone] = useState("")
    const [doctor, setDoctor] = useState("")
    const [noseats, setNoSeats] = useState("")
    const [class1, setClass1] = useState("")
   

    const submitButton = async (e) => {

        if (name === "") {
            toast.error('Name is required!', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        else if (nic === "") {
            toast.error('NIC is required !', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        else if (address === "") {
            toast.error('Address is required !', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        else if (phone === "") {
            toast.error('Phone Number is required !', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        else if (date === "") {
            toast.error('Date is required !', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        else if (doctor === "") {
            toast.error('Train No is required !', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        else {
            await appoinmentDataService.addBooking({
                name, nic, address, phone, date, doctor, noseats, class1
            });
            toast.success('Added Success !', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    }


    return (
        <div className='h-[100vh] justify-center  '>
             <Link to='/doctorlist'><button className='px-4 py-2 mt-10 ml-8 bg-blue-500 border hover:bg-white hover:border-2-blue-500'>Train List</button></Link>
             <Link to='/Schedulelist'><button className='px-4 py-2 mt-10 ml-8 bg-blue-500 border hover:bg-white hover:border-2-blue-500'>Train Schedule</button></Link>
            <div className='w-[800px] h-[80vh] bg-gray-100 mx-auto mt-20 flex rounded-xl shadow-xl justify-between'>
                <div className='w-[50%] ml-[60px] mt-[100px]'>
                    <h2 className='mb-4 text-4xl font-semibold text-black'>Booking</h2>
                    <div className='w-[350px] h-[40px] bg-white items-center  rounded-lg flex'>
                        <input className='h-[100%] w-[90%] ml-1 rounded-lg' type="text" placeholder='Enter Your Name'
                           name="name"
                           onChange={(e) => setName(e.target.value)}
                           value={name}
                        />
                        <p className='text-xl'><AiOutlineUser /></p>
                    </div>
                    <div className='w-[350px] h-[40px] bg-white items-center mt-4 rounded-lg flex'>
                        <input className='h-[100%] w-[90%] ml-1 rounded-lg' type="text" placeholder='Enter Your NIC'
                           name="nic"
                           onChange={(e) => setNic(e.target.value)}
                           value={nic}
                        />
                        <p className='text-xl'><AiFillCreditCard /></p>
                    </div>
                    <div className='w-[350px] h-[40px] bg-white items-center mt-4 rounded-lg flex'>
                        <input className='h-[100%] w-[90%] ml-1 rounded-lg' type="text" placeholder='Enter Your Address'
                           name="address"
                           onChange={(e) => setAddress(e.target.value)}
                           value={address}
                        />
                        <p className='text-xl'><AiOutlineHome /></p>
                    </div>
                    <div className='w-[350px] h-[40px] bg-white items-center mt-4 rounded-lg flex'>
                        <input className='h-[100%] w-[90%] ml-1 rounded-lg' type="text" placeholder='Enter Your Contact Number'
                           name="phone"
                           onChange={(e) => setPhone(e.target.value)}
                           value={phone}
                        />
                        <p className='text-xl'><AiOutlinePhone /></p>
                    </div>
                    <div className='w-[350px] h-[40px] bg-white items-center mt-4 rounded-lg flex'>
                        <input className='h-[100%] w-[90%] ml-1 rounded-lg' type="date" placeholder='Select Booking Date'
                           name="date"
                           onChange={(e) => setDate(e.target.value)}
                           value={date}
                        />
                        
                    </div>
                    <div className='w-[350px] h-[40px] bg-white items-center mt-4 rounded-lg flex'>
                        <input className='h-[100%] w-[90%] ml-1 rounded-lg' type="text" placeholder='Enter Train No' 
                           name="doctor"
                           onChange={(e) => setDoctor(e.target.value)}
                           value={doctor}
                        />
                        <p className='text-xl'><AiOutlineUserAdd/></p>
                    </div>
                    <div className='w-[350px] h-[40px] bg-white items-center mt-4 rounded-lg flex'>
                        <input className='h-[100%] w-[90%] ml-1 rounded-lg' type="text" placeholder='No of Seats' 
                           name="noseats"
                           onChange={(e) => setNoSeats(e.target.value)}
                           value={noseats}
                        />
                        <p className='text-xl'><AiOutlineUserAdd/></p>
                    </div>
                    <div className='w-[350px] h-[40px] bg-white items-center mt-4 rounded-lg flex'>
                        <input className='h-[100%] w-[90%] ml-1 rounded-lg' type="text" placeholder='Class' 
                           name="class1"
                           onChange={(e) => setClass1(e.target.value)}
                           value={class1}
                        />
                        <p className='text-xl'><AiOutlineUserAdd/></p>
                    </div>
                    <button className='bg-blue-400 text-white px-6 py-1 rounded-lg text-xl hover:text-blue-500 hover:bg-white mt-[20px]' onClick={submitButton}>
                        Submit
                    </button>
                </div>
                <div className='mt-32 ml-6 '>
                    <img className='w-[80%] ' src={Image} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Booking