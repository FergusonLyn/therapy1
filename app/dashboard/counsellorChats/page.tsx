// // "use client";
// // import React, { useState, useEffect, useContext } from "react";
// // import { useSearchParams } from "next/navigation";
// // import DashboardHeader from "@/app/components/DashboardHeader";
// // import { userAuthContext } from "@/app/contexts/userContext";
// // import {
// //   MainContainer,
// //   ChatContainer,
// //   Sidebar,
// //   Search,
// //   ConversationList,
// //   Conversation,
// //   Avatar,
// //   MessageList,
// //   Message,
// //   MessageInput,
// // } from "@chatscope/chat-ui-kit-react";
// // import { db, auth } from "../../firebase";
// // import {
// //   getDocs,
// //   QueryDocumentSnapshot,
// //   DocumentData,
// //   collection,
// //   addDoc,
// //   onSnapshot,
// //   query,
// //   orderBy,
// //   where,
// //   Query,
// //   QuerySnapshot,
// // } from "firebase/firestore";
// // import CDashboardHeader from "@/app/components/CDashboardHeader";

// // interface ChatMessage {
// //   id: string;
// //   message: string;
// //   sentTime: string;
// //   sender: string;
// //   userId: string;
// //   counsellorId: string;
// // }

// // const Page: React.FC = () => {
// //   const [messages, setMessages] = useState<ChatMessage[]>([]);
// //   const [inputMessage, setInputMessage] = useState("");
// //   const [chatPartner, setChatPartner] = useState<{
// //     name: string;
// //     id: string;
// //   } | null>(null);
// //   const [currentStudentId, setCurrentStudentId] = useState<string | null>(null);

// //   const searchParams = useSearchParams();
// //   const counsellorId = searchParams.get("counsellorid");

// //   const context = useContext(userAuthContext);

// //   useEffect(() => {
// //     console.log("Current user role:", context?.user?.role);
// //     console.log("Current user ID:", auth.currentUser?.uid);
// //     console.log("Counsellor ID:", counsellorId);
// //     console.log("Current Student ID:", currentStudentId);

// //     let q: Query<DocumentData>;
// //     if (context?.user?.role === "student") {
// //       q = query(
// //         collection(db, "chats"),
// //         where("userId", "==", auth.currentUser?.uid),
// //         where("counsellorId", "==", counsellorId),
// //         orderBy("sentTime")
// //       );
// //       // Fetch counsellor details
// //       if (counsellorId) {
// //         getDocs(query(collection(db, "users"), where("id", "==", counsellorId)))
// //           .then((snapshot) => {
// //             if (!snapshot.empty) {
// //               const counsellorData = snapshot.docs[0].data();
// //               setChatPartner({
// //                 name: counsellorData.name,
// //                 id: counsellorId,
// //               });
// //             }
// //           })
// //           .catch((error) =>
// //             console.error("Error fetching counsellor details:", error)
// //           );
// //       }
// //     } else if (context?.user?.role === "counsellor") {
// //       q = query(
// //         collection(db, "chats"),
// //         where("counsellorId", "==", auth.currentUser?.uid),
// //         where("userId", "==", currentStudentId),
// //         orderBy("sentTime")
// //       );
// //       // Fetch student details
// //       if (currentStudentId) {
// //         getDocs(
// //           query(collection(db, "users"), where("id", "==", currentStudentId))
// //         )
// //           .then((snapshot) => {
// //             if (!snapshot.empty) {
// //               const studentData = snapshot.docs[0].data();
// //               setChatPartner({
// //                 name: studentData.name,
// //                 id: currentStudentId,
// //               });
// //             }
// //           })
// //           .catch((error) =>
// //             console.error("Error fetching student details:", error)
// //           );
// //       }
// //     } else {
// //       q = query(collection(db, "chats"), orderBy("sentTime"));
// //     }

// //     const unsubscribe = onSnapshot(
// //       q,
// //       (snapshot: QuerySnapshot<DocumentData>) => {
// //         const newMessages = snapshot.docs.map(
// //           (doc: QueryDocumentSnapshot<DocumentData>) =>
// //             ({
// //               id: doc.id,
// //               ...doc.data(),
// //             } as ChatMessage)
// //         );
// //         setMessages(newMessages);
// //         if (newMessages.length > 0) {
// //           const latestMessage = newMessages[newMessages.length - 1];
// //           setCurrentStudentId(latestMessage.userId);
// //         }
// //       }
// //     );

