"use client";
import { collection, getDocs, query, where } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import "react-widgets/styles.css";
import Chatbot from "../components/Chatbot";
import DashboardHeader from "../components/DashboardHeader";
import { Loader } from "../components/Loader";
import { CounsellorContext } from "../contexts/counsellorContext";
import { userAuthContext } from "../contexts/userContext";
import { auth, db } from "../firebase";

const Page = () => {
  const [loading, setLoading] = useState(true);
  const [quote, setQuote] = useState<any>({});
  const [appointmentInfo, setAppointmentInfo] = useState<any>([]);

  const { counsellors, getCounsellorName } = useContext(CounsellorContext);
  const context = useContext(userAuthContext);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    const fetchAppointmentInfo = async () => {
      const userId = auth.currentUser?.uid;
      if (!userId) {
        console.log("User ID not found. Exiting.");
        return;
      }

      try {
        const appointmentsRef = collection(db, "appointments");
        const q = query(
          appointmentsRef,
          where("userId", "==", userId),
          where("accepted", "==", true),
          where("declined", "==", false)
        );
        const querySnapshot = await getDocs(q);

        const appointmentData = querySnapshot.docs.map((doc) => ({
          name: doc.data().name,
          help: doc.data().help,
          time: doc.data().datetime.split("T")[1],
          date: doc.data().datetime.split("T")[0],
          id: doc.id,
          counsellorId: doc.data().counsellorId,
        }));

        setAppointmentInfo(appointmentData);
        console.log(appointmentData);
      } catch (error) {
        console.error("Error fetching appointment info:", error);
      }
    };

    fetchAppointmentInfo();
  }, [context?.user?.id]);

  useEffect(() => {
    const fetchRandomQuote = async () => {
      const url =
        "https://famous-quotes4.p.rapidapi.com/random?category=all&count=1";
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "1e26393bf3msh68cf849779f165cp175843jsn1c9abdcd730d",
          "x-rapidapi-host": "famous-quotes4.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setQuote(result[0]); // The API returns an array, we take the first item
      } catch (error) {
        console.error(error);
      }
    };

    fetchRandomQuote();
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <div className="">
        <DashboardHeader />

        <div className="w-full rounded-md mt-5 p-4 md:p-8 md:mt-10 md:h-[800px]">
          <div className="flex flex-col md:flex-row text-sm h-full gap-4 p-4">
            {/* Grid one */}
            <div className="colOne w-1/3 rounded-md bg-white border-2 p-4 border-gray-200 shadow-sm m-3">
              <h3 className="text-black text-lg flex justify-between items-center mb-4 font-bold">
                Your Counselors
              </h3>
              {counsellors.slice(0, 2).map((counsellor,index) => (
                <div key={index} className="bg-white p-10 shadow-lg rounded-md md:h-[270px] mt-4 grid grid-cols-2 gap-4">
                  <div className=" flex rounded-md items-center justify-center">
                    <Image
                      src={counsellor.data.image}
                      alt={counsellor.data.name}
                      className=" object-cover"
                      width={150}
                      height={80}
                    />
                  </div>
                  <div>
                    <h1 className="font-semibold text-sm mb-2">
                      {counsellor.data.name}
                    </h1>
                    <p className="font-normal text-xs">
                      {counsellor.data.about.length > 120
                        ? `${counsellor.data.about.substring(0, 120)}...`
                        : counsellor.data.about}
                    </p>
                  </div>
                </div>
              ))}

              <div className="text-right mt-6 cursor-pointer text-blue-600">
                <Link href="./dashboard/counsellors">More</Link>
              </div>
            </div>

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

                {appointmentInfo.map((appointment: any) => (
                  <div
                    key={appointment.id}
                    className="flex flex-col gap-2 p-2 my-2"
                  >
                    <div className="flex flex-row justify-between">
                      <h2>
                        You have an appointment with{" "}
                        {getCounsellorName(appointment.counsellorId)}
                      </h2>
                      <p>Date: {appointment.date}</p>
                      <p>Time: {appointment.time}</p>
                    </div>
                    <hr />
                  </div>
                ))}
              </div>

              <div className="rounded-md bg-white border-2 p-4 border-gray-200 shadow-sm m-3">
                <div className="flex justify-center items-center h-full">
                  <div className="quote text-center">
                    <h1 className="font-medium text-xl">
                      &quot;{quote.text}&quot;
                      <br />
                      <span className="text-lg text-center">
                        Author: {quote.author}
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
