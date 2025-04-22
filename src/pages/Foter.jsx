import React from "react";
import { Box, Button, Spinner, Heading, Text, VStack } from "@chakra-ui/react";

const Foter = () => {
  return (
    <Box
      as="footer"
      w="100vw"
      p={4}
      bg="green.500"
      top={0}
      color="white"
      textAlign="center"
    >
      <Text>
        &copy; {new Date().getFullYear()} simon kamau. All rights reserved.
      </Text>
    </Box>
  );
};

export default Foter;
