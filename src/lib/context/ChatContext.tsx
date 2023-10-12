import { createContext, FC, ReactNode, useState } from "react";
import {
  ChatContextInterface,
  ChatType,
  HeaderType,
  ResponseType,
} from "../types";

export const ChatContext = createContext<ChatContextInterface | null>(null);

interface ChatProviderProps {
  children: ReactNode;
}

const ChatProvider: FC<ChatProviderProps> = ({ children }) => {
  // initial states
  const initialHeader = { name: "", from: "", to: "" };
  const initialResponse = { message: "", status: "loading" };

  // use state
  const [header, setHeader] = useState<HeaderType>(initialHeader);
  const [response, setResponse] = useState<ResponseType>(initialResponse);
  const [chats, setChats] = useState<ChatType[]>([]);

  // function for chats

  // add chat
  const addChat = (chat: ChatType) => {
    setChats((prev) => [...prev, chat]);
  };

  // fetch chats
  const getChat = async () => {
    try {
      setResponse(initialResponse);
      const res = await fetch("https://qa.corider.in/assignment/chat?page=0");
      const json = await res.json();
      setHeader({ name: json.name, from: json.from, to: json.to });
      setChats(json.chats);
      setResponse({ status: json.status, message: json.message });
    } catch (error) {
      setResponse({ status: "error", message: "some error occur" });
    }
  };

  // load more/old chats
  const getMoreChats = async (page: number) => {
    try {
      setResponse(initialResponse);
      const res = await fetch(
        `https://qa.corider.in/assignment/chat?page=${page}`,
      );
      const json = await res.json();
      setChats((prev) => [...json.chats, ...prev]);
      setResponse({ status: json.status, message: json.message });
    } catch (error) {
      setResponse({ status: "error", message: "some error occur" });
    }
  };

  return (
    <ChatContext.Provider
      value={{ chats, addChat, getChat, getMoreChats, ...header, ...response }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
