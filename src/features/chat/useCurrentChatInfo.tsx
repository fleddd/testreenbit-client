import { useChatsContext } from "@/entities/chat/model";
import { useParams } from "react-router";

const useCurrentChatInfo = () => {
  const { id } = useParams();
  const chats = useChatsContext();
  return chats?.find((chat) => chat.chatId === id) || null;
};

export default useCurrentChatInfo;
