import {
  Box,
  Grid,
  Text,
  Flex,
  Heading,
  Spacer,
  Image,
  GridItem,
  IconButton,
  Center,
  Avatar,
  Input,
  Button,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
// import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { CopyIcon } from "@chakra-ui/icons";
import Logo from "../asset/plane.png";
import {
  BsFillCameraVideoFill,
  BsFillMicFill,
  BsFillMicMuteFill,
  BsFillBellFill,
} from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { mockChatMessage } from "../fakeData";

const Home = () => {
  const [chatMessage, setChatMessage] = useState<any[]>(mockChatMessage);
  const messageRef = useRef<HTMLInputElement>(null);

  const handleSend = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const Usermessage = {
      name: "Kai",
      self: true,
      time: Date.now(),
      message: messageRef.current?.value,
    };
    setChatMessage((prev) => [...prev, Usermessage]);
    if (messageRef.current) {
      messageRef.current.value = "";
    }
  };

  const webcamRef = useRef<HTMLVideoElement>(null);
  const getWebcam = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: { width: 1920, height: 1080 },
        audio: true,
      })
      .then((stream) => {
        let video = webcamRef.current;
        if (video) {
          setStream(stream);
          video.srcObject = stream;
          video.play();
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const [stream, setStream] = useState<MediaStream | null>(null);

  //For icon on camera switch
  const [cameraCloseIcon, setCameraCloseIcon] = useState<boolean>(false);
  const [micCloseIcon, setMicCloseIcon] = useState<boolean>(true);
  useEffect(() => {
    getWebcam();
  }, [webcamRef]);

  const handleStopCamera = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (stream) {
      const videoTrack = stream
        .getTracks()
        .find((track: any) => track.kind === "video");
      console.log(videoTrack);
      if (videoTrack) {
        if (videoTrack.enabled) {
          videoTrack.enabled = false;
        } else {
          videoTrack.enabled = true;
        }
        setCameraCloseIcon(!cameraCloseIcon);
      }
    }
  };
  const handleStopMic = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    console.log("test");
    if (stream) {
      const soundTrack = stream
        .getTracks()
        .find((track: any) => track.kind === "audio");
      console.log(soundTrack);
      if (soundTrack) {
        if (soundTrack.enabled) {
          soundTrack.enabled = false;
          setMicCloseIcon(true);
        } else {
          soundTrack.enabled = true;
          setMicCloseIcon(false);
        }
      }
    }
  };
  return (
    <Box p="5">
      <Grid
        h="95vh"
        templateRows="repeat(30, 1fr)"
        templateColumns="repeat(12, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={1} colSpan={1} alignSelf="center">
          <Flex alignItems="center">
            <Image src={Logo} boxSize="50px" mr={1} />
            <Heading size="md">Spark</Heading>
          </Flex>
        </GridItem>
        <GridItem colSpan={7} bg="gray.200" borderRadius="15px">
          <Flex p="2" flexDirection="column" justifyContent="center">
            <Flex ml={3}>
              <Flex flexDirection="column" justifyContent="center">
                <Heading size="md">Caller Id</Heading>
                <Text>fejkfjef-w1234rkfne20</Text>
              </Flex>
              <Spacer />
              <Flex justifyContent="center" alignItems="center">
                <IconButton
                  aria-label="Search database"
                  icon={<CopyIcon />}
                  mr={3}
                  bg="whiteAlpha.900"
                />
                <IconButton
                  aria-label="Search database"
                  bg="whiteAlpha.900"
                  icon={<CopyIcon />}
                />
              </Flex>
            </Flex>
          </Flex>
        </GridItem>
        <GridItem
          rowSpan={31}
          colSpan={4}
          bg="gray.200"
          borderRadius="15px "
          p="5"
          position="relative"
        >
          <Center>
            <Heading size="lg">Chat with Spark</Heading>
          </Center>
          <div style={{ overflow: "scroll", height: "500px" }}>
            {chatMessage.map((m) => (
              <>
                <Flex
                  alignItems="center"
                  mt={5}
                  justifyContent={m.self === true ? "flex-end" : "flex-start"}
                >
                  <Avatar
                    name={m.username}
                    src="https://bit.ly/dan-abramov"
                    mr={2}
                  />
                  <Box
                    bg="whiteAlpha.900"
                    pt="2"
                    pb="2"
                    pl="4"
                    pr="4"
                    borderRadius="15px"
                  >
                    <Text fontWeight="bold">{m.username}</Text>
                    <Text>{m.message}</Text>
                  </Box>
                </Flex>
                <Flex
                  justifyContent={m.self ? "flex-end" : "flex-start"}
                  ml={10}
                >
                  <Text color="gray" fontSize="xs">
                    4 min ago
                  </Text>
                </Flex>
              </>
            ))}
          </div>
          <Flex
            position="absolute"
            bottom="5"
            left="5"
            padding="5"
            bg="whiteAlpha.900"
            borderRadius="15px"
            height="80px"
            width="90%"
          >
            <Input
              placeholder="Write your message"
              mr={3}
              // onChange={(e) => setMessage(e.currentTarget.value)}
              ref={messageRef}
            />
            <Button colorScheme="teal" onClick={(e) => handleSend(e)}>
              {" "}
              Send
            </Button>
          </Flex>
        </GridItem>
        <GridItem rowSpan={26} colSpan={8} borderRadius="15px">
          <Flex justifyContent="center" borderRadius="15px">
            {/* <Webcam
              width="648"
              height="630"
              mirrored={false}
              style={{
                objectFit: "fill",
                position: "absolute",
              }}
            /> */}
            <video
              ref={webcamRef}
              style={{ maxWidth: "99%", borderRadius: "15px" }}
            ></video>
            {/* <Center position="absolute">
              <Avatar src="https://bit.ly/dan-abramov" />
            </Center> */}
          </Flex>
        </GridItem>
        <GridItem rowSpan={4} colSpan={8} bg="gray.200" borderRadius="15px">
          <Center>
            <Flex
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
              mr={10}
              mt={2}
            >
              <IconButton
                aria-label="Search database"
                bg="whiteAlpha.900"
                icon={
                  !cameraCloseIcon ? (
                    <BsFillCameraVideoFill />
                  ) : (
                    <BsFillBellFill />
                  )
                }
                w={10}
                h={10}
                _hover={{
                  background: "whiteAlpha.500",
                  color: "white.500",
                }}
                borderRadius="50%"
                onClick={(e) => handleStopCamera(e)}
              />
            </Flex>
            <Flex
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
              mt={2}
              mr={10}
            >
              <IconButton
                aria-label="test"
                bg="whiteAlpha.900"
                icon={
                  micCloseIcon ? (
                    <BsFillMicMuteFill style={{ color: "red" }} />
                  ) : (
                    <BsFillMicFill />
                  )
                }
                w={10}
                h={10}
                _hover={{
                  background: "whiteAlpha.500",
                  color: "white.500",
                }}
                borderRadius="50%"
                onClick={(e) => handleStopMic(e)}
              />
            </Flex>
            {/* <Flex
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
              mt={2}
              mr={10}
            >
              <iconButton
                aria-label="Search database"
                bg="whiteAlpha.900"
                icon={<AiFillSound />}
                w={10}
                h={10}
                _hover={{
                  background: "whiteAlpha.500",
                  color: "white.500",
                }}
                borderRadius="50%"
              />
            </Flex> */}
            <Flex
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
              mt={2}
              mr={10}
            >
              <IconButton
                aria-label="Search database"
                bg="whiteAlpha.900"
                _hover={{
                  background: "whiteAlpha.500",
                  color: "white.500",
                }}
                icon={<AiOutlineClose style={{ color: "red" }} />}
                w={10}
                h={10}
                borderRadius="50%"
              />
            </Flex>
          </Center>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Home;
