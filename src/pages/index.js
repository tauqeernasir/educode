import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Text from "@chakra-ui/core/dist/Text"
import Box from "@chakra-ui/core/dist/Box"
import Flex from "@chakra-ui/core/dist/Flex"
import BackgroundBorder from "../images/background.svg"
import RecentPosts from "../components/recent-posts"
import Typing from "react-typing-animation"
import svgImages from "../components/svg-images"
import { motion } from "framer-motion"

import "./index.css"
import NewsletterForm from "../components/newsletter-form"
import Topics from "../components/topics"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Flex justifyContent="space-around" backgroundColor="#2e3192">
        <Box>
          <Box
            d="flex"
            flexDir={"column"}
            maxW={960}
            px={4}
            py="100px"
            my={10}
            position="relative"
            background={`url("${svgImages["hero-1"]}")`}
            backgroundRepeat={"no-repeat"}
            backgroundPosition={"right"}
          >
            <Box mb={8}>
              <Box color={"white"}>
                <motion.div
                  initial='closed'
                  animate='open'
                  variants={{
                  open: {
                    transition: {
                      delayChildren: 0,
                      staggerChildren: 0.125,
                    }
                  },
                }}
                >
                  <motion.div variants={{ open: { x: 0, opacity: 1 }, closed: { x: -100, opacity: 0} }}>
                    <Text
                      // className={"gradient-text"}
                      fontSize={"sm"}
                      color={'orange.300'}
                      fontWeight={700}
                    >
                      Welcome to backslashes.
                    </Text>
                  </motion.div>
                  <motion.div variants={{ open: { x: 0, opacity: 1 }, closed: { x: -100, opacity: 0} }}>
                    <Box fontSize={{ md: "4xl" }} fontWeight={"bold"}>
                      <Typing speed={100} cursor={"|"}>
                        Become a better developer <Typing.Delay ms={1000} />
                        <Typing.Backspace count={10} /> software developer.
                      </Typing>
                    </Box>
                  </motion.div>
                  <motion.div variants={{ open: { x: 0, opacity: 1 }, closed: { x: -100, opacity: 0} }}>
                    <Box fontSize={{ md: "2xl" }} fontWeight={300}>
                      Read high quality articles about data structures, software
                      development, web development, testing, designing and
                      software architecture.
                    </Box>
                  </motion.div>
                  <motion.div variants={{ open: { x: 0, opacity: 1 }, closed: { x: -100, opacity: 0} }}>
                    <Box fontWeight={200}>
                      Follow our community on twitter{" "}
                      <b>
                        <i>@backslashes_io</i>
                      </b>{" "}
                      to get updates about new content.
                    </Box>
                  </motion.div>
                </motion.div>
              </Box>
            </Box>
            <Box alignSelf={"flex-start"}>
              <NewsletterForm />
            </Box>
          </Box>
        </Box>
      </Flex>
      {/* background border */}
      <Box>
        <BackgroundBorder />
      </Box>

      {/* Posts container */}
      <RecentPosts />

      <Topics />
    </Layout>
  )
}

export default IndexPage
