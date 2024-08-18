import Link from "next/link";
import React from "react";
import { IoArrowBack } from "react-icons/io5";
import Header from "../components/Header";

const page = () => {
  return (
    <>
      <div className='fixed top-8 left-8 flex items-center bg-white p-2 rounded-md border hover:bg-gray-100 cursor-pointer transition-colors'>
      
        <IoArrowBack className='text-gray-600 text-lg mr-2' />
        <span className='text-gray-600 text-sm font-medium'>
            <Link href="./">
            Back
            </Link>
        </span>
      
      
    </div>

      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-6 m-4">
          <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-600 mb-6">
            We&apos;d love to hear from you! Please fill out the form below and we&apos;ll
            get back to you as soon as possible.
          </p>
          <form>
            {/* Name Field */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Message Field */}
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default page;
