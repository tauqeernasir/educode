import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Stack from "@chakra-ui/core/dist/Stack"
import Box from "@chakra-ui/core/dist/Box"
import Text from "@chakra-ui/core/dist/Text"
import { Heading } from "@chakra-ui/core"

const About = props => {
  return (
    <Layout>
      <SEO title="Home" />

      <Box px={[4, 4, 0, 0]}>
        <Stack flex={3} pt={10} mt={8}>
          <Heading className="animated-gradient-text">
            Let us introduce ourselves
          </Heading>
          <Stack fontWeight={300}>
            <Text fontSize={"xl"}>
              We're a community of software engineers who work on different
              tools and technologies. Our aim is to provide you high quality and
              best articles about various languages, tools and frameworks.
            </Text>

            <Text fontSize={"xl"}>
              We have noticed that new programmers seek tutorials and articles
              which could teach them some professional and real life practices,
              something more than a hello work application or a basic todo
              application. On this platform, we write beginner and advance level
              articles which are more meaningful and useful in real life
              scenarios. We try our best to put our best efforts to produce high
              quality content for readers. We mainly write about web
              development, designing and testing practices.
            </Text>

            <Text fontSize={"xl"}>
              We have noticed that new programmers seek tutorials and articles
              which could teach them some professional and real life practices,
              something more than a hello world application or a basic todo
              application. On this platform, we write beginner and advance level
              articles on latest tools and technologies, which are more
              meaningful and useful in real life scenarios. We try our best to
              put our best efforts to produce high quality content for readers.
              We mainly write about web development, designing and testing
              practices.
            </Text>
          </Stack>

          <Stack my={4}>
            <Text fontStyle={"italic"}>
              Subscribe to our newsletter if you are interested in reading more
              articles and stay up-to-date.
            </Text>
            <Text>
              If you are interested in writing on this platform, contact us at{" "}
              <i>
                <b>info@educode</b>
              </i>
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Layout>
  )
}
export default About
