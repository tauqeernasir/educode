import React from "react"
import Box from "@chakra-ui/core/dist/Box"
import Text from "@chakra-ui/core/dist/Text"
import Flex from "@chakra-ui/core/dist/Flex"
import PseudoBox from "@chakra-ui/core/dist/PseudoBox"
import Badge from "@chakra-ui/core/dist/Badge"
import { graphql, Link, useStaticQuery } from "gatsby"

const posts = [
  {
    title: "Stop using isLoading as state",
    description: `In this post, I will be demonstrating some of the pitfalls of
        using isLoading as a state. I will also tell how this code can
        be written better...`,
  },
  {
    title: "How to write better tests for React Components",
    description: `This is interesting post for those who really want to want to write
    better tests for their application and want to be more productive than ever...`,
  },
  {
    title: "Stop using isLoading as state",
    description: `In this post, I will be demonstrating some of the pitfalls of
        using isLoading as a state. I will also tell how this code can
        be written better...`,
  },
  {
    title: "How to write better tests for React Components",
    description: `This is interesting post for those who really want to want to write
    better tests for their application and want to be more productive than ever...`,
  },
]

const Post = props => {
  const { title, description, slug } = props
  return (
    <PseudoBox
      bg={"white"}
      style={{
        boxShadow:
          "0 20px 25px -5px rgba(85, 60, 154, .3), 0 10px 10px -5px rgb(85, 60, 154, .3)",
      }}
      p={4}
      mb={10}
      rounded={5}
      borderWidth={1}
      borderColor={"grey.400"}
      minW={600}
      maxW={900}
      transition={"all .3s"}
      _hover={{
        boxShadow: "sm",
        backgroundColor: "gray.100",
        cursor: "pointer",
      }}
    >
      <Box fontWeight={300}>
        <Text fontSize={"1.6em"} color={"purple.700"}>
          {title}
        </Text>
        <Text fontSize={"1.1em"}>{description}</Text>
        <Box d={"flex"} alignItems={"center"}>
          <Box flex={1}>
            <Badge variant={"outline"} variantColor={"orange"} mr={1}>
              <Text>Javascript</Text>
            </Badge>
            <Badge variant={"outline"}>
              <Text>ReactJS</Text>
            </Badge>
          </Box>
          <Link to={`/blog/${slug}`}>
            <Text
              rounded={5}
              fontSize={".9em"}
              backgroundColor={"purple.700"}
              py={2}
              px={4}
              color={"white"}
              to={`/blog/${slug}`}
            >
              Read &rarr;
            </Text>
          </Link>
        </Box>
      </Box>
    </PseudoBox>
  )
}

const RecentPosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            excerpt
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Box d={"flex"} justifyContent={"space-around"}>
      <Box
        bg={"white"}
        p={4}
        position={"relative"}
        top={-180}
        minW={500}
        maxW={800}
        rounded={5}
        boxShadow={"2xl"}
      >
        <Text fontSize={"1.2em"} color={"gray.500"} mb={6}>
          Recent blog posts
        </Text>
        <Flex justifyContent={"space-around"} backgroundColor={"red"}>
          <Flex flexDir={"column"}>
            {data.allMarkdownRemark.edges.map(edge => {
              const { frontmatter, excerpt, fields: { slug } } = edge.node

              return <Post key={frontmatter.title} title={frontmatter.title} description={excerpt} slug={slug} />
            })}
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}

export default RecentPosts
