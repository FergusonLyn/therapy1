"use client";
import DashboardHeader from "@/app/components/DashboardHeader";
import { CounsellorContext } from "@/app/contexts/counsellorContext";
import { ChatConversation } from "@/app/models/chat";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { BsChatRightDotsFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { RiContactsBook3Fill } from "react-icons/ri";
import { ulid } from "ulid";
import { auth, db } from "../../firebase";

const Page = () => {
  const { counsellors } = useContext(CounsellorContext);

  // create conversation between counsellor and student

  const createConversation = async (counsellorId: string) => {
    const conversationId = ulid();
    const conversationsCollection = collection(db, "conversations");
    const conversation: ChatConversation = {
      id: conversationId,
      studentId: auth.currentUser?.uid as string,
      counsellorId,
    };
    try {
      await setDoc(doc(conversationsCollection, conversationId), conversation);
    } catch (e) {
      console.error("Error starting conversation", e);
    }
  };

  const checkConversationExists = async (counsellorId: string) => {
    const conversationsCollection = collection(db, "conversations");
    const q = query(
      conversationsCollection,
      where("studentId", "==", auth.currentUser?.uid),
      where("counsellorId", "==", counsellorId)
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.size > 0;
  };

  const router = useRouter();
  const handleAppointmentClick = (counsellorId: string) => {
    router.push(`/dashboard/appointment?counsellorid=${counsellorId}`); // Navigate to the appointment page
  };
  const navigateToChatPage = async (counsellorId: string) => {
    const currentUserId = auth.currentUser?.uid;
    const conversationExists = await checkConversationExists(counsellorId);
    const url = `/dashboard/chats`;
    if (conversationExists) {
      router.push(url);
    } else {
      await createConversation(counsellorId);
      router.push(url);
    }
  };

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
        {counsellors.map((counsellor) => {
          if (!counsellor || !counsellor.data) {
            return null;
          }

          return (
            <div
              key={counsellor.id}
              className="w-full md:w-2/3 shadow-lg h-auto m-4 flex rounded-md bg-white border-2 border-gray-200"
            >
              <div className="flex-1 p-6 ml-9">
                <div className="bg-blue-500 rounded-full w-36 h-36 mb-6 flex items-center justify-center text-white">
                  <Image
                    src={counsellor.data.image}
                    alt={counsellor.data.name}
                    className="w-full h-full object-cover"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="flex gap-4 items-center m-4">
                  <RiContactsBook3Fill className="text-blue-500 w-6 h-6 cursor-pointer" />
                  <a href="tel:+233256778060">
                    <IoCall className="text-blue-500 w-5 h-5 cursor-pointer" />
                  </a>
                  <button onClick={() => navigateToChatPage(counsellor.id)}>
                    <BsChatRightDotsFill className="text-blue-500 w-5 h-5 cursor-pointer" />
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => handleAppointmentClick(counsellor.id)}
                    className="border-2 border-blue-500 w-auto flex justify-center items-center rounded-md m-2 ml-4 font-semibold cursor-pointer"
                  >
                    Appointment
                  </button>
                </div>
              </div>
              <div className="flex-2 p-4 w-2/3">
                <h2 className="font-bold text-xl mb-2">
                  {counsellor.data.name}
                </h2>
                <h2 className="font-semibold text-base text-gray-500 my-2">
                  {counsellor.data.title}
                </h2>
                <p className="my-2">{counsellor.data.about}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
