import { useAuth } from "@/entities/user/model";

const UserInfo = () => {
  const user = useAuth();
  return (
    <div className="flex items-center gap-5 ">
      <div className="">
        <img
          src={user?.avatar}
          alt="Avatar"
          className="w-10 h-10 rounded-full aspect-square object-cover"
        />
      </div>
      <div>
        <h2 className="text-xl font-bold">{user?.displayName}</h2>
        <p className="text-gray-600">{user?.email}</p>
      </div>
    </div>
  );
};

export default UserInfo;
