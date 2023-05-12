import { Flex, Text } from "@chakra-ui/react";

const ChatReceiver = (props) => {
  return props.chats?.map((chat) => (
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
      key={Math.random()}
    >
      <Text color="#FFFFFF">{chat.message}</Text>
    </Flex>
  ));
};

export default ChatReceiver;
