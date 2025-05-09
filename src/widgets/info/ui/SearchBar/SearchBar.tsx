import { useChatsStore } from "@/entities/chat/model";

const SearchBar = () => {
  const { searchedChat, setSearchedChat } = useChatsStore();
  return (
    <input
      onChange={(e) => setSearchedChat(e.target.value)}
      type="search"
      className="grow w-full border-2 bg-gray-100 border-[#e0e0e0] outline-none placeholder:pl-1 p-2 text-xl rounded-xl"
      placeholder="Search"
    />
  );
};

export default SearchBar;
