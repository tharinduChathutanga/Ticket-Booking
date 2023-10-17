import React, { useState } from 'react';
import Image from '../Image/scn.png'
import { AiFillEdit } from "react-icons/ai";
import doctorDataService from '../../Services/DoctorService';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


const AddDoctors = () => {

    const [train_code, settrain_code] = useState("")
    const [train_type, settrain_type] = useState("")
    const [train_name, settrain_name] = useState("")
    const [train_status, settrain_status] = useState("")
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
        else if (train_name === "") {
            toast.error('Train Name is required !', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        else if (train_status === "") {
            toast.error('Status is required !', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        else {
            await doctorDataService.addDoctor({
                train_code, train_type, train_status, train_name
            });
            navigate("/admin/doctor-list");
            toast.success('Added Success !', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    }

    return (
        <div className='h-[70vh] justify-center  '>
            <div className='w-[800px] h-[80vh] bg-gray-100 mx-auto mt-20 flex rounded-xl shadow-xl justify-between'>
                <div className='w-[50%] ml-[60px] mt-[100px]'>
                    <h2 className='mb-4 text-4xl font-semibold text-black'>Add New Train</h2>
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
                        <input className='h-[100%] w-[90%] ml-1 rounded-lg' type="text" placeholder='Enter Train Name'
                           name="train_name"
                           onChange={(e) => settrain_name(e.target.value)}
                           value={train_name}
                           
                        />
                        <p className='text-xl'><AiFillEdit /></p>
                    </div>
                    <div className='w-[350px] h-[40px] bg-white items-center mt-4 rounded-lg flex'>
                        <input className='h-[100%] w-[90%] ml-1 rounded-lg' type="text" placeholder='Enter Status'
                            name="train_status"
                            onChange={(e) => settrain_status(e.target.value)}
                            value={train_status}
                        />
                        <p className='text-xl'><AiFillEdit /></p>
                    </div>
                    <button className='bg-blue-400 text-white px-6 py-1 rounded-lg text-xl hover:text-blue-500 hover:bg-white mt-[20px]' onClick={submitButton}>
                        Add Train
                    </button>
                </div>
                <div className='mt-32 ml-6 '>
                    <img className='w-[80%]' src={Image} alt="" />
                </div>
            </div>
        </div>
    )
}

export default AddDoctors