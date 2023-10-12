

import { FC, useState } from "react";
import { Heading, Box, Text, Flex, Avatar, IconButton } from "@chakra-ui/react";
import { FiEdit, FiMoreVertical } from "react-icons/fi";
import { HeaderType } from "../../lib/types";
import "./header.css";
import MenuPopup from "../MenuPopup/MenuPopup"; // Import the MenuPopup component

interface HeaderProps {
  header: HeaderType;
}

const Header: FC<HeaderProps> = ({ header }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <Box borderBottom="1px" borderBottomColor="gray.200" paddingY="3">
        {/* name and edit options */}
        <Flex align="center" justify="space-between" marginBottom="2" fontWeight="normal">
          <Heading as="h1" size="lg">
            {header.name}
          </Heading>
          <IconButton aria-label="Header Edit" icon={<FiEdit />} bg="transparent" />
        </Flex>
        {/* destination and more options */}
        <Flex align="center" justify="space-between" gap="3">
          {/* avatar */}
          <Avatar
            name="Trip No."
            src="https://img.traveltriangle.com/blog/wp-content/uploads/2017/05/horsley-hills-in-Andhra-SS220520171.jpg"
            size="md"
          />
          {/* destination */}
          <Box flex={1}>
            {/* from */}
            <Flex gap="2" alignItems="center">
              <Text fontWeight="500" color="gray.600">
                From
              </Text>
              <Text fontWeight="600">{header.from}</Text>
            </Flex>
            {/* to */}
            <Flex gap="2" alignItems="center">
              <Text fontWeight="500" color="gray.600">
                To
              </Text>
              <Text fontWeight="600">{header.to}</Text>
            </Flex>
          </Box>
          {/* more options */}
          <IconButton
            aria-label="Header Options"
            icon={<FiMoreVertical />}
            bg="transparent"
            onClick={handleMenuClick}
          />
        </Flex>
      </Box>
      {isMenuOpen &&
      (
        <div className="menu-popup">
          <MenuPopup />
        </div>
      )}
      
       {/* Render the MenuPopup component when isMenuOpen is true */}
    </header>
  );
};

export default Header;

