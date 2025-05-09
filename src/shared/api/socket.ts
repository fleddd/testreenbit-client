import { io, Socket } from "socket.io-client";

// Initialize the socket connection
export const socket: Socket = io(import.meta.env.VITE_SOCKET_URL, {
  autoConnect: false, // Prevent auto-connection; connect manually when needed
  withCredentials: true,
});
