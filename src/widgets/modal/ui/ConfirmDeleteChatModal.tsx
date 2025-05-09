import { useDeleteChatMutation } from "@/features/chat";
import { useNavigate, useParams } from "react-router";

const ConfirmDeleteChatModal = ({ onClose }: { onClose: () => void }) => {
  const { mutateAsync } = useDeleteChatMutation();
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = async () => {
    await mutateAsync({ chatId: id! });
    navigate("/", { replace: true });
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="flex flex-col gap-4 bg-white rounded-lg shadow-lg p-6 w-96">
        <div className="flex flex-col">
          <p className="text-xl font-bold ">Are u sure?</p>
          <p>Deleting a chat is not recoverable.</p>
        </div>

        <div className="flex justify-center items-center gap-2">
          <button
            type="button"
            onClick={handleDelete}
            className="bg-red-400 text-white px-4 py-2 rounded-md hover:bg-red-500 cursor-pointer"
          >
            Yes, delete it!
          </button>
          <button
            className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 cursor-pointer"
            type="button"
            onClick={onClose}
          >
            No.
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteChatModal;
