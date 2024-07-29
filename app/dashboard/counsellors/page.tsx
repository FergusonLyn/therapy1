"use client";
import React, { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { BsChatRightDotsFill } from "react-icons/bs";
import { RiContactsBook3Fill } from "react-icons/ri";
import { IoCall } from "react-icons/io5";
import Image from "next/image";
import DashboardHeader from "@/app/components/DashboardHeader";
import Link from "next/link";
import { CounsellorContext } from "@/app/contexts/counsellorContext";

interface Counsellor {
  id: string;
  data: {
    name: string;
    title: string;
    image: string;
    about: string;
    therapy: string[];
    specials: string[];
  };
}

interface InfoCardProps {
  counsellor: Counsellor;
}

const InfoCard = ({ counsellor }: InfoCardProps) => (
  <div className="w-full md:w-2/3 shadow-lg h-auto m-4 flex rounded-md bg-white border-2 border-gray-200">
    <div className="flex-1 p-4">
      <div className="bg-blue-500 rounded-full w-36 h-36 mb-6 flex items-center justify-center text-white">
        <Image
          src=""
          alt="image"
          className="w-full md:w-[550px] mx-auto my-4 object-fill"
          width={550}
          height={412}
        />
      </div>
      <div className="flex gap-4 items-center m-4">
        <RiContactsBook3Fill className="text-blue-500 w-6 h-6 cursor-pointer" />
        <a href="tel:+233256778060">
          <IoCall className="text-blue-500 w-5 h-5 cursor-pointer" />
        </a>
        <BsChatRightDotsFill className="text-blue-500 w-5 h-5 cursor-pointer" />
      </div>
      <div>
        <Link
          href="./appointment"
          className="border-2 border-blue-500 w-auto flex justify-center items-center rounded-md m-2 font-semibold cursor-pointer"
        >
          Appointment
        </Link>
      </div>
    </div>
    <div className="flex-2 p-4">
      <h2 className="font-bold text-xl mb-2">{counsellor.data.name}</h2>
      <h2 className="font-semibold text-base text-gray-500 my-2">
        {counsellor.data.title}
      </h2>
      <p className="my-2">{counsellor.data.about}</p>
      {/* <div className="mt-8">
        <h2 className="font-semibold">Therapies offered:</h2>
        <ul className="flex flex-row gap-4 flex-wrap">
          {counsellor.data.therapy.map((item, index) => (
            <li
              key={index}
              className="border-2 border-gray-200 w-auto flex justify-center items-center rounded-md m-2 p-2 font-semibold"
            >
              {item}
            </li>
          ))}
        </ul>
      </div> */}
      {/* <div className="mt-8">
        <h2 className="font-semibold">Top Specialties:</h2>
        <ul className="flex flex-row gap-4 flex-wrap">
          {counsellor.data.specials.map((item, index) => (
            <li
              key={index}
              className="border-2 border-gray-200 w-auto flex justify-center items-center rounded-md m-2 p-2 font-semibold"
            >
              {item}
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  </div>
);

const Page: React.FC = () => {
  const { counsellors } = useContext(CounsellorContext);

  return (
    <div>
      <DashboardHeader />
      <div className="max-w-full mx-auto grid md:grid-cols-2 mt-6">
        <h2 className="font-bold text-2xl">Find your counselor</h2>
        <div className="flex flex-col justify-center md:text-left md:items-start">
          <div className="relative md:w-[400px] sm:w-auto">
            <input
              type="text"
              className="w-full pl-10 pr-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Search counsellor's name"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" />
          </div>
        </div>
      </div>

      <div className="max-w-full h-auto grid justify-center grid-cols-1 items-center mt-6 p-2 place-items-center">
        {counsellors.map((counsellor) => (
          <InfoCard key={counsellor.id} counsellor={counsellor} />
        ))}
      </div>
    </div>
  );
};

export default Page;
