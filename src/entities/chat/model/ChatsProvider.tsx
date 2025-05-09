import React from "react";
import { Chats } from "./types";
import { useChatsQuery } from "@/features/chat";

const ChatsContext = React.createContext<Chats | undefined>(undefined);

export const useChatsContext = () => {
  return React.useContext(ChatsContext);
};

export const ChatsProvider = ({ children }: { children: React.ReactNode }) => {
  const chats = useChatsQuery();

  if (chats.isPending || chats.isLoading) {
    return <div className="w-full h-full">loading</div>;
  }

  return (
    <ChatsContext.Provider value={chats.data}>{children}</ChatsContext.Provider>
  );
};
