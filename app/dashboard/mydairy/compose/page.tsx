"use client";
import React, { useState, useContext} from "react";
import Link from "next/link";
import "react-widgets/styles.css";
import Combobox from "react-widgets/Combobox";
import DateWidget from "@/app/components/DateWidget";
import { addDoc, doc, updateDoc, collection } from "firebase/firestore";
import { db } from "../../../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { DiaryContext } from "@/app/contexts/diaryContext";

const Page = () => {
  const { currentMood, currentNote, currentTitle, currentId, isEditting } =
    useContext(DiaryContext);
  const [mood, setMood] = useState(currentMood || "");
  const [note, setNote] = useState(currentNote || "");
  const [title, setTitle] = useState(currentTitle || "");

  const handleComboboxChange = (value: string | any) => {
    setMood(value);
  };

  const createDocument = async () => {
    const auth = getAuth();
    const currentDate = new Date();
    const dateOnly = currentDate.toISOString().slice(0, 10);
    onAuthStateChanged(auth, async (authUser) => {
      if (authUser) {
        const userId = authUser.uid;
        const newDoc = collection(db, "mydiaries");
        const newDiary = {
          userId,
          mood: mood,
          note: note,
          title: title,
          day: dateOnly,
        };
        try {
          await addDoc(newDoc, newDiary);
          alert("Success");
          console.log("Success");
          setNote("");
          setMood("");
          setTitle("");
        } catch (error) {
          console.error("Error setting document:", error);
        }
      } else {
        console.log("You are not logged in");
      }
    });
  };

  const updateDocument = async (diaryId: string) => {
    const auth = getAuth();
    const currentDate = new Date();
    const dateOnly = currentDate.toISOString().slice(0, 10);
    onAuthStateChanged(auth, async (authUser) => {
      if (authUser) {
        const userId = authUser.uid;
        try {
          if (!diaryId) {
            console.error("Diary ID is undefined");
            return;
          }
          const diaryDocRef = doc(db, "mydiaries", currentId);
          await updateDoc(diaryDocRef, {
            userId,
            mood: mood,
            note: note,
            title: title,
            day: dateOnly,
          });
          alert("updated");
          console.log(" doc updated ");
          setNote("");
          setMood("");
          setTitle("");
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log("You are not logged in");
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isEditting) {
      if (!currentId) {
        console.error("No diary ID available for editing");
        return;
      }
      updateDocument(currentId);
    } else {
      createDocument();
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-[#fffefe]">
      <div className="flex  flex-col rounded-lg bg-[#ffffff] p-4 w-[470px] relative ">
        <div className="h-[2px] bg-[#e2e2e2] rounded-[30px] my-12 "></div>
        <form onSubmit={handleSubmit}>
          <h2 className="mb-5 text-lg text-center font-bold">
            What is on Your Mind?
          </h2>
          <DateWidget />
          <span className="font-bold">Mood</span> <br />
          <Combobox
            onChange={handleComboboxChange}
            defaultValue={"Happy"}
            value={mood}
            data={["Happy", "Sad", "Angry", "Lonely", "Depressed", "Anxiety"]}
          />
          <br />
          <input
            type="text"
            className="w-full pl-10 pr-4 py-2 my-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Title..."
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <textarea
            name=""
            id=""
            className="w-full h-[250px] border-2 border-grey rounded-md"
            placeholder=""
            value={note}
            onChange={(e) => {
              setNote(e.target.value);
            }}
          ></textarea>
          <div className="flex">
            <Link
              href="./"
              className="text-black text-center  bg-[#e2e2e2] w-1/2 py-3 m-2 rounded-[10px] mb-3 font-bold text-[13px]  hover:bg-red-300"
            >
              Back
            </Link>
            <button
              type="submit"
              className="bg-[#e2e2e2] w-1/2 py-3 m-2 rounded-[10px] mb-3 font-bold text-[13px] hover:bg-blue-300"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
