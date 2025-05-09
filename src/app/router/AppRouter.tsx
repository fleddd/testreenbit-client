import { Routes, Route } from "react-router";
import { Home, Auth } from "@/pages/index";
import { AuthorizedUserContextProvider, useAuth } from "@/entities/user/model";
import { MessagesList } from "@/widgets/conversation";
import CurrentChatMessagesProvider from "@/entities/message/model";

const AppRouter = () => {
  const user = useAuth();
  console.log(user);

  return (
    <Routes>
      <Route
        element={
          <AuthorizedUserContextProvider>
            <Home />
          </AuthorizedUserContextProvider>
        }
      >
        <Route
          path="/"
          element={
            <CurrentChatMessagesProvider>
              <div className="h-full flex flex-col gap-2 items-center justify-center bg-gray-50">
                <p>
                  Select an existing chat or create a new one to see more
                  information.
                </p>
              </div>
            </CurrentChatMessagesProvider>
          }
        />
        <Route
          path="/:id"
          element={
            <CurrentChatMessagesProvider>
              <MessagesList />
            </CurrentChatMessagesProvider>
          }
        />
      </Route>

      <Route
        path="/auth"
        element={
          <AuthorizedUserContextProvider>
            <Auth />
          </AuthorizedUserContextProvider>
        }
      />
    </Routes>
  );
};

export default AppRouter;
