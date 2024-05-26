import React from 'react'
import Header from '../components/Header'
import ServicesDiv from '../components/ServicesDiv'
import Footer from '../components/Footer'

const AboutUS = () => {
  return (
    <main>
      <Header />

      <div className="text-center mt-2 p-6">
      <h1 className='text-blue-600 text-2xl md:text-3xl leading-10 md:leading-relaxed'>
          Empowering you with our <span className='bg-blue-800 text-white p-2 md:p-4 rounded-md'>therapists</span> <br />
          through mental health awareness
      </h1>
        <p className='text-sm mt-2'>
          We are on a mission to provide comprehensive emotional well-being support. Our passionate <br className="hidden md:block" />
          team of professionals is dedicated to fostering positive well-being and mental health.
        </p>
      </div>

      <ServicesDiv />

      {/* Teams Div */}
      <div className='team w-full bg-slate-50 p-4 mt-2 gap-2'>
        <div className="w-full flex flex-col items-center justify-center">
          <button className="rounded-3xl bg-gray-950 text-white text-xs h-10 w-24 mb-10">Teams</button>
          <h1 className="font-semibold text-2xl mb-5 text-center">
            Meet Our <br /> Dedicated Team
          </h1>
        </div>

        {/* Team profiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((_, idx) => (
            <div key={idx} className="teams-profile">
              <div className="bg-white p-4 md:p-10 shadow-lg rounded-md">
                <div className='h-56 md:h-64'>
                  <img src="https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3BsYXlcLzBiN2Y0ZTliLWY1OWMtNDAyNC05ZjA2LWIzZGMxMjg1MGFiNy0xOTIwLTEwODAuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4Mjh9fX0=" alt="Image" className="object-center object-cover h-full w-full rounded-t-md" />
                </div>
                <div className='p-4 text-center'>
                  <h1 className='font-semibold text-lg md:text-2xl'>Dr. Emily Parker</h1>
                  <h2 className='text-xs md:text-sm'>Software Developer</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* A div on how the site works */}
      <div className="w-full bg-slate-50 rounded-md mt-2 p-4">
        <div className="flex flex-col md:flex-row text-sm">
          <div className="grid grid-rows-2 w-full md:w-1/2 p-2">
            <div className="bg-gray-300 h-48 md:h-64 m-2">
              {/* Placeholder for an image or content */}
            </div>
            <div className="grid grid-cols-2 gap-2 md:gap-6">
              <div className="flex items-center justify-center bg-gray-200 m-2 h-20">
                Text 1
              </div>
              <div className="flex items-center justify-center bg-gray-200 m-2 h-20">
                Text 2
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 p-7 flex flex-col justify-center">
            <h1 className="font-semibold text-2xl mb-6">Ready to embark on the <br /> Journey of Wellness?</h1>
            <p className="text-sm font-normal mb-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem maxime hic
              molestiae odio pariatur praesentium accusamus, delectus voluptates nesciunt reprehenderit
              consequatur doloremque corporis ipsum ipsam ab vero, alias totam sed?
            </p>
            <button className="rounded-3xl bg-gray-950 text-white text-xs h-10 w-24 mt-4 md:mt-16">Services</button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  )
}

export default AboutUS
