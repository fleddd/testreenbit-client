import { getMessages } from "@/entities/message/api";
import { Messages } from "@/entities/message/model";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";

const useMessagesQuery = () => {
  const { id } = useParams();
  return useQuery<Messages>({
    queryKey: ["messages", id],
    queryFn: () => getMessages({ chatId: id! }),
    enabled: !!id,
  });
};

export default useMessagesQuery;
