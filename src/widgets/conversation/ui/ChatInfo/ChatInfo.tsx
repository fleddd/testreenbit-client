import { useCurrentChatInfo } from "@/features/chat";
import { ConfirmDeleteChatModal, EditChatModal } from "@/widgets/modal";
import { useState } from "react";

const ChatInfo = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const chat = useCurrentChatInfo();
  if (!chat) return;

  const handleEdit = () => {
    setIsEditModalOpen(true);
  };

  const handleDelete = () => {
    setIsDeleteModalOpen(true);
  };

  return (
    <>
      <div className="p-5 bg-gray-200 flex justify-between">
        <div className="flex items-center gap-2">
          <div className="">
            <img
              src={chat?.avatar}
              alt="User Avatar"
              className="w-10 h-10 rounded-full aspect-square object-cover"
            />
          </div>
          <div className="font-semibold">
            <h2>{chat?.displayName}</h2>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleEdit}
            className="bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-500 cursor-pointer"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-400 text-white px-4 py-2 rounded-md hover:bg-red-500 cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>
      {isEditModalOpen && (
        <EditChatModal onClose={() => setIsEditModalOpen(false)} />
      )}
      {isDeleteModalOpen && (
        <ConfirmDeleteChatModal onClose={() => setIsDeleteModalOpen(false)} />
      )}
    </>
  );
};

export default ChatInfo;
