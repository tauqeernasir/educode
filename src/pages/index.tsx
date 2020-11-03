import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Text from "@chakra-ui/core/dist/Text"
import Box from "@chakra-ui/core/dist/Box"
import Flex from "@chakra-ui/core/dist/Flex"
import RecentPosts from "../components/recent-posts"

import "./index.css"
import NewsletterForm from "../components/newsletter-form"
import Topics from "../components/topics"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Flex justifyContent="space-around">
        <Box>
          <Box d="flex" flexDir={"column"} px={4} py="100px" my={10}>
            <Box mb={8}>
              <Box>
                <Text fontSize={"sm"} color={"orange.300"} fontWeight={700}>
                  Welcome to Educode.
                </Text>

                <Box fontSize={{ md: "4xl" }} fontWeight={"bold"}>
                  Become a better developer software developer.
                </Box>
                <Box fontSize={{ md: "2xl" }} fontWeight={300}>
                  Read high quality articles about data structures, software
                  development, web development, testing, designing and software
                  architecture.
                </Box>
                <Box fontWeight={200}>
                  Follow our community on twitter{" "}
                  <b>
                    <i>@educode</i>
                  </b>{" "}
                  to get updates about new content.
                </Box>
              </Box>
            </Box>
            <Box alignSelf={"flex-start"}>
              <NewsletterForm />
            </Box>
          </Box>
        </Box>
      </Flex>

      {/* Posts container */}
      <RecentPosts />

      <Topics />
    </Layout>
  )
}

export default IndexPage
