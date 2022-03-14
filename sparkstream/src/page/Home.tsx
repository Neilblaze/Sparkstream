import {
  Button,
  Center,
  Box,
  useDisclosure,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [callId, setCallId] = useState("");
  return (
    <Box bg="linear-gradient(#41B7BB, #59929C,#042A3F)" w="100vw" h="100vh">
      <Center h="100vh" flexDirection="column">
        <Link to="/video">
          <Button minWidth="200px">Create Room</Button>
        </Link>
        <Button onClick={onOpen} mt={3} minWidth="200px">
          Join Room
        </Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Join Room</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Input
                placeholder="Please input RoomID"
                onChange={(e) => setCallId(e.target.value)}
              />
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Link to={`join/${callId}`}>
                <Button variant="ghost">Enter Room</Button>
              </Link>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Center>
    </Box>
  );
};

export default Home;
