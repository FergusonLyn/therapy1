// "use client";
// import Link from "next/link";
// import React, { useState, ChangeEvent } from "react";
// import { FaRegEyeSlash } from "react-icons/fa6";
// import { IoEyeOutline } from "react-icons/io5";
// import { auth, db, storage } from "../../firebase";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import { setDoc, doc } from "firebase/firestore";
// import { useRouter } from "next/navigation";

// const RegisterCounsellor = () => {
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [counsellorId, setCounsellorId] = useState("");
//   const [password, setPassword] = useState("");
//   const [isPasswordVisible, setIsPasswordVisible] = useState(false);
//   const [image, setImage] = useState<File | any>("");
//   const [title, setTitle] = useState("");
//   const [about, setAbout] = useState("");

//   const router = useRouter();

//   const togglePasswordVisibility = () => {
//     setIsPasswordVisible(!isPasswordVisible);
//   };

//   const handleImageChange = (event: any) => {
//     setImage(event.target.files[0]);
//   };

//   // const signup = (e: React.FormEvent<HTMLFormElement>) => {
//   //   e.preventDefault();
//   //   createUserWithEmailAndPassword(auth, email, password)
//   //     .then((counsellorSignup) => {
//   //       const user = counsellorSignup.user;
//   //       console.log(user);

//   //       const storageRef = ref(storage, 'images/' + image.name);
//   //       const uploadTask = uploadBytes(storageRef, image);

//   //       uploadTask.then((snapshot) => {
//   //         const downloadURL = snapshot.metadata.downloadURL;

//   //         // Set the image field to the download URL
//   //         return setDoc(doc(db, "users", user.uid), {
//   //           counsellorNumber: counsellorId,
//   //           name: fullName,
//   //           role: "counsellor",
//   //           id: user.uid,
//   //           title: title,
//   //           image: downloadURL,
//   //           about: about,
//   //         });
//   //       })
//   //     })
//   //     .then(() => {
//   //       console.log("Document written!");
//   //       alert("Counsellor signed up successfully!");
//   //       router.push("/gettingstarted/login");
//   //     })
//   //     .catch((error) => {
//   //       console.error(error);
//   //       alert(error.message);
//   //     });
//   // };
//   const signup = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((counsellorSignup) => {
//         const user = counsellorSignup.user;
//         console.log(user);

//         // const storageRef = ref(storage, "images/" + image.name);
//         // const uploadTask = uploadBytes(storageRef, image);

//         // uploadTask.then((snapshot) => {
//         //   getDownloadURL(snapshot.ref).then((downloadURL) => {
//         // Set the image field to the download URL
//         setDoc(doc(db, "users", user.uid), {
//           counsellorNumber: counsellorId,
//           name: fullName,
//           role: "counsellor",
//           id: user.uid,
//           title: title,
//           // image: {
//           //   name: image.name,
//           //   url: downloadURL,
//           // },
//           about: about,
//         });
//       })
//       //   });
//       // })
//       .then(() => {
//         console.log("Document written!");
//         setEmail("");
//         setAbout("");
//         setCounsellorId("");
//         setFullName("");
//         setImage("");
//         setPassword("");
//         setTitle("");
//         alert("Counsellor signed up successfully!");
//         router.push("/gettingstarted/login");
//       })
//       .catch((error) => {
//         console.error(error);
//         alert(error.message);
//       });
//   };

//   return (
//     <div className="flexBox min-h-[90vh] bg-[#fffefe]">
//       <div className="flex  flex-col rounded-lg bg-[#ffffff] p-7 w-[570px] relative ">
//         <form onSubmit={signup}>
//           <div className="div-input">
//             <div>
//               <label htmlFor="" className="block">
//                 Full name
//               </label>
//               <input
//                 className="counsellor-input "
//                 placeholder="Enter your full name..."
//                 type="text"
//                 value={fullName}
//                 name="fullname"
//                 onChange={(e) => {
//                   setFullName(e.target.value);
//                 }}
//                 required
//               />{" "}
//             </div>
//             <div>
//               <label htmlFor="" className="block">
//                 Title
//               </label>
//               <input
//                 className="counsellor-input"
//                 placeholder="Enter your title..."
//                 type="text"
//                 value={title}
//                 name="title"
//                 onChange={(e) => {
//                   setTitle(e.target.value);
//                 }}
//                 required
//               />{" "}
//             </div>
//           </div>
//           <div className="div-input">
//             <div>
//               <label htmlFor="" className="">
//                 Counsellor Id
//               </label>
//               <input
//                 className="counsellor-input"
//                 placeholder="Enter Counsellor Id..."
//                 type="number"
//                 value={counsellorId}
//                 name="counsellor Id"
//                 onChange={(e) => {
//                   setCounsellorId(e.target.value);
//                 }}
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="" className="">
//                 Profile Image
//               </label>
//               <input
//                 type="file"
//                 onChange={handleImageChange}
//                 className="px-8 py-[0.6rem] mb-8 border-2 border-gray-300 rounded-lg mt-2 w-[260px]"
//                 required
//               />
//             </div>
//           </div>
//           <div className="div-input">
//             <div>
//               <div>
//                 <label htmlFor="" className="block">
//                   Email Address
//                 </label>
//                 <input
//                   className="counsellor-input "
//                   placeholder="Enter email address..."
//                   type="email"
//                   value={email}
//                   name="email"
//                   onChange={(e) => {
//                     setEmail(e.target.value);
//                   }}
//                   required
//                 />
//               </div>
//               <div className="relative">
//                 <label htmlFor="" className="block">
//                   Password
//                 </label>
//                 <input
//                   className="counsellor-input"
//                   placeholder="Enter Password..."
//                   type={isPasswordVisible ? "text" : "password"}
//                   value={password}
//                   name="password"
//                   onChange={(e) => {
//                     setPassword(e.target.value);
//                   }}
//                   required
//                 />

