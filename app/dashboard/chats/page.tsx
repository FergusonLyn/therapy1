// "use client";
// import React, { useState, useEffect, useContext } from "react";
// import { useSearchParams } from "next/navigation";
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

//   const searchParams = useSearchParams();
//   const counsellorId = searchParams.get("counsellorid");
//   const context = useContext(userAuthContext);

//   useEffect(() => {
//     let q: Query<DocumentData>;
//     if (context?.user?.role === "student") {
//       q = query(
//         collection(db, "chats"),
//         where("userId", "==", auth.currentUser?.uid),
//         where("counsellorId", "==", counsellorId),
//         orderBy("sentTime")
//       );
//     } else if (context?.user?.role === "counsellor") {
//       q = query(
//         collection(db, "chats"),
//         where("counsellorId", "==", auth.currentUser?.uid),
//         orderBy("sentTime")
//       );
//     } else {
//       // Default query if role is neither student nor counsellor
//       q = query(collection(db, "chats"), orderBy("sentTime"));
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

//         // Set the current student ID for the counsellor
//         if (context?.user?.role === "counsellor" && newMessages.length > 0) {
//           setCurrentStudentId(newMessages[newMessages.length - 1].userId);
//         }
//       }
//     );

//     return () => unsubscribe();
//   }, [context?.user?.role, counsellorId]);

//   const handleStudentSendMessage = async () => {
//     if (inputMessage.trim() === "") return;

//     try {
//       await addDoc(collection(db, "chats"), {
//         userId: auth.currentUser?.uid,
//         counsellorId: counsellorId,
//         message: inputMessage,
//         sentTime: new Date().toISOString(),
//         sender: "Student",
//       });
//       setInputMessage("");
//     } catch (error) {
//       console.error("Error adding message: ", error);
//     }
//   };

//   const handleCounsellorSendMessage = async () => {
//     if (inputMessage.trim() === "" || !currentStudentId) return;

//     try {
//       await addDoc(collection(db, "chats"), {
//         userId: currentStudentId,
//         counsellorId: auth.currentUser?.uid,
//         message: inputMessage,
//         sentTime: new Date().toISOString(),
//         sender: "Counsellor",
//       });
//       setInputMessage("");
//     } catch (error) {
//       console.error("Error adding message: ", error);
//     }
//   };

//   return (
//     <div style={{ position: "relative", height: "500px" }}>
//       <div className="mb-16">
//         <DashboardHeader />
//       </div>
//       <MainContainer>
//         <Sidebar position="left">
//           <Search placeholder="Search..." />
//           <ConversationList>
//             <Conversation
//               info="Yes i can do it for you"
//               lastSenderName="Kai"
//               name="Kai"
//               unreadDot
//             >
//               <Avatar
//                 name="Kai"
//                 src="https://chatscope.io/storybook/react/assets/kai-5wHRJGb2.svg"
//                 status="unavailable"
//               />
//             </Conversation>
//           </ConversationList>
//         </Sidebar>
//         <ChatContainer>
//           <MessageList>
//             {messages.map((msg) => (
//               <Message
//                 key={msg.id}
//                 model={{
//                   message: msg.message,
//                   sentTime: msg.sentTime,
//                   sender: msg.sender,
//                   direction:
//                     context?.user?.role === "student"
//                       ? msg.sender === "Student"
//                         ? "outgoing"
//                         : "incoming"
//                       : msg.sender === "Counsellor"
//                       ? "outgoing"
//                       : "incoming",
//                   position: "single",
//                 }}
//               />
//             ))}
//           </MessageList>
//           <MessageInput
//             placeholder="Type message here"
//             value={inputMessage}
//             onChange={(val) => setInputMessage(val)}
//             onSend={() => {
//               if (context?.user?.role === "student") {
//                 handleStudentSendMessage();
//               } else if (context?.user?.role === "counsellor") {
//                 handleCounsellorSendMessage();
//               }
//             }}
//           />
//         </ChatContainer>
//       </MainContainer>
//     </div>
//   );
// };

// export default Page;
"use client";
import React, { useState, useEffect, useContext } from "react";
import { useSearchParams } from "next/navigation";
import DashboardHeader from "@/app/components/DashboardHeader";
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
  getDocs,
  QueryDocumentSnapshot,
  DocumentData,
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  where,
  Query,
  QuerySnapshot,
} from "firebase/firestore";

interface ChatMessage {
  id: string;
  message: string;
  sentTime: string;
  sender: string;
  userId: string;
  counsellorId: string;
}

