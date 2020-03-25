import React, { useState } from "react"
import Flex from "@chakra-ui/core/dist/Flex"
import Box from "@chakra-ui/core/dist/Box"
import Heading from "@chakra-ui/core/dist/Heading"
import Text from "@chakra-ui/core/dist/Text"
import PseudoBox from "@chakra-ui/core/dist/PseudoBox"
import BackgroundBorder from "../images/background.svg"
import Divider from "@chakra-ui/core/dist/Divider"
import find from "lodash.find"
import useMedia from "use-media"
import Image from "@chakra-ui/core/dist/Image"
import { motion } from "framer-motion"
import { topics } from "../data/site"

const TopicIcon = props => {
  const variants = {
    selected: {
      opacity: 1,
      scale: 1.2,
      translateY: -10,
    },
    unselected: {
      opacity: 0.5,
      scale: 1,
      translateY: 0,
    },
  }

  const { imageUri, selected, setSelected, name, displayName, ...rest } = props
  return (
    <Box pb={1} onClick={() => setSelected(name)}>
      <motion.div
        animate={selected === name ? "selected" : "unselected"}
        variants={variants}
        whileTap={{
          scale: 0.9,
        }}
        whileHover={"hovering"}
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
          {...rest}
        ></PseudoBox>
        <motion.div
          initial={"hidden"}
          variants={{
            hovering: { opacity: 1, y: 10 },
            hidden: { opacity: 0, y: -10 },
          }}
        >
          <Text m={0} textAlign={"center"} color={"white"}>
            {displayName}
          </Text>
        </motion.div>
      </motion.div>
    </Box>
  )
}

const topicDisplayVariants = {
  selected: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  unselected: {
    opacity: 0,
    y: -20,
    scale: 0.7,
  },
}

const Topics = () => {
  const [selectedTopic, setSelectedTopic] = useState("graphql")

  const isWide = useMedia({ minWidth: 960 })

  const currentSelectedTopic = find(topics, { name: selectedTopic })

  return (
    <>
      <Box transform={"scaleY(-1) scaleX(-1)"}>
        <BackgroundBorder />
      </Box>
      <Flex
        flexDir={isWide ? "row" : "column"}
        backgroundColor={"#2e3192"}
        py={4}
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
