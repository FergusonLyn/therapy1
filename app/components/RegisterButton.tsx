"use client"; 
import React, { useState } from 'react';
import { CiLogin } from "react-icons/ci";
import { MdPersonAddAlt1 } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { FaRegMessage } from "react-icons/fa6";
import Link from 'next/link';

const RegisterButton = () => {
    const [showRegister, setShowRegister] = useState(false);
  return (
    <div>
        
     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        {!showRegister && (
          <>
            
            <button
              className="flex items-center justify-center bg-blue-800 text-white w-[200px] h-[60px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 hover:bg-blue-700"
              onClick={() => setShowRegister(true)}
            >
              <MdPersonAddAlt1 className="mr-2" size={24} />
              Register
            </button>
            <Link href="./gettingstarted/login"
              className="flex items-center justify-center bg-blue-800 text-white w-[200px] h-[60px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 hover:bg-blue-700"
            >
              <CiLogin className="mr-2" size={24} />
              Log In
            </Link>
          </>
        )}
        {showRegister && (

            <div className="p-4 md:col-span-1">
                <h2 className="text-2xl font-semibold mb-6 text-center">Register</h2>
                <div className="grid gap-4">
                <Link href="./gettingstarted/registerStudent" className="flex items-center justify-center border-blue-600 border-2 bg-white rounded-md text-black p-4  hover:cursor-pointer hover:shadow-md  md:w-[400px]">
                    <div className="p-2 mr-4">
                    <IoIosSearch size={36} className="text-blue-600" />
                    </div>
                    <span className="font-semibold text-sm">I'm looking for mental <br /> health support (Student)</span>
                </Link>
                <Link href="./gettingstarted/registerCounsellor" className="flex items-center justify-center border-blue-600 border-2 bg-white rounded-md text-black p-4  hover:cursor-pointer hover:shadow-md md:w-[400px]">
                    <div className=" p-2 mr-4">
                    <FaRegMessage size={36} className="text-blue-600" />
                    </div>
                    <span className="font-semibold text-sm ">I provide mental health <br /> support (Counselor)</span>
                </Link>
                </div>
            </div>

        )}
      </div>
    </div>
  )
}

export default RegisterButton
