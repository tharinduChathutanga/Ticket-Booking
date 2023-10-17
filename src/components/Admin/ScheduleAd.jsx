import React, { useState } from 'react';
import Image from '../Image/scn.png'
import { AiFillEdit } from "react-icons/ai";
import doctorDataService from '../../Services/TrainSchedule';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


const ScheduleAd = () => {

    const [train_code, settrain_code] = useState("")
    const [train_type, settrain_type] = useState("")
    const [startingfrom, setstartingfrom] = useState("")
    const [destination, setdestination] = useState("")
    const [departs, setdeparts] = useState("")
    const [arives, setarives] = useState("")
    const navigate = useNavigate();

    const submitButton = async (e) => {


        if (train_code === "") {
            toast.error('Train Code is required!', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        else if (train_type === "") {
            toast.error('Train Type is required !', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        else if (startingfrom === "") {
            toast.error('Train Name is required !', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        else if (destination === "") {
            toast.error('Status is required !', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        else {
            await doctorDataService.addDoctor({
                train_code, train_type, destination, startingfrom, departs, arives
            });
            navigate("/admin/schedule-list");
            toast.success('Added Success !', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    }

    return (
        <div className='h-[70vh] justify-center  '>
            <div className='w-[800px] h-[80vh] bg-gray-100 mx-auto mt-20 flex rounded-xl shadow-xl justify-between'>
                <div className='w-[50%] ml-[60px] mt-[100px]'>
                    <h2 className='mb-4 text-4xl font-semibold text-black'>Add New Schedule</h2>
                    <div className='w-[350px] h-[40px] bg-white items-center  rounded-lg flex'>
                        <input className='h-[100%] w-[90%] ml-1 rounded-lg' type="text" placeholder='Enter Train Code'
                            name="train_code"
                            onChange={(e) => settrain_code(e.target.value)}
                            value={train_code}
                        />
                        <p className='text-xl'><AiFillEdit /></p>
                    </div>
                    <div className='w-[350px] h-[40px] bg-white items-center mt-4 rounded-lg flex'>
                        <input className='h-[100%] w-[90%] ml-1 rounded-lg' type="text" placeholder='Enter Train Type'
                            name="train_type"
                            onChange={(e) => settrain_type(e.target.value)}
                            value={train_type}
                        />
                        <p className='text-xl'><AiFillEdit /></p>
                    </div>
                    <div className='w-[350px] h-[40px] bg-white items-center mt-4 rounded-lg flex'>
                        <input className='h-[100%] w-[90%] ml-1 rounded-lg' type="text" placeholder='Enter Starting From'
                           name="startingfrom"
                           onChange={(e) => setstartingfrom(e.target.value)}
                           value={startingfrom}
                           
                        />
                        <p className='text-xl'><AiFillEdit /></p>
                    </div>
                    <div className='w-[350px] h-[40px] bg-white items-center mt-4 rounded-lg flex'>
                        <input className='h-[100%] w-[90%] ml-1 rounded-lg' type="text" placeholder='Enter Destination'
                            name="destination"
                            onChange={(e) => setdestination(e.target.value)}
                            value={destination}
                        />
                        <p className='text-xl'><AiFillEdit /></p>
                    </div>
                    <div className='w-[350px] h-[40px] bg-white items-center mt-4 rounded-lg flex'>
                        <input className='h-[100%] w-[90%] ml-1 rounded-lg' type="text" placeholder='Enter Departs'
                            name="departs"
                            onChange={(e) => setdeparts(e.target.value)}
                            value={departs}
                        />
                        <p className='text-xl'><AiFillEdit /></p>
                    </div>
                    <div className='w-[350px] h-[40px] bg-white items-center mt-4 rounded-lg flex'>
                        <input className='h-[100%] w-[90%] ml-1 rounded-lg' type="text" placeholder='Enter Arrives'
                            name="arives"
                            onChange={(e) => setarives(e.target.value)}
                            value={arives}
                        />
                        <p className='text-xl'><AiFillEdit /></p>
                    </div>
                    <button className='bg-blue-400 text-white px-6 py-1 rounded-lg text-xl hover:text-blue-500 hover:bg-white mt-[20px]' onClick={submitButton}>
                        Add Schedule
                    </button>
                </div>
                <div className='mt-32 ml-6 '>
                    <img className='w-[80%]' src={Image} alt="" />
                </div>
            </div>
        </div>
    )
}

export default ScheduleAd