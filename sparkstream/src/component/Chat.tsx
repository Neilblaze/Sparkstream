import {
  Center,
  Heading,
  Box,
  Flex,
  Text,
  Button,
  Avatar,
  Input,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { mockChatMessage } from "../fakeData";

const Chat = () => {
  const [chatMessage, setChatMessage] = useState<any[]>(mockChatMessage);
  const messageRef = useRef<HTMLInputElement>(null);
  const handleSend = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const Usermessage = {
      username: "Kai",
      self: true,
      time: Date.now(),
      message: messageRef.current?.value,
    };
    setChatMessage((prev) => [...prev, Usermessage]);
    if (messageRef.current) {
      messageRef.current.value = "";
    }
  };
  return (
    <>
      <Center>
        <Heading size="md">Chat</Heading>
      </Center>
      <Box style={{ overflow: "scroll", maxHeight: "150px" }} p={1}>
        {chatMessage.map((m) => (
          <>
            <Flex
              alignItems="center"
              mt={5}
              justifyContent={m.self === true ? "flex-end" : "flex-start"}
            >
              <Avatar
                name={m.username}
                w={8}
                h={8}
                // src="https://bit.ly/dan-abramov"
                mr={1}
              />
              <Box
                bg="whiteAlpha.900"
                pt="1"
                pb="1"
                pl="3"
                pr="3"
                borderRadius="15px"
              >
                <Text fontWeight="bold">{m.username}</Text>
                <Text>{m.message}</Text>
              </Box>
            </Flex>
            <Flex justifyContent={m.self ? "flex-end" : "flex-start"} ml={10}>
              <Text color="gray" fontSize="xs">
                4 min ago
              </Text>
            </Flex>
          </>
        ))}
      </Box>
      <Flex
        position="absolute"
        bottom="1"
        left="2"
        bg="whiteAlpha.900"
        height="40px"
        width="90%"
      >
        <Input
          placeholder="Write your message"
          mr={3}
          h={10}
          // onChange={(e) => setMessage(e.currentTarget.value)}
          ref={messageRef}
          color="black"
        />
        <Button colorScheme="teal" onClick={(e) => handleSend(e)}>
          Send
        </Button>
      </Flex>
    </>
  );
};

export default Chat;
