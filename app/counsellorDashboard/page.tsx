"use client";
import React, { useContext, useEffect, useState } from "react";
import { IoIosSend } from "react-icons/io";
import CDashboardHeader from "../components/CDashboardHeader";
import Image from "next/image";
import Link from "next/link";
import TodayDate from "../components/TodayDate";
import PatientsRatingHistogram from "../components/PatientsRatingHistogram";
import { userAuthContext } from "../contexts/userContext";
import {
  collection,
  getDocs,
  query,
  where,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db, auth } from "../firebase";

const page = () => {
  const context = useContext(userAuthContext);
  const [appointmentInfo, setAppointmentInfo] = useState(
    [] as {
      name: string;
      time: string;
      date: string;
      id: string;
      help: string;
    }[]
  );

  if (!context) {
    throw new Error(
      "userAuthContext must be used within a UserContextProvider"
    );
  }

  // Function to generate random colors
  const getRandomColor = () => {
    const colors = [
      "bg-blue-300",
      "bg-blue-400",
      "bg-blue-500",
      "bg-blue-600",
      "bg-blue-700",
      "bg-blue-800",
      "bg-blue-900",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  useEffect(() => {
    const fetchAppointmentInfo = async () => {
      const userId = auth.currentUser?.uid;
      if (!userId) {
        console.log("User ID not found. Exiting.");
        return;
      }

      try {
        const appointmentsRef = collection(db, "appointments");
        const q = query(appointmentsRef, where("counsellorId", "==", userId));
        const querySnapshot = await getDocs(q);

        const appointmentData = querySnapshot.docs.map((doc) => ({
          name: doc.data().name,
          help: doc.data().help,
          time: doc.data().datetime.split("T")[1],
          date: doc.data().datetime.split("T")[0],
          id: doc.id,
        }));

        setAppointmentInfo(appointmentData);
      } catch (error) {
        console.error("Error fetching appointment info:", error);
      }
    };

    fetchAppointmentInfo();
  }, [context?.user?.id]);

  const handleAccept = async (userId: string) => {
    try {
      const appointmentRef = doc(db, "appointments", userId);
      await updateDoc(appointmentRef, {
        accepted: true,
        declined: false,
      });
      console.log("appointment accepted");
    } catch (error) {
      console.error("Error accepting appointment:", error);
    }
  };

  const handleDecline = async (userId: string) => {
    try {
      const appointmentRef = doc(db, "appointments", userId);
      await updateDoc(appointmentRef, {
        accepted: false,
        declined: true,
      });
      console.log("appointment declined");
    } catch (error) {
      console.error("Error declining appointment:", error);
    }
  };

  return (
    <div>
      <CDashboardHeader />

      <div className="first grid grid-cols-1 md:grid-cols-2 mt-6">
        <div className="flex rounded-md bg-white border-2 border-gray-200 shadow-sm h-auto m-3 p-5">
          <div className="bg-blue-500 rounded-full w-36 h-36 mb-6 flex items-center justify-center text-white">
            {/* for counsellor's image */}
          </div>
          <div className="flex flex-col p-2">
            <h1 className="font-medium text-lg m-2">
              Hello,{" "}
              <span className="font-bold text-xl">{context.user?.name}</span>
            </h1>
            <TodayDate />
          </div>
        </div>

        {/* technical support contact div */}
        <div className="flex items-center rounded-md bg-white border-2 border-gray-200 shadow-sm h-auto m-3 p-4">
          {/* Content Section */}
          <div className="flex-grow">
            <h1 className="font-bold text-xl mb-2">Need Technical Support?</h1>
            <button className="bg-blue-600 text-white py-3 px-6 text-center text-lg rounded hover:bg-blue-700">
              Contact Support
            </button>
          </div>

          {/* Image Section */}
          <div className="flex-shrink-0 ml-4">
            <Image
              src="/technicalSupport.png"
              alt="Technical Support"
              width={150}
              height={150}
              className="object-cover rounded-md"
            />
          </div>
        </div>
      </div>

      <div className="first grid grid-cols-1 md:grid-cols-2 mt-6">
        <div className="rounded-md bg-white border-2 border-gray-200 shadow-sm m-3 p-4">
          <div className="flex flex-row">
            <h1 className="font-semibold text-lg m-2">Your Patients Today</h1>
            <span className="ml-auto m-2 text-gray-500 cursor-pointer hover:text-blue-700">
              See All
            </span>
          </div>
          <hr />

          {appointmentInfo.slice(0, 2).map((appointment) => (
            <div
              key={appointment.id}
              className="flex items-center justify-between p-4 m-3 rounded-md "
            >
              <div className="flex-shrink-0">
                <p className="text-sm">{appointment.time}</p>
              </div>
              <div className="flex items-center flex-grow justify-center">
                <div className="flex items-center border-2 border-gray-600 px-2 rounded-full">
                  <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center mr-3">
                    <Image
                      src="/profile.jpg"
                      alt="profile picture"
                      className="w-full h-full object-cover rounded-full"
                      width={40}
                      height={40}
                    />
                  </div>
                  <p className="text-lg font-semibold">{appointment.name}</p>{" "}
                </div>
              </div>
              <div className="flex-shrink-0">
                <p className="text-md font-semibold">{appointment.help}</p>{" "}
              </div>
            </div>
          ))}
        </div>

        <div className="h-[300px] grid grid-cols-1 md:grid-cols-2">
          <div className="rounded-md bg-white border-2 border-gray-200 shadow-sm m-3 p-4">
            <div className="flex flex-row">
              <h1 className="font-semibold text-lg m-2">Therapy Types</h1>
            </div>
            <hr />
            <div className="relative flex justify-center items-center mt-12">
              <div
                className={`absolute w-28 h-28 ${getRandomColor()} rounded-full flex items-center justify-center`}
                style={{ top: "1%", left: "5%" }}
              >
                <span className="text-white text-lg">Type 1</span>
              </div>
              <div
                className={`absolute w-24 h-24 ${getRandomColor()} rounded-full flex items-center justify-center`}
                style={{ top: "5%", right: "10%" }}
              >
                <span className="text-white text-lg">Type 2</span>
              </div>
              <div
                className={`absolute w-20 h-20 ${getRandomColor()} rounded-full flex items-center justify-center`}
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <span className="text-white text-lg">Type 3</span>
              </div>
            </div>
          </div>

          <PatientsRatingHistogram />
        </div>
      </div>

      {/* therapy requests div session */}
      <div className="first grid grid-cols-1 md:grid-cols-2 mt-6">
        <div className="rounded-md bg-white border-2 border-gray-200 shadow-sm m-3 p-4 ">
          <div className="flex flex-row">
            <h1 className="font-semibold text-lg m-2">Session Requests</h1>
            <span className="ml-auto m-2 text-gray-500 cursor-pointer hover:text-blue-700">
              See All
            </span>
          </div>
          <hr />
          {appointmentInfo.slice(0, 2).map((appointment) => (
            <div className="flex items-center justify-between p-4 m-3 rounded-md ">
              <div className="flex-shrink-0">
                <p className="text-sm text-gray-400">{appointment.time}</p>
              </div>
              <div className="flex items-center flex-grow justify-center">
                <div className="flex items-center border-2 border-gray-600 px-2 rounded-full">
                  <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center mr-3">
                    <Image
                      src="/profile.jpg"
                      alt="profile picture"
                      className="w-full h-full object-cover rounded-md"
                      width={40} // Set the desired width
                      height={40} // Set the desired height
                    />
                  </div>
                  <p className="text-lg font-semibold ">{appointment.name}</p>
                </div>
              </div>
              <div className="flex-shrink-0 flex items-center">
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleAccept(appointment.id)}
                    className="border-2  py-2 px-4 rounded-md hover:font-semibold hover:text-green-300 "
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleDecline(appointment.id)}
                    className="border-2 py-2 px-4 rounded-md hover:font-semibold hover:text-red-300  "
                  >
                    Decline
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* chats */}
        <div className="rounded-md bg-white border-2 border-gray-200 shadow-sm m-3 p-4 h-[300px]">
          <div className="flex flex-row">
            <h1 className="font-semibold text-lg m-2">Patient Chats</h1>

            <span className="ml-auto m-2 h-6 flex items-center text-purple-600 text-2xl cursor-pointer">
              <IoIosSend />
            </span>
          </div>
          <hr />

          {/* chat ui skeletal system */}
          <div className="flex-grow overflow-y-auto p-2">
            {/* Message 1 */}
            <div className="flex items-start mb-3">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-2">
                <span className="text-white text-sm">A</span>
              </div>
              <div className="bg-gray-100 p-2 rounded-md">
                <p className="text-sm">
                  Hello, i am feeling anxiety and need help
                </p>
              </div>
            </div>
            {/* Message 2 */}
            <div className="flex items-start mb-3">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-2">
                <span className="text-white text-sm">B</span>
              </div>
              <div className="bg-gray-100 p-2 rounded-md">
                <p className="text-sm">Good morning Counsellor</p>
              </div>
            </div>
            {/* Message 3 */}
            <div className="flex items-start mb-3">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-2">
                <span className="text-white text-sm">C</span>
              </div>
              <div className="bg-gray-100 p-2 rounded-md">
                <p className="text-sm">Is music good for anger control?</p>
              </div>
            </div>
          </div>
          {/* Message Input Area */}
          <div className="flex items-center p-2 border-t border-gray-200">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-grow p-2 border rounded-md text-sm bg-gray-200 cursor-not-allowed"
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
