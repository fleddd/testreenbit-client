export const getChats = async () => {
  const response = await fetch(import.meta.env.VITE_BASE_URL + "chats", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const createChat = async ({
  firstName,
  lastName,
  creatorId,
}: {
  firstName: string;
  lastName: string;
  creatorId: string;
}) => {
  const response = await fetch(import.meta.env.VITE_BASE_URL + "chats", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      displayName: `${firstName} ${lastName}`,
      membersId: [creatorId],
    }),
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const deleteChat = async ({ chatId }: { chatId: string }) => {
  const response = await fetch(import.meta.env.VITE_BASE_URL + "chats", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ chatId }),
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const editChat = async ({
  firstName,
  lastName,
  chatId,
}: {
  firstName: string;
  lastName: string;
  chatId: string;
}) => {
  const response = await fetch(import.meta.env.VITE_BASE_URL + "chats", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      chatId,
      displayName: `${firstName} ${lastName}`,
    }),
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
