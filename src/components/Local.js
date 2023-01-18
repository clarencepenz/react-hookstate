import React from "react";
import { useHookstate } from "@hookstate/core";
import { Box, Button, Flex, Text } from "@chakra-ui/react";

const Local = () => {
  const state = useHookstate(0);
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
        Counter value: {state.get()}{" "}
      </Text>
      <Flex gap={4}>
        <Button onClick={() => state.set((p) => p + 1)} bg="green">
          Increment
        </Button>
        <Button onClick={() => state.set((p) => p - 1)} bg="red">
          Decrement
        </Button>
      </Flex>
    </Box>
  );
};

export default Local;
