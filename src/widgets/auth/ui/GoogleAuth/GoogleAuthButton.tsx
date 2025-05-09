import { Link } from "react-router";

const GoogleAuthButton = () => {
  return (
    <Link
      to={"https://testreenbit-server.onrender.com/api/auth/login"}
      className="px-2 py-1 rounded-md bg-blue-400 text-white cursor-pointer"
    >
      Login through Google
    </Link>
  );
};

export default GoogleAuthButton;
