"use client";
import React, { useEffect, useState } from "react";
import "react-widgets/styles.css";
import Link from "next/link";
import Image from "next/image";
import DashboardHeader from "../components/DashboardHeader";
import CalendarWidget from "../components/CalendarWidget";
import TimeWidget from "../components/TimeWidget";
import { Loader } from "../components/Loader";
import Chatbot from "../components/Chatbot";

const Page = () => {
  const [loading, setLoading] = useState(true);
  const glassmorphicStyle = {
    background: "rgba(227, 242, 253, 1)", // bg-[#E3F2FD] color with opacity
    borderRadius: "16px",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    padding: "20px",
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {/* {loading ? (
        <Loader />
      ) : ( */}
      <div className="">
        <DashboardHeader />

        <div className="w-full rounded-md mt-5 p-4 md:p-8 md:mt-10 md:h-[1100px]">
          <div className="flex flex-col md:flex-row text-sm h-full gap-4 p-4">
            {/* Grid one */}
            <div className="colOne h-full w-1/3 rounded-md bg-white border-2 p-4 border-gray-200 shadow-sm m-3" >
              <h3 className="text-black text-lg flex justify-between items-center mb-4 font-bold">
                Choose a Counselor
              </h3>
              {/* the counselors containers */}
              <div className="bg-white p-10 shadow-lg rounded-md md:h-[270px] mt-4 grid grid-cols-2 gap-4">
                <div className="h-auto w-auto flex rounded-md items-center justify-center">
                  <Image
                    src="/Victoria.jpg"
                    alt="counsellor's profile"
                    className="w-full h-full object-cover rounded-md"
                    width={240} // Set the desired width
                    height={240} // Set the desired height
                  />
                </div>
                <div>
                  <h1 className="font-semibold text-sm mb-2">
                    Mrs. Victoria De-Graft Adjei
                  </h1>
                  <p className="font-normal text-xs">
                    Mrs. De-Graft Adjei is passionate about the psychosocial
                    development of the youth and has also been involved in the
                    training of some members of the university community ...
                  </p>
                </div>
              </div>
              <div className="bg-white p-10 shadow-lg rounded-md md:h-[270px] mt-4 grid grid-cols-2 gap-4">
                <div className="h-auto w-auto flex rounded-md items-center justify-center">
                  <Image
                    src="/Stephen.jpg"
                    alt="counsellor's profile"
                    className="w-full h-full object-cover rounded-md"
                    width={240} // Set the desired width
                    height={240} // Set the desired height
                  />
                </div>
                <div>
                  <h1 className="font-semibold text-sm mb-2">
                    Mr. Stephen Ofori
                  </h1>
                  <p className="font-normal text-xs">
                    Offers comprehensive support for students, helping them
                    navigate through relationship issues, anxiety, and
                    depression ...
                  </p>
                </div>
              </div>
              <div className="bg-white p-10 shadow-lg rounded-md md:h-[270px] mt-4 grid grid-cols-2 gap-4">
                <div className="h-auto w-auto rounded-md flex items-center justify-center">
                  <Image
                    src="/Cosmos.jpg"
                    alt="counsellor's profile"
                    className="w-full h-full object-cover rounded-md"
                    width={240} // Set the desired width
                    height={240} // Set the desired height
                  />
                </div>
                <div>
                  <h1 className="font-semibold text-sm mb-2">
                    Mr. Cosmos Osei Okyere
                  </h1>
                  <p className="font-normal text-xs">
                    Offers comprehensive support for students, helping them
                    navigate through relationship issues, substance abuse, and
                    anxiety. ...
                  </p>
                </div>
              </div>
              <div className="text-right mt-6 cursor-pointer text-blue-600">
                <Link href="./dashboard/counsellors">More</Link>
              </div>
            </div>

            {/* Grid two */}
            <div className="colTwo h-full w-2/3 p-2">
                  <div className="rounded-md bg-white border-2 border-gray-200 shadow-sm m-3 p-4 h-[350px]">
                    <div className="flex flex-row">
                        <h1 className="font-semibold text-lg m-2">Your Appointments</h1>
                        <span className="ml-auto m-2 text-gray-500 cursor-pointer hover:text-blue-700">
                          See All
                        </span>
                    </div>
                    <hr />

                
            
            </div>


            <div
                className="rounded-md bg-white border-2 p-4 border-gray-200 shadow-sm m-3"
               
              >
                <h3 className="text-black text-lg flex justify-between items-center mb-4 font-bold">
                  Book Appointment
                </h3>
                <div className="grid grid-rows md:grid-cols-2">
                  <div className="">
                    <TimeWidget />
                  </div>
                  <div className="">
                    <CalendarWidget />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
           <Chatbot />
          </div>
      </div>
      {/* )} */}
    </>
  );
};

export default Page;
