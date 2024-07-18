"use client";
import { createContext, ReactNode, useEffect, useState } from "react";
import { db } from "./../firebase";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

interface User {
  id: number;
  studentNumber: number;
  name: string;
  role: string;
}

interface UserAuthContextType {
  user: User | null;
  loading: boolean;
  resetContext: Function;
}

export const userAuthContext = createContext<UserAuthContextType | undefined>(
  undefined
);

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const resetContext = () => {
    setUser(null);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), (authUser) => {
      if (authUser) {
        const userDocRef = doc(db, "users", authUser.uid);
        getDoc(userDocRef)
          .then((userDocSnap) => {
            if (userDocSnap.exists()) {
              const userData = userDocSnap.data() as User;
              console.log("User data fetched:", userData); // Log fetched user data
              setUser(userData);
            }
          })
          .catch((error) => {
            console.error("Error fetching user document:", error);
          })
          .finally(() => {
            setLoading(false);
          });
      } else {
        console.log("No Auth User found"); // Log if no auth user
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    console.log("Updated user state:", user?.name);
  }, [user]);

  return (
    <userAuthContext.Provider value={{ user, loading, resetContext }}>
      {children}
    </userAuthContext.Provider>
  );
};
