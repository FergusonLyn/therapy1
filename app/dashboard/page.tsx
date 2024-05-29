import React from 'react';
import 'react-widgets/styles.css';
import DashboardHeader from '../components/DashboardHeader';
import CalendarWidget from '../components/CalendarWidget';
import TimeWidget from '../components/TimeWidget';
import { IoIosArrowForward } from "react-icons/io";
import { MdPersonAddAlt1 } from "react-icons/md";

const Page = () => {

    const glassmorphicStyle = {
        background: 'rgba(148, 163, 184, 0.1)', // bg-slate-200 color with opacity
        borderRadius: '16px',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        padding: '20px',
    };

    return (
        <div>
            <DashboardHeader />

            <div className="w-full rounded-md mt-5 p-4 md:p-8 md:mt-10 md:h-[1100px]">
                <div className="flex flex-col md:flex-row text-sm h-full gap-4 p-4">
                    {/* Grid one */}
                    <div className="colOne h-full w-1/3 p-4" style={glassmorphicStyle}>
                        <h3 className="text-black text-lg flex justify-between items-center mb-4 font-bold">Choose a Counselor</h3>
                        {/* the counselors containers */}
                        <div className="bg-white p-10 shadow-lg rounded-md md:h-[270px] mt-4 grid grid-cols-2">
                            <div className="h-20 w-20 bg-gray-950">
                                <img src="" alt="" />
                            </div>
                            <div>
                                <h1 className="font-semibold text-sm mb-2">Counselor's name</h1>
                                <p className="font-normal text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat veniam soluta delectus quae. Ratione, rerum.</p>
                            </div>
                        </div>
                        <div className="bg-white p-10 shadow-lg rounded-md md:h-[270px] mt-4 grid grid-cols-2">
                            <div className="h-20 w-20 bg-gray-950">
                                <img src="" alt="" />
                            </div>
                            <div>
                                <h1 className="font-semibold text-sm mb-2">Counselor's name</h1>
                                <p className="font-normal text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat veniam soluta delectus quae. Ratione, rerum.</p>
                            </div>
                        </div>
                        <div className="bg-white p-10 shadow-lg rounded-md md:h-[270px] mt-4 grid grid-cols-2">
                            <div className="h-20 w-20 bg-gray-950">
                                <img src="" alt="" />
                            </div>
                            <div>
                                <h1 className="font-semibold text-sm mb-2">Counselor's name</h1>
                                <p className="font-normal text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat veniam soluta delectus quae. Ratione, rerum.</p>
                            </div>
                        </div>
                        <div className="text-right mt-6 cursor-pointer text-blue-600">More</div>
                    </div>

                    {/* Grid two */}
                    <div className="colTwo h-full w-2/3 p-2">
                        <div className="p-5 rounded-md md:h-1/3 mt-4" style={glassmorphicStyle}>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {["Depression", "Anxiety", "Substance Abuse", "Anger", "Self Confidence", "Grief and Loss", "Relationships", "Stress Management"].map((treatment, index) => (
                                    <div key={index} className="bg-white text-black p-4 rounded-md text-center font-semibold text-sm">
                                        {treatment}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className='p-5 rounded-md md:h-1/2 mt-4' style={glassmorphicStyle}>
                            <h3 className="text-black text-lg flex justify-between items-center mb-4 font-bold">Book Appointment</h3>
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
        </div>
    );
};

export default Page;
