import { Flex, HStack, Heading, Image } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  return (
    <Flex mb={{
      base:4,
      lg:10,
    }}>
        <HStack p={10} maxHeight={10} justifyContent="center" alignItems="center" w={{
          base:"100%",
          lg:"20%",
        }}>
        <Heading textColor="white">ChatterAI</Heading>
        <Image mt={3} boxSize='50px' src='public\chatbot_8943377.png' alt='Dan Abramov' />
        </HStack>
    </Flex>
  )
}

export default Navbar