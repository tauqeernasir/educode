import React from "react"
import Box from "@chakra-ui/core/dist/Box"
import SimpleGrid from "@chakra-ui/core/dist/SimpleGrid"
import NewsletterForm from "./newsletter-form"
import Icon from "@chakra-ui/core/dist/Icon"
import Link from "@chakra-ui/core/dist/Link"
import { FiFacebook, FiTwitter, FiLinkedin } from 'react-icons/fi'

const Footer = () => {
  return (
    <SimpleGrid
      columns={1}
      backgroundColor={"gray.700"}
      background={"linear-gradient(to bottom right, #2e3192 30%, purple)"}
    >
      <Box d={"flex"} justifyContent={"center"} p={4}>
        <Box position={"relative"} top={-50}>
          <NewsletterForm />
        </Box>
      </Box>
      <Box d={"flex"} justifyContent={"center"} p={4} color={"white"}>
        <Box textAlign={'center'}>
          <Box mb={2} className={'gradient-text'}>Follow us</Box>
          <Box>
            <Icon as={FiFacebook} fontSize={'2xl'} mr={2} />
            <Icon as={FiTwitter} fontSize={'2xl'} mr={2} />
            <Icon as={FiLinkedin} fontSize={'2xl'} mr={2} />
          </Box>
        </Box>
      </Box>
      <Box d={"flex"} justifyContent={"center"} p={4} color={"white"}>
        <Box>
          <Box as={"span"} mr={4} fontWeight={"bold"}>
            <Link>Home</Link>
          </Box>
          <Box as={"span"} mr={4} fontWeight={"bold"}>
            <Link>About</Link>
          </Box>
          <Box as={"span"} mr={4} fontWeight={"bold"}>
            <Link>Blog</Link>
          </Box>
          <Box as={"span"} mr={4} fontWeight={"bold"}>
            <Link>Contact</Link>
          </Box>
        </Box>
      </Box>
      <Box d={"flex"} justifyContent={"center"} p={4} color={"white"} mb={4}>
        All rights reserved © 2020 by Backslashes.io
      </Box>
    </SimpleGrid>
  )
}

export default Footer
