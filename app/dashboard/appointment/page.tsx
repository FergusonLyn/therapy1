"use client";
import React, {
  useState,
  ChangeEvent,
  FormEvent,
  useEffect,
  useContext,
} from "react";
import { useSearchParams } from "next/navigation";
import { getAuth } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { db, auth } from "../../firebase"; // Adjust the path to your firebase config file
import { CounsellorContext } from "@/app/contexts/counsellorContext";

// Define the type for form data
interface FormData {
  name: string;
  help: string;
  datetime: string;
  message: string;
}

const AppointmentPage: React.FC = () => {
  const counsellorId = useSearchParams().get("counsellorid");

  const [formData, setFormData] = useState<FormData>({
    name: "",
    help: "",
    datetime: "",
    message: "",
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const router = useRouter();
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const user = auth.currentUser;
      console.log(counsellorId);
      if (!user) {
        throw new Error("User not authenticated ");
      }
      if (!counsellorId) {
        throw new Error("no counsellor id  ");
      }
      const appointmentId = `${user.uid}_${counsellorId}`;

      await setDoc(doc(db, "appointments", appointmentId), {
        ...formData,
        userId: user.uid,
        counsellorId: counsellorId,
        timestamp: new Date(),
      });

      setFormData({
        name: "",
        help: "",
        datetime: "",
        message: "",
      });
      alert("Appointment scheduled successfully!");
      router.push("/counsellors");
    } catch (error) {
      console.error("Error scheduling appointment:", error);
      alert("Failed to schedule appointment. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-6 m-4">
        <h1 className="text-2xl font-bold mb-4">Schedule Appointment</h1>
        <form onSubmit={handleSubmit}>
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
            />
          </div>

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

export default AppointmentPage;
