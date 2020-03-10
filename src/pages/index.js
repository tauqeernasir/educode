import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Text from "@chakra-ui/core/dist/Text"
import Box from "@chakra-ui/core/dist/Box"
import Flex from "@chakra-ui/core/dist/Flex"
import BackgroundBorder from "../images/background.svg"
import RecentPosts from "../components/recent-posts"

import "./index.css"
import { Button, Input } from "@chakra-ui/core"

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
              // fontWeight={200}
              color={"white"}
            >
              <Box fontSize={{ md: "4xl" }} fontWeight={"bold"}>
                Become a better software developer
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
            <Box p={4} rounded={10} boxShadow={'xl'}>
              <Text color={'white'} mb={4} fontWeight={300}>Subscribe to our newletter to stay up to date with latest content</Text>
              <Box d={"flex"} flexWrap={'wrap'}>
                <Box m={1}>
                  <Input w={'2xs'} placeholder={'Enter your name'}/>
                </Box>
                <Box m={1}>
                  <Input w={'2xs'} placeholder={'Enter your email address'}/>
                </Box>
                <Button m={1}>
                  <Text>Subscribe</Text>
                </Button>
              </Box>
            </Box>
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
