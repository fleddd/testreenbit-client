const NewMessageNotification = ({
  text,
  avatar,
  displayName,
}: {
  text: string;
  avatar: string;
  displayName: string;
}) => {
  return (
    <div className="p-2 flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <img alt="avatar" className="w-8 h-8 rounded-full" src={avatar} />
        <span className="font-semibold">{displayName}</span>
      </div>
      <p>{text}</p>
    </div>
  );
};

export default NewMessageNotification;
