"use client";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useState } from "react";
import toast from "react-hot-toast";
import { FaRegEyeSlash } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import { Loader } from "../../components/Loader";
import { auth, db, storage } from "../../firebase";

const RegisterCounsellor = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [counsellorId, setCounsellorId] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");
  const [loading, setLoading] = useState(false);
  const [nextModal, setNextModal] = useState(false);

  const router = useRouter();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const signup = async (event: React.FormEvent<HTMLFormElement>) => {
    console.log("Starting signup...");
    event.preventDefault();
    setLoading(true);
    try {
      console.log("Creating user...");
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(`User created: ${user.uid}`);

      console.log("Uploading and getting download URL...");
      const downloadURL = image
        ? await uploadAndGetDownloadURL(user.uid, image)
        : null;
      console.log(`Download URL: ${downloadURL}`);
      console.log("Setting document...");
      await setDoc(doc(db, "users", user.uid), {
        counsellorNumber: counsellorId,
        name: fullName,
        role: "counsellor",
        id: user.uid,
        title,
        image: downloadURL,
        about,
      });

      setLoading(false);
      toast.success("Counsellor created successfully");

      resetFormFields();

      router.push("/gettingstarted/login");
    } catch (error) {
      console.error(error);

      setLoading(false);
      toast.error(
        "Counsellor couldnt be created check your internet connection"
      );
      resetFormFields();
    }
  };

  const uploadAndGetDownloadURL = async (userId: string, image: File) => {
    const storageRef = ref(
      storage,
      `counsellor_images/${userId}/${image.name}`
    );
    await uploadBytes(storageRef, image);
    return await getDownloadURL(storageRef);
  };

  const resetFormFields = () => {
    setEmail("");
    setAbout("");
    setCounsellorId("");
    setFullName("");
    setImage(null);
    setPassword("");
    setTitle("");
  };

  return (
    <div className="flexBox min-h-[90vh] bg-[#fffefe]">
      <div className="flex flex-col rounded-lg bg-[#ffffff] p-7 w-[470px] relative">
        <form onSubmit={signup}>
          {!nextModal ? (
            <div>
              <div>
                <label htmlFor="" className="block">
                  Full name
                </label>
                <input
                  className="input"
                  placeholder="Enter your full name..."
                  type="text"
                  value={fullName}
                  name="fullname"
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="" className="block">
                  Counsellor Id
                </label>
                <input
                  className="input"
                  placeholder="Enter Counsellor Id..."
                  type="number"
                  value={counsellorId}
                  name="counsellor Id"
                  onChange={(e) => setCounsellorId(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="" className="block">
                  Email Address
                </label>
                <input
                  className="input"
                  placeholder="Enter email address..."
                  type="email"
                  value={email}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="relative">
                <label htmlFor="" className="block">
                  Password
                </label>
                <input
                  className="input"
                  placeholder="Enter Password..."
                  type={isPasswordVisible ? "text" : "password"}
                  value={password}
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="absolute top-10 left-[380px]"
                  onClick={togglePasswordVisibility}
                >
                  {isPasswordVisible ? <IoEyeOutline /> : <FaRegEyeSlash />}
                </button>
              </div>
              <div className="flex justify-center">
                <button
                  className="bg-[#e2e2e2] w-full py-3 rounded-[10px] mb-3 font-bold text-[13px]"
                  onClick={() => {
                    setNextModal(true);
                  }}
                >
                  Next
                </button>
              </div>
              <p className="text-center text-[13px]">
                Already have an account?{" "}
                <Link href="./login" className="text-black font-bold">
                  Sign In
                </Link>
              </p>
            </div>
          ) : (
            <div>
              <div>
                <label htmlFor="" className="block">
                  Title
                </label>
                <input
                  className="input"
                  placeholder="Enter your title..."
                  type="text"
                  value={title}
                  name="title"
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="" className="block">
                  Profile Image
                </label>
                <input
                  type="file"
                  onChange={handleImageChange}
                  className="input"
                  required
                />
              </div>
              <div>
                <label htmlFor="" className="block">
                  About
                </label>
                <textarea
                  className="input"
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                ></textarea>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-[#e2e2e2] w-full py-3 rounded-[10px] mb-3 font-bold text-[13px]"
                >
                  {loading ? (
                    <div className="flex justify-center items-center">
                      <Loader />
                    </div>
                  ) : (
                    "Register"
                  )}
                </button>
              </div>
              <p className="text-center text-[13px]">
                Already have an account?{" "}
                <Link href="./login" className="text-black font-bold">
                  Sign In
                </Link>
              </p>
              <button
                className="font-semibold"
                onClick={() => {
                  setNextModal(false);
                }}
              >
                Back
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default RegisterCounsellor;