//                 <button
//                   type="button" // Prevent form submission on click
//                   className="absolute top-10 left-[180px]"
//                   onClick={togglePasswordVisibility}
//                 >
//                   {isPasswordVisible ? <IoEyeOutline /> : <FaRegEyeSlash />}
//                 </button>
//               </div>
//             </div>
//             <div>
//               <label htmlFor="" className="block">
//                 About
//               </label>
//               <textarea
//                 className="counsellor-input h-[10rem] w-[260px]"
//                 value={about}
//                 onChange={(e) => {
//                   setAbout(e.target.value);
//                 }}
//               ></textarea>
//             </div>
//           </div>
//           <div className="flex justify-center">
//             <button
//               type="submit"
//               className="bg-[#e2e2e2] w-64 py-3 rounded-[10px] mb-3 font-bold text-[13px]"
//             >
//               Register{" "}
//             </button>
//           </div>
//           <p className="text-center text-[13px]">
//             Already have an account?{" "}
//             <Link href="./login" className="text-black font-bold">
//               Sign In
//             </Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default RegisterCounsellor;
"use client";
import Link from "next/link";
import React, { useState, ChangeEvent } from "react";
import { FaRegEyeSlash } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import { auth, db, storage } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { Loader } from "../../components/Loader";

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

      resetFormFields();
      console.log("Resetting form fields...");
      alert("Counsellor signed up successfully!");

      console.log("Signup successful! Redirecting...");
      router.push("/gettingstarted/login");
    } catch (error) {
      console.error(error);
    }
  };

  // const signup = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();

  //   try {
  //     const { user } = await createUserWithEmailAndPassword(
  //       auth,
  //       email,
  //       password
  //     );
  //     const downloadURL = image
  //       ? await uploadAndGetDownloadURL(user.uid, image)
  //       : null;

  //     await setDoc(doc(db, "users", user.uid), {
  //       counsellorNumber: counsellorId,
  //       name: fullName,
  //       role: "counsellor",
  //       id: user.uid,
  //       title,
  //       image: downloadURL,
  //       about,
  //     });

  //     resetFormFields();
  //     alert("Counsellor signed up successfully!");
  //     router.push("/gettingstarted/login");
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

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
      <div className="flex flex-col rounded-lg bg-[#ffffff] p-7 w-[570px] relative">
        <form onSubmit={signup}>
          <div className="div-input">
            <div>
              <label htmlFor="" className="block">
                Full name
              </label>
              <input
                className="counsellor-input"
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
                Title
              </label>
              <input
                className="counsellor-input"
                placeholder="Enter your title..."
                type="text"
                value={title}
                name="title"
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="div-input">
            <div>
              <label htmlFor="" className="">
                Counsellor Id
              </label>
              <input
                className="counsellor-input"
                placeholder="Enter Counsellor Id..."
                type="number"
                value={counsellorId}
                name="counsellor Id"
                onChange={(e) => setCounsellorId(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="" className="">
                Profile Image
              </label>
              <input
                type="file"
                onChange={handleImageChange}
                className="px-8 py-[0.6rem] mb-8 border-2 border-gray-300 rounded-lg mt-2 w-[260px]"
                required
              />
            </div>
          </div>
          <div className="div-input">
            <div>
              <div>
                <label htmlFor="" className="block">
                  Email Address
                </label>
                <input
                  className="counsellor-input"
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
                  className="counsellor-input"
                  placeholder="Enter Password..."
                  type={isPasswordVisible ? "text" : "password"}
                  value={password}
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="absolute top-10 left-[180px]"
                  onClick={togglePasswordVisibility}
                >
                  {isPasswordVisible ? <IoEyeOutline /> : <FaRegEyeSlash />}
                </button>
              </div>
            </div>
            <div>
              <label htmlFor="" className="block">
                About
              </label>
              <textarea
                className="counsellor-input h-[10rem] w-[260px]"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#e2e2e2] w-64 py-3 rounded-[10px] mb-3 font-bold text-[13px]"
            >
              {loading ? <Loader /> : "Register"}
            </button>
          </div>
          <p className="text-center text-[13px]">
            Already have an account?{" "}
            <Link href="./login" className="text-black font-bold">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterCounsellor;
