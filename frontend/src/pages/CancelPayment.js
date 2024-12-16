import React from 'react'
import { MdCancel } from "react-icons/md";
import { Link } from 'react-router-dom';
const CancelPayment = () => {
  return (
    <div className='bg-slate-200 flex justify-center items-center h-full w-full rounded max-w-md mx-auto flex-col p-4 m-2'>
        <MdCancel width={150} height={150}/>
    

    <p className='text-red-600 font-bold text-xl'>Payment Cancel</p>
    <Link to={"/cart"} className='p-2 mt-5 border-2 border-red-600 rounded font-semibold text-red-600 hover:bg-red-600 hover:text-white'>Go To Cart</Link>
    </div>
  )
}

export default CancelPayment
