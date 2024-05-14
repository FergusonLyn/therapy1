import React from 'react'
import Header from '../components/Header'
import ServicesDiv from '../components/ServicesDiv'
import Footer from '../components/Footer'


const AboutUS = () => {
  return (
    <main>
        <Header />
 
        <div className="text-center mt-2 p-6">
          <h1 className='text-blue-600 text-2xl leading-10'>Empowering you with our <span className='bg-blue-800 text-white p-4 h-10 w-16 rounded-md'>therapists</span> <br />
             through mental health awareness
          </h1>
          <p className='text-sm mt-2'>We are on a mission to provide comprehensive emotinal well-being support. Our passionate <br />
            team of professionals is dedicated to fostering post well-being and mental health
          </p>

        </div>

        <ServicesDiv />

        {/* the next div */}
       <div className="div-first flex h-96 w-full bg-slate-50 grid-cols-2 p-4 mt-2 gap-2">
          <div className="rounded-md h-full w-1/3">
            <img 
              src="https://img.freepik.com/premium-photo/multi-ethnic-group-people-dressed-casual-wear-laughing-cheerfully-while-chatting-office_236854-26597.jpg" 
              alt="" 
              className="h-full rounded-md"/>
          </div>
          <div className=" h-full w-3/4 p-7 ">
              <h1 className="font-semibold text-2xl mb-4">You Deserve to be <br />
               Happy and Well</h1>
              <p className="text-sm font-normal w-3/5 mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem maxime hic 
                molestiae odio pariatur praesentium accusamus, delectus voluptates nesciunt reprehenderit 
                consequatur doloremque corporis ipsum ipsam ab vero, alias totam sed?</p>

              {/* button for signing in */}
              <button className="rounded-3xl bg-gray-950 text-white text-sm h-11 w-36 mb-5"> Get Started</button>

              {/* grid section about key traits of the website */}
              <div className="flex grid-cols-3 gap-7">
                  <div className="bg-white w-60 h-48 p-5 shadow-lg">
                      <div className="rounded-full h-9 w-9 bg-gray-950"></div>
                      <h1 className="font-semibold text-sm w-3/4">Confidentiality</h1>
                      <p className="font-normal text-xs w-3/4">Your privacy is sacred. we maintain the highest level of confidentiality</p>
                  </div>
                  <div className="bg-white w-60 h-48 p-5 shadow-lg">
                      <div className="rounded-full h-9 w-9 bg-gray-950"></div>
                      <h1 className="font-semibold text-sm w-3/4">Accessibility</h1>
                      <p className="font-normal text-xs w-3/4">Your privacy is sacred. we maintain the highest level of confidentiality</p>
                  </div>
                  <div className="bg-white w-60 h-48 p-5 shadow-lg">
                      <div className="rounded-full h-9 w-9 bg-gray-950"></div>
                      <h1 className="font-semibold text-sm w-3/4">Community</h1>
                      <p className="font-normal text-xs w-3/4">Your privacy is sacred. we maintain the highest level of confidentiality</p>
                  </div>
              </div>
          </div>       
       </div>


      
        {/* Teams Div */}
        <div className='team w-full bg-slate-50 p-4 mt-2 gap-2 '>
            <div className="w-full flex flex-col items-center justify-center">
                    <button className="rounded-3xl bg-gray-950 text-white text-xs h-10 w-24 mb-10">Teams</button>
                    <h1 className="font-semibold text-2xl mb-5 text-center">Meet Our <br />
                    Dedicated Team</h1>            
  
            </div>       

            {/* containers */}
            <div className="grid grid-cols-3 gap-8">
                <div className="teams-profile">
                    <div className="bg-white w-82 h-72 p-10 shadow-lg rounded-md">
                      <div className='h-4/5'>
                        <img src="https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3BsYXlcLzBiN2Y0ZTliLWY1OWMtNDAyNC05ZjA2LWIzZGMxMjg1MGFiNy0xOTIwLTEwODAuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4Mjh9fX0=" alt="Image" className="object-center object-cover h-full w-full" />
                      </div>
                      <div className='p-4 text-center'>
                        <h1 className='font-semibold text-2xl'>Dr. Emily Parker</h1>
                        <h2 className='text-xs'>Software Developer</h2>
                      </div>
                    </div>
                </div>
                <div className="teams-profile">
                    <div className="bg-white w-82 h-72 p-10 shadow-lg rounded-md">
                      <div className='h-4/5'>
                      <img src="https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3BsYXlcLzBiN2Y0ZTliLWY1OWMtNDAyNC05ZjA2LWIzZGMxMjg1MGFiNy0xOTIwLTEwODAuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4Mjh9fX0=" alt="Image" className="object-center object-cover h-full w-full" />
                      </div>
                      <div className='p-4 text-center'>
                        <h1 className='font-semibold text-2xl'>Dr. Emily Parker</h1>
                        <h2 className='text-xs'>Software Developer</h2>
                      </div>
                    </div>
                </div>
                <div className="teams-profile">
                    <div className="bg-white w-82 h-72 p-10 shadow-lg rounded-md">
                      <div className='h-4/5'>
                      <img src="https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3BsYXlcLzBiN2Y0ZTliLWY1OWMtNDAyNC05ZjA2LWIzZGMxMjg1MGFiNy0xOTIwLTEwODAuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4Mjh9fX0=" alt="Image" className="object-center object-cover h-full w-full" />
                      </div>
                      <div className='p-4 text-center'>
                        <h1 className='font-semibold text-2xl'>Dr. Emily Parker</h1>
                        <h2 className='text-xs'>Software Developer</h2>
                      </div>
                    </div>
                </div>
                
            </div>
        </div>


        {/* a div on how site works */}
       <div className="h-96 w-full bg-slate-50 rounded-md mt-2">
            <div className="flex grid-cols-2 text-sm p-2 ">
              <div className="grid grid-rows-2 w-1/2 ">
                  <div className="bg-gray-300 h-64 m-2">
                      
                  </div>
                  <div className="grid grid-cols-2  gap-6">
                      <div className="flex items-center justify-center bg-gray-200 m-2 h-20">
                          
                          Text 1
                      </div>
                      <div className="flex items-center justify-center bg-gray-200 m-2 h-20">
                          
                          Text 2
                      </div>
                  </div>
              </div>

              <div className=" h-full w-1/2 p-7 ">
                  <h1 className="font-semibold text-2xl mb-6">Ready to embark on the <br />
                   Journey of Wellness?</h1>
                  <p className="text-sm font-normal w-3/5 mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem maxime hic 
                    molestiae odio pariatur praesentium accusamus, delectus voluptates nesciunt reprehenderit 
                    consequatur doloremque corporis ipsum ipsam ab vero, alias totam sed?</p>
                {/* button for accessing services */}
                <button className="rounded-3xl bg-gray-950 text-white text-xs h-10 w-24 mt-16"> XXXXXXXX</button>

              </div>

            </div>
       </div>


       {/* Footer */}
       <Footer />

   
      
    </main>
  )
}

export default AboutUS
