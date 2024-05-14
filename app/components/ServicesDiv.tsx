import React from 'react'

const ServicesDiv = () => {
  return (
    <>
     
        <div className="h-96 w-full bg-pink-200 rounded-md mt-2">
            <div className="flex grid-cols-2 text-sm p-8 ">
              <div className=" h-full w-3/4 p-7 ">
                  {/* button for accessing services */}
                  <button className="rounded-3xl bg-gray-950 text-white text-xs h-10 w-24 mb-16"> Services</button>

                  <h1 className="font-semibold text-2xl mb-4">Your Student Wellbeing Services <br />
                   for a Healthy Campus Life</h1>
                  <p className="text-sm font-normal w-3/5 mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem maxime hic 
                    molestiae odio pariatur praesentium accusamus, delectus voluptates nesciunt reprehenderit 
                    consequatur doloremque corporis ipsum ipsam ab vero, alias totam sed?</p>

                </div>
                <div>

                </div>
            </div>
       </div>
      
    </>
  )
}

export default ServicesDiv
