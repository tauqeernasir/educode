import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Text from "@chakra-ui/core/dist/Text"
import Box from "@chakra-ui/core/dist/Box"
import Flex from "@chakra-ui/core/dist/Flex"
import BackgroundBorder from "../images/background.svg"
import DevCoder from "../images/dev-coder.svg"
import RecentPosts from "../components/recent-posts"

import "./index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Flex
      justifyContent="space-around"
      backgroundColor="#2e3192"
      id={"main-page-header-1"}
      position={"relative"}
    >
      <Box>
        <Box
          d="flex"
          justifyContent={"space-between"}
          alignItems={"center"}
          flex={1}
          maxW={960}
          px={4}
          py="100px"
          position="relative"
        >
          <Text fontSize="1.4em" fontWeight={200} maxW="600px" color={"white"}>
            <Text fontSize={"2em"}>A learning platform for</Text>
            <Text as="span">
              <b>developers, designers</b> and <b>software testers</b>. Follow
              our community on @twitter to get updates about new content.
            </Text>
          </Text>
          <Box minW={200} maxW={200} flex={1}>
            <DevCoder width={300} height={300} />
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
