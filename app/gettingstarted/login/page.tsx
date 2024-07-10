"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaRegEyeSlash } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import { auth, db } from "../../firebase";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  getAuth,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";

interface User {
  studentNumber: number;
  name: string;
  role: "student" | "counselor";
}

const fetchUserRole = (userId: string) => {
  return new Promise((resolve, reject) => {
    const userDocRef = doc(db, 'users', userId); // Replace 'users' with your collection name

    getDoc(userDocRef)
      .then((userDocSnap) => {
        if (userDocSnap.exists()) {
          const userData = userDocSnap.data() as User;
          const userRole = userData.role;
          resolve(userRole);
        } else {
          console.log('User document not found');
          resolve(null); // Resolve with null if user not found
        }
      })
      .catch((error) => {
        console.error('Error fetching user document:', error);
        reject(error); // Reject the promise with the error
      });
  });
};

const Login: React.FC = () => {
  const [clicked, setClicked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<"student" | "counselor" | null>(null);

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(getAuth(), (authUser) => {
  //     if (authUser) {
  //       const userDocRef = doc(db, "users", authUser.uid);
  //       console.log(userDocRef)
  //       getDoc(userDocRef)
  //         .then((userDocSnap) => {
  //           if (userDocSnap.exists()) {
  //             console.log("User retrieved:", userDocSnap.data());
  //             const userData = userDocSnap.data() as User; // Assert userData to User type
  //             setUser(userData);
  //             console.log(userData.role)
  //             if (userData.role === "student") {
  //               router.push("/dashboard");
  //             } else if (userData.role === "counselor") {
  //               router.push("/counsellorDashboard");
  //             }
  //             console.log(`User is a ${userData.role}`);
  //           } else {
  //             setUser(null); // Handle case where user document doesn't exist
  //             console.log("User document not found!");
  //           }
  //         })
  //         .catch((error) => {
  //           console.error("Error fetching user document:", error);
  //         });
  //     } else {
  //       setUser(null); // Handle case where authUser is null
  //     }
  //   });

  //   return () => unsubscribe();
  // }, []);


  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 300); 
  };
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const signIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((signInUser) => {
        const user = signInUser.user;
        console.log(user);
        alert("user signed in");
        if(role==="student"){

        }
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });
  };

  return (
    <div className="flexBox min-h-[80vh] bg-[#fffefe]">
      <div className="flex  flex-col rounded-lg bg-[#ffffff] p-7 w-[470px] relative ">
        <div className="h-[2px] bg-[#e2e2e2] rounded-[30px] my-12 "></div>
        <form onSubmit={signIn}>
          <h2 className="mb-5 text-lg text-center font-bold">Welcome Back!!</h2>
          <label htmlFor="" className="">
            Email
          </label>
          <input
            className="input"
            placeholder="Enter Student Id"
            type="email"
            value={email}
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
          <div className="relative">
            <label htmlFor="" className="">
              Password
            </label>
            <input
              className="input"
              placeholder="Enter Password..."
              type={isPasswordVisible ? "text" : "password"}
              value={password}
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />

            <button
              type="button" // Prevent form submission on click
              className="absolute top-10 left-[370px]"
              onClick={togglePasswordVisibility}
            >
              {isPasswordVisible ? <IoEyeOutline /> : <FaRegEyeSlash />}
            </button>
          </div>
          <button
            type="submit"
            onClick={handleClick}
            className={`bg-[#e2e2e2] w-full py-3 rounded-[10px] mb-3 font-bold text-[13px] ${
              clicked ? "clicked" : ""
            }`}
          >
            Sign In{" "}
          </button>
          <Link
            href="./forgotPassword"
            className="text-[0.9rem] mb-3 text-left"
          >
            Forgot Password
          </Link>
          <p className="text-center text-[13px]">
            Don&apos;t have an account?{" "}
            <Link href="./" className="text-black font-bold">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
