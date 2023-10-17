import React from 'react'
import Schedule from './Schedule';
import AdminSide from './AdminSide';

const ScheduleHome = () => {
  return (
    <div className='flex'>
    <div className='w-[20%]'>
        <AdminSide/>
    </div>
    <div className='w-[80%]'>
       <Schedule/> 
    </div>
</div>
  )
}

export default ScheduleHome