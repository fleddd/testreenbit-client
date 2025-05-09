import { getChats } from "@/entities/chat/api";
import { Chats } from "@/entities/chat/model";
import { useQuery } from "@tanstack/react-query";

const useChatsQuery = () => {
  return useQuery<Chats>({
    queryKey: ["chats"],
    queryFn: getChats,
  });
};

export default useChatsQuery;
