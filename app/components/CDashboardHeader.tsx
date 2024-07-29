"use client";
import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiLogOut } from "react-icons/fi";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { Loader } from "./Loader";
import { userAuthContext } from "../contexts/userContext";
import { extractInitials } from "../utils/string";

const CDashboardHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [loading, setLoading] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  const router = useRouter();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const context = useContext(userAuthContext);

  if (!context) {
    throw new Error(
      "userAuthContext must be used within a UserContextProvider"
    );
  }

  const logOut = () => {
    signOut(auth)
      .then(() => {
        alert("User signed out successfully!");
        router.push("/");
      })
      .catch((error) => {
        console.error("Sign out error:", error);
        alert("An error occurred while signing out. Please try again later.");
      });
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div
            className={`navbar w-full bg-blue-800 font-normal text-white text-sm p-4 md:p-6 flex justify-between items-center transition-all duration-300 ${
              isSticky
                ? "fixed top-0 left-0 w-full shadow-lg z-50 rounded-none"
                : "rounded-md"
            }`}
          >
            <div className="flex items-center">
              {!isOpen && (
                <div className="text-lg font-bold">
                  <Link href="./">K-HEALTH</Link>
                </div>
              )}
              <button
                className="md:hidden text-white focus:outline-none ml-4"
                onClick={toggleMenu}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            </div>
            <ul
              className={`md:flex items-center gap-10 ${
                isOpen ? "block" : "hidden"
              } md:block mt-4 md:mt-0 mx-auto`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
          <ul
            className={`md:flex items-center gap-10 ${
              isOpen ? "block" : "hidden"
            } md:block mt-4 md:mt-0 mx-auto`}
          >
            <li className="py-2 md:py-0">
              <Link href="/">Home</Link>
            </li>
            <li className="py-2 md:py-0">
              <Link href="./">Dashboard</Link>
            </li>
            <li className="py-2 md:py-0">
              <Link href="">Appointments</Link>
            </li>
            <li className="py-2 md:py-0">
              <Link href="">Chats</Link>
            </li>
          </ul>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-white text-blue-500 rounded-full flex items-center justify-center overflow-hidden">
                {extractInitials(context.user?.name ?? "")}
              </div>
              <span className="hidden md:block">
                {context.loading ? (
                  <p>Loading...</p>
                ) : (
                  <p>{context.user?.name}</p>
                )}
              </span>
            </div>
            <button className="text-white hover:text-gray-300 flex items-center">
              <FiLogOut size={20} className="mr-1" />
              <span className="hidden md:block" onClick={logOut}>
                Logout
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CDashboardHeader;
