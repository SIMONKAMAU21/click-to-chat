import React from 'react';
import { Box, Heading, Text, VStack, Divider } from '@chakra-ui/react';
import Foter from './Foter';

const About = () => {
  return (
    <Box
      pt={{ base: "60px", md: "" }}
      p={{ base: "", md: "4" }}
      display="flex"
      // flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      bg="gray.100"
      h="100dvh"
      fontFamily={"Arial, sans-serif"}
      w="100dvw"
    >
      <VStack
        spacing={4}
        p={8}
        bg="white"
        borderRadius="md"
        boxShadow="lg"
        w={{ base: "95%", md: "80%" }}
        mx="auto"
      >
        <Heading as="h1" size="xl" textAlign="center" color="green.400">
          About Click to Chat
        </Heading>
        <Divider />
        <Text  w={{base:"100%",md:"70%"}} fontSize={{base:"md",md:"lg"}}>
          Click to Chat is a convenient tool that allows you to initiate a WhatsApp chat with any phone number without having to save the contact in your phone. This app aims to simplify the process of connecting with people on WhatsApp, especially for one-time conversations.
        </Text>
       <VStack spacing={4} alignItems="center" mt={4} w={{base:"100%",md:"70%"}}>
       <Box fontSize="md"  w={{base:"100%",md:"70%"}}>
          <Text  color="green.400" fontWeight="bold">Features:</Text>
          <ul>
            <li>Instantly open a chat with any phone number on WhatsApp.</li>
            <li>No need to save the contact to your phone.</li>
            <li>Supports international phone numbers.</li>
          </ul>
        </Box>
        <Box fontSize="md"  w={{base:"100%",md:"70%"}}>
          <Text color="green.400" fontWeight="bold">How to Use:</Text>
          <ol>
            <li>Enter the phone number in the input field on the home page.</li>
            <li>Click on the "Open WhatsApp" button.</li>
            <li>You'll be redirected to WhatsApp with a new chat window for the entered phone number.</li>
          </ol>
        </Box>
        <Box w={{base:"100%",md:"70%"}} fontSize="md">
        <Text fontSize="md">
          <Text color="green.400" fontWeight="bold">About Us:</Text>
          We are a team of developers passionate about creating tools that enhance productivity and simplify daily tasks. Click to Chat is one of our projects aimed at making communication easier and more efficient.
        </Text>
        </Box>
        </VStack>
       
        <a href="https://simon-kamau.vercel.app/" target="_blank" rel="noopener noreferrer" style={{
          color: "green",
          textDecoration: "underline",
          fontSize: "lg",
          fontWeight: "bold",
        }}>see more of my work</a>
      </VStack>
    </Box>
  );
};

export default About;
