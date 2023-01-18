import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useGlobalState } from "../store";

const Async = () => {
  const state = useGlobalState();
  const [user, setUser] = useState([]);

  useEffect(() => {
    state.getUsers();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (state.loading().value === true) {
      setUser(state.fetchUsers());
    }
  }, [state]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      maxW="1440px"
      minH="100vh"
      m="auto"
    >
      <Box width="700px" minH="100vh" mt="0rem" bg="blackAlpha.400" p={8}>
         <Text fontSize="28px" fontWeight="600" mb={4}>
          User Count: {user.length}
        </Text>
        <Box my={8}>
          {user.length < 1 && (
            <Text py={4} textAlign="center">
              No user post found
            </Text>
          )}
          {user &&
            user.map((item, index) => (
              <Card
                key={index}
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
                my={4}
              >
                <Image
                  objectFit="cover"
                  maxW={{ base: "100%", sm: "200px" }}
                  src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                  alt="Caffe Latte"
                />

                <Stack w="full">
                  <CardBody>
                    <Text fontSize="24px" fontWeight="600" py="2">
                      {item.value.name}
                    </Text>
                  </CardBody>

                  <CardFooter
                    display="flex"
                    justifyContent="flex-start"
                    gap={4}
                  >
                    <Text>{item.value.email}</Text>
                  </CardFooter>
                </Stack>
              </Card>
            ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Async;
