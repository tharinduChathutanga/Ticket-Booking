import React, { useState, useEffect } from 'react'
import appoinmentDataService from '../../Services/BookingService';
import { Link } from 'react-router-dom'
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PuffLoader from "react-spinners/PuffLoader";

const Appoinmets = () => {

    const [appoinments, setBookings] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    useEffect(() => {
        getBookings();
    }, []);


    const getBookings = async () => {
        const data = await appoinmentDataService.getAllBookings();
        console.log(appoinments);
        setBookings(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };


    const deleteHandler = async (id) => {

        await appoinmentDataService.deleteBooking(id).then(() => {
            toast.success('Delete Success !', {
                position: toast.POSITION.TOP_RIGHT
            });
            getBookings();
        })
            .catch((err) => {
                console.log(err);
            })

    };


    return (
        <div>
            
            {
                loading ?
                    <div className='flex justify-center mt-20'>
                        <PuffLoader color="rgba(54, 215, 183, 1)"
                            cssOverride={{}}
                            loading
                            size={76}
                            speedMultiplier={2} />
                    </div>
                    :
                    <table class="w-[1000px] p-2 ml-14 mt-14">
                        <thead className='items-center justify-between p-2 bg-blue-700'>
                            <tr className='p-1' >
                                <th className='p-4 text-2xl text-white'>Name</th>
                                <th className='p-4 text-2xl text-white'>NIC</th>
                                <th className='p-4 text-2xl text-white'>Address</th>
                                <th className='p-4 text-2xl text-white'>Date</th>
                                <th className='p-4 text-2xl text-white'>Phone</th>
                                <th className='p-4 text-2xl text-white'>Train No</th>
                                <th className='p-4 text-2xl text-white'>No of Seats</th>
                                <th className='p-4 text-2xl text-white'>Class</th>
                                <th className='p-4 text-2xl text-white'>Action</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            {appoinments.map((doc, index) => {
                                return (
                                    <tr key={doc.id} className='items-center p-4 text-xl border-b-[1px]  border-blue-500 hover:bg-gray-400'>
                                        <td className='px-4 py-2 text-center'>{doc.name}</td>
                                        <td className='px-4 py-2 text-center'>{doc.nic}</td>
                                        <td className='px-4 py-2 text-center'>{doc.address}</td>
                                        <td className='px-4 py-2 text-center'>{doc.date}</td>
                                        <td className='px-4 py-2 text-center'>{doc.phone}</td>
                                        <td className='px-4 py-2 text-center'>{doc.doctor}</td>
                                        <td className='px-4 py-2 text-center'>{doc.noseats}</td>
                                        <td className='px-4 py-2 text-center'>{doc.class1}</td>
                                        <td className='px-4 py-2 text-left'>
                                            <div className='flex gap-2 ml-8 text-xl cursor-pointer'>
                                                <AiFillDelete className='hover:bg-blue-500' onClick={(e) => deleteHandler(doc.id)} />
                                            </div>

                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
            }

        </div>
    )
}

export default Appoinmets