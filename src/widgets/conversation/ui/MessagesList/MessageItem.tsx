import { ChatDto } from "@/entities/chat/model";
import { useAuth } from "@/entities/user/model";
import { formatTimeForMessage } from "@/shared/lib/formatTimeForMessage";
import { useState } from "react";
import {
  useEditMessageMutation,
  useDeleteMessageMutation,
} from "@/features/message";

const MessageItem = ({
  currentChatInfo,
  text,
  time,
  senderId,
  id,
}: {
  currentChatInfo: ChatDto;
  text: string;
  time: string;
  senderId: string;
  id: string;
}) => {
  const myData = useAuth();
  const { id: myId } = myData;

  const isMyMessage = senderId === myId;
  const formattedTime = formatTimeForMessage(time);

  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const { mutateAsync: editMessage } = useEditMessageMutation();
  const { mutateAsync: deleteMessage } = useDeleteMessageMutation();

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      await editMessage({ messageId: id, newText: editedText });
    } catch (error) {
      console.error("Error editing message:", error);
    } finally {
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditedText(text);
    setIsEditing(false);
  };

  const handleDelete = async () => {
    try {
      await deleteMessage({ messageId: id });
    } catch (error) {
      console.error("Error deleting message:", error);
    } finally {
      setShowDeleteConfirm(false);
    }
  };

  const handleDeleteCancel = () => {
    setShowDeleteConfirm(false);
  };

  return (
    <div
      className={`w-fit max-w-[1000px] flex flex-col gap-2 items-start justify-start ${
        isMyMessage && "self-end"
      } ${
        isMyMessage ? "bg-gray-50" : "bg-gray-700"
      }  p-4 rounded-3xl shadow-md`}
    >
      <div className="flex justify-between w-full items-center gap-3">
        <div className="flex items-center gap-2">
          <img
            src={isMyMessage ? myData.avatar : currentChatInfo.avatar}
            alt="User Avatar"
            className="w-10 h-10 rounded-full aspect-square object-cover"
          />
          <span
            className={`text-sm font-semibold ${
              isMyMessage ? "text-gray-700" : "text-white"
            }`}
          >
            {isMyMessage ? myData.displayName : currentChatInfo.displayName}
          </span>
          <span
            className={`text-xs ${
              isMyMessage ? "text-gray-500" : "text-gray-200"
            }`}
          >
            {formattedTime}
          </span>
        </div>
        {isMyMessage && !isEditing && (
          <div className="flex gap-1">
            <button
              type="button"
              onClick={handleEdit}
              className="cursor-pointer px-2 py-1 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
            >
              Edit
            </button>
            <button
              type="button"
              onClick={() => setShowDeleteConfirm(true)} // Show confirmation popup
              className="cursor-pointer px-2 py-1 bg-red-400 text-white rounded-md hover:bg-red-500"
            >
              Delete
            </button>
          </div>
        )}
      </div>

      {isEditing ? (
        <div className="flex flex-col gap-2">
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className="p-2 border rounded-md outline-none"
          />
          <div className="flex gap-2">
            <button
              type="button"
              onClick={handleSave}
              className="cursor-pointer px-2 py-1 bg-blue-400 text-white rounded-md hover:bg-blue-500"
            >
              Save
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="cursor-pointer px-2 py-1 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <p
          className={`text-md ${isMyMessage ? "text-gray-800" : "text-white"}`}
        >
          {text}
        </p>
      )}

      {/* Delete Confirmation Popup */}
      {showDeleteConfirm && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-5">
          <div className="bg-white p-5 rounded-md shadow-md flex flex-col gap-3">
            <p className="text-gray-700">
              Are you sure you want to delete this message?
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={handleDelete}
                className="cursor-pointer px-4 py-2 bg-red-400 text-white rounded-md hover:bg-red-500"
              >
                Confirm
              </button>
              <button
                type="button"
                onClick={handleDeleteCancel}
                className="cursor-pointer px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessageItem;
