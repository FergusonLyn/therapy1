import React, { useState, ChangeEvent, FormEvent } from "react";
import { getAuth } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";

// Define the type for form data
interface FormData {
  name: string;
  help: string;
  datetime: string;
  message: string;
}

// Define a type for the selected counsellor ID
interface PageProps {
  selectedCounsellorId: string; // You should pass this as a prop or get it from your context
}

const Page: React.FC<PageProps> = ({ selectedCounsellorId }) => {
  // Initialize state with the FormData type
  const [formData, setFormData] = useState<FormData>({
    name: "",
    help: "",
    datetime: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Get current user ID
      const auth = getAuth();
      const user = auth.currentUser;
      if (!user) {
        throw new Error("User not authenticated");
      }
      const userId = user.uid;

      // Generate document ID by combining user ID and selected counsellor ID
      const appointmentId = `${userId}_${selectedCounsellorId}`;

      // Store the form data in Firestore
      await setDoc(doc(db, "appointments", appointmentId), {
        ...formData,
        userId,
        counsellorId: selectedCounsellorId,
        timestamp: new Date(),
      });

      // Clear the form or show a success message
      setFormData({
        name: "",
        help: "",
        datetime: "",
        message: "",
      });
      alert("Appointment scheduled successfully!");
    } catch (error) {
      console.error("Error scheduling appointment:", error);
      alert("Failed to schedule appointment. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-6 m-4">
        <h1 className="text-2xl font-bold mb-4">Schedule Appointment</h1>
        <p className="text-gray-600 mb-6">
          Schedule an appointment with your counsellor
        </p>
        <form onSubmit={handleSubmit}>
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
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          {/* Concern Type Field */}
          <div className="mb-4">
            <label htmlFor="help" className="block text-sm font-semibold mb-2">
              State Your Concern Type
            </label>
            <input
              type="text"
              id="help"
              name="help"
              placeholder="Your concern"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              value={formData.help}
              onChange={handleChange}
            />
          </div>

          {/* Date and Time Field */}
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
              value={formData.datetime}
              onChange={handleChange}
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
              value={formData.message}
              onChange={handleChange}
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
