import {
  Avatar,
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import { useState, useEffect, Fragment } from "react";


const Topbar = () => {
  return (
    <Flex bg="gray.100" h="81px" w="100%" align="center" p={5}>
      <Avatar src="" marginEnd={3} />
      <Heading>user@gmail.com</Heading>
    </Flex>
  );
};

const Bottombar = () => {
  return (
    <FormControl p={3}>
      <Input placeholder="Type a message ...." autoComplete="off" />
      <Button type="submit" hidden>
        Submit
      </Button>
    </FormControl>
  );
};
const Chat = (props) => {
    
  return (
    <>
      <Flex
        bg="blue.100"
        w="fit-content"
        minWidth={100}
        borderRadius="lg"
        p={3}
        m={3}
      >
        <Text>This is a dummy message</Text>
      </Flex>
    </>
  );
};
const ChatArea = () => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    
   
    useEffect(() => {
      fetch(`https://3.111.128.67/assignment/chat?page=0`)
        .then(response => response.json())
        .then((usefulData) => {
          console.log(usefulData);
          setLoading(false);
          setData(usefulData);
        })
        .catch((e) => {
          console.error(`An error occurred: ${e}`)
        });
    }, []);
    

    
  return (
    <Fragment>
             {loading && <p>Loading...</p>}
             {console.log(data)}
        {!loading && 
    
    <Flex h="100vh">
      <Flex flex={1} direction="column">
        <Topbar />
        <Flex
          flex={1}
          direction="column"
          pt={4}
          mx={5}
          overflowX="scroll"
          sx={{ scrollbarWidth: "none" }}
        >
          <Chat/>

        </Flex>
        <Bottombar />
      </Flex>
    </Flex>
    }
    </Fragment>
  );
};
export default ChatArea;
