import React, { useState } from "react"
import Flex from "@chakra-ui/core/dist/Flex"
import Box from "@chakra-ui/core/dist/Box"
import Heading from "@chakra-ui/core/dist/Heading"
import Text from "@chakra-ui/core/dist/Text"
import PseudoBox from "@chakra-ui/core/dist/PseudoBox"
import find from "lodash.find"
import Image from "@chakra-ui/core/dist/Image"
import { topics } from "../data/site"
import { Stack, useColorMode } from "@chakra-ui/core"

const TopicIcon = props => {
  const { imageUri, selected, setSelected, name, displayName, ...rest } = props
  return (
    <Box
      pb={1}
      onClick={() => setSelected(name)}
      style={{ filter: selected === name ? "none" : "grayscale(90%)" }}
    >
      <PseudoBox
        m={4}
        w={50}
        h={50}
        cursor="pointer"
        background={`url("${imageUri}")`}
        backgroundRepeat={"no-repeat"}
        objectFit={"cover"}
        backgroundPosition={"center center"}
        {...rest}
      ></PseudoBox>

      <Text m={0} textAlign={"center"}>
        {displayName}
      </Text>
    </Box>
  )
}

const Topics = () => {
  const [selectedTopic, setSelectedTopic] = useState("graphql")
  const currentSelectedTopic = find(topics, { name: selectedTopic })

  const { colorMode } = useColorMode()
  return (
    <>
      <Stack>
        <Box>
          <Box textAlign={"center"} mb={10}>
            <Heading
              color={colorMode === "light" ? "purple.600" : "orange.300"}
              fontWeight={400}
              textTransform="uppercase"
              size="lg"
            >
              Languages &amp; Tools
            </Heading>
            <Text fontWeight={300} fontSize={"md"}>
              These topics contains articles from developers having great
              industry experience
            </Text>
          </Box>
          <Flex flexWrap={"wrap"} justifyContent={"center"} px={4}>
            {(topics || []).map((topic, i) => {
              return (
                <TopicIcon
                  key={i}
                  imageUri={topic.imageUri}
                  name={topic.name}
                  selected={selectedTopic}
                  setSelected={setSelectedTopic}
                  displayName={topic.displayName}
                />
              )
            })}
          </Flex>
        </Box>
        <PseudoBox px={[4, 4, 0, 0]} mt={4}>
          <Box mb={10}>
            <Image
              d={"inline"}
              src={currentSelectedTopic.imageUri}
              w={80}
              h={80}
            />
            <Heading size="lg" fontStyle="italic" fontWeight={300}>
              {currentSelectedTopic.displayName}
            </Heading>
            <Text fontSize="lg" textAlign="left" fontWeight={300} mt={4}>
              {currentSelectedTopic.description}
            </Text>
          </Box>
          <Flex flexWrap={"wrap"} justifyContent={"center"} px={4}></Flex>
        </PseudoBox>
      </Stack>
    </>
  )
}

export default Topics
