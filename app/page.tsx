import Footer from "./components/Footer";
import Header from "./components/Header";
import ServicesDiv from "./components/ServicesDiv";


export default function Home() {
  return (
    <main>

       <Header />
       
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




       {/* the cognitive div */}
       <div className="cognitive-div h-96 w-full bg-slate-50 p-4 mt-2 gap-2 ">
          {/* <div className="flex grid-cols-3 items-center justify-center gap-12 p-14">
            <div className="one text-xs text-center">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, iure ad necessitatibus voluptate 
                facere doloremque aut? Corrupti ullam voluptate, fugit odio earum quasi sapiente 
                cupiditate dolor culpa ducimus aliquam quaerat ratione aliquid pariatur odit! Laborum odio 
                dolore expedita nisi voluptates?</p>
            </div>
            <div className="ml-24">
                <h1 className="font-semibold text-2xl mb-5 text-center">Feel better today, <br />
                      Stay ready for tomorrow</h1>
                <div className="h-56 w-56 bg-slate-900 rounded-t-full">

                </div>
            </div>
            <div className="">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, iure ad necessitatibus voluptate 
                facere doloremque aut? Corrupti ullam voluptate, fugit odio earum quasi sapiente 
                cupiditate dolor culpa ducimus aliquam quaerat ratione aliquid pariatur odit! Laborum odio 
                dolore expedita nisi voluptates?</p>
            </div>
          </div> */}

            {/* what we do */}
          <div className="w-full flex flex-col items-center justify-center">
                  <button className="rounded-3xl bg-gray-950 text-white text-xs h-10 w-24 mb-10">what we do</button>
                  <h1 className="font-semibold text-2xl mb-5 text-center">Common Wellbeing <br />
                  concerns we Address</h1>            
 
          </div>       

          {/* containers */}
          <div className="grid grid-cols-3 gap-8">
              <div className="relative">
                  <div className="box bg-white w-82 h-90 p-10 shadow-lg rounded-md">
                      <img src="https://www.lotusmedicalcentre.com.au/wp-content/uploads/2023/09/Depositphotos_97113336_S.jpg" alt="Image" className="object-center object-cover h-full w-full" />
                      <div className="absolute bottom-6 left-6 w-38 h-16 rounded-lg bg-white font-semibold text-sm p-5">Depression</div>
                      <div className="absolute top-6 right-6 w-14 h-12 rounded-lg bg-white">
                          <div className="w-9 h-9 bg-black rounded-full ml-2"></div>
                      </div>
                  </div>
              </div>
              <div className="relative">
                  <div className="box bg-white w-82 p-10 shadow-lg rounded-md">
                      <img src="https://thetherapycentre.ca/wp-content/uploads/2022/05/anger-management-therapy-toronto-oakville-hamilton-virtual-therapy-centre-1024x576.png" alt="Image" className="object-center object-cover h-full w-full" />
                      <div className="absolute bottom-6 left-6 w-38 h-16 rounded-lg bg-white font-semibold text-sm p-5">Anger issues</div>
                      <div className="absolute top-6 right-6 w-14 h-12 rounded-lg bg-white">
                          <div className="w-9 h-9 bg-black rounded-full ml-2"></div>
                      </div>
                  </div>
              </div>
              <div className="relative">
                  <div className="box bg-white w-82 p-10 shadow-lg rounded-md">
                      <img src="https://pennstatehealthnews.org/wp-content/uploads/2023/03/Anxiety_1200.jpg" alt="Image" className="object-center object-cover h-full w-full" />
                      <div className="absolute bottom-6 left-6 w-38 h-16 rounded-lg bg-white font-semibold text-sm p-5">Anxiety issues</div>
                      <div className="absolute top-6 right-6 w-14 h-12 rounded-lg bg-white">
                          <div className="w-9 h-9 bg-black rounded-full ml-2"></div>
                      </div>
                  </div>
              </div>
          </div>
      </div>


       {/* a div on how site works */}
       <div className="h-96 w-full bg-pink-100 rounded-md mt-2">
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


  


       {/* a div on how site works */}
       <div className="h-96 w-full bg-slate-50 rounded-md mt-2">
            <div className="flex grid-cols-2 text-sm p-2 ">
              <div className=" h-full w-1/2 p-7 ">
                  <h1 className="font-semibold text-2xl mb-6">Ready to embark on the <br />
                   Journey of Wellness?</h1>
                  <p className="text-sm font-normal w-3/5 mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem maxime hic 
                    molestiae odio pariatur praesentium accusamus, delectus voluptates nesciunt reprehenderit 
                    consequatur doloremque corporis ipsum ipsam ab vero, alias totam sed?</p>
                {/* button for accessing services */}
                <button className="rounded-3xl bg-gray-950 text-white text-xs h-10 w-24 mt-16"> Services</button>

              </div>

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

            </div>
       </div>


       {/* footer */}
       <Footer />
       

    </main>
  )
}
