import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import useMedia from "use-media"
import Flex from "@chakra-ui/core/dist/Flex"
import Stack from "@chakra-ui/core/dist/Stack"
import Text from "@chakra-ui/core/dist/Text"
import { Heading } from "@chakra-ui/core"

const About = props => {
  const isWide = useMedia({ minWidth: 960 })

  return (
    <Layout>
      <SEO title="Home" />
      <Flex m={4} flexDir={isWide ? "row" : "column"}>
        <Stack flex={1} px={4}></Stack>

        <Stack flex={3} maxW={960} pt={10}>
          <Heading fontWeight={500}>Hi!</Heading>
          <Text fontSize={"2xl"} fontWeight={300}>
            We're a community of software engineers who work on different tools
            and technologies. Our aim is to provide you high quality and best
            articles about various languages, tools and frameworks.
          </Text>

          <Text fontSize={"2xl"} fontWeight={300}>
            We have noticed that new programmers seek tutorials and articles
            which could teach them some professional and real life practices,
            something more than a hello work application or a basic todo
            application. On this platform, we write beginner and advance level
            articles which are more meaningful and useful in real life
            scenarios. We try our best to put our best efforts to produce high
            quality content for readers. We mainly write about web development,
            designing and testing practices.
          </Text>

          <Text fontSize={"2xl"} fontWeight={300}>
            We have noticed that new programmers seek tutorials and articles
            which could teach them some professional and real life practices,
            something more than a hello world application or a basic todo
            application. On this platform, we write beginner and advance level
            articles on latest tools and technologies, which are more meaningful
            and useful in real life scenarios. We try our best to put our best
            efforts to produce high quality content for readers. We mainly write
            about web development, designing and testing practices.
          </Text>

          <Text fontStyle={"italic"}>
            Subscribe to our newsletter if you are interested in reading more
            articles and stay up-to-date.
          </Text>
          <Text>
            If you are interested in writing on this platform, contact us at{" "}
            <i>
              <b>info@devplode.com</b>
            </i>
          </Text>
        </Stack>

        <Stack flex={1} px={4}></Stack>
      </Flex>
    </Layout>
  )
}
export default About
