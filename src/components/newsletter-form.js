import React from "react"
import Text from "@chakra-ui/core/dist/Text"
import Box from "@chakra-ui/core/dist/Box"
import { Button, Input } from "@chakra-ui/core"
import { motion } from "framer-motion"

const variants = {
  hidden: {
    scale: 0
  },
  visible: {
    scale: 1,
    transition: {
      staggerChildren: .125,
      when: 'beforeChildren'
    }
  }
}

const variantsChildren = {
  hidden: {
    scale: 0,
    x: -70
  },
  visible: {
    scale: 1,
    x: 0
  }
}

const NewsletterForm = () => {
  return (
    <motion.div initial={"hidden"} animate={"visible"} variants={variants}>
      <Box p={2} background={"rgba(255, 255, 255, .05)"} rounded={10}>
        <Box p={2} background={"rgba(255, 255, 255, .05)"} rounded={10}>
          <Box
            p={4}
            rounded={10}
            boxShadow={"xl"}
            background={
              "linear-gradient(to bottom right,darkorange 10%,purple)"
            }
          >
            <Text
              color={"white"}
              mb={4}
              fontWeight={500}
              fontSize={{ sm: "md", md: "xl" }}
            >
              Subscribe to our newletter to stay up to date with latest content
            </Text>
            <Box d={"flex"} flexWrap={"wrap"}>
              <motion.div
                variants={variantsChildren}
              >
                <Box m={1}>
                  <Input w={"2xs"} placeholder={"Enter your name"} />
                </Box>
              </motion.div>
              <motion.div
                variants={variantsChildren}
              >
                <Box m={1}>
                  <Input w={"2xs"} placeholder={"Enter your email address"} />
                </Box>
              </motion.div>
              <motion.div
                variants={variantsChildren}
              >
                <Button m={1}>
                  <Text>Subscribe</Text>
                </Button>
              </motion.div>
            </Box>
          </Box>
        </Box>
      </Box>
    </motion.div>
  )
}

export default NewsletterForm
