import {
  Avatar,
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  Text,
  Divider,
  InputGroup,
  InputRightElement,
  ButtonGroup,
  Stack,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { IoSend } from "react-icons/io5";
import { FiPaperclip } from "react-icons/fi";
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
            To
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
      <InputGroup>
        <Input
          placeholder="Type a message ...."
          autoComplete="off"
          bgColor="#FFFFFF"
        ></Input>
        <InputRightElement mr={6}>
          <ButtonGroup size="sm" isAttached>
            <Button variant="link">
              <FiPaperclip />
            </Button>
            <Button variant="link">
              <IoSend />
            </Button>
          </ButtonGroup>
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
};
const ChatSender = (props) => {
  return (
    <Flex direction="row" ml={0}>
      <Avatar
        name="Dan Abrahmov"
        src="https://bit.ly/dan-abramov"
        size="xs"
        mt={4}
        mr={1}
      />
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
        <Text>{props.chats[0].message}</Text>
      </Flex>
    </Flex>
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
        ml={9}
        mr={1}
        mb={3}
        alignSelf="end"
      >
        <Text color="#FFFFFF">{props.chats[0].message}</Text>
      </Flex>
    </>
  );
};
const DateTime = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const d = new Date();
  let month = months[d.getMonth()];
  let year=d.getFullYear();
  let day=d.getDay();
  return (
    <Flex alignItems="center" gap={2}>
      <Divider orientation="horizontal" />
      <Text size="sm" sx={{ whiteSpace: "nowrap" }}>
        {day} {month}{year}
      </Text>
      <Divider orientation="horizontal" />
    </Flex>
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
            <Stack direction="column" spacing="80px">
              <Divider orientation="horizontal" />

              <DateTime />
            </Stack>

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
              <ChatSender {...data} />
              <ChatSender {...data} />
              <ChatSender {...data} />
              <ChatSender {...data} />
            </Flex>
            <Bottombar />
          </Flex>
        </Flex>
      )}
    </Fragment>
  );
};
export default ChatArea;
