import { sendMessage } from "@/entities/message/api";
import { Chats } from "@/entities/chat/model";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useParams } from "react-router";

const useSendMessageMutation = () => {
  const queryClient = useQueryClient();
  const { id } = useParams();
  return useMutation({
    mutationFn: sendMessage,
    mutationKey: ["sendMessage"],
    onSuccess: (data) => {
      queryClient.setQueryData(["messages", id], (oldMessages: Chats) => {
        if (oldMessages) {
          return [
            { ...data, time: data.createdAt, id: data._id },
            ...oldMessages,
          ];
        }
        return oldMessages;
      });
    },
    onError: (error) => {
      console.error("Error creating chat:", error);
      toast.error("Error creating chat. Please try again.");
    },
  });
};

export default useSendMessageMutation;
