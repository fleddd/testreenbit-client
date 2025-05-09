import { create } from "zustand";

type Store = {
  searchedChat: string;
  setSearchedChat: (searchedChat: string) => void;
};

export const useChatsStore = create<Store>()((set) => ({
  searchedChat: "",
  setSearchedChat: (searchedChat: string) => set({ searchedChat }),
}));
