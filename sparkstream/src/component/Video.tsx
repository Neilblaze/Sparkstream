import { Flex, Box, Text, Center } from "@chakra-ui/react";
import React from "react";
import { AiOutlineWifi } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";

type VideoProp = {
  ascii: any;
  peerId: string;
  webcamRef: React.RefObject<HTMLVideoElement>;
};

const Video = ({ ascii, peerId, webcamRef }: VideoProp) => {
  return (
    <Flex justifyContent="center" borderRadius="15px" alignItems="center">
      {ascii ? (
        <div
          style={{
            transform: "scale(0.1)",
            display: "flex",
            color: "white",
            width: "500px",
            position: "absolute",
            top: "0",
            left: "0",
            borderRadius: "15px",

            transformOrigin: "top left",
          }}
        >
          <pre>{ascii}</pre>
        </div>
      ) : (
        <Center className="text-3xl" color="white" h="30vh">
          No one is connecting, Please wait...
        </Center>
      )}

      <video
        ref={webcamRef}
        style={{
          maxWidth: "30%",
          borderRadius: "15px",
          position: "absolute",
          bottom: "0",
          right: "0",
          backgroundColor: "black",
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
        {/* <Text>Kai You</Text> */}
      </Flex>

      {/* <Center position="absolute">
              <Avatar src="https://bit.ly/dan-abramov" />
        </Center> */}
    </Flex>
  );
};

export default Video;
