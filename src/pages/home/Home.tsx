import ChatsProvider from "@/entities/chat/model";
import LogoutButton from "@/widgets/auth/ui/GoogleAuth/LogoutButton";
import { ChatInfo, Input } from "@/widgets/conversation";
import {
  ChatsList,
  UserInfo,
  SearchBar,
  RandomQuotesToggle,
} from "@/widgets/info";
import CreateButton from "@/widgets/info/ui/ChatsList/CreateButton";
import { Outlet } from "react-router";

const Home = () => {
  return (
    <ChatsProvider>
      <div className="flex">
        {/* left side */}
        <div className="min-w-[350px] w-[350px] max-w-[600px]   flex flex-col justify-between">
          <div className="p-3 bg-gray-100">
            <div className="flex flex-col gap-2 mb-3">
              <div className="flex items-center justify-between mb-3">
                <UserInfo />
                <LogoutButton />
              </div>
              <RandomQuotesToggle />
            </div>
            <div className="w-full flex gap-1">
              <SearchBar />
              <CreateButton />
            </div>
          </div>
          <div className="grow p-3">
            <ChatsList />
          </div>
        </div>
        {/* right side */}
        <div className=" flex-1 h-screen flex flex-col justify-between">
          <ChatInfo />
          <Outlet />

          <Input />
        </div>
      </div>
    </ChatsProvider>
  );
};

export default Home;
