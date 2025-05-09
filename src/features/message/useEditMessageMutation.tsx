import { editMessage } from "@/entities/message/api";
import { MessageDto, Messages } from "@/entities/message/model";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router";
import { toast } from "react-toastify";

const useEditChatMutation = () => {
  const queryClient = useQueryClient();
  const { id } = useParams();
  return useMutation({
    mutationFn: editMessage,
    mutationKey: ["editMessage"],
    onSuccess: (newMessage: MessageDto) => {
      queryClient.setQueryData(["messages", id], (oldData: Messages) => {
        return oldData.map((oldChat) =>
          oldChat.chatId === id
            ? { ...oldChat, text: newMessage.text }
            : oldChat
        );
      });
    },
    onError: (error) => {
      console.error("Error editing chat:", error);
      toast.error("Error editing chat. Please try again.");
    },
  });
};

export default useEditChatMutation;
