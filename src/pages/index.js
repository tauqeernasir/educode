import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Text from "@chakra-ui/core/dist/Text"
import Box from "@chakra-ui/core/dist/Box"
import Flex from "@chakra-ui/core/dist/Flex"
import BackgroundBorder from "../images/background.svg"
import RecentPosts from "../components/recent-posts"
import Typing from "react-typing-animation"


import './index.css'
import NewsletterForm from "../components/newsletter-form"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Flex
      justifyContent="space-around"
      backgroundColor="#2e3192"
    >
      <Box>
        <Box
          d="flex"
          flexDir={"column"}
          maxW={960}
          px={4}
          py="100px"
          my={10}
          position="relative"
        >
          <Box mb={8}>
            <Text
              color={"white"}
            >
              <Box fontSize={{ md: "4xl" }} fontWeight={"bold"}>
                <Typing speed={50} cursor={"|"}>
                  Become a better developer <Typing.Delay ms={1000} /><Typing.Backspace count={10}  /> software developer
                </Typing>
              </Box>
              <Box fontSize={{ md: "2xl" }} fontWeight={300}>
                Read high quality articles about data structures, software
                development, web development, testing, designing and software
                architecture.
              </Box>
              <Box fontWeight={200}>
                Follow our community on twitter{" "}
                <b>
                  <i>@backslashes_io</i>
                </b>{" "}
                to get updates about new content.
              </Box>
            </Text>
          </Box>
          <Box alignSelf={'flex-start'}>
            <NewsletterForm/>
          </Box>
        </Box>
      </Box>
    </Flex>
    {/* background border */}
    <Box>
      <BackgroundBorder width={"100%"} />
    </Box>

    {/* Posts container */}
    <RecentPosts />
  </Layout>
)

export default IndexPage
