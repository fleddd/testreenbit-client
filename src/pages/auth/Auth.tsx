import { GoogleAuthButton } from "@/widgets/auth";

const Auth = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 gap-4">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Welcome to ReenBit Test Task</h1>
        <p className="text-xl">Authorize through google provider.</p>
      </div>
      <GoogleAuthButton />
    </div>
  );
};

export default Auth;
