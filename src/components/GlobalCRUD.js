import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useGlobalState } from "../store";

const GlobalCRUD = () => {
  const state = useGlobalState();
  const [data, setData] = useState([]);
  const [content, setContent] = useState("");
  const [edit, setEdit] = useState(false);
  const [updateId, setUpdateId] = useState(0);

  const fetchBlog = () => {
    setData(state.fetchBlogs());
  };

  useEffect(() => {
    fetchBlog();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addBlog = () => {
    const blog = {
      id: state.getCountBlog() + 1,
      content: content,
    };
    state.addBlog(blog);
    setContent("");
  };

  const updateBlog = (id) => {
    const blog = {
      id,
      content,
    };
    state.updateBlog(id, blog);
    setContent("");
    setUpdateId(0);
    setEdit(false);
  };

  const deleteBlog = (id) => {
    state.deleteBlog(id);
  };

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
          Blog posts: {state.getCountBlog()}
        </Text>
        <Flex>
          <Input
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            errorBorderColor="crimson"
            placeholder="Enter Quote"
            borderInlineEndRadius={0}
          />
          {edit ? (
            <Button
              onClick={() => updateBlog(updateId)}
              borderInlineStartRadius={0}
              bg="green"
            >
              Update
            </Button>
          ) : (
            <Button onClick={addBlog} borderInlineStartRadius={0} bg="green">
              Add
            </Button>
          )}
        </Flex>
        <Box my={8}>
          {data.length < 1 && (
            <Text py={4} textAlign="center">
              No blog post found
            </Text>
          )}
          {data &&
            data.map((item, index) => (
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
                      {item.get(item).content}
                    </Text>
                  </CardBody>

                  <CardFooter display="flex" justifyContent="flex-end" gap={4}>
                    <Button
                      onClick={() => {
                        setContent(item.get(item).content);
                        setEdit(true);
                        setUpdateId(item.get(item).id);
                      }}
                      bg="blue"
                      color="#fff"
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() => deleteBlog(item.get(item).id)}
                      bg="red"
                      color="#fff"
                    >
                      Delete
                    </Button>
                  </CardFooter>
                </Stack>
              </Card>
            ))}
        </Box>
      </Box>
    </Box>
  );
};

export default GlobalCRUD;
