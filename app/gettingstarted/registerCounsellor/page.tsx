import Link from 'next/link'
import React from 'react'

const RegisterCounsellor = () => {
  return (
    <div className='flexBox min-h-[80vh] bg-[#fffefe]'>

    <div className='flex  flex-col rounded-lg bg-[#ffffff] p-7 w-[470px] relative '>
        <label htmlFor="" className=''>Full name</label>
        <input className='input' placeholder='Enter your full name...'/> <label htmlFor="" className=''>Counsellor Id</label>
        <input className='input' placeholder='Enter Student Id...'/>
        <label htmlFor="" className=''>Email Address</label>
        <input className='input' placeholder='Enter email address...'/>
        <label htmlFor="" className=''>Password</label>
        <input className='input' placeholder='Enter Password...'/>
        <label htmlFor="" className=''>Confirm Password</label>
        <input className='input' placeholder='confirm Password...'/>
        <button className='bg-[#e2e2e2] w-full py-3 rounded-[10px] mb-3 font-bold text-[13px]'>Register </button>
        
        <p className='text-center text-[13px]'>Already have an account? <Link href="./login" className='text-black font-bold'>Sign In</Link></p>
    </div>
    </div>
  )
}

export default RegisterCounsellor