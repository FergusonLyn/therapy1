export type Chat = {
  id: string;
  message: string;
  sentTime: string;
  senderId: string;
  conversationId: string;
};

export type ChatConversation = {
  id: string;
  studentId: string;
  counsellorId: string;
};
