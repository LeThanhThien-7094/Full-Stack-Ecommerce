import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
const SuccessPayment = () => {
  return (
    <div className='bg-slate-200 flex justify-center items-center h-full w-full rounded max-w-md mx-auto flex-col p-4 m-2'>
        <FaCheckCircle width={150} height={150}/>
    

    <p className='text-green-600 font-bold text-xl'>Payment Successfully</p>
    <Link to={"/order"} className='p-2 mt-5 border-2 border-green-600 rounded font-semibold text-green-600 hover:bg-green-600 hover:text-white'>See Order</Link>
    </div>
  )
}

export default SuccessPayment
