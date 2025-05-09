export type MessageDto = {
  id: string;
  text: string;
  time: string;
  senderId: string;
  chatId: string;
};

export type Messages = MessageDto[];
