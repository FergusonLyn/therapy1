"use client";
import React, { useState, useEffect, useContext } from "react";
import { useSearchParams } from "next/navigation";
import DashboardHeader from "@/app/components/DashboardHeader";
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
  getDocs,
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  where,
} from "firebase/firestore";

interface ChatMessage {
  id: string;
  message: string;
  sentTime: string;
  sender: string;
  userId: string;
  counsellorId: string;
}

interface ChatPartner {
  id: string;
  name: string;
}

const Page: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [chatPartners, setChatPartners] = useState<ChatPartner[]>([]);
  const [selectedPartner, setSelectedPartner] = useState<ChatPartner | null>(
    null
  );

  const searchParams = useSearchParams();
  const initialCounsellorId = searchParams.get("counsellorid");

  const context = useContext(userAuthContext);
  const currentUserId = auth.currentUser?.uid;
  const userRole = context?.user?.role;

  useEffect(() => {
    if (!currentUserId || !userRole) return;

    const fetchChatPartners = async () => {
      const chatsRef = collection(db, "chats");
      const partnerField = userRole === "student" ? "counsellorId" : "userId";
      const q = query(
        chatsRef,
        where(
          userRole === "student" ? "userId" : "counsellorId",
          "==",
          currentUserId
        )
      );

      const querySnapshot = await getDocs(q);
      const uniquePartnerIds = new Set<string>();
      querySnapshot.forEach((doc) => {
        uniquePartnerIds.add(doc.data()[partnerField]);
      });

      const partners = await Promise.all(
        Array.from(uniquePartnerIds).map(async (partnerId) => {
          const userDoc = await getDocs(
            query(collection(db, "users"), where("id", "==", partnerId))
          );
          const userData = userDoc.docs[0]?.data();
          return { id: partnerId, name: userData?.name || "Unknown" };
        })
      );

      setChatPartners(partners);
      if (initialCounsellorId && userRole === "student") {
        const initialPartner = partners.find(
          (p) => p.id === initialCounsellorId
        );
        setSelectedPartner(initialPartner || partners[0]);
      } else {
        setSelectedPartner(partners[0]);
      }
    };

    fetchChatPartners();
  }, [currentUserId, userRole, initialCounsellorId]);

  useEffect(() => {
    if (!selectedPartner || !currentUserId) return;

    const q = query(
      collection(db, "chats"),
      where(
        userRole === "student" ? "userId" : "counsellorId",
        "==",
        currentUserId
      ),
      where(
        userRole === "student" ? "counsellorId" : "userId",
        "==",
        selectedPartner.id
      ),
      orderBy("sentTime")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newMessages = snapshot.docs.map(
        (doc) =>
          ({
            id: doc.id,
            ...doc.data(),
          } as ChatMessage)
      );
      setMessages(newMessages);
    });

    return () => unsubscribe();
  }, [selectedPartner, currentUserId, userRole]);

  const handleSendMessage = async () => {
    if (inputMessage.trim() === "" || !selectedPartner) return;

    const newMessage = {
      userId: userRole === "student" ? currentUserId : selectedPartner.id,
      counsellorId: userRole === "student" ? selectedPartner.id : currentUserId,
      message: inputMessage,
      sentTime: new Date().toISOString(),
      sender: userRole === "student" ? "Student" : "Counsellor",
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

  return (
    <div style={{ position: "relative", height: "500px" }}>
      <div className="mb-16">
        {userRole === "student" ? <DashboardHeader /> : <CDashboardHeader />}
      </div>
      <MainContainer>
        <Sidebar position="left">
          <Search placeholder="Search..." />
          <ConversationList>
            {chatPartners.map((partner) => (
              <Conversation
                key={partner.id}
                name={partner.name}
                info={userRole === "student" ? "Counsellor" : "Student"}
                active={selectedPartner?.id === partner.id}
                onClick={() => setSelectedPartner(partner)}
              >
                <Avatar src="/profile.jpg" status="available" />
              </Conversation>
            ))}
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
                    msg.sender ===
                    (userRole === "student" ? "Student" : "Counsellor")
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
            onSend={handleSendMessage}
          />
        </ChatContainer>
      </MainContainer>
    </div>
  );
};

export default Page;
