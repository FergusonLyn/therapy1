"use client";
import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Header />

      {/* the next div */}
      <div className="div-first flex flex-col md:flex-row h-auto md:h-[540px] w-full bg-slate-50 p-4 mt-2 gap-2">
        <div className="rounded-md h-60 md:h-80 w-full md:w-1/3 flex mx-auto md:ml-12 md:mr-4 mt-4 md:mt-16">
          <Image
            src="/groupPeople.avif"
            alt="Multi-ethnic group of people dressed in casual wear laughing cheerfully while chatting in an office"
            className="w-full h-full object-cover rounded-md"
            width={240} // Set the desired width
            height={240} // Set the desired height
          />
        </div>
        <div className="h-full w-full md:w-3/4 p-7">
          <h1 className="font-semibold text-xl md:text-2xl mb-4">
            You Deserve to be <br />
            Happy and Well
          </h1>
          <p className="text-sm font-normal w-full md:w-3/5 mb-4">
            Our platform offers you the support you need. Connect with experienced counselors, 
            explore a wide range of therapeutic content, and chat with our AI conversationalist anytime, 
            day or night. We are here to help you find your path to well-being.
          </p>

          {/* button for signing in */}
          <button className="rounded-3xl bg-blue-800 text-white text-sm h-11 w-36 mb-5">
            Get Started
          </button>

          {/* grid section about key traits of the website */}
          <div className="flex flex-col md:grid md:grid-cols-3 gap-7">
            <div className="bg-white p-5 shadow-lg rounded-md">
              <div className="rounded-full h-9 w-9 bg-gray-950 mb-3"></div>
              <h1 className="font-semibold text-sm mb-2">Confidentiality</h1>
              <p className="font-normal text-xs">
                Your privacy is sacred. We maintain the highest level of
                confidentiality.
              </p>
            </div>
            <div className="bg-white p-5 shadow-lg rounded-md">
              <div className="rounded-full h-9 w-9 bg-gray-950 mb-3"></div>
              <h1 className="font-semibold text-sm mb-2">Accessibility</h1>
              <p className="font-normal text-xs">
                Your privacy is sacred. We maintain the highest level of
                confidentiality.
              </p>
            </div>
            <div className="bg-white p-5 shadow-lg rounded-md">
              <div className="rounded-full h-9 w-9 bg-gray-950 mb-3"></div>
              <h1 className="font-semibold text-sm mb-2">Community</h1>
              <p className="font-normal text-xs">
                Your privacy is sacred. We maintain the highest level of
                confidentiality.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* the cognitive div */}
      <div className="cognitive-div w-full p-4 mt-2 gap-2 bg-slate-50">
        <div className="w-full flex flex-col items-center justify-center">
          <button className="rounded-3xl bg-gray-950 text-white text-xs h-10 w-24 mb-10">
            What We Do
          </button>
          <h1 className="font-semibold text-2xl mb-5 text-center">
            Common Wellbeing <br /> Concerns We Address
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative">
            <div
              className="box bg-white p-10 shadow-lg rounded-md"
              style={{ height: "330px" }}
            >
              <Image
                src="/depression.jpg"
                alt="depression"
                className="w-full h-full object-cover rounded-md"
                objectFit="cover"
                objectPosition="center"
                width={300} // Set the desired width
                height={300} // Set the desired height
              />
              <div className="absolute bottom-6 left-6 w-38 h-16 rounded-lg bg-white font-semibold text-sm p-5">
                Depression
              </div>
              <div className="absolute top-6 right-6 w-14 h-12 rounded-lg bg-white">
                <div className="w-9 h-9 bg-gray-950 rounded-full ml-2"></div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div
              className="box bg-white p-10 shadow-lg rounded-md"
              style={{ height: "330px" }}
            >
              <Image
                src="/anger.png"
                alt="anger"
                className="w-full h-full object-cover rounded-md"
                objectFit="cover"
                objectPosition="center"
                width={300} // Set the desired width
                height={300} // Set the desired height
              />
              <div className="absolute bottom-6 left-6 w-38 h-16 rounded-lg bg-white font-semibold text-sm p-5">
                Anger Issues
              </div>
              <div className="absolute top-6 right-6 w-14 h-12 rounded-lg bg-white">
                <div className="w-9 h-9 bg-gray-950 rounded-full ml-2"></div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div
              className="box bg-white p-10 shadow-lg rounded-md"
              style={{ height: "330px" }}
            >
              <Image
                src="/anxiety.jpg"
                alt="anxiety"
                className="w-full h-full object-cover rounded-md"
                objectFit="cover"
                objectPosition="center"
                width={300} // Set the desired width
                height={300} // Set the desired height
              />
              <div className="absolute bottom-6 left-6 w-38 h-16 rounded-lg bg-white font-semibold text-sm p-5">
                Anxiety Issues
              </div>
              <div className="absolute top-6 right-6 w-14 h-12 rounded-lg bg-white">
                <div className="w-9 h-9 bg-gray-950 rounded-full ml-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* a div on how site works */}
      <div className="bg-slate-50 rounded-md mt-2 p-4">
        <div className="flex flex-col md:flex-row text-sm p-8">
          <div className="h-full w-full md:w-3/4 p-7 flex flex-col justify-center">
            <button className="rounded-3xl bg-blue-800 text-white text-xs h-10 w-24 mb-16">
              Services
            </button>
            <h1 className="font-semibold text-2xl mb-4">
              Your Student Wellbeing Services <br /> for a Healthy Campus Life
            </h1>
            <p className="text-sm font-normal mb-4">
            Our platform offers a comprehensive suite of services tailored to your needs. 
            From one-on-one counseling sessions and wellness workshops to an AI companion ready to chat 24/7, 
            we&apos;re here to ensure your university experience is fulfilling and stress-free.
            </p>
          </div>
          <div className="hidden md:block w-1/4"></div>
        </div>
      </div>

      {/* a div on how site works */}
      <div className="w-full bg-slate-50 rounded-md mt-2 p-4">
        <div className="flex flex-col md:flex-row text-sm p-2">
          <div className="h-full w-full md:w-1/2 p-7">
            <h1 className="font-semibold text-2xl mb-6">
              Ready to embark on the <br /> Journey of Wellness?
            </h1>
            <p className="text-sm font-normal mb-4">
            Discover a world where your mental and emotional well-being are our top priority. 
            Our AI-powered platform, combined with professional counseling and enriching resources, 
            ensures you have the support you need every step of the way. Join us in creating a healthier, 
            happier you.
            </p>
            <button className="rounded-3xl bg-blue-800 text-white text-xs h-10 w-24 mt-4 md:mt-16">
              Services
            </button>
          </div>
          <div className="grid grid-rows-2 w-full md:w-1/2 p-2">
            <div className="bg-gray-300 h-48 md:h-64 m-2 overflow-hidden">
                <Image
                  src="/serviceTherapy.jpg"
                  alt="Description of the image"
                  layout="intrinsic" // Maintain the image aspect ratio
                  width={600} // Set a fixed width
                  height={400} // Set a fixed height
                  className="rounded-md"
                />
            </div>
            <div className="grid grid-cols-2 gap-2 md:gap-6">
              <div className="flex items-center justify-center bg-gray-950 m-2 h-20">
              <p className="font-semibold text-md text-white ">Expert Counselors</p>
              </div>
              <div className="flex items-center justify-center bg-gray-950 m-2 h-20">
              <p className="font-semibold text-md text-white">24/7 AI Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </main>
  );
}
