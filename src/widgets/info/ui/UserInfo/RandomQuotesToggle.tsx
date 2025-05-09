import { useState } from "react";
import { socket } from "@/shared/api/socket";

const RandomQuoteToggle = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const handleToggle = () => {
    const newState = !isEnabled;
    setIsEnabled(newState);
    socket.emit("toggleRandomQuotes", newState);
  };

  return (
    <button
      onClick={handleToggle}
      className={`w-full px-4 py-2 rounded-md cursor-pointer ${
        isEnabled ? "bg-green-400" : "bg-gray-400"
      } text-white`}
    >
      {isEnabled ? "Stop Random Quotes" : "Start Random Quotes"}
    </button>
  );
};

export default RandomQuoteToggle;
