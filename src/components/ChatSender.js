import { Avatar, Flex, Text } from "@chakra-ui/react";

const ChatSender = (props) => {
  return props.chats?.map((chat) => (
    <Flex direction="row" ml={0} key={Math.random()}>
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
        <Text>{chat.message}</Text>
      </Flex>
    </Flex>
  ));
};

export default ChatSender;
