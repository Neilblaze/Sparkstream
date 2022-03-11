import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
// import your route components too

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
    ,
  </ChakraProvider>
);
