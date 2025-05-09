export const getMessages = async ({ chatId }: { chatId: string }) => {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_URL}message?chatId=${chatId}`, // Pass chatId as a query parameter
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const sendMessage = async ({
  text,
  chatId,
  senderId,
}: {
  text: string;
  chatId: string;
  senderId: string;
}) => {
  const response = await fetch(import.meta.env.VITE_BASE_URL + "message", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      text,
      chatId,
      senderId,
    }),
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const deleteMessage = async ({ messageId }: { messageId: string }) => {
  console.log(messageId);

  const response = await fetch(import.meta.env.VITE_BASE_URL + "message", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ messageId }),
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const editMessage = async ({
  messageId,
  newText,
}: {
  messageId: string;
  newText: string;
}) => {
  const response = await fetch(import.meta.env.VITE_BASE_URL + "message", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      messageId,
      newText,
    }),
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
