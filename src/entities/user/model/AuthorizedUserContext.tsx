import { useCheckUserAuth } from "@/features/auth";
import React, { useEffect } from "react";
import { UserDto } from "./types";
import { Navigate, useLocation } from "react-router";
import { socket } from "@/shared/api/socket";
import { toast } from "react-toastify";
import { MessageDto, Messages } from "@/entities/message/model";
import { NewMessageNotification } from "@/shared/ui";
import { useQueryClient } from "@tanstack/react-query";
import { Chats } from "@/entities/chat/model";

const AuthorizedUserContext = React.createContext<UserDto | undefined>(
  undefined
);

export const useAuthorizedUserContext = () => {
  return React.useContext(AuthorizedUserContext);
};

export const AuthorizedUserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const queryClient = useQueryClient();
  const currentUser = useCheckUserAuth();
  const path = useLocation().pathname;

  useEffect(() => {
    if (currentUser.isSuccess && currentUser.data) {
      socket.connect();

      socket.on("receiveQuote", handleReceiveQuote);
      return () => {
        socket.disconnect();
        console.log("Socket disconnected");
      };
    }
  }, [currentUser.isSuccess, currentUser.data]);

  const handleReceiveQuote = (
    newMessage: MessageDto,
    displayName: string,
    avatar: string
  ) => {
    updateMessages(newMessage);
    updateChats(newMessage);
    showNotification(newMessage, displayName, avatar);
  };

  const updateMessages = (newMessage: MessageDto) => {
    queryClient.setQueryData(
      ["messages", newMessage.chatId],
      (oldMessages: Messages) => {
        return [newMessage, ...(oldMessages || [])];
      }
    );
  };

  const updateChats = (newMessage: MessageDto) => {
    queryClient.setQueryData(["chats"], (oldChats: Chats | undefined) => {
      if (!oldChats) return [];

      return oldChats.map((chat) =>
        chat.chatId === newMessage.chatId
          ? {
              ...chat,
              lastMessageText: newMessage.text,
              lastMessageDate: newMessage.time,
            }
          : chat
      );
    });
  };

  const showNotification = (
    newMessage: MessageDto,
    displayName: string,
    avatar: string
  ) => {
    toast.info(
      () => (
        <NewMessageNotification
          text={newMessage.text}
          displayName={displayName}
          avatar={avatar}
        />
      ),
      {
        pauseOnHover: false,
        autoClose: 3000,
        icon: false,
      }
    );
  };

  if (currentUser.isPending || currentUser.isLoading) {
    return (
      <div className="min-w-screen min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (currentUser.isSuccess && currentUser.data && path === "/auth") {
    return <Navigate to="/" replace={true} />;
  } else if (currentUser.isError && path !== "/auth") {
    return <Navigate to="/auth" replace={true} />;
  }

  return (
    <AuthorizedUserContext.Provider value={currentUser.data}>
      {children}
    </AuthorizedUserContext.Provider>
  );
};
