import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { url } from "inspector";
import Footer from "../components/Footer";

const Services = () => {
  const servicesItems = [
    {
      img: "/depression.png",
      title: "Depression",
      text: "We provide mental support for those grappling with persistent sadness, loss of interest, grief, hopelessness through their life",
    },
    {
      img: "/Anxiety.png",
      title: "Anxiety",
      text: "We provide mental support for those grappling with persistent sadness, loss of interest, grief, hopelessness through their life",
    },
    {
      img: "/relationships.png",
      title: "Relationships",
      text: "We provide mental support for those grappling with persistent sadness, loss of interest, grief, hopelessness through their life",
    },
    {
      img: "/griefs.png",
      title: "Grief and Loss",
      text: "We provide mental support for those grappling with persistent sadness, loss of interest, grief, hopelessness through their life",
    },
    {
      img: "/self.png",
      title: "Self Confidence",
      text: "We provide mental support for those grappling with persistent sadness, loss of interest, grief, hopelessness through their life",
    },
    {
      img: "/stress.png",
      title: "Stress Management",
      text: "We provide mental support for those grappling with persistent sadness, loss of interest, grief, hopelessness through their life",
    },
    {
      img: "/eating.png",
      title: "Eating Disorder",
      text: "We provide mental support for those grappling with persistent sadness, loss of interest, grief, hopelessness through their life",
    },
    {
      img: "/substance.png",
      title: " Substance Abuse ",
      text: "We provide mental support for those grappling with persistent sadness, loss of interest, grief, hopelessness through their life",
    },
  ];
  return (
    <div>
      <Header />
      <div className="grid grid-cols-3 gap-4 mt-12">
        {servicesItems.map((items, index) => {
          return (
            <div key={index}>
              <div className=" h-[280px] rounded-2xl relative">
                <Image
                  src={items.img}
                  layout="fill"
                  objectFit="cover"
                  alt="image-here"
                  className="rounded-2xl"
                />
                <h1 className="flex absolute bottom-0 p-5 text-3xl font-medium text-white">
                  {items.title}
                </h1>
              </div>
              <div className="bg-[#f6f6f6] mt-5 rounded-2xl h-24 flex justify-center items-center">
                <p className="px-4 text-[0.93rem] font-normal ">{items.text}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-9 mb-3 bg-blue-100 relative  rounded-lg">
        <div
          className="h-[500px]  bg-center bg-cover bg-no-repeat  rounded-lg"
          style={{ backgroundImage: "url('/services.png')" }}
        >
          <div className="justify-center flex-col flex z-[30] text-white pt-16 text-center items-center">
            <h1 className="text-3xl mb-4 ">Ready to start your journey of <br/> emotional balance?</h1>
            <p className="text-[1rem] font-extralight text-[#dbddde] ">
              Start your transformation with your experience counsellor today.
            </p>
            <button  className="button mt-12 bg-black text-white px-6 py-4 gap-4">
              Get Started
              <FaArrowRightLong />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Services;
