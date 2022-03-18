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
import { useMoralis } from "react-moralis";
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isAuthenticated } = useMoralis();
  const navigate = useNavigate();
  const [callId, setCallId] = useState("");
  return (
    <div className="relative">
      {isAuthenticated &&
        <div className="bg-transparent absolute top-12 left-12   bg-green-500 text-green-50 font-bold text-lg py-4 pl-4 pr-16 shadow-2xl rounded-xl">
          <p>AUTHENTICATED</p>
        </div>


      }
      {isAuthenticated ?
        <Box bg="linear-gradient(#41B7BB, #59929C,#042A3F)" w="100vw" h="100vh">
          <Center h="100vh" flexDirection="column">
            <div className="flex flex-row justify-center items-center gap-12">
              <div className="bg-white border border-slate-400 py-5 px-3 font-roboto text-lg rounded-lg w-[320px]">
                <input id="username--input" name="nickname" type="text"
                  className="outline-none text-slate-700 bg-transparent w-auto" maxLength={200}
                  placeholder="Meeting topic" required />
              </div>

              <div className=" flex flex-col items-center justify-center">
                <Link to="/video">
                  <Button minWidth="200px">Create Room</Button>
                </Link>
                <Button onClick={onOpen} mt={3} minWidth="200px">
                  Join Room
                </Button>
              </div>
            </div>


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
        :
        navigate("/login")
      }

    </div>
  );
};

export default Home;
