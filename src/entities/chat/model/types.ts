export type ChatDto = {
  chatId: string;
  displayName: string;
  lastMessageText: string;
  lastMessageDate: string;
  avatar: string;
};

export type Chats = ChatDto[];
