import React from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useGlobalState } from "../store";

const GlobalCounter = () => {
  const state = useGlobalState();

  const increment = () => {
    state.increment();
  };

  const decrement = () => {
    state.decrement();
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      maxW="1440px"
      minH="100vh"
      m="auto"
    >
      <Text
        textAlign="center"
        fontWeight="700"
        fontSize={{ base: "32px", md: "64px" }}
      >
        Counter value: {state.getCount()}{" "}
      </Text>
      <Flex gap={4}>
        <Button onClick={() => increment()} bg="green">
          Increment
        </Button>
        <Button onClick={() => decrement()} bg="red">
          Decrement
        </Button>
      </Flex>
    </Box>
  );
};

export default GlobalCounter;
