"use client";
import React, { useContext, useEffect, useState } from "react";
import "react-widgets/styles.css";
import Link from "next/link";
import Image from "next/image";
import DashboardHeader from "../components/DashboardHeader";
import CalendarWidget from "../components/CalendarWidget";
import TimeWidget from "../components/TimeWidget";
import { Loader } from "../components/Loader";
import Chatbot from "../components/Chatbot";
import { CounsellorContext } from "../contexts/counsellorContext";

const Page = () => {
  const [loading, setLoading] = useState(true);
  const [getQuote, setGetQuote] = useState<any>({});

  useEffect(() => {
    const fetchRandomQuote = async () => {
      const response = await fetch("https://type.fit/api/quotes");
      const quotes = await response.json();
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const randomQuote = quotes[randomIndex];
      setGetQuote(randomQuote);
      setLoading(false);
    };
    setLoading(true);
    fetchRandomQuote();
  }, []);

  const glassmorphicStyle = {
    background: "rgba(227, 242, 253, 1)",
    borderRadius: "16px",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    padding: "20px",
  };

  const { counsellors } = useContext(CounsellorContext);

  return (
    <>
      <div className="">
        <DashboardHeader />

        <div className="w-full rounded-md mt-5 p-4 md:p-8 md:mt-10 md:h-[1100px]">
          <div className="flex flex-col md:flex-row text-sm h-full gap-4 p-4">
            {/* Grid one */}
            <div className="colOne w-1/3 rounded-md bg-white border-2 p-4 border-gray-200 shadow-sm m-3">
              <h3 className="text-black text-lg flex justify-between items-center mb-4 font-bold">
                Your Counselors
              </h3>
              {counsellors.map((counsellor) => {
                return (
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
                        {counsellor.data.name}
                      </h1>
                      <p className="font-normal text-xs">
                        {counsellor.data.about}
                      </p>
                    </div>
                  </div>
                );
              })}

              <div className="text-right mt-6 cursor-pointer text-blue-600">
                <Link href="./dashboard/counsellors">More</Link>
              </div>
            </div>

            {/* Grid two */}
            <div className="colTwo h-full w-2/3 p-2">
              <div className="rounded-md bg-white border-2 border-gray-200 shadow-sm m-3 p-4 h-[350px]">
                <div className="flex flex-row">
                  <h1 className="font-semibold text-lg m-2">
                    Your Appointments
                  </h1>
                  <span className="ml-auto m-2 text-gray-500 cursor-pointer hover:text-blue-700">
                    See All
                  </span>
                </div>
                <hr />
              </div>

              <div className="rounded-md bg-white border-2 p-4 border-gray-200 shadow-sm m-3">
                <div className="flex justify-center items-center">
                  <div className="quote">
                    <h1 className="font-semibold text-xl">
                      "{getQuote.text}"<br />
                      <span className="text-lg text-center">
                        Author:{getQuote.author}
                      </span>
                    </h1>
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
    </>
  );
};

export default Page;
