import { useState } from "react";
import CreateChatModal from "@/widgets/modal/ui/CreateChatModal";
const CreateButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        type="button"
        className="w-12 grow bg-blue-400 text-white rounded-xl hover:bg-blue-500 cursor-pointer"
      >
        +
      </button>

      {isModalOpen && <CreateChatModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default CreateButton;
