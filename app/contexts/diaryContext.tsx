"use client";
import { createContext, useState, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

interface DiaryContextType {
  currentMood: string;
  currentNote: string;
  currentTitle: string;
  currentId: string;
  isEditting: boolean;
  editDiary: Function;
}

export const DiaryContext = createContext<DiaryContextType>(
  {} as DiaryContextType
);

export const DiaryContextProvider = ({ children }: { children: ReactNode }) => {
  const [currentMood, setCurrentMood] = useState("");
  const [currentNote, setCurrentNote] = useState("");
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentId, setCurrentId] = useState("");
  const [isEditting, setIsEditting] = useState(false);

  const router = useRouter();

  const editDiary = async (diaryId: string) => {
    try {
      const diaryDocRef = doc(db, "mydiaries", diaryId);
      const diaryDoc = await getDoc(diaryDocRef);
      const data = diaryDoc.data();
      if (!data) {
        console.log("there is no data");
      } else {
        setCurrentMood(data.mood);
        setCurrentNote(data.note);
        setCurrentTitle(data.title);
        setCurrentId(data.id);
        setIsEditting(true);
        console.log(currentId);
      }
      router.push("./mydairy/compose");
    } catch (error) {}
  };

  return (
    <DiaryContext.Provider
      value={{
        currentNote,
        currentMood,
        currentTitle,
        currentId,
        isEditting,
        editDiary,
      }}
    >
      {children}
    </DiaryContext.Provider>
  );
};
