import DashboardHeader from '@/app/components/DashboardHeader'
import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { BiSolidBookHeart } from "react-icons/bi";
import { FaSearch } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';
import { MdModeEdit } from "react-icons/md";

const Page = () => {
  return (
    <div>
       <DashboardHeader />

       <div className='max-w-full mx-auto grid md:grid-cols-2 mt-2'>
        {/* dairy image */}
        <Image
            src="/dairy.jpg"
            alt=""
            className='w-full md:w-[350px] mx-auto my-4'
            width={350} 
            height={233} 
          />

          <div className='flex flex-col justify-center md:text-left md:items-start'>
            {/* search input box */}
            <div className="relative md:w-[400px] sm:w-auto">
              <input
                type="text"
                className="w-full pl-10 pr-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Search dairy title"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" />
            </div>

            {/* compose click session */}
            <div className='md:text-xl sm:text-lg text-base font-bold py-2 p-6 rounded-md bg-blue-600  mt-4 text-white cursor-pointer'> 
              <Link href="./mydairy/compose" className='flex items-center gap-3'>
                Compose
                <span
                  className="h-14 flex items-center text-white text-2xl "
                >
                  <BiSolidBookHeart />
                </span>
              </Link>
              
            </div> 
          </div>
       </div>

        
        {/*the dairy list session  */}
      <div className="max-w-full mx-auto p-2 justify-center grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1">

          <div className="p-2 m-1 justify-center">
              <div className='h-[50px]  flex items-center gap-3 mb-1 font-bold'>
                <div className='bg-green-200 h-full rounded-md w-[100px] flex items-center p-2'><span>15/06/2024</span></div>
                <div className='bg-pink-200 h-full rounded-md w-[100px] flex items-center p-2'><span>Mood!</span></div>
              </div>
              <div className='relative w-full bg-blue-200 h-[250px] rounded-md p-4'>
                <span className='md:text-xl sm:text-lg text-base font-bold my-2'>Title</span>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo nulla exercitationem error at aliquid.
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo nulla exercitationem error at aliquid.
                </p>
                <button
                  className="absolute bottom-3 right-3 text-red-300 hover:text-red-500 text-xl cursor-pointer"
                >
                  <FaTrashAlt />
                </button>
                <button
                  className="absolute bottom-3 right-10 text-green-500 cursor-pointer text-xl"
                >
                  <MdModeEdit />
                </button>
              </div>
          </div>

          <div className="p-2 m-1 justify-center">
              <div className='h-[50px]  flex items-center gap-3 mb-1 font-bold'>
                <div className='bg-green-200 h-full rounded-md w-[100px] flex items-center p-2'><span>15/06/2024</span></div>
                <div className='bg-pink-200 h-full rounded-md w-[100px] flex items-center p-2'><span>Mood!</span></div>
              </div>
              <div className='relative w-full bg-blue-200 h-[250px] rounded-md p-4'>
                <span className='md:text-xl sm:text-lg text-base font-bold my-2'>Title</span>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo nulla exercitationem error at aliquid.
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo nulla exercitationem error at aliquid.
                </p>
                <button
                  className="absolute bottom-3 right-3 text-red-300 hover:text-red-500 text-xl cursor-pointer"
                >
                  <FaTrashAlt />
                </button>
                <button
                  className="absolute bottom-3 right-10 text-green-500 cursor-pointer text-xl"
                >
                  <MdModeEdit />
                </button>
              </div>
          </div>

        <div className="p-2 m-1 justify-center">
          <div className='h-[50px] flex items-center gap-3 mb-1 font-bold'>
            <div className='bg-green-200 h-full rounded-md w-[100px] flex items-center p-2'><span>15/06/2024</span> </div>
            <div className='bg-pink-200 h-full rounded-md w-[100px] flex items-center p-2'><span>Mood!</span></div>
          </div>
          <div className='relative w-full bg-blue-200 h-[250px] rounded-md p-4'>
            <span className='md:text-xl sm:text-lg text-base font-bold my-2'>Title</span>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo nulla exercitationem error at aliquid.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo nulla exercitationem error at aliquid.
            </p>
            <button
              className="absolute bottom-3 right-3 text-red-300 hover:text-red-500 text-xl cursor-pointer"
            >
              <FaTrashAlt />
            </button>
            <button
              className="absolute bottom-3 right-10 text-green-500 cursor-pointer text-xl"
            >
              <MdModeEdit />
            </button>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Page
