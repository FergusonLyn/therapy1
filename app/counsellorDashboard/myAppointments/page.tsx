"use client";
import CDashboardHeader from "@/app/components/CDashboardHeader";
import { userAuthContext } from "@/app/contexts/userContext";
import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { auth, db } from "../../firebase";

const Page = () => {
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

  useEffect(() => {
    const fetchAppointmentInfo = async () => {
      const userId = auth.currentUser?.uid;
      if (!userId) {
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

      {/* Your Patients Appointments Section */}
      <div
        id="appointments"
        className="flex items-center justify-center h-[500px] mt-6"
      >
        <div className="w-[70%] h-full rounded-md bg-white border-2 border-gray-200 shadow-sm p-4">
          <div className="flex flex-row">
            <h1 className="font-semibold text-lg m-2">
              Your Patients Appointments
            </h1>
          </div>
          <hr />

          {/* Scrollable content area */}
          <div className="overflow-y-auto h-[350px] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
            {appointmentInfo.map((appointment) => (
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
            {/* Add more patient appointments here */}
          </div>
        </div>
      </div>

      {/* Session Requests Section */}
      <div id="sessions" className="flex items-center justify-center  mt-6">
        <div className="w-[70%] h-full rounded-md bg-white border-2 border-gray-200 shadow-sm p-4">
          <div className="flex flex-row">
            <h1 className="font-semibold text-lg m-2">Session Requests</h1>
          </div>
          <hr />

          {/* Scrollable content area */}
          <div className="overflow-y-auto h-[350px] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
            {appointmentInfo.map((appointment) => (
              <div key={appointment.id} className="flex items-center justify-between p-4 m-3 rounded-md ">
                <div className="flex-shrink-0">
                  <p className="text-sm text-gray-400">{appointment.time}</p>
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
            {/* Add more session requests here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
