import { ToastContainer } from "react-toastify";
import QueryProvider from "./QueryProvider";
import RouterProvider from "./RouterProvider";
import { queryClient } from "@/shared/api/query-client";

const Providers = () => {
  return (
    <QueryProvider client={queryClient}>
      <RouterProvider />
      <ToastContainer
        closeOnClick
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        position="top-right"
        autoClose={2000}
      />
    </QueryProvider>
  );
};

export default Providers;
