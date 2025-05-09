import ChatItem from "./ChatItem";
import { useChatsContext, useChatsStore } from "@/entities/chat/model";

const ChatsList = () => {
  const { searchedChat } = useChatsStore();
  const chats = useChatsContext();

  return (
    <div className="h-[calc(100dvh-230px)] overflow-auto flex flex-col gap-3">
      {chats
        ?.filter((item) => {
          if (searchedChat) {
            return item.displayName
              .toLowerCase()
              .includes(searchedChat.toLowerCase());
          }
          return item;
        })
        .map((item) => {
          return <ChatItem key={item.lastMessageDate} {...item} />;
        })}
    </div>
  );
};

export default ChatsList;
