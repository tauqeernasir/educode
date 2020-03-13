import React, { useState } from "react"
import Flex from "@chakra-ui/core/dist/Flex"
import Box from "@chakra-ui/core/dist/Box"
import svgImages from "../components/svg-images"
import Heading from "@chakra-ui/core/dist/Heading"
import Text from "@chakra-ui/core/dist/Text"
import PseudoBox from "@chakra-ui/core/dist/PseudoBox"
import BackgroundBorder from "../images/background.svg"
import Divider from "@chakra-ui/core/dist/Divider"
import find from "lodash.find"
import useMedia from "use-media"
import Image from "@chakra-ui/core/dist/Image"
import SimpleGrid from "@chakra-ui/core/dist/SimpleGrid"

const topics = [
  {
    imageUri: svgImages["graphql-icon"],
    name: "graphql",
    displayName: "GraphQL",
    description:
      "GraphQL is an open-source data query and manipulation language for APIs, and a runtime for fulfilling queries with existing data. GraphQL was developed internally by Facebook in 2012 before being publicly released in 2015. On 7 November 2018, the GraphQL project was moved from Facebook to the newly-established GraphQL Foundation, hosted by the non-profit Linux Foundation. Since 2012, GraphQL's rise has followed the adoption timeline as set out by Lee Byron, GraphQL's creator, with accuracy. Byron's goal is to make GraphQL omnipresent across web platforms.",
  },
  {
    imageUri: svgImages["react-icon"],
    name: "react",
    displayName: "ReactJS",
    description: "ReactJS is a Javascript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications."
  },
  {
    imageUri: svgImages["html5-icon"],
    name: "html5",
    displayName: "HTML5",
    description: "HTML5 is a software solution stack that defines the properties and behaviors of web page content by implementing a markup-based pattern to it. HTML5 was the fifth and current major version of HTML that is a World Wide Web Consortium (W3C) recommendation. The current specification is known as the HTML Living Standard and is maintained by a consortium of the major browser vendors (Apple, Google, Mozilla, and Microsoft), the Web Hypertext Application Technology Working Group (WHATWG)."
  },
  {
    imageUri: svgImages["css3-icon"],
    name: "css3",
    displayName: "CSS3",
    description: "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript. CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts."
  },
  {
    imageUri: svgImages["nodejs-icon"],
    name: "nodejs",
    displayName: "NodeJS",
    description: "Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a \"JavaScript everywhere\" paradigm, unifying web-application development around a single programming language, rather than different languages for server- and client-side scripts."
  },
  {
    imageUri: svgImages["ts-icon"],
    name: "typescript",
    displayName: "Typescript",
    description: "TypeScript is an open-source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript, and adds optional static typing to the language. TypeScript is designed for development of large applications and transcompiles to JavaScript. As TypeScript is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs. TypeScript may be used to develop JavaScript applications for both client-side and server-side execution (as with Node.js or Deno)."
  },
]

const TopicIcon = props => {
  const { imageUri, selected, setSelected, name, ...rest } = props
  return (
    <Box
      pb={1}
      borderBottom={
        selected === name ? "1px dashed rgba(255, 255, 255, .5)" : "none"
      }
      onClick={() => setSelected(name)}
    >
      <PseudoBox
        m={4}
        w={100}
        h={100}
        cursor="pointer"
        background={`url("${imageUri}")`}
        backgroundRepeat={"no-repeat"}
        objectFit={"cover"}
        backgroundPosition={"center center"}
        transition="all .4s"
        {...(selected === name && { transform: "scale(1.2) translateY(-5px)" })}
        _hover={{
          transform: "scale(1.2) translateY(-5px)",
        }}
        {...rest}
      />
    </Box>
  )
}

const Topics = () => {
  const [selectedTopic, setSelectedTopic] = useState("graphql")

  const isWide = useMedia({ minWidth: 960 })

  const currentSelectedTopic = find(topics, { name: selectedTopic })

  return (
    <>
      <Flex
        flexDir={isWide ? "row" : "column"}
        backgroundColor={"#2e3192"}
        py={4}
        background={"linear-gradient(to top left, #2e3192 50%, purple)"}

      >
        <Box my={100} minH={400} flex={1}>
          <Box textAlign={"center"} mb={10}>
            <Heading
              color={"white"}
              fontSize={{ md: "4xl" }}
              fontWeight={"bold"}
            >
              Topics
            </Heading>
            <Text color={"white"} fontWeight={200} fontSize={"xl"}>
              Following topics are being covered from our professional
              developers
            </Text>
          </Box>
          <Flex flexWrap={"wrap"} justifyContent={"center"} px={4}>
            {(topics || []).map(topic => {
              return (
                <TopicIcon
                  imageUri={topic.imageUri}
                  name={topic.name}
                  selected={selectedTopic}
                  setSelected={setSelectedTopic}
                />
              )
            })}
          </Flex>
        </Box>
        <Divider
          orientation={isWide ? "vertical" : "horizontal"}
          opacity={0.2}
        />
        <PseudoBox my={100} px={2} minH={400} flex={1} position={"relative"}>
          <Box textAlign={"center"} mb={10}>
            <Image
              d={"inline"}
              src={currentSelectedTopic.imageUri}
              w={100}
              h={100}
            />
            <Heading color={"white"} fontSize={{ md: "4xl" }} fontWeight={300}>
              {currentSelectedTopic.displayName}
            </Heading>
            <Text color={"white"} fontWeight={200} fontSize={"2xl"} mt={4}>
              {currentSelectedTopic.description}
            </Text>
          </Box>
          <Flex flexWrap={"wrap"} justifyContent={"center"} px={4}></Flex>
        </PseudoBox>
      </Flex>
      <Box mb={200}>
        <BackgroundBorder />
      </Box>
    </>
  )
}

export default Topics
