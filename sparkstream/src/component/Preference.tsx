import { Flex, Heading, Text, Select } from "@chakra-ui/react";
import React from "react";

const Preference = () => {
  return (
    <Flex flexDirection="column" height="100%">
      <Flex
        bg="#383a75"
        flex="1"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Heading color="white" size="md" mb={3}>
          Language
        </Heading>
        <Select placeholder="Javascript" bg="white" w="80%">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </Flex>
      <Flex
        bg="#2E1662"
        flex="1"
        flexDirection="column"
        color="#14FFD5"
        alignItems="center"
      >
        <Heading color="white" size="md" mb={3}>
          Peers
        </Heading>
        <Text>Kai</Text>
        <Text>Neel</Text>
        <Text>Dream</Text>
      </Flex>
    </Flex>
  );
};

export default Preference;
