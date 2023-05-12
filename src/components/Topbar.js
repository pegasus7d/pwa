import { Avatar, Flex, Heading, Text } from "@chakra-ui/react";

import { ArrowBackIcon } from "@chakra-ui/icons";
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

export default Topbar;