const Page: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [currentStudentId, setCurrentStudentId] = useState<string | null>(null);

  const searchParams = useSearchParams();
  const counsellorId = searchParams.get("counsellorid");
  const context = useContext(userAuthContext);

  useEffect(() => {
    console.log("Current user role:", context?.user?.role);
    console.log("Current user ID:", auth.currentUser?.uid);
    console.log("Counsellor ID:", counsellorId);

    let q: Query<DocumentData>;
    if (context?.user?.role === "student") {
      q = query(
        collection(db, "chats"),
        where("userId", "==", auth.currentUser?.uid),
        where("counsellorId", "==", counsellorId),
        orderBy("sentTime")
      );
    } else if (context?.user?.role === "counsellor") {
      q = query(
        collection(db, "chats"),
        where("counsellorId", "==", auth.currentUser?.uid),
        orderBy("sentTime")
      );
    } else {
      q = query(collection(db, "chats"), orderBy("sentTime"));
    }

    const unsubscribe = onSnapshot(
      q,
      (snapshot: QuerySnapshot<DocumentData>) => {
        const newMessages = snapshot.docs.map(
          (doc: QueryDocumentSnapshot<DocumentData>) =>
            ({
              id: doc.id,
              ...doc.data(),
            } as ChatMessage)
        );
        setMessages(newMessages);

        // Set the current student ID for the counsellor
        if (context?.user?.role === "counsellor" && newMessages.length > 0) {
          const latestMessage = newMessages[newMessages.length - 1];
          setCurrentStudentId(latestMessage.userId);
        }
        console.log("Current student ID:", currentStudentId);
      }
    );

    return () => unsubscribe();
  }, [context?.user?.role, counsellorId, auth.currentUser?.uid]);

  // ... rest of the component code

  const handleStudentSendMessage = async () => {
    if (inputMessage.trim() === "") return;

    const newMessage = {
      userId: auth.currentUser?.uid,
      counsellorId: counsellorId,
      message: inputMessage,
      sentTime: new Date().toISOString(),
      sender: "Student",
    };

    // Optimistic update
    setMessages((prevMessages) => [...prevMessages, newMessage as ChatMessage]);
    setInputMessage("");

    try {
      await addDoc(collection(db, "chats"), newMessage);
    } catch (error) {
      console.error("Error adding message: ", error);
      // Revert the optimistic update if there's an error
      setMessages((prevMessages) =>
        prevMessages.filter((msg) => msg !== newMessage)
      );
    }
  };

  // const handleCounsellorSendMessage = async () => {
  //   if (inputMessage.trim() === "" || !currentStudentId) return;

  //   const newMessage = {
  //     userId: currentStudentId,
  //     counsellorId: auth.currentUser?.uid,
  //     message: inputMessage,
  //     sentTime: new Date().toISOString(),
  //     sender: "Counsellor",
  //   };

  //   // Optimistic update
  //   setMessages((prevMessages) => [...prevMessages, newMessage as ChatMessage]);
  //   setInputMessage("");

  //   try {
  //     await addDoc(collection(db, "chats"), newMessage);
  //   } catch (error) {
  //     console.error("Error adding message: ", error);
  //     setMessages((prevMessages) =>
  //       prevMessages.filter((msg) => msg !== newMessage)
  //     );
  //   }
  // };

  const handleCounsellorSendMessage = async () => {
    console.log("Attempting to send counsellor message");
    console.log("Input message:", inputMessage);
    console.log("Current student ID:", currentStudentId);
    console.log("Counsellor ID:", auth.currentUser?.uid);

    if (inputMessage.trim() === "" || !currentStudentId) {
      console.log("Message not sent: Empty message or missing student ID");
      return;
    }

    const newMessage = {
      userId: currentStudentId,
      counsellorId: auth.currentUser?.uid,
      message: inputMessage,
      sentTime: new Date().toISOString(),
      sender: "Counsellor",
    };

    console.log("New message object:", newMessage);

    // Optimistic update
    setMessages((prevMessages) => [...prevMessages, newMessage as ChatMessage]);
    setInputMessage("");

    try {
      const docRef = await addDoc(collection(db, "chats"), newMessage);
      console.log("Message successfully added with ID:", docRef.id);
    } catch (error) {
      console.error("Error adding message: ", error);
      setMessages((prevMessages) =>
        prevMessages.filter((msg) => msg !== newMessage)
      );
    }
  };
  return (
    <div style={{ position: "relative", height: "500px" }}>
      <div className="mb-16">
        <DashboardHeader />
      </div>
      <MainContainer>
        <Sidebar position="left">
          <Search placeholder="Search..." />
          <ConversationList>
            <Conversation
              info="Yes i can do it for you"
              lastSenderName="Kai"
              name="Kai"
              unreadDot
            >
              <Avatar
                name="Kai"
                src="https://chatscope.io/storybook/react/assets/kai-5wHRJGb2.svg"
                status="unavailable"
              />
            </Conversation>
          </ConversationList>
        </Sidebar>
        <ChatContainer>
          <MessageList>
            {messages.map((msg) => (
              <Message
                key={msg.id}
                model={{
                  message: msg.message,
                  sentTime: msg.sentTime,
                  sender: msg.sender,
                  direction:
                    context?.user?.role === "student"
                      ? msg.sender === "Student"
                        ? "outgoing"
                        : "incoming"
                      : msg.sender === "Counsellor"
                      ? "outgoing"
                      : "incoming",
                  position: "single",
                }}
              />
            ))}
          </MessageList>
          <MessageInput
            placeholder="Type message here"
            value={inputMessage}
            onChange={(val) => setInputMessage(val)}
            onSend={() => {
              if (context?.user?.role === "student") {
                handleStudentSendMessage();
              } else if (context?.user?.role === "counsellor") {
                handleCounsellorSendMessage();
              }
            }}
          />
        </ChatContainer>
      </MainContainer>
    </div>
  );
};

export default Page;
