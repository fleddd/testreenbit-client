import { createChat } from "@/entities/chat/api";
import { Chats } from "@/entities/chat/model";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

const useCreateChatMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createChat,
    mutationKey: ["createChat"],
    onSuccess: (data) => {
      queryClient.setQueryData(["chats"], (oldData: Chats) => {
        if (oldData) {
          return [...oldData, data];
        }
        return oldData;
      });
    },
    onError: (error) => {
      console.error("Error creating chat:", error);
      toast.error("Error creating chat. Please try again.");
    },
  });
};

export default useCreateChatMutation;
