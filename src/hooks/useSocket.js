import { useContext } from "react";
import { SocketContext } from "../contexts/sockets-context";

export const useSocket = function () {
  const context = useContext(SocketContext);
  return context;
};
