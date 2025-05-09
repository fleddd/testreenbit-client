import { logout } from "@/entities/user/api";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: logout,
    mutationKey: ["logout"],
    onSuccess: () => {
      queryClient.setQueryData(["auth"], null);
      navigate("/auth", { replace: true });
      toast.success("Logout successful");
    },
  });
};

export default useLogout;
