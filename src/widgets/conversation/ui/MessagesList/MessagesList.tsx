import { useCurrentChatMessagesContext } from "@/entities/message/model/CurrentChatMessagesProvider";
import MessageItem from "./MessageItem";
import { useCurrentChatInfo } from "@/features/chat";
import { useEffect, useRef } from "react";

const MessagesList = () => {
  const data = useCurrentChatMessagesContext();
  const currentChat = useCurrentChatInfo();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [data]);

  if (!currentChat)
    return (
      <div className="h-full flex flex-col gap-2 items-center justify-center bg-gray-600">
        <p className="text-md text-gray-600 font-medium ">Empty.</p>
      </div>
    );

  return (
    <div
      ref={scrollRef}
      className="h-full grow overflow-auto flex flex-col-reverse gap-2 bg-gray-50"
    >
      <div className="p-5 flex flex-col-reverse gap-2">
        {data.map((message) => (
          <MessageItem
            id={message.id}
            key={message.time}
            text={message.text}
            time={message.time}
            senderId={message.senderId}
            currentChatInfo={currentChat}
          />
        ))}
      </div>
    </div>
  );
};

export default MessagesList;
