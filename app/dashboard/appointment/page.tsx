import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-6 m-4">
        <h1 className="text-2xl font-bold mb-4">Schedule Appointment</h1>
        <p className="text-gray-600 mb-6">
          Schedule an appointment with your counsellor
        </p>
        <form>
          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold mb-2">
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

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              State Your Concern Type
            </label>
            <input
              type="text"
              id="help"
              name="help"
              placeholder="Your concern "
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="datetime"
              className="block text-sm font-semibold mb-2"
            >
              Choose Date and Time
            </label>
            <input
              type="datetime-local"
              id="datetime"
              name="datetime"
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
            Schedule Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
