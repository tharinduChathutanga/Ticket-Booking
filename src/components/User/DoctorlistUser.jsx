import React, { useState, useEffect } from 'react'
import doctorDataService from '../../Services/DoctorService';
import PuffLoader from "react-spinners/PuffLoader";



const DoctorlistUser = () => {

    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])


    useEffect(() => {
        getDoctors();
    }, []);


    const getDoctors = async () => {
        const data = await doctorDataService.getAllDoctor();
        console.log(doctors);
        setDoctors(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    return (
        <div className='h-[100vh] w-[90%]'>
            <h1 className='mt-6 text-3xl font-semibold text-center text-blue-500'>Avalable Trains</h1>
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
                    <table class="w-[1000px] p-2  mt-14 ml-[300px] mx-auto">
                        <thead className='items-center justify-between p-2 bg-blue-700'>
                            <tr className='p-1' >
                                <th className='p-4 text-2xl text-white'>Train Code</th>
                                <th className='p-4 text-2xl text-white'>Trin Type</th>
                                <th className='p-4 text-2xl text-white'>Train Name</th>
                                <th className='p-4 text-2xl text-white'>States</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            {doctors.map((doc, index) => {
                                return (
                                    <tr key={doc.id} className='items-center p-4 text-xl border-b-[1px]  border-blue-500 hover:bg-blue-200'>
                                        <td className='px-4 py-2 text-center'>{doc.train_code}</td>
                                        <td className='px-4 py-2 text-center'>{doc.train_type}</td>
                                        <td className='px-4 py-2 text-center'>{doc.train_name}</td>
                                        <td>
                                            <button className='px-3 py-1 text-white bg-green-600 rounded-lg hover:bg-green-600'>{doc.train_status}</button>
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

export default DoctorlistUser