import { useQueryClient } from "@tanstack/react-query";
import { UserDto } from "./types";

/// returns current authorized user as UserDto
export const useAuth = () => {
  return (useQueryClient().getQueryData(["auth"]) as UserDto) || null;
};
