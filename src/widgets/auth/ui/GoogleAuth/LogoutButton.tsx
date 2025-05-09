import { useAuth } from "@/entities/user/model";
import { useLogout } from "@/features/auth";

const LogoutButton = () => {
  const user = useAuth();
  const { mutateAsync } = useLogout();

  const handleLogout = async () => {
    if (user) {
      await mutateAsync();
    }
  };
  return (
    <button
      onClick={handleLogout}
      type="button"
      className="px-2 py-1 rounded-md bg-blue-400 text-white cursor-pointer hover:bg-blue-500 transition-colors duration-200 ease-in-out"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
