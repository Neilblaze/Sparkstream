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
// import Peer from "peerjs";
import React, { useRef, useState, useEffect } from "react";
import { mockChatMessage } from "../fakeData";


const Chat = (prop: { myId: string, enemyId: string }) => {
  // MESSAGES
  console.log("loaded");


  // var enemyPeer: any = null;

  // function receiveMessage(params: string) {
  //   let parag = document.createElement("span");
  //   parag.classList.add('received');
  //   parag.textContent = `${params}`
  //   let wrapper = document.createElement('div');
  //   wrapper.classList.add("received--wrapper")
  //   wrapper.appendChild(parag)
  //   document.getElementById("messages")?.appendChild(wrapper);

  // }

  // function setEnemy(params: any) {
  //   enemyPeer = params;
  // }

  // function sendMessages() {
  //   console.log("sent message");
  //   console.log(messageRef.current?.value);
  //   console.log(document.getElementById("messages")
  //   );
  //   let parag = document.createElement("span");
  //   parag.classList.add('sent');
  //   parag.textContent = `${messageRef.current?.value}`;
  //   let wrapper = document.createElement('div');
  //   wrapper.classList.add("sent--wrapper")
  //   wrapper.appendChild(parag)

  //   document.getElementById("messages")?.appendChild(wrapper);

  //   enemyPeer.send(messageRef.current?.value)

  // }

  // peer section
  // if (prop.myId === "host") {
  //   // var peer = new Peer(prop.myId);
  //   let peer = new Peer("host");
  //   peer.on('open', function (id) {
  //     console.log('My peer ID is: ' + id);
  //   });
  // } else {
  //   var peer = new Peer();
  //   peer.on('open', function (id) {
  //     console.log('My peer ID is: ' + id);
  //   });
  // }

  // let peer = new Peer();


  // const [id, setid] = useState<String>();

  // function connectToUser() {
  //   document.getElementById("connectWrapper")?.classList.add("hidden");
  //   let idstr: string | undefined = idRef.current?.value
  //   if (typeof (idstr) === "string") {
  //     var tryConn = peer.connect(idstr)
  //     tryConn.on('open', () => {
  //       console.log("connected to" + idstr);
  //       setEnemy(tryConn)
  //       tryConn.on('data', function (data) {
  //         console.log("received message");
  //         receiveMessage(data);
  //       })
  //     })
  //   }
  // }

  // peer.on('connection', function (conn: any): void {
  //   console.log("connected successfully!");
  //   document.getElementById("connectWrapper")?.classList.add("hidden");

  //   setEnemy(conn)
  //   conn.on('data', function (data: any) {
  //     console.log("received message");
  //     receiveMessage(data);
  //   })
  // })


  const messageRef = useRef<HTMLInputElement>(null);
  const idRef = useRef<HTMLInputElement>(null);

  // useEffect(() => {
  //   peer.on('open', function (id) {
  //     console.log('My peer ID is: ' + id);
  //     setid(id)
  //   });
  // }, [])


  return (
    <>
      <Center>
        <Heading size="md">{`Chat`}</Heading>
      </Center>
      <div className="h-32 bg-slate-200 overflow-scroll" id="messages">

      </div>
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
        <Button colorScheme="teal" onClick={(e) => console.log(e.target)}>
          Send
        </Button>

        <div className="flex flex-row justify-center hidden" id="connectWrapper">
          <Input
            placeholder="Insert ID"
            mr={3}
            h={10}
            // onChange={(e) => setMessage(e.currentTarget.value)}
            ref={idRef}
            color="black"
          />
          <Button colorScheme="blue" onClick={(e) => (console.log(e.target))}>
            Connect
          </Button>
        </div>

      </Flex>
    </>
  );
};

export default Chat;
