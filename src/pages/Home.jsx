import React, { useState } from 'react';
import { Box, Button, Heading, VStack } from '@chakra-ui/react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const Home = () => {
   const [phone, setPhone] = useState('');

   const handleChange = (value) => {
      setPhone(value);
   };

   const handleClick = () => {
      const phoneNumber = phone.replace(/\D/g, '');
      const url = `https://wa.me/${phoneNumber}`;
      window.open(url, '_blank');
   };

   return (
      <Box p={4} display="flex" alignItems="center" justifyContent="center" h='100vh' w='100vw' position='fixed' backgroundSize="cover"
         backgroundPosition="center" opacity='0.8' backgroundImage="url('src/assets/WhatsApp.jpg')"
      >
         <VStack spacing={4} w='80%' bg='green.300' h='80%' display="flex" justifyContent="space-around"  >
            <Heading color='white'>Click to Chat</Heading>
            <VStack display='flex' justifyContent='space-around' h='60%'>
               <PhoneInput

                  country={'ke'}
                  value={phone}
                  onChange={handleChange}
               />
               <Button bg='green.500' onClick={handleClick}>Open WhatsApp</Button>

            </VStack>
         </VStack>
      </Box>
   );
};

export default Home;
