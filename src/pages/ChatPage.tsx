import { FC, useContext, useEffect } from "react";
import Header from "../component/Header/Header";
import Chats from "../component/Chat/Chats";
import Footer from "../component/Footer/Footer";
import { ChatContext } from "../lib/context/ChatContext";
import { ChatContextInterface } from "../lib/types";
import { Flex } from "@chakra-ui/react";

const ChatPage: FC = () => {
  const chat = useContext(ChatContext) as ChatContextInterface;

  // loading chat on component did mount
  useEffect(() => {
    chat?.getChat();
  }, []);

  return (
    <Flex
      height="100vh"
      direction="column"
      width={{ md: "700px", lg: "900px" }}
      paddingX="3"
      marginX="auto"
      shadow="xs"
    >
      <Header header={{ name: chat?.name, from: chat?.from, to: chat?.to }} />
      <Chats
        chats={chat?.chats}
        getMoreChats={chat?.getMoreChats}
        response={{ status: chat?.status, message: chat?.message }}
      />
      <Footer addChat={chat?.addChat} />
    </Flex>
  );
};

export default ChatPage;
