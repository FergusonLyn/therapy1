"use client";
import CDashboardHeader from "@/app/components/CDashboardHeader";
import DashboardHeader from "@/app/components/DashboardHeader";
import { userAuthContext } from "@/app/contexts/userContext";
import { Chat, ChatConversation } from "@/app/models/chat";
import {
  Avatar,
  ChatContainer,
  Conversation,
  ConversationList,
  MainContainer,
  Message,
  MessageInput,
  MessageList,
  Search,
  Sidebar,
} from "@chatscope/chat-ui-kit-react";
import {
  addDoc,
  collection,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { ulid } from "ulid";
import { auth, db } from "../../firebase";

type ChatConversationWithCounsellor = ChatConversation & {
  counsellorName: string;
};

const Page: React.FC = () => {
  const [messages, setMessages] = useState<Chat[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [conversations, setConversations] = useState<
    ChatConversationWithCounsellor[]
  >([]);
  const [selectedConversation, setSelectedConversation] =
    useState<ChatConversationWithCounsellor | null>(null);
  const [loadingMessages, setLoadingMessages] = useState(false);
  const context = useContext(userAuthContext);
  const currentUserId = auth.currentUser?.uid;
  const userRole = context?.user?.role;

  // fetch all converstations for the current user

  const retrieveConversations = async (userId: string) => {
    console.log("retrieving conversations for user", userId);

    const q = query(
      collection(db, "conversations")
      // where("stuentId", "==", userId)
    );

    const querySnapshot = await getDocs(q);

    console.log("data size", querySnapshot.size);
    const data = querySnapshot.docs.map(
      (doc) => doc.data() as ChatConversation
    );

    console.log({
      data,
    });
    const newConversations = data.map(async (conversation) => {
      const counsellorId = conversation.counsellorId;
      const counsellor = await retrieveCounsellorDetails(counsellorId);
      return {
        ...conversation,
        counsellorName: counsellor.name as string,
      } as ChatConversationWithCounsellor;
    });

    const results = await Promise.all(newConversations);
    if (!results[0]) return;
    setConversations(results);
    setSelectedConversation(results[0]);
  };

  // retrieve counsellor details

  const retrieveCounsellorDetails = async (counsellorId: string) => {
    const q = query(
      collection(db, "users"),
      where("id", "==", counsellorId),
      where("role", "==", "counsellor"),
      limit(1)
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs[0].data();
  };

  useEffect(() => {
    if (!auth.currentUser?.uid) return;
    retrieveConversations(auth.currentUser?.uid).catch((error) => {
      console.log(error);
      toast.error("You know what happened? Something terrible did happen! 😢");
    });
  }, [auth.currentUser?.uid]);

  useEffect(() => {
    if (!selectedConversation || !currentUserId) return;
    const q = query(
      collection(db, "chats"),
      where("conversationId", "==", selectedConversation.id),
      orderBy("sentTime")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newMessages = snapshot.docs.map((doc) => doc.data() as Chat);
      setMessages(newMessages);
    });

    return () => unsubscribe();
  }, [selectedConversation]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || !selectedConversation) return;

    const newMessage: Chat = {
      conversationId: selectedConversation.id,
      id: ulid(),
      senderId: currentUserId!,
      message: inputMessage,
      sentTime: new Date().toISOString(),
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
        {userRole === "student" ? <DashboardHeader /> : <CDashboardHeader />}
      </div>
      <MainContainer>
        <Sidebar position="left">
          <Search placeholder="Search..." />
          <ConversationList>
            {conversations.map((convo) => (
              <Conversation
                key={convo.id}
                name={convo.counsellorName}
                info={"Counsellor"}
                active={selectedConversation?.id === convo.id}
                onClick={() => setSelectedConversation(convo)}
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
                  sender:
                    msg.senderId === currentUserId
                      ? "Student"
                      : selectedConversation?.counsellorName,
                  direction:
                    msg.senderId === currentUserId ? "outgoing" : "incoming",
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
