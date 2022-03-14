import { CopyIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Flex,
  Heading,
  IconButton,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { AiFillInfoCircle, AiOutlineMenu, AiOutlineBell } from "react-icons/ai";

type VideoHeaderPrep = {
  peerId: string;
};
const VideoHeader = ({ peerId }: VideoHeaderPrep) => {
  const time = new Date().toLocaleTimeString();
  return (
    <Flex p="2" flexDirection="column" justifyContent="center">
      <Flex ml={3} alignItems="center">
        <Heading size="md" mr={3}>
          Logo
        </Heading>
        <Flex alignItems="center" bg="#32757E" mr={3}>
          <Heading size="md" mr={3} color="#00C4DF">
            Room ID:
          </Heading>
          <Text color="white">{peerId}</Text>
        </Flex>
        <IconButton
          bg="transparent"
          aria-label="Search database"
          _hover={{
            backgroundColor: "transparent",
          }}
          _focus={{
            backgroundColor: "transparent",
          }}
          icon={<CopyIcon color="white" />}
          mr={3}
          onClick={() => {
            navigator.clipboard.writeText(peerId);
          }}
        />

        <Spacer />

        <Flex justifyContent="center" alignItems="center">
          <Flex bg="whiteAlpha.900" p="2" mr={3}>
            <Text>{time}</Text>
          </Flex>
          <IconButton
            bg="transparent"
            aria-label="Search database"
            _hover={{
              backgroundColor: "transparent",
            }}
            _focus={{
              backgroundColor: "transparent",
            }}
            icon={<AiFillInfoCircle color="black" size="30px" />}
            mr={3}
          />
          <IconButton
            bg="transparent"
            aria-label="Search database"
            _hover={{
              backgroundColor: "transparent",
            }}
            _focus={{
              backgroundColor: "transparent",
            }}
            icon={<AiOutlineMenu color="white" size="30px" />}
            mr={3}
          />
          <IconButton
            bg="transparent"
            aria-label="Search database"
            _hover={{
              backgroundColor: "transparent",
            }}
            _focus={{
              backgroundColor: "transparent",
            }}
            icon={<AiOutlineBell color="white" size="30px" />}
            mr={3}
          />
          <Avatar name="Neal" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default VideoHeader;
