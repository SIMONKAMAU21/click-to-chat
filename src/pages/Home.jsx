import React, { useState } from "react";
import { Box, Button, Spinner, Heading, Text, VStack } from "@chakra-ui/react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Foter from "./Foter";

const Home = () => {
  const [phone, setPhone] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (value) => {
    setPhone(value);
  };

  const handleClick = () => {
    setLoading(true);
    const phoneNumber = phone.replace(/\D/g, "");
    if (phoneNumber === "") {
      setErrorMessage("Please enter a valid phone number");
      setLoading(false);
    } else {
      setErrorMessage("");
      setTimeout(() => {
        const url = `https://wa.me/${phoneNumber}`;
        window.open(url, "_blank");
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <Box
      pt="10em"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      h="100dvh"
      w="100dvw"
      position="fixed"
      backgroundSize="cover"
      backgroundPosition="center"
      boxShadow="10px 10px 5px 5px rgba(0,0,0,0.5)"
      backgroundColor={"gray.200"}
      //   backgroundImage="url('/path/to/your/WhatsApp.jpg')"
    >
      <VStack
        spacing={4}
        w="80%"
        bg="green.300"
        h="60%"
        display="flex"
        justifyContent="space-around"
        borderRadius="lg"
        boxShadow="lg"
        p={6}
      >
        <Heading color="white">Click to Chat</Heading>
        <Text color="white" textAlign="center" mb={4}>
          Enter your phone number below and click the button to start a WhatsApp
          chat.
        </Text>
        <VStack
          display={"flex"}
          alignItems={"center"}
          w={{ base: "100%", md: "50%" }}
          gap="40px"
          h="60%"
        >
          <Box w={{ base: "100%", md: "50%" }}>
            <PhoneInput
              country={"ke"}
              value={phone}
              onChange={handleChange}
              inputProps={{
                name: "phone",
                required: true,
                autoFocus: true,
                placeholder: "Enter phone number",
              }}
              inputStyle={{
                width: "100%",
                height: "40px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </Box>

          <Button bg="white" color="green" onClick={handleClick}>
            {loading ? (
              <Spinner color="green" size="lg" thickness="5px" />
            ) : (
              " Open Whatsapp"
            )}
          </Button>
        </VStack>
      </VStack>
      {errorMessage && <Text color="red.500">{errorMessage}</Text>}

      <Foter />
    </Box>
  );
};

export default Home;
