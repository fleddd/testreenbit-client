import { ChatDto } from "@/entities/chat/model";
import { formatTimeForChats } from "@/shared/lib";
import { useNavigate } from "react-router";

const ChatItem = ({
  chatId,
  avatar,
  displayName,
  lastMessageDate,
  lastMessageText,
}: ChatDto) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/${chatId}`);
  };

  const formattedTime = formatTimeForChats(lastMessageDate);

  return (
    <div
      onClick={handleClick}
      className="w-full h-22 min-h-22 flex items-center justify-between p-3 cursor-pointer border-b-2 border-gray-200 rounded-lg"
    >
      <div>
        <img
          src={avatar}
          alt="User Avatar"
          className="w-10 h-10 rounded-full bg-black"
        />
      </div>
      <div className="h-full flex items-center justify-center flex-col self-start flex-1 px-3">
        <p className="w-full text-gray-800 text-sm">{displayName}</p>
        <p className="w-full text-gray-500 text-xs max-w-56 max-h-4 overflow-hidden overflow-ellipsis">
          {lastMessageText}
        </p>
      </div>
      <div>
        <div className="text-gray-600 text-xs">{formattedTime}</div>
      </div>
    </div>
  );
};

export default ChatItem;
