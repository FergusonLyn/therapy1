import React from "react";
import Header from "../components/Header";

const Services = () => {
  const servicesItems = [
    {
      img: "",
      title: "Depression",
      text: "We provide mental support for those grappling with persistent sadness, loss of interest, grief, hopelessness through their life",
    },
    {
      img: "",
      title: "Anxiety",
      text: "We provide mental support for those grappling with persistent sadness, loss of interest, grief, hopelessness through their life",
    },
    {
      img: "",
      title: "Relationships",
      text: "We provide mental support for those grappling with persistent sadness, loss of interest, grief, hopelessness through their life",
    },
    {
      img: "",
      title: "Grief and Loss",
      text: "We provide mental support for those grappling with persistent sadness, loss of interest, grief, hopelessness through their life",
    },
    {
      img: "",
      title: "Self Confidence",
      text: "We provide mental support for those grappling with persistent sadness, loss of interest, grief, hopelessness through their life",
    },
    {
      img: "",
      title: "Stress Management",
      text: "We provide mental support for those grappling with persistent sadness, loss of interest, grief, hopelessness through their life",
    },
    {
      img: "",
      title: "Eating Disorder",
      text: "We provide mental support for those grappling with persistent sadness, loss of interest, grief, hopelessness through their life",
    },
    {
      img: "",
      title: " Substance Abuse ",
      text: "We provide mental support for those grappling with persistent sadness, loss of interest, grief, hopelessness through their life",
    },
  ];
  return (
    <div>
      <Header />
      <div className="grid grid-cols-3 mt-12">
        <div>
          <div className="bg-gray-100 h-[280px] rounded-2xl relative">
            <h1 className="flex absolute bottom-0 p-5 text-xl font-medium text-white">
              Depression
            </h1>
          </div>
          <div className="bg-gray-100 mt-2 rounded-2xl h-24 flex justify-center items-center">
            <p className="pl-4 text-[1.07rem] font-normal">
              We provide mental support for those grappling with persistent
              sadness, loss of interest, grief, hopelessness through their life
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
