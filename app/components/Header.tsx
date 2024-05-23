import React from 'react'
import Link from "next/link";

const Header = () => {
  return (
    <>
       {/* the header */}
       <div className="header w-full bg-blue-800 rounded-md">
            <div className="navbar font-normal text-white text-sm p-8 flex justify-center">
              <ul className="flex items-center gap-4 ">
                <li> <Link href="./about">About Us</Link> </li>
                <li><Link href="./services">Services</Link> </li>
                <li>Blog</li>
                <li>Contact Us</li>
                <li>Counseling</li>
                <li className="ml-auto">Get Started</li>
              </ul>
            </div>
       </div>
      
    </>
  )
}

export default Header
