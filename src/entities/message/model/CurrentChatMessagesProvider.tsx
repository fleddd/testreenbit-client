import React from "react";
import { Messages } from "./types";
import { useMessagesQuery } from "@/features/message";

const CurrentChatMessagesContext = React.createContext<Messages>([]);

export const useCurrentChatMessagesContext = () => {
  return React.useContext(CurrentChatMessagesContext);
};

export const CurrentChatMessagesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const messages = useMessagesQuery();

  if (messages.isError || messages == undefined) {
    return (
      <div className="h-full flex items-center justify-center">
        Error fetching messages
      </div>
    );
  }

  return (
    <CurrentChatMessagesContext.Provider value={messages.data || []}>
      {children}
    </CurrentChatMessagesContext.Provider>
  );
};
