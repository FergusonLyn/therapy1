import React from 'react'

const ServicesDiv = () => {
  return (
    <div className="w-full bg-pink-200 rounded-md mt-2 p-4 md:p-8">
      <div className="flex flex-col md:flex-row text-sm">
        <div className="w-full md:w-3/4 p-4 md:p-7">
          {/* Button for accessing services */}
          <button className="rounded-3xl bg-gray-950 text-white text-xs h-10 w-24 mb-6 md:mb-16">Services</button>

          <h1 className="font-semibold text-xl md:text-2xl mb-4">
            Your Student Wellbeing Services <br />
            for a Healthy Campus Life
          </h1>
          <p className="text-sm font-normal mb-4 md:w-3/5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem maxime hic 
            molestiae odio pariatur praesentium accusamus, delectus voluptates nesciunt reprehenderit 
            consequatur doloremque corporis ipsum ipsam ab vero, alias totam sed?
          </p>
        </div>
        <div className="w-full md:w-1/4">
          {/* Placeholder for additional content or image */}
        </div>
      </div>
    </div>
  )
}

export default ServicesDiv
