import React from 'react'
import Link from "next/link";

const Footer = () => {
  return (
    <>
            <div className='max-w-[1520px] m-auto px-4 py-2 bg-gray-950'>
              <div className='py-16 px-4 grid lg:grid-cols-3 gap-4 text-gray-300'>
                <div>
                  <p>
                  Explore the Path to Wellness with Us. We are dedicated to enhancing your mental health and well-being 
                  through our comprehensive services and resources. Join us on this journey to a happier, healthier you.
                  </p>
                </div>
                <div className='lg:col-span-2 flex justify-between'>
                  <div>
                    <ul>
                      <li className="py-2 text-sm">
                        <Link href="./about">About Us</Link>
                      </li>
                      <li className="py-2 text-sm">
                        <Link href="./services">Services</Link>
                      </li>
                      <li className="py-2 text-sm">
                        <Link href="./contact">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li className='py-2 text-sm'>FAQ</li>
                      <li className='py-2 text-sm'>Support </li>
                      <li className='py-2 text-sm'>User policy</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li className='py-2 text-sm'>Phone</li>
                      <li className='py-2 text-sm'>Email</li>
                      <li className='py-2 text-sm'>Ghana, Kumasi</li>
                    </ul>
                  </div>
                </div>
              </div> 
        </div>
      
    </>
  )
}

export default Footer
