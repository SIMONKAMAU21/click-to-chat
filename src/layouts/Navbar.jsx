import React from 'react';
import { Box, Flex, HStack, Link, IconButton, useDisclosure, useColorModeValue, Stack } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg={useColorModeValue('green.300', 'green.900')} px={4} position='fixed' zIndex='1000' width={{base:"100vw", md:"100vw"}}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8}  justifyContent={{base:'none' , md:'space-between'}} w='100%' alignItems="center" >
          <Box fontWeight='bold'>Click to Chat</Box>
          <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }} >
            <NavLink to="/" style={{ textDecoration: 'none' }} activeStyle={{ fontWeight: 'bold' }}>
              Home
            </NavLink>
            <NavLink to="/about" style={{ textDecoration: 'none' }} activeStyle={{ fontWeight: 'bold' }}>
              About
            </NavLink>
          </HStack>
        </HStack>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as="nav" spacing={4}>
            <NavLink to="/" style={{ textDecoration: 'none' }} activeStyle={{ fontWeight: 'bold' }}>
              Home
            </NavLink>
            <NavLink to="/about" style={{ textDecoration: 'none' }} activeStyle={{ fontWeight: 'bold' }}>
              About
            </NavLink>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default NavBar;
