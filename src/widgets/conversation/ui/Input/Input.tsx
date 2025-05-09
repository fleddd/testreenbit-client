import { useCurrentChatInfo } from "@/features/chat";
import { useSendMessageMutation } from "@/features/message";
import { useState } from "react";
import { useAuth } from "@/entities/user/model";
import { socket } from "@/shared/api/socket";

const Input = () => {
  const chat = useCurrentChatInfo();
  const { mutateAsync: sendMessage } = useSendMessageMutation();
  const user = useAuth();
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!message.trim() || !chat || !user) return;

    try {
      await sendMessage({
        text: message,
        chatId: chat.chatId,
        senderId: user.id,
      });
      socket.emit("requestQuote", chat.chatId, chat.displayName, chat.avatar);
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-5 bg-gray-200 flex justify-between gap-2"
    >
      <input
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="bg-gray-100 w-full px-4 py-2 rounded-xl border-2 border-gray-300 outline-none"
      />
      <button
        type="submit"
        disabled={!chat || !message.trim()}
        className="border-2 bg-gray-100 border-gray-300 px-2 py-1 cursor-pointer rounded-xl"
      >
        Send
      </button>
    </form>
  );
};

export default Input;
