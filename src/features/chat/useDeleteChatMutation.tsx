import { deleteChat } from "@/entities/chat/api";
import { Chats } from "@/entities/chat/model";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router";
import { toast } from "react-toastify";

const useDeleteChatMutation = () => {
  const queryClient = useQueryClient();
  const { id } = useParams();
  return useMutation({
    mutationFn: deleteChat,
    mutationKey: ["deleteChat"],
    onSuccess: () => {
      queryClient.setQueryData(["chats"], (oldData: Chats) => {
        if (oldData) {
          return oldData.filter((chat) => chat.chatId !== id);
        }
        return oldData;
      });
    },
    onError: (error) => {
      console.error("Error delete chat:", error);
      toast.error("Error delete chat. Please try again.");
    },
  });
};

export default useDeleteChatMutation;
