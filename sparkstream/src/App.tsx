import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import VideoChat from "./page/VideoChat";
// import your route components too

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video" element={<VideoChat />} />
      </Routes>
    </BrowserRouter>
    ,
  </ChakraProvider>
);
