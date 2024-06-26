import React, { useState } from 'react';
import { CiLogin } from "react-icons/ci";
import { MdPersonAddAlt1 } from "react-icons/md";
import Image from "next/image";
import GetStartedHeader from '../components/GetStartedHeader';
import RegisterButton from '../components/RegisterButton';


const gettingStarted = () => {
    

  return (
    <>
    <GetStartedHeader />
     
    <div className='w-full bg-white py-16 px-4'>
        <h3 className='text-orange-500 font-bold text-2xl text-center'>Getting started</h3>
        <div className='max-w-full mx-auto grid md:grid-cols-2'>
        <Image
            src="/gettingstarted.png"
            alt="Mental Health"
            className='w-full md:w-[550px] mx-auto my-4'
            width={550} // Set the desired width
            height={412} // Set the desired height while maintaining the aspect ratio
          />

            <div className='flex flex-col justify-center md:text-left md:items-start'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Mental Health Solution</h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, odio 
                    laborum. Dignissimos quidem qui quo est inventore non? Quos cumque, 
                    assumenda commodi dicta eos libero eius voluptas labore enim quia.
                </p>
                <RegisterButton />
                
            </div>
        </div>      
    </div>
    </>
  )
}

export default gettingStarted
