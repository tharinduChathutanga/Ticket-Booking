import React, { useState, useEffect } from 'react'
import scheduleData from '../../Services/TrainSchedule';
import { Link } from 'react-router-dom'
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PuffLoader from "react-spinners/PuffLoader";

const Schedule = () => {

    const [schedule, setBookings] = useState([]);
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
        const data = await scheduleData.getAllSchedule();
        console.log(schedule);
        setBookings(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };


    const deleteHandler = async (id) => {

        await scheduleData.deleteBooking(id).then(() => {
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
            <Link to='/admin/add-schedule'><button className='px-4 py-2 mt-10 ml-8 bg-blue-500 border hover:bg-white hover:border-2-blue-500'>Add Train Schedule</button></Link>
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
                            <th className='p-4 text-2xl text-white'>Train Code</th>
                                <th className='p-4 text-2xl text-white'>Trin Type</th>
                                <th className='p-4 text-2xl text-white'>Starting From</th>
                                <th className='p-4 text-2xl text-white'>Destination</th>
                                <th className='p-4 text-2xl text-white'>Departs</th>
                                <th className='p-4 text-2xl text-white'>Arrives</th>
                                <th className='p-4 text-2xl text-white'>Action</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            {schedule.map((doc, index) => {
                                return (
                                    <tr key={doc.id} className='items-center p-4 text-xl border-b-[1px]  border-blue-500 hover:bg-gray-400'>
                                        <td className='px-4 py-2 text-center'>{doc.train_code}</td>
                                        <td className='px-4 py-2 text-center'>{doc.train_type}</td>
                                        <td className='px-4 py-2 text-center'>{doc.startingfrom}</td>
                                        <td className='px-4 py-2 text-center'>{doc.destination}</td>
                                        <td className='px-4 py-2 text-center'>{doc.departs}</td>
                                        <td className='px-4 py-2 text-center'>{doc.arives}</td>
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

export default Schedule