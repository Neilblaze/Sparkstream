import { message } from "antd";
// import { useMoralis } from "react-moralis";
import {
  Box,
  Grid,
  GridItem,
  Flex,
  Heading,
  Spacer,
  IconButton,
  Center,
  Avatar,
  Input,
  Button,
  Text,
  Select,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
// import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { CopyIcon } from "@chakra-ui/icons";
// import styles from "../styles/Home.module.css";
import {
  BsFillCameraVideoFill,
  BsFillCameraVideoOffFill,
  BsFillMicFill,
  BsFillMicMuteFill,
  BsFullscreen,
  BsRecordCircle,
} from "react-icons/bs";
import { MdInput, MdOutlineScreenShare } from "react-icons/md";
import {
  AiOutlineClose,
  AiFillInfoCircle,
  AiOutlineMenu,
  AiOutlineBell,
  AiOutlineArrowLeft,
  AiOutlineWifi,
} from "react-icons/ai";
import { GrWifiLow, GrMore } from "react-icons/gr";
import { mockChatMessage } from "../fakeData";
import getAscii from "../lib/getASCII";

const VideoChat = () => {
  //   const { user } = useMoralis();
  const [chatMessage, setChatMessage] = useState<any[]>(mockChatMessage);
  const messageRef = useRef<HTMLInputElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);

  //For icon on camera switch
  const [cameraCloseIcon, setCameraCloseIcon] = useState<boolean>(false);
  const [micCloseIcon, setMicCloseIcon] = useState<boolean>(true);

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

  const webcamRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<any>();
  const getWebcam = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: { width: 1920, height: 1080 },
      })
      .then((stream) => {
        let video = webcamRef.current;
        if (video) {
          setStream(stream);
          video.srcObject = stream;
          video.play();
          const videoTrack = stream
            .getTracks()
            .find((track: any) => track.kind === "video");
          if (videoTrack) {
            if (videoTrack.enabled) {
              videoTrack.enabled = false;
              setCameraCloseIcon(true);
            }
          }
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const [peerId, setPeerId] = useState("");
  const [ascii, setAscii] = useState(null);

  useEffect(() => {
    getWebcam();

    import("peerjs").then((module) => {
      const Peer = module.default;
      const peer = new Peer({
        host: "polar-escarpment-94286.herokuapp.com",
        port: process.env.NODE_ENV === "development" ? 80 : 443,
      });
      peer.on("open", (id) => {
        setPeerId(id);
        let conn: any = null;
        peer.on("connection", (_conn) => {
          console.log("connected");
          conn = _conn;
          conn.on("data", (data: any) => {
            console.log("received data");
            setAscii(data);
          });
        });

        navigator.mediaDevices
          .getUserMedia({
            audio: true,
          })
          .then((stream) => {
            peer.on("call", (call) => {
              console.log("received call");
              call.answer(stream);
              call.on("stream", (stream) => {
                console.log("received stream");
                audioRef.current.srcObject = stream;
              });
            });
          });

        const canvas = document.createElement("canvas");
        canvas.width = 160;
        canvas.height = 90;
        const ctx = canvas.getContext("2d") as any;

        setInterval(() => {
          if (conn) {
            ctx.drawImage(webcamRef.current, 0, 0, canvas.width, canvas.height);
            const ascii = getAscii(canvas);
            conn.send(ascii);
          }
        }, 100);
      });
    });
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

  const time = new Date().toLocaleTimeString();
  const number = Math.floor(Math.random() * (100 - 1) + 1);

  return (
    <>
      <Box
        p="5"
        style={{ background: "linear-gradient(#41B7BB, #59929C,#042A3F)" }}
      >
        <Grid
          h="95vh"
          templateRows="repeat(30, 1fr)"
          templateColumns="repeat(12, 1fr)"
          gap={4}
        >
          <GridItem rowSpan={1} colSpan={12} borderRadius="15px">
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
          </GridItem>
          <GridItem rowSpan={32} colSpan={7} bg="black"></GridItem>
          <GridItem
            rowSpan={17}
            colSpan={5}
            borderRadius="15px "
            bg="white"
            p="5"
            position="relative"
          >
            <Flex
              justifyContent="center"
              borderRadius="15px"
              alignItems="center"
            >
              {ascii ? (
                <pre className="overflow-hidden">{ascii}</pre>
              ) : (
                <Box className="text-3xl" color="white">
                  Your call ID is:
                  <span
                    className="cursor-pointer font-semibold"
                    title="Click to copy"
                  >
                    {peerId}
                  </span>
                </Box>
              )}

              <video
                ref={webcamRef}
                style={{
                  maxWidth: "30%",
                  borderRadius: "15px",
                  position: "absolute",
                  bottom: "0",
                  right: "0",
                  zIndex: 999,
                }}
              ></video>

              <Flex
                position="absolute"
                top="1"
                left="1"
                bg="#020015"
                alignItems="center"
                color="white"
                p="1"
                maxWidth="200px"
                h="20px"
                fontSize="xx-small"
                borderRadius="21px"
              >
                <AiOutlineWifi
                  color="red"
                  style={{ width: "15px", height: "auto", marginRight: "3px" }}
                />
                <Text>on boarding</Text>
              </Flex>
              <Flex
                position="absolute"
                bottom="1"
                left="1"
                bg="#020015"
                alignItems="center"
                color="white"
                p="3"
                maxWidth="200px"
                h="20px"
                fontSize="xx-small"
                borderRadius="21px"
              >
                <BsFillMicFill
                  color="#ABAAB0"
                  style={{ width: "15px", height: "auto", marginRight: "3px" }}
                />
                <Text>Kai You</Text>
              </Flex>

              {/* <Center position="absolute">
              <Avatar src="https://bit.ly/dan-abramov" />
        </Center> */}
            </Flex>
          </GridItem>
          <GridItem rowSpan={15} colSpan={2} p="1">
            <Flex flexDirection="column" height="100%">
              <Flex
                bg="#383a75"
                flex="1"
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Heading color="white" size="md" mb={3}>
                  Language
                </Heading>
                <Select placeholder="Javascript" bg="white" w="80%">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </Flex>
              <Flex
                bg="#2E1662"
                flex="1"
                flexDirection="column"
                color="#14FFD5"
                alignItems="center"
              >
                <Heading color="white" size="md" mb={3}>
                  Peers
                </Heading>
                <Text>Kai</Text>
                <Text>Neel</Text>
                <Text>Dream</Text>
              </Flex>
            </Flex>
          </GridItem>

          <GridItem
            rowSpan={15}
            colSpan={3}
            borderRadius="15px"
            position="relative"
            bg="white"
          >
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
          </GridItem>
          <GridItem rowSpan={5} colSpan={12} borderRadius="15px">
            <Flex width="100vw" alignItems="center">
              <Flex flex="1" alignItems="center">
                <IconButton
                  colorScheme="blackAlpha"
                  borderRadius="50%"
                  aria-label="Search database"
                  icon={<AiOutlineArrowLeft color="white" />}
                  mr={3}
                />
                <Text color="white" fontWeight="bold">
                  Hackathon Discussion 101
                </Text>
              </Flex>
              <Flex
                bg="#1E2128"
                borderRadius="53px"
                flex="1"
                p="4"
                alignItems="center"
              >
                <IconButton
                  bg="transparent"
                  aria-label="Search database"
                  _hover={{
                    backgroundColor: "transparent",
                  }}
                  _focus={{
                    backgroundColor: "transparent",
                  }}
                  icon={<AiOutlineWifi color="white" />}
                  mr={3}
                />
                <Flex
                  flexDirection="column"
                  color="whiteAlpha.900"
                  fontSize="sm"
                  mr={3}
                >
                  <Text>You are in Neel's Room</Text>
                  <Text>Connect to Room {number}</Text>
                </Flex>
                <Flex alignItems="center" justifyContent="space-evenly">
                  <IconButton
                    aria-label="Search database"
                    bg="whiteAlpha.900"
                    icon={
                      !cameraCloseIcon ? (
                        <BsFillCameraVideoFill />
                      ) : (
                        <BsFillCameraVideoOffFill color="red" />
                      )
                    }
                    _hover={{
                      background: "whiteAlpha.500",
                      color: "white.500",
                    }}
                    borderRadius="50%"
                    onClick={(e) => handleStopCamera(e)}
                    mr={1}
                  />
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
                    mr={1}
                    _hover={{
                      background: "whiteAlpha.500",
                      color: "white.500",
                    }}
                    borderRadius="50%"
                    onClick={(e) => handleStopMic(e)}
                  />
                  <IconButton
                    aria-label="Search database"
                    bg="whiteAlpha.900"
                    _hover={{
                      background: "whiteAlpha.500",
                      color: "white.500",
                    }}
                    icon={<MdOutlineScreenShare />}
                    w={10}
                    h={10}
                    mr={1}
                    borderRadius="50%"
                  />
                  <IconButton
                    aria-label="Search database"
                    bg="whiteAlpha.900"
                    _hover={{
                      background: "whiteAlpha.500",
                      color: "white.500",
                    }}
                    icon={<GrMore />}
                    w={10}
                    h={10}
                    mr={4}
                    borderRadius="50%"
                  />
                  <IconButton
                    aria-label="Search database"
                    colorScheme="red"
                    icon={<AiOutlineClose />}
                    w={10}
                    h={10}
                    borderRadius="50%"
                  />
                </Flex>
              </Flex>
              <Flex flex="1" alignItems="center" justifyContent="flex-end">
                <Flex mr={8} alignItems="center">
                  <IconButton
                    aria-label="Search database"
                    bg="whiteAlpha.900"
                    _hover={{
                      background: "whiteAlpha.500",
                      color: "white.500",
                    }}
                    icon={<BsRecordCircle style={{ color: "red" }} />}
                    w={10}
                    h={10}
                    mr={3}
                    borderRadius="17px"
                  />
                  <Button width="10px" mr={3} bg="#249782" color="white">
                    CC
                  </Button>
                  <IconButton
                    aria-label="Search database"
                    bg="whiteAlpha.900"
                    _hover={{
                      background: "whiteAlpha.500",
                      color: "white.500",
                    }}
                    icon={<BsFullscreen />}
                    w={10}
                    h={10}
                    mr={3}
                    borderRadius="17px"
                  />
                </Flex>
              </Flex>
            </Flex>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default VideoChat;
