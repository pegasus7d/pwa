import {
  Avatar,
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  Text,
  Divider,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useState, useEffect, Fragment } from "react";

const Topbar = () => {
  return (
    <Flex p={5} bgColor="#FAF9F4" direction="column">
      <Flex mb={4}>
        <ArrowBackIcon boxSize={9} />
        <Heading pl={4} size="xl">
          Trip 1
        </Heading>
      </Flex>
      <Flex>
        <Avatar src="" marginEnd={3} />
        <Flex direction="column">
          <Text fontSize="md" color="#606060">
            From
            <Text as="b" color="#141E0D">
              IGI Airport, T3
            </Text>
          </Text>
          <Text fontSize="md" color="#606060">
            To{" "}
            <Text as="b" color="#141E0D">
              Sector 28
            </Text>
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

const Bottombar = () => {
  return (
    <FormControl p={3}>
      <Input
        placeholder="Type a message ...."
        autoComplete="off"
        bgColor="#FFFFFF"
      />
      <Button type="submit" hidden>
        Submit
      </Button>
    </FormControl>
  );
};
const ChatSender = (props) => {
  return (
    <>
      <Flex
        bg="#FFFFFF"
        w="fit-content"
        minWidth={50}
        borderRadius="lg"
        p={3}
        m={3}
        ml={0}

        alignSelf="start"
      >
        <Text >{props.chats[0].message}</Text>
      </Flex>
    </>
  );
};
const ChatReceiver = (props) => {
  return (
    <>
      <Flex
        bg="#1C63D5"
        w="fit-content"
        minWidth={50}
        borderRadius="lg"
        p={3}
        m={3}
        mr={0}
        
        alignSelf="end"
      >
        <Text color="#FFFFFF">{props.chats[0].message}</Text>
      </Flex>
    </>
  );
};
const ChatArea = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://3.111.128.67/assignment/chat?page=0`)
      .then((response) => response.json())
      .then((usefulData) => {
        console.log(usefulData);
        setLoading(false);
        setData(usefulData);
      })
      .catch((e) => {
        console.error(`An error occurred: ${e}`);
      });
  }, []);

  return (
    <Fragment>
      {loading && <p>Loading...</p>}
      {console.log(data)}
      {!loading && (
        <Flex h="100vh" bgColor="#FAF9F4">
          <Flex flex={1} direction="column">
            <Topbar />
            <Divider orientation="horizontal" />
            <Flex
              flex={1}
              direction="column"
              pt={4}
              mx={5}
              overflowX="scroll"
              overflowY="scroll"
              sx={{ scrollbarWidth: "none" }}
              sy={{ scrollbarWidth: "none" }}
            >
              <ChatSender {...data} />
              <ChatReceiver {...data} />
            </Flex>
            <Bottombar />
          </Flex>
        </Flex>
      )}
    </Fragment>
  );
};
export default ChatArea;
