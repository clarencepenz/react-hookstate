import React from "react";
import { Box } from "@chakra-ui/react";
import Local from "./components/Local";
import GLobalCounter from "./components/GlobalCounter";
import GlobalCRUD from "./components/GlobalCRUD";
import Async from "./components/Async";

const App = () => {
  return (
    <Box>
      <Local />
      <GLobalCounter />
      <GlobalCRUD />
      <Async />
    </Box>
  );
};

export default App;
