import React from 'react'
import Image from "next/image";
import Header from '../components/Header'
import ServicesDiv from '../components/ServicesDiv'
import Footer from '../components/Footer'

const teamMembers = [
  {
    name: 'Dr. Linda Banning',
    position: 'Project Supervisor',
    imageUrl: '/dev.webp'
  },
  {
    name: 'Grace Yankey',
    position: 'Software Developer',
    imageUrl: '/dev.webp'
  },
  {
    name: 'Ferguson Tetteh',
    position: 'Software Developer',
    imageUrl: '/dev.webp'
  }
];

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
          {teamMembers.map((member, idx) => (
            <div key={idx} className="teams-profile">
              <div className="bg-white p-4 md:p-10 shadow-lg rounded-md">
                <div className='h-56 md:h-64'>
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    className='w-full h-full object-cover rounded-md'
                    objectFit="cover"
                    objectPosition="center"
                    width={300} // Set the desired width
                    height={300} // Set the desired height
                  />
                </div>
                <div className='p-4 text-center'>
                  <h1 className='font-semibold text-lg md:text-2xl'>{member.name}</h1>
                  <h2 className='text-xs md:text-sm'>{member.position}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* A div on how the site works */}
      <div className="w-full bg-slate-50 rounded-md mt-2 p-4">
        <div className="flex flex-col md:flex-row text-sm p-4">
          <div className="grid grid-rows-2 w-full md:w-1/2 p-2 mt-5">
              <div className="bg-gray-300 h-48 md:h-64 m-2 overflow-hidden">
                  <Image
                    src="/serviceTherapy.jpg"
                    alt="Description of the image"
                    layout="intrinsic" // Maintain the image aspect ratio
                    width={650} // Set a fixed width
                    height={400} // Set a fixed height
                    className="rounded-md"
                  />
              </div>
              <div className="grid grid-cols-2 gap-2 md:gap-6">
                <div className="flex items-center justify-center bg-gray-950 m-2 h-20">
                <p className="font-semibold text-md text-white ">Expert Counselors</p>
                </div>
                <div className="flex items-center justify-center bg-gray-950 m-2 h-20">
                <p className="font-semibold text-md text-white">24/7 AI Support</p>
                </div>
              </div>
            </div>

            <div className="h-full w-full md:w-1/2 p-7 mt-5">
                <h1 className="font-semibold text-2xl mb-6">
                  Ready to embark on the <br /> Journey of Wellness?
                </h1>
                <p className="text-sm font-normal mb-4">
                Discover a world where your mental and emotional well-being are our top priority. 
                Our AI-powered platform, combined with professional counseling and enriching resources, 
                ensures you have the support you need every step of the way. Join us in creating a healthier, 
                happier you.
                </p>
                <button className="rounded-3xl bg-blue-800 text-white text-xs h-10 w-24 mt-4 md:mt-16">
                  Services
                </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  )
}

export default AboutUS
