import { BrowserRouter } from "react-router";
import { AppRouter } from "../router";

const RouterProvider = () => {
  return (
    <BrowserRouter basename="/testreenbit-client">
      <AppRouter />
    </BrowserRouter>
  );
};

export default RouterProvider;
