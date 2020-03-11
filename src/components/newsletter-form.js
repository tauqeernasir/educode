import React from "react"
import Text from "@chakra-ui/core/dist/Text"
import Box from "@chakra-ui/core/dist/Box"
import { Button, Input } from "@chakra-ui/core"

const NewsletterForm = () => {
  return (
    <Box p={2} background={"rgba(255, 255, 255, .05)"} rounded={10}>
      <Box p={2} background={"rgba(255, 255, 255, .05)"} rounded={10}>
        <Box
          p={4}
          rounded={10}
          boxShadow={"xl"}
          background={"linear-gradient(to bottom right, orange 10%,purple)"}
        >
          <Text color={"white"} mb={4} fontSize={{ sm: "md", md: "xl" }}>
            Subscribe to our newletter to stay up to date with latest content
          </Text>
          <Box d={"flex"} flexWrap={"wrap"}>
            <Box m={1}>
              <Input w={"2xs"} placeholder={"Enter your name"} />
            </Box>
            <Box m={1}>
              <Input w={"2xs"} placeholder={"Enter your email address"} />
            </Box>
            <Button m={1}>
              <Text>Subscribe</Text>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default NewsletterForm
