import React from "react"
import Box from "@chakra-ui/core/dist/Box"
import SimpleGrid from "@chakra-ui/core/dist/SimpleGrid"
import NewsletterForm from "./newsletter-form"
import Icon from "@chakra-ui/core/dist/Icon"
import Link from "@chakra-ui/core/dist/Link"
import { FiFacebook, FiTwitter, FiLinkedin } from "react-icons/fi"

const Footer = () => {
  return (
    <SimpleGrid columns={1} mt="200px">
      <Box d={"flex"} justifyContent={"center"} p={4}>
        <Box position={"relative"} top={-50}>
          <NewsletterForm />
        </Box>
      </Box>
      <Box d={"flex"} justifyContent={"center"} p={4}>
        <Box textAlign={"center"}>
          <Box mb={2}>Follow us</Box>
          <Box>
            <Icon as={FiFacebook} fontSize={"2xl"} mr={2} />
            <Icon as={FiTwitter} fontSize={"2xl"} mr={2} />
            <Icon as={FiLinkedin} fontSize={"2xl"} mr={2} />
          </Box>
        </Box>
      </Box>
      <Box d={"flex"} justifyContent={"center"} p={4}>
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
      <Box d={"flex"} justifyContent={"center"} p={4} mb={4}>
        All rights reserved © 2020 by educode.com
      </Box>
    </SimpleGrid>
  )
}

export default Footer