// //     return () => unsubscribe();
// //   }, [
// //     context?.user?.role,
// //     counsellorId,
// //     auth.currentUser?.uid,
// //     currentStudentId,
// //   ]);

// //   const handleCounsellorSendMessage = async () => {
// //     const trimmedInput = inputMessage.trim();

// //     if (trimmedInput === "" || !currentStudentId) {
// //       return;
// //     }

// //     const counsellorId = auth.currentUser?.uid;
// //     const currentUserId = currentStudentId;
// //     const sentTime = new Date().toISOString();

// //     const newMessage = {
// //       userId: currentUserId,
// //       counsellorId,
// //       message: trimmedInput,
// //       sentTime,
// //       sender: "Counsellor",
// //     };

// //     setMessages((prevMessages) => [...prevMessages, newMessage as ChatMessage]);
// //     setInputMessage("");

// //     try {
// //       await addDoc(collection(db, "chats"), newMessage);
// //     } catch (error) {
// //       console.error("Error adding message: ", error);
// //       setMessages((prevMessages) =>
// //         prevMessages.filter((message) => message !== newMessage)
// //       );
// //     }
// //   };

// //   return (
// //     <div style={{ position: "relative", height: "500px" }}>
// //       <div className="mb-16">
// //         <CDashboardHeader />
// //       </div>
// //       <MainContainer>
// //         <Sidebar position="left">
// //           <Search placeholder="Search..." />
// //           <ConversationList>
// //             {chatPartner && (
// //               <Conversation name={chatPartner.name} info="Chat partner" active>
// //                 <Avatar src="/profile.jpg" status="available" />
// //               </Conversation>
// //             )}
// //           </ConversationList>
// //         </Sidebar>
// //         <ChatContainer>
// //           <MessageList>
// //             {messages.map((msg) => (
// //               <Message
// //                 key={msg.id}
// //                 model={{
// //                   message: msg.message,
// //                   sentTime: msg.sentTime,
// //                   sender: msg.sender,
// //                   direction:
// //                     context?.user?.role === "student"
// //                       ? msg.sender === "Student"
// //                         ? "outgoing"
// //                         : "incoming"
// //                       : msg.sender === "Counsellor"
// //                       ? "outgoing"
// //                       : "incoming",
// //                   position: "single",
// //                 }}
// //               />
// //             ))}
// //           </MessageList>
// //           <MessageInput
// //             placeholder="Type message here"
// //             value={inputMessage}
// //             onChange={(val) => setInputMessage(val)}
// //             onSend={() => {
// //               handleCounsellorSendMessage();
// //             }}
// //           />
// //         </ChatContainer>
// //       </MainContainer>
// //     </div>
// //   );
// // };

// // export default Page;
// "use client";
// import React, { useState, useEffect, useContext } from "react";
// import DashboardHeader from "@/app/components/DashboardHeader";
// import { userAuthContext } from "@/app/contexts/userContext";
// import {
//   MainContainer,
//   ChatContainer,
//   Sidebar,
//   Search,
//   ConversationList,
//   Conversation,
//   Avatar,
//   MessageList,
//   Message,
//   MessageInput,
// } from "@chatscope/chat-ui-kit-react";
// import { db, auth } from "../../firebase";
// import {
//   getDocs,
//   QueryDocumentSnapshot,
//   DocumentData,
//   collection,
//   addDoc,
//   onSnapshot,
//   query,
//   orderBy,
//   where,
//   Query,
//   QuerySnapshot,
// } from "firebase/firestore";
// import CDashboardHeader from "@/app/components/CDashboardHeader";

// interface ChatMessage {
//   id: string;
//   message: string;
//   sentTime: string;
//   sender: string;
//   userId: string;
//   counsellorId: string;
// }

// const Page: React.FC = () => {
//   const [messages, setMessages] = useState<ChatMessage[]>([]);
//   const [inputMessage, setInputMessage] = useState("");
//   const [currentStudentId, setCurrentStudentId] = useState<string | null>(null);
//   const [chatPartners, setChatPartners] = useState<
//     { name: string; id: string }[]
//   >([]);

