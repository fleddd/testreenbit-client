export const checkAuth = async () => {
  const res = await fetch(import.meta.env.VITE_BASE_URL + "auth/check", {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    const errorMessage = await res.json();

    throw new Error(errorMessage.errorMsg);
  }

  return await res.json();
};

export const logout = async () => {
  const response = await fetch(import.meta.env.VITE_BASE_URL + "auth/logout", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Logout failed");
  }
  return response.json();
};
