import { FC } from "react";
import { Box, Text, Flex, Avatar, AvatarBadge } from "@chakra-ui/react";
import { MdVerified } from "react-icons/md";
import { ChatType } from "../../lib/types";

interface ChatProps {
  chat: ChatType;
}

const Chat: FC<ChatProps> = ({ chat }) => {
  return (
    <Flex
      width="80%"
      maxW="500px"
      marginLeft={chat.sender.self ? "auto" : 0}
      gap="3"
      marginBottom="6"
    >
      {!chat.sender.self && (
        <Box>
          <Avatar src={chat.sender.image} size="sm">
            {chat.sender.is_kyc_verified && (
              <AvatarBadge
                bg="white"
                border="none"
                color="blue.500"
                fontSize="md"
              >
                <MdVerified />
              </AvatarBadge>
            )}
          </Avatar>
        </Box>
      )}
      <Box width="100%">
        {chat.message.split("<br>").map(
          (mess, index) =>
            mess && (
              <Text
                key={index}
                padding="3"
                marginBottom="1"
                borderRadius="2xl"
                boxShadow="lg"
                width="fit-content"
                variant={chat.sender.self ? "selfMessage" : "otherMessage"}
              >
                {mess}
              </Text>
            ),
        )}
      </Box>
    </Flex>
  );
};

export default Chat;
