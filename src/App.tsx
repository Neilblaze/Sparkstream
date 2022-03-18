import * as React from "react";
import { ChakraProvider, extendTheme, theme } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import VideoChat from "./page/VideoChat";
import JoinVideoChat from "./page/JoinVideoChat";
import Homepage from "./page/Homepage";
import Login from "./page/Login";
import Register from "./page/Register";
import LoginWeb3 from "./page/LoginWeb3";
import Host from "./page/Host";
import Guest from "./page/Guest";
import "./input.css"
// import your route components too

export const App = () => {

  const bg = extendTheme({
    styles: {
      global: () => ({
        body: {
          // bg: "linear-gradient(#41B7BB, #59929C,#042A3F)",
          bg: "#fff"
        },
      }),
    },
  });
  return (
    <ChakraProvider theme={bg}>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/video" element={<VideoChat />} />
          <Route path="join/:id" element={<JoinVideoChat />} />

          {/* Aziz */}
          <Route path="home" element={<Homepage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="host" element={<Host />} />
          <Route path="guest" element={<Guest />} />


          <Route path="web3auth" element={<LoginWeb3 />} />


        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};
