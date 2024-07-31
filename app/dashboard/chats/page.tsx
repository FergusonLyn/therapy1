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

//   const searchParams = useSearchParams();
//   const counsellorId = searchParams.get("counsellorid");
//   const currentStudentId = searchParams.get("studentid");

//   const context = useContext(userAuthContext);

//   useEffect(() => {
//     console.log("Current user role:", context?.user?.role);
//     console.log("Current user ID:", auth.currentUser?.uid);
//     console.log("Counsellor ID:", counsellorId);

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
//       }
//     );

//     return () => unsubscribe();
//   }, [context?.user?.role, counsellorId, auth.currentUser?.uid]);

//   return (
//     <div style={{ position: "relative", height: "500px" }}>
//       <div className="mb-16">
//         {context?.user?.role === "student" ? (
//           <DashboardHeader />
//         ) : (
//           <CDashboardHeader />
//         )}
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
import CDashboardHeader from "@/app/components/CDashboardHeader";

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
  const [chatPartner, setChatPartner] = useState<{
    name: string;
    id: string;
  } | null>(null);
  const [currentStudentId, setCurrentStudentId] = useState<string | null>(null);

  const searchParams = useSearchParams();
  const counsellorId = searchParams.get("counsellorid");

  const context = useContext(userAuthContext);

  useEffect(() => {
    console.log("Current user role:", context?.user?.role);
    console.log("Current user ID:", auth.currentUser?.uid);
    console.log("Counsellor ID:", counsellorId);
    console.log("Current Student ID:", currentStudentId);

    let q: Query<DocumentData>;
    if (context?.user?.role === "student") {
      q = query(
        collection(db, "chats"),
        where("userId", "==", auth.currentUser?.uid),
        where("counsellorId", "==", counsellorId),
        orderBy("sentTime")
      );
      // Fetch counsellor details
      if (counsellorId) {
        getDocs(query(collection(db, "users"), where("id", "==", counsellorId)))
          .then((snapshot) => {
            if (!snapshot.empty) {
              const counsellorData = snapshot.docs[0].data();
              setChatPartner({
                name: counsellorData.fullName,
                id: counsellorId,
              });
            }
          })
          .catch((error) =>
            console.error("Error fetching counsellor details:", error)
          );
      }
    } else if (context?.user?.role === "counsellor") {
      q = query(
        collection(db, "chats"),
        where("counsellorId", "==", auth.currentUser?.uid),
        where("userId", "==", currentStudentId),
        orderBy("sentTime")
      );
      // Fetch student details
      if (currentStudentId) {
        getDocs(
          query(collection(db, "users"), where("id", "==", currentStudentId))
        )
          .then((snapshot) => {
            if (!snapshot.empty) {
              const studentData = snapshot.docs[0].data();
              setChatPartner({
                name: studentData.fullName,
                id: currentStudentId,
              });
            }
          })
          .catch((error) =>
            console.error("Error fetching student details:", error)
          );
      }
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
        if (newMessages.length > 0) {
          const latestMessage = newMessages[newMessages.length - 1];
          setCurrentStudentId(latestMessage.userId);
        }
      }
    );

    return () => unsubscribe();
  }, [
    context?.user?.role,
    counsellorId,
    auth.currentUser?.uid,
    currentStudentId,
  ]);

  // ... (handleStudentSendMessage and handleCounsellorSendMessage remain the same)
  const handleStudentSendMessage = async () => {
    if (inputMessage.trim() === "") return;

    const newMessage = {
      userId: auth.currentUser?.uid,
      counsellorId: counsellorId,
      message: inputMessage,
      sentTime: new Date().toISOString(),
      sender: "Student",
    };

    setMessages((prevMessages) => [...prevMessages, newMessage as ChatMessage]);
    setInputMessage("");

    try {
      await addDoc(collection(db, "chats"), newMessage);
    } catch (error) {
      console.error("Error adding message: ", error);
      setMessages((prevMessages) =>
        prevMessages.filter((msg) => msg !== newMessage)
      );
    }
  };

  const handleCounsellorSendMessage = async () => {
    const trimmedInput = inputMessage.trim();

    if (trimmedInput === "" || !currentStudentId) {
      return;
    }

    const counsellorId = auth.currentUser?.uid;
    const currentUserId = currentStudentId;
    const sentTime = new Date().toISOString();

    const newMessage = {
      userId: currentUserId,
      counsellorId,
      message: trimmedInput,
      sentTime,
      sender: "Counsellor",
    };

    setMessages((prevMessages) => [...prevMessages, newMessage as ChatMessage]);
    setInputMessage("");

    try {
      await addDoc(collection(db, "chats"), newMessage);
    } catch (error) {
      setMessages((prevMessages) =>
        prevMessages.filter((message) => message !== newMessage)
      );
    }
  };

  return (
    <div style={{ position: "relative", height: "500px" }}>
      <div className="mb-16">
        {context?.user?.role === "student" ? (
          <DashboardHeader />
        ) : context?.user?.role === "counsellor" ? (
          <CDashboardHeader />
        ) : (
          ""
        )}
      </div>
      <MainContainer>
        <Sidebar position="left">
          <Search placeholder="Search..." />
          <ConversationList>
            {chatPartner && (
              <Conversation name={chatPartner.name} info="Chat partner" active>
                <Avatar name={chatPartner.name} status="available" />
              </Conversation>
            )}
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
