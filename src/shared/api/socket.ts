import { io, Socket } from "socket.io-client";

const SOCKET_URL = "http://localhost:3000"; // Replace with your backend URL

// Initialize the socket connection
export const socket: Socket = io(SOCKET_URL, {
  autoConnect: false, // Prevent auto-connection; connect manually when needed
  withCredentials: true,
});
