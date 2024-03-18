import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Image,
  Input,
  Spinner,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";

const App = () => {
  const [data, setdata] = useState("Loading....");
  const [text, settext] = useState("");
  const [isasked, setisasked] = useState(false);

  const inputtext = (e) => {
    settext(e.target.value);
  };
  async function genrateans() {
    const res = await axios({
      method: "post",
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyA7dUYdlZplu05Ypsv4DOTI4qAdK72UxJM",
      data: {
        contents: [{ parts: [{ text: text }] }],
      },
    });
   

    setdata(res.data.candidates[0].content.parts[0].text);
    setisasked(true);
  }
  return (
    <Box>
      <Navbar />
      <Flex justifyContent="center" mt={15}>
        <Flex
          flexDirection={{
            base: "column",
            md: "row",
          }}
          justifyContent="space-between"
          alignItems="center"
          w="90%"
          h="500px"
        >
          <Stack
            w={{
              base: "100%",
              lg: "65%",
            }}
          >
            <Flex justifyContent="center" gap={6}>
              <Input
                maxW="70%"
                textColor="white"
                onChange={(e) => inputtext(e)}
                borderRadius="full"
                placeholder="Ask Yourself."
              />
              <Button
                borderRadius="full"
                maxWidth="15%"
                colorScheme="cyan"
                onClick={genrateans}
              >
                Ask{" "}
              </Button>
            </Flex>
            {isasked ? (
              <>
                <Container
                  border="solid"
                  borderRadius="20px"
                  borderWidth={5}
                  p={4}
                  overflowY="scroll"
                  centerContent
                  maxWidth="100%"
                  maxHeight="70vh"
                  mt={5}
                >
                  <Text color="white">{data}</Text>
                </Container>
              </>
            ) : (
              <>
                <Text textAlign="center" color="wheat">
                  Fetching takes time....
                </Text>
              </>
            )}
          </Stack>
          <Flex w="400px" h="400px">
            <Image src="public\Robot.png" alt="" />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default App;
