import React from 'react'
import AddScedule from './ScheduleAd';
import AdminSide from './AdminSide';

const Scheduleadhome = () => {
  return (
    <div className='flex'>
        <div className='w-[20%]'>
            <AdminSide/>
        </div>
        <div className='w-[80%]'>
           <AddScedule/> 
        </div>
    </div>
  )
}

export default Scheduleadhome