//   const context = useContext(userAuthContext);

//   useEffect(() => {
//     if (context?.user?.role !== "counsellor") return;

//     let q: Query<DocumentData>;
//     if (context?.user?.role === "counsellor") {
//       q = query(
//         collection(db, "chats"),
//         where("counsellorId", "==", auth.currentUser?.uid),
//         where("userId", "==", currentStudentId),
//         orderBy("sentTime")
//       );
//     } else {
//       q = query(collection(db, "chats"), orderBy("sentTime"));
//     }
//     // Fetch student details
//     if (currentStudentId) {
//       getDocs(
//         query(collection(db, "users"), where("id", "==", currentStudentId))
//       )
//         .then((snapshot) => {
//           const studentData = snapshot.docs.map((doc) => {
//             const data = doc.data();
//             return {
//               id: doc.id,
//               name: data.name || "Unknown Student",
//             };
//           });
//           setChatPartners(studentData);
//         })
//         .catch((error) =>
//           console.error("Error fetching student details:", error)
//         );
//     }

//     const unsubscribe = onSnapshot(
//       q,
//       (snapshot: QuerySnapshot<DocumentData>) => {
//         const newMessages = snapshot.docs.map(
//           (doc: QueryDocumentSnapshot<DocumentData>) =>
//             ({
//               id: doc.id,
//               ...doc.data(),
//             } as ChatMessage)
//         );
//         setMessages(newMessages);

//         if (newMessages.length > 0) {
//           const latestMessage = newMessages[newMessages.length - 1];
//           setCurrentStudentId(latestMessage.userId);
//         }
//       }
//     );

//     return () => unsubscribe();
//   }, [context?.user?.role, auth.currentUser?.uid]);

//   const handleCounsellorSendMessage = async () => {
//     const trimmedInput = inputMessage.trim();

//     if (trimmedInput === "" || !currentStudentId) {
//       return;
//     }

//     const counsellorId = auth.currentUser?.uid;
//     const currentUserId = currentStudentId;
//     const sentTime = new Date().toISOString();

//     const newMessage = {
//       userId: currentUserId,
//       counsellorId,
//       message: trimmedInput,
//       sentTime,
//       sender: "Counsellor",
//     };

//     setMessages((prevMessages) => [...prevMessages, newMessage as ChatMessage]);
//     setInputMessage("");

//     try {
//       await addDoc(collection(db, "chats"), newMessage);
//     } catch (error) {
//       console.error("Error adding message: ", error);
//       setMessages((prevMessages) =>
//         prevMessages.filter((message) => message !== newMessage)
//       );
//     }
//   };

//   return (
//     <div style={{ position: "relative", height: "500px" }}>
//       <div className="mb-16">
//         <CDashboardHeader />
//       </div>
//       <MainContainer>
//         <Sidebar position="left">
//           <Search placeholder="Search..." />
//           <ConversationList>
//             {
//               chatPartners.map((chatPartner) => (
//                 <Conversation
//                   key={chatPartner.id}
//                   name={chatPartner.name}
//                   active
//                 >
//                   <Avatar src="/profile.jpg" status="available" />
//                 </Conversation>
//               ))
//               //   <Conversation name={chatPartner.name} active>
//               //     <Avatar src="/profile.jpg" status="available" />
//               //   </Conversation>
//             }
//           </ConversationList>
//         </Sidebar>
//         <ChatContainer>
//           <MessageList>
//             {messages
//               .filter((msg) => msg.userId === currentStudentId)
//               .map((msg) => (
//                 <Message
//                   key={msg.id}
//                   model={{
//                     message: msg.message,
//                     sentTime: msg.sentTime,
//                     sender: msg.sender,
//                     direction:
//                       context?.user?.role === "counsellor"
//                         ? msg.sender === "Student"
//                           ? "outgoing"
//                           : "incoming"
//                         : msg.sender === "Counsellor"
//                         ? "outgoing"
//                         : "incoming",
//                     position: "single",
//                   }}
//                 />
//               ))}
//           </MessageList>
//           <MessageInput
//             placeholder="Type message here"
//             value={inputMessage}
//             onChange={(val) => setInputMessage(val)}
//             onSend={handleCounsellorSendMessage}
//           />
//         </ChatContainer>
//       </MainContainer>
//     </div>
//   );
// };

