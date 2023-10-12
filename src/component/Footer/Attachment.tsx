import { FC } from "react";
import { Box, Flex, IconButton } from "@chakra-ui/react";
import { FiCamera, FiVideo, FiFileText } from "react-icons/fi";

const Attachment: FC = () => {
  return (
    <Box
      bg="brand.100"
      paddingX="1"
      position="absolute"
      top="-150%"
      left="-150%"
      borderRadius="50px"
      zIndex="2"
    >
      <Flex position="relative">
        <IconButton
          aria-label="Header Edit"
          icon={<FiCamera />}
          colorScheme="brand.100"
          size="lg"
        />
        <IconButton
          aria-label="Header Edit"
          icon={<FiVideo />}
          colorScheme="brand.100"
          size="lg"
        />
        <IconButton
          aria-label="Header Edit"
          icon={<FiFileText />}
          colorScheme="brand.100"
          size="lg"
        />
      </Flex>
      {/* triangle */}
      <Box
        position="absolute"
        left="45%"
        borderTopColor="brand.100"
        className="triangle"
      />
    </Box>
  );
};

export default Attachment;
