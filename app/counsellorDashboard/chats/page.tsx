"use client";
import CDashboardHeader from "@/app/components/CDashboardHeader";
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

type ChatConversationWithStudent = ChatConversation & {
  studentName: string;
};

const Page: React.FC = () => {
  const [messages, setMessages] = useState<Chat[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [conversations, setConversations] = useState<
    ChatConversationWithStudent[]
  >([]);
  const [selectedConversation, setSelectedConversation] =
    useState<ChatConversationWithStudent | null>(null);
  const [loadingMessages, setLoadingMessages] = useState(false);
  const context = useContext(userAuthContext);
  const currentUserId = auth.currentUser?.uid;

  // fetch all converstations for the current user

  const retrieveConversations = async (userId: string) => {
    console.log("retrieving conversations for user", userId);
    const q = query(
      collection(db, "conversations"),
      where("counsellorId", "==", userId)
    );

    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map(
      (doc) => doc.data() as ChatConversation
    );

    const newConversations = data.map(async (conversation) => {
      const studentId = conversation.studentId;
      const student = await retrieveStudentDetails(studentId);
      return {
        ...conversation,
        studentName: student.name as string,
      } as ChatConversationWithStudent;
    });

    console.log({
      newConversations,
    });

    const results = await Promise.all(newConversations);
    if (!results[0]) return;
    setConversations(results);
    setSelectedConversation(results[0]);
  };

  // retrieve student details

  const retrieveStudentDetails = async (studentId: string) => {
    const q = query(
      collection(db, "users"),
      where("id", "==", studentId),
      where("role", "==", "student"),
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
  useEffect(() => {
    let unsubscribe: (() => void) | null = null;
    if (!selectedConversation) return;
    const q = query(
      collection(db, "chats"),
      where("conversationId", "==", selectedConversation.id),
      orderBy("sentTime")
    );

    unsubscribe = onSnapshot(q, (snapshot) => {
      const newMessages = snapshot.docs.map((doc) => doc.data() as Chat);
      setMessages(newMessages);
    });

    return () => unsubscribe && unsubscribe();
  }, [selectedConversation]);
  return (
    <div style={{ position: "relative", height: "500px" }}>
      <div className="mb-16">
        <CDashboardHeader />
      </div>
      <MainContainer>
        <Sidebar position="left">
          <Search placeholder="Search..." />
          <ConversationList>
            {conversations.map((convo) => (
              <Conversation
                key={convo.id}
                name={convo.studentName}
                info={"student"}
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
                      ? "counsellor"
                      : selectedConversation?.studentName,
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
