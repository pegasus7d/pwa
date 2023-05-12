import { Flex, Divider, Stack } from "@chakra-ui/react";

import { useState, useEffect, Fragment } from "react";
import ChatSender from "./ChatSender";
import ChatReceiver from "./ChatReceiver";
import Bottombar from "./Bottombar";
import DateTime from "./DateTime";
import Topbar from "./Topbar";

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
            </Flex>
            <Bottombar {...data} />
          </Flex>
        </Flex>
      )}
    </Fragment>
  );
};
export default ChatArea;
