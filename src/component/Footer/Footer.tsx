import { FC, useState, ChangeEvent, FormEvent } from "react";
import { FormControl, IconButton, Input, Flex, Box } from "@chakra-ui/react";
import { VscSend } from "react-icons/vsc";
import { PiPaperclip } from "react-icons/pi";
import { ChatType } from "../../lib/types";
import Attachment from "./Attachment";

interface FooterProps {
  addChat: (newchat: ChatType) => void;
}

const Footer: FC<FooterProps> = ({ addChat }) => {
  // initial state
  const initialState: ChatType = {
    message: "",
    id: `${Math.random()}`,
    time: "",
    sender: {
      user_id: "1",
      image: "",
      is_kyc_verified: true,
      self: true,
    },
  };
  // form state
  const [newChat, setNewChat] = useState<ChatType>(initialState);
  const [attachment, setAttachment] = useState<boolean>(false);

  // onchange function for message input
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewChat({ ...newChat, message: event.target.value });
  };

  // onSubmit fumction of form
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newChat.message.trim() === "") return;

    const time = new Date().toISOString();
    addChat({ ...newChat, time });
    setNewChat(initialState);
  };

  // toggle attrachment
  const toggleAttachment = () => setAttachment(!attachment);

  return (
    <footer>
      <form onSubmit={onSubmit}>
        <Flex
          align="center"
          justify="space-between"
          bg="white"
          paddingX="4"
          marginTop={{ base: "3", sm: "7" }}
          marginBottom={{ base: "3", sm: "7", md: "10" }}
          borderRadius="lg"
          gap="2"
          boxShadow="base"
        >
          {/* form input */}
          <FormControl>
            <Input
              type="text"
              name="message"
              value={newChat.message}
              onChange={onChange}
              placeholder="Message"
              autoComplete="off"
              flex={1}
              variant="unstyled"
            />
          </FormControl>
          {/* attachment icon button*/}
          <Box position="relative">
            {attachment && <Attachment />}
            <IconButton
              type="button"
              aria-label="form-attachment"
              icon={<PiPaperclip />}
              bg="transparent"
              onClick={toggleAttachment}
            />
          </Box>
          {/* send icon button*/}
          <IconButton
            type="submit"
            aria-label="form-submit"
            icon={<VscSend />}
            bg="transparent"
          />
        </Flex>
      </form>
    </footer>
  );
};

export default Footer;
