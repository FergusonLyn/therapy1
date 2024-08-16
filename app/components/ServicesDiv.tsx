import React from 'react'

const ServicesDiv = () => {
  return (
    <div className="bg-slate-50 rounded-md mt-2 p-4">
        <div className="flex flex-col md:flex-row text-sm p-8">
          <div className="h-full w-full md:w-3/4 p-7 flex flex-col justify-center">
            <button className="rounded-3xl bg-blue-800 text-white text-xs h-10 w-24 mb-16">
              Services
            </button>
            <h1 className="font-semibold text-2xl mb-4">
              Your Student Wellbeing Services <br /> for a Healthy Campus Life
            </h1>
            <p className="text-sm font-normal mb-4">
            Our platform offers a comprehensive suite of services tailored to your needs. 
            From one-on-one counseling sessions and wellness workshops to an AI companion ready to chat 24/7, 
            we&apos;re here to ensure your university experience is fulfilling and stress-free.
            </p>
          </div>
          <div className="hidden md:block w-1/4"></div>
        </div>
      </div>
  )
}

export default ServicesDiv
