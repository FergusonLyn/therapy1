'use client'
import React from 'react'
import Link from "next/link";
import 'react-widgets/styles.css';
import Combobox from "react-widgets/Combobox";
import { IoMdArrowRoundBack } from "react-icons/io";
import DateWidget from '@/app/components/DateWidget';

const page = () => {
  return (

    <div className="flex justify-center items-center min-h-[80vh] bg-[#fffefe]">
      <div className="flex  flex-col rounded-lg bg-[#ffffff] p-4 w-[470px] relative ">
        <div className="h-[2px] bg-[#e2e2e2] rounded-[30px] my-12 "></div>
        <form action="">
          <h2 className="mb-5 text-lg text-center font-bold">What is on Your Mind?</h2>
          <DateWidget />
          <span className="font-bold">
            Mood
          </span> <br />
          <Combobox
            defaultValue={"Happy"}
            data={[
                'Happy',
                'Sad',
                'Angry',
                'Lonely',
                'Depressed',
                'Anxiety' 
            ]}
        />
           
            <br />
         
          <textarea name="" id="" className='w-full h-[250px] border-2 border-grey rounded-md' placeholder=''></textarea>
         <div className='flex'>
         <button  className="bg-[#e2e2e2] w-1/2 py-3 m-2 rounded-[10px] mb-3 font-bold text-[13px]  hover:bg-red-300">
                <Link href="./" className="text-black font-bold">
                Back
                </Link>
                
          </button>
          <button type="submit" className="bg-[#e2e2e2] w-1/2 py-3 m-2 rounded-[10px] mb-3 font-bold text-[13px] hover:bg-blue-300">
            Save{" "}
          </button>

         </div>
        
        </form>
      </div>


    </div>
      
        
      

  )
}

export default page
