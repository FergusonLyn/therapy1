"use client";
import React, { useState, useContext, useEffect } from "react";
import Link from "next/link";
import "react-widgets/styles.css";
import Combobox from "react-widgets/Combobox";
import DateWidget from "@/app/components/DateWidget";
import { addDoc, doc, setDoc, collection } from "firebase/firestore";
import { db } from "../../../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const page = () => {
  const [mood, setMood] = useState("");
  const [note, setNote] = useState("");

  const handleComboboxChange = (value: string | any) => {
    setMood(value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
          day: dateOnly,
        };
        try {
          await addDoc(newDoc, newDiary);
          alert("Success");
          console.log("Success");
          setNote("");
          setMood("");
        } catch (error) {
          console.error("Error setting document:", error);
        }
      } else {
        console.log("You are not logged in");
      }
    });
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
            <button className="bg-[#e2e2e2] w-1/2 py-3 m-2 rounded-[10px] mb-3 font-bold text-[13px]  hover:bg-red-300">
              <Link href="./" className="text-black font-bold">
                Back
              </Link>
            </button>
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

export default page;
