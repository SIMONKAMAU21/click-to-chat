import React from 'react';
import { Box, Heading, Text, VStack, Divider } from '@chakra-ui/react';

const About = () => {
  return (
    <Box pt={{base:"60px", md:'none'}}p={{base:"" ,md:"4"}} display="flex" alignItems="center" justifyContent="center"  bg="gray.100" h={{base:'100vh', md:'100vh'}} position='fixed' >
      <VStack spacing={4} align="stretch"  p={8} bg="white" borderRadius="md" boxShadow="md">
        <Heading as="h1" size="xl" textAlign="center">About Click to Chat</Heading>
        <Divider />
        <Text fontSize="lg">
          Click to Chat is a convenient tool that allows you to initiate a WhatsApp chat with any phone number without having to save the contact in your phone. This app aims to simplify the process of connecting with people on WhatsApp, especially for one-time conversations.
        </Text>
        <Text fontSize="md">
          <strong>Features:</strong>
          <ul>
            <li>Instantly open a chat with any phone number on WhatsApp.</li>
            <li>No need to save the contact to your phone.</li>
            <li>Supports international phone numbers.</li>
          </ul>
        </Text>
        <Text fontSize="md">
          <strong>How to Use:</strong>
          <ol>
            <li>Enter the phone number in the input field on the home page.</li>
            <li>Click on the "Open WhatsApp" button.</li>
            <li>You'll be redirected to WhatsApp with a new chat window for the entered phone number.</li>
          </ol>
        </Text>
        <Text fontSize="md">
          <strong>About Us:</strong>
          We are a team of developers passionate about creating tools that enhance productivity and simplify daily tasks. Click to Chat is one of our projects aimed at making communication easier and more efficient.
        </Text>
      </VStack>
    </Box>
  );
};

export default About;
