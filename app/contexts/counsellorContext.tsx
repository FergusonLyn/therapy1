"use client";
import { collection, getDocs, query, where } from "firebase/firestore";
import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { db } from "../firebase";

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

interface CounsellorContext {
  counsellors: Counsellor[];
  getCounsellorName: (counsellorId: string) => string | undefined;
  getCounsellorImage: (counsellorId: string) => string | undefined;
}

export const CounsellorContext = createContext<CounsellorContext>({
  counsellors: [],
  getCounsellorName: () => undefined,
  getCounsellorImage: () => undefined,
});

export const CounsellorProvider = ({ children }: { children: ReactNode }) => {
  const [counsellors, setCounsellors] = useState<Counsellor[]>([]);

  useEffect(() => {
    const getCounsellors = async () => {
      try {
        const counsellorDocRef = query(
          collection(db, "users"),
          where("role", "==", "counsellor")
        );
        const counsellorDoc = await getDocs(counsellorDocRef);
        if (counsellorDoc) {
          const counsellorArray = counsellorDoc.docs.map((doc) => ({
            id: doc.id,
            data: {
              ...doc.data(),
            } as Counsellor["data"],
          }));
          setCounsellors(counsellorArray);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getCounsellors();
  }, []);

  const getCounsellorName = useCallback(
    (counsellorId: string): string | undefined => {
      const counsellor = counsellors.find(
        (counsellor) => counsellor.id === counsellorId
      );
      return counsellor?.data.name;
    },
    [counsellors]
  );

  const getCounsellorImage = (counsellorId: string) => {
    const counsellor = counsellors.find(
      (counsellor) => counsellor.id === counsellorId
    );
    return counsellor?.data.image;
  };

  return (
    <CounsellorContext.Provider
      value={{ counsellors, getCounsellorName, getCounsellorImage }}
    >
      {children}
    </CounsellorContext.Provider>
  );
};