// export default Page;

"use client";
import React, { useState, useEffect, useContext } from "react";
import CDashboardHeader from "@/app/components/CDashboardHeader";
import { userAuthContext } from "@/app/contexts/userContext";
import {
  MainContainer,
  ChatContainer,
  Sidebar,
  Search,
  ConversationList,
  Conversation,
  Avatar,
  MessageList,
  Message,
  MessageInput,
} from "@chatscope/chat-ui-kit-react";
import { db, auth } from "../../firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  where,
  getDocs,
} from "firebase/firestore";

interface ChatMessage {
  id: string;
  message: string;
  sentTime: string;
  sender: string;
  userId: string;
  counsellorId: string;
}

interface Student {
  id: string;
  name: string;
}

const Page: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [currentStudentId, setCurrentStudentId] = useState<string | null>(null);
  const [students, setStudents] = useState<Student[]>([]);

  const context = useContext(userAuthContext);

  useEffect(() => {
    if (context?.user?.role !== "counsellor") return;

    const counsellorId = auth.currentUser?.uid;

    // Fetch all chats for the counsellor
    const chatsQuery = query(
      collection(db, "chats"),
      where("counsellorId", "==", counsellorId),
      orderBy("sentTime", "desc")
    );

    const unsubscribe = onSnapshot(chatsQuery, async (snapshot) => {
      const newMessages = snapshot.docs.map(
        (doc) =>
          ({
            id: doc.id,
            ...doc.data(),
          } as ChatMessage)
      );
      setMessages(newMessages);

      // Get unique student IDs
      const uniqueStudentIds = Array.from(
        new Set(newMessages.map((msg) => msg.userId))
      );

      // Fetch student details
      const studentsData = await Promise.all(
        uniqueStudentIds.map(async (studentId) => {
          const studentDoc = await getDocs(
            query(collection(db, "users"), where("id", "==", studentId))
          );
          const studentData = studentDoc.docs[0]?.data();
          return {
            id: studentId,
            name: studentData?.name || "Unknown Student",
          };
        })
      );

      setStudents(studentsData);

      if (!currentStudentId && studentsData.length > 0) {
        setCurrentStudentId(studentsData[0].id);
      }
    });

    return () => unsubscribe();
  }, [context?.user?.role]);

  const handleCounsellorSendMessage = async () => {
    const trimmedInput = inputMessage.trim();

    if (trimmedInput === "" || !currentStudentId) return;

    const counsellorId = auth.currentUser?.uid;
    const newMessage = {
      userId: currentStudentId,
      counsellorId,
      message: trimmedInput,
      sentTime: new Date().toISOString(),
      sender: "Counsellor",
    };

    setInputMessage("");

    try {
      await addDoc(collection(db, "chats"), newMessage);
    } catch (error) {
      console.error("Error adding message: ", error);
    }
  };

  return (
    <div style={{ position: "relative", height: "500px" }}>
      <div className="mb-16">
        <CDashboardHeader />
      </div>
      <MainContainer>
        <Sidebar position="left">
          <Search placeholder="Search..." />
          <ConversationList>
            {students.map((student) => (
              <Conversation
                key={student.id}
                name={student.name}
                active={student.id === currentStudentId}
                onClick={() => setCurrentStudentId(student.id)}
              >
                <Avatar src="/profile.jpg" status="available" />
              </Conversation>
            ))}
          </ConversationList>
        </Sidebar>
        <ChatContainer>
          <MessageList>
            {messages
              .filter((msg) => msg.userId === currentStudentId)
              .map((msg) => (
                <Message
                  key={msg.id}
                  model={{
                    message: msg.message,
                    sentTime: msg.sentTime,
                    sender: msg.sender,
                    direction:
                      msg.sender === "Counsellor" ? "outgoing" : "incoming",
                    position: "single",
                  }}
                />
              ))}
          </MessageList>
          <MessageInput
            placeholder="Type message here"
            value={inputMessage}
            onChange={(val) => setInputMessage(val)}
            onSend={handleCounsellorSendMessage}
          />
        </ChatContainer>
      </MainContainer>
    </div>
  );
};

export default Page;
