import { Link } from "react-router";

const GoogleAuthButton = () => {
  const isProduction = true;
  const url = isProduction
    ? "https://testreenbit-server.onrender.com/api/auth/login"
    : "http://localhost:3030/api/auth/login";
  return (
    <Link
      to={url}
      className="px-2 py-1 rounded-md bg-blue-400 text-white cursor-pointer"
    >
      Login through Google
    </Link>
  );
};

export default GoogleAuthButton;
