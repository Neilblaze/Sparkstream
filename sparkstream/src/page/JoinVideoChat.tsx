import { Box, Grid, GridItem } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import getAscii from "../lib/getASCII";
import VideoHeader from "../component/VideoHeader";
import Chat from "../component/Chat";
import VideoBottom from "../component/VideoBottom";
import Preference from "../component/Preference";
import Video from "../component/Video";
import { useParams } from "react-router-dom";

const JoinVideoChat = () => {
  let params = useParams();
  console.log(params.id);
  const callId = params.id!;
  const [stream, setStream] = useState<MediaStream | null>(null);

  //For icon on camera switch
  const [cameraCloseIcon, setCameraCloseIcon] = useState<boolean>(false);
  const [micCloseIcon, setMicCloseIcon] = useState<boolean>(true);

  const webcamRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<any>();

  const [peerId, setPeerId] = useState("");
  const [ascii, setAscii] = useState(null);

  useEffect(() => {
    import("peerjs").then((module) => {
      const Peer = module.default;
      const peer = new Peer({
        host: "polar-escarpment-94286.herokuapp.com",
        port: process.env.NODE_ENV === "development" ? 80 : 443,
      });
      peer.on("open", (id) => {
        console.log("my peer id:", id);

        navigator.mediaDevices
          .getUserMedia({
            video: true,
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
          });
        navigator.mediaDevices
          .getUserMedia({
            audio: true,
          })
          .then((stream) => {
            console.log("calling", callId);
            peer.call(callId, stream);
          });

        console.log("connecting to", callId);
        const conn = peer.connect(callId);
        conn.on("open", () => {
          console.log("connection opened");
          conn.on("data", (data) => {
            setAscii(data);
          });
        });
        const canvas = document.createElement("canvas");
        canvas.width = 595;
        canvas.height = 105;
        const ctx = canvas.getContext("2d") as any;

        setInterval(() => {
          ctx.drawImage(webcamRef.current, 0, 0, canvas.width, canvas.height);
          const ascii = getAscii(canvas);
          conn.send(ascii);
        }, 100);
      });
    });
  }, []);
  console.log(ascii);
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
            <VideoHeader peerId={peerId} />
          </GridItem>
          <GridItem rowSpan={32} colSpan={7} bg="black"></GridItem>
          <GridItem
            rowSpan={17}
            colSpan={5}
            borderRadius="15px "
            bg="black"
            p="5"
            position="relative"
          >
            <Video ascii={ascii} peerId={peerId} webcamRef={webcamRef} />
          </GridItem>
          <GridItem rowSpan={15} colSpan={2} p="1">
            <Preference />
          </GridItem>

          <GridItem
            rowSpan={15}
            colSpan={3}
            borderRadius="15px"
            position="relative"
            bg="white"
            border="4px solid #A676E3"
          >
            <Chat />
          </GridItem>
          <GridItem rowSpan={5} colSpan={12} borderRadius="15px">
            <VideoBottom
              micCloseIcon={micCloseIcon}
              cameraCloseIcon={cameraCloseIcon}
              handleStopCamera={handleStopCamera}
              handleStopMic={handleStopMic}
            />
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default JoinVideoChat;
