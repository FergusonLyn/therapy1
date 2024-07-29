"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useContext } from "react";
import { userAuthContext } from "../contexts/userContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isStudentAuthenticated, setIsStudentAuthenticated] = useState(false);
  const [isCounsellorAuthenticated, setIsCounsellorAuthenticated] =
    useState(false);

  const context = useContext(userAuthContext);

  if (!context) {
    throw new Error(
      "userAuthContext must be used within a UserContextProvider"
    );
  }

  const { user, loading } = context;

  useEffect(() => {
    if (!loading && user) {
      if (user.role === "student") {
        setIsStudentAuthenticated(true);
      } else if (user.role === "counsellor") {
        setIsCounsellorAuthenticated(true);
      } else {
        setIsStudentAuthenticated(false);
        setIsCounsellorAuthenticated(false);
      }
    } else {
      setIsStudentAuthenticated(false);
      setIsCounsellorAuthenticated(false);
    }
  }, [user, loading]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="header w-full bg-blue-800 rounded-md">
        <div className="navbar font-normal text-white text-sm p-4 md:p-8 flex justify-between items-center">
          {!isOpen && (
            <div className="text-lg font-bold">
              <Link href="./">Logo</Link>
            </div>
          )}
          <button
            className="md:hidden text-white focus:outline-none"
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
          <ul
            className={`md:flex items-center gap-4 ${
              isOpen ? "block" : "hidden"
            } md:block mt-4 md:mt-0`}
          >
            <li className="py-2 md:py-0">
              <Link href="./">Home</Link>
            </li>
            <li className="py-2 md:py-0">
              <Link href="./about">About Us</Link>
            </li>
            <li className="py-2 md:py-0">
              <Link href="./services">Services</Link>
            </li>
            <li className="py-2 md:py-0">
              <Link href="./contact">Contact Us</Link>
            </li>
            <li className="py-2 md:py-0 md:ml-auto">
              {isStudentAuthenticated ? (
                <Link href={"/dashboard"}>Dashboard</Link>
              ) : isCounsellorAuthenticated ? (
                <Link href={"/counsellorDashboard"}>Dashboard</Link>
              ) : (
                <Link href="./gettingstarted">Get Started</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
