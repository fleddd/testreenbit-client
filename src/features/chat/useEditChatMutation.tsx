import { editChat } from "@/entities/chat/api";
import { ChatDto, Chats } from "@/entities/chat/model";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router";
import { toast } from "react-toastify";

const useEditChatMutation = () => {
  const queryClient = useQueryClient();
  const { id } = useParams();
  return useMutation({
    mutationFn: editChat,
    mutationKey: ["editChat"],
    onSuccess: (data: ChatDto) => {
      queryClient.setQueryData(["chats"], (oldData: Chats) => {
        return oldData.map((oldChat) =>
          oldChat.chatId === id
            ? { ...oldChat, displayName: data.displayName }
            : oldChat
        );
      });
      toast.success("Chat updated successfully!");
    },
    onError: (error) => {
      console.error("Error editing chat:", error);
      toast.error("Error editing chat. Please try again.");
    },
  });
};

export default useEditChatMutation;
