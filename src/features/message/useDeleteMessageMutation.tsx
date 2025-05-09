import { deleteMessage } from "@/entities/message/api";
import { Messages } from "@/entities/message/model";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router";
import { toast } from "react-toastify";

const useDeleteMessageMutation = () => {
  const queryClient = useQueryClient();
  const { id } = useParams();
  return useMutation({
    mutationFn: deleteMessage,
    mutationKey: ["deleteMessage"],
    onSuccess: ({ messageId }: { messageId: string }) => {
      queryClient.setQueryData(["messages", id], (oldData: Messages) => {
        if (oldData) {
          return oldData.filter((chat) => chat.id !== messageId);
        }
        return oldData;
      });
    },
    onError: (error) => {
      console.error("Error deleting chat:", error);
      toast.error("Error deleting message. Please try again.");
    },
  });
};

export default useDeleteMessageMutation;
