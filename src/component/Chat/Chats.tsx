import { FC, useEffect, useState, useRef, Fragment } from "react";
import { Box, Button, Spinner } from "@chakra-ui/react";
import Chat from "./Chat";
import { ChatType, ResponseType } from "../../lib/types";

interface ChatsProps {
  chats: ChatType[];
  response: ResponseType;
  getMoreChats: (page: number) => void;
}

const Chats: FC<ChatsProps> = ({ chats, response, getMoreChats }) => {
  // page state
  const [page, setPage] = useState<number>(0);
  // scroll state
  const [scrollTop, setScrollTop] = useState<boolean>(false);

  // chat list reference
  const chatsRef = useRef(document.createElement("div"));

  // scroll element reference
  const scrollRef = useRef(document.createElement("div"));

  // load old chats function for loading old chats
  const loadOldChats = () => {
    getMoreChats(page + 1);
    setPage((prev) => prev + 1);
  };

  //adding scroll event listener to chat list for updating scroll event
  useEffect(() => {
    chatsRef.current.addEventListener("scroll", () => {
      const { scrollTop } = chatsRef.current;
      if (scrollTop === 0) setScrollTop(true);
      else setScrollTop(false);
    });
  }, []);

  // calling load old chat whenever scroll reaches to top
  useEffect(() => {
    if (scrollTop) {
      loadOldChats();
    }
  }, [scrollTop]);

  // scrolling new chats into view
  useEffect(() => {
    scrollRef.current?.scrollIntoView();
  }, [chats]);

  return (
    <Box flex="1" overflowY="scroll" ref={chatsRef} className="hideScroll">
      {/* spinner */}
      {response.status === "loading" && (
        <Spinner
          thickness="2px"
          speed="0.8s"
          emptyColor="gray.200"
          color="brand.100"
          size="lg"
          display="block"
          marginX="auto"
          marginY="5"
        />
      )}

      {/* chats/messages */}
      {chats?.map((chat) => (
        <Fragment key={chat.id}>
          <Chat chat={chat} />
          <div ref={scrollRef}></div>
        </Fragment>
      ))}
    </Box>
  );
};

export default Chats;
