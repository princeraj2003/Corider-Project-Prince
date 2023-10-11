import { useState, useEffect, useRef } from "react";
import "./Chat.css";
import axios from "axios";
import MessageBox from "../MessageBox/MessageBox";
import Loader from "./Loader";

type Message = {
  id: number;
  message: string;
  time: string;
  sender: {
    self: boolean;
    image: string;
    kyc: boolean;
  };
}

const Chat = () => {
  const base = "https://qa.corider.in/assignment/chat?page=0";
  const scrollRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
// eslint-disable-next-line
  const handleScroll = async () => {
    if (scrollRef.current?.scrollTop === 0 && !isLoading) {
      setIsLoading(true);
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollRef.current) {// eslint-disable-next-line
        scrollRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [handleScroll]);

  useEffect(() => {
    const getMessages = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(base + currentPage);
        const data = res.data.chats;
        const newData = [...data, ...messages]
        // console.log(newData)

        const sortedData = newData.sort((a: Message, b: Message) => {
          const dateA = new Date(a.time).getTime();
          const dateB = new Date(b.time).getTime();
          return dateA - dateB;
        });

        // console.log(sortedData)
        setMessages(sortedData);
        // setMessages((prevMessages) => [...prevMessages, ...data]);
        if (scrollRef.current) {
          scrollRef.current.scrollTop = scrollRef.current.scrollHeight / 10;
        }
      } catch (err) {
        console.log(err);
      }
      setIsLoading(false);
    };
    getMessages();// eslint-disable-next-line
  }, [currentPage]);

  return (
    <div className="chat-block" ref={scrollRef}>
      {isLoading && <Loader />}
      {messages.map((message, index) => (
            <MessageBox
              key={message.id}
              isSent={message.sender.self}
              isKyc={message.sender.kyc}
              messageContent={message.message}
              senderAvatar={message.sender.image}
            />
          ))
        }
    </div>
  );
};

export default Chat;
