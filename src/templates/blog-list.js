import React from "react"
import { Box, Heading } from "@chakra-ui/core"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Stack from "@chakra-ui/core/dist/Stack"
import Flex from "@chakra-ui/core/dist/Flex"
import Image from "@chakra-ui/core/dist/Image"
import Text from "@chakra-ui/core/dist/Text"
import useMedia from "use-media"
import Badge from "@chakra-ui/core/dist/Badge"
import { graphql, Link } from "gatsby"
import { AnimatePresence, motion } from "framer-motion"

const Post = props => {
  const isWide = useMedia({ minWidth: 960 })
  const { data } = props

  return (
    <Link to={`/post/${data.fields.slug}`}>
      <Flex
        borderWidth={1}
        boxShadow={"lg"}
        p={4}
        mb={4}
        rounded={10}
        bg={"white"}
      >
        <Stack isInline={isWide} alignItems={"flex-start"}>
          <Box w={isWide ? 300 : "auto"} alignSelf={"center"}>
            <motion.div
              variants={{
                hidden: { scale: 0 },
                shown: { scale: 1, transition: { type: "spring" } },
              }}
            >
              <Image
                src={data.frontmatter.thumbnail}
                rounded={10}
                boxShadow={"lg"}
              />
            </motion.div>
          </Box>
          <Flex flexDir={"column"} flex={2}>
            <Box>
              {data.frontmatter.tags.map(tag => (
                <Badge key={tag} variantColor={"orange"} mr={1}>
                  <Text>{tag}</Text>
                </Badge>
              ))}
            </Box>
            <Flex fontSize={{ xs: "xs", sm: "sm" }}>
              <Box flex={1}>
                <Text>
                  <i>written on {data.frontmatter.date}</i> by{" "}
                  <b>{data.frontmatter.author}</b>
                </Text>
              </Box>
              <Box>{data.timeToRead} {data.timeToRead > 1 ? 'mins' : 'min'} read</Box>
            </Flex>
            <Box>
              <Heading fontSize={"2xl"} className={"gradient-text"}>
                {data.frontmatter.title}
              </Heading>
              <Text>{data.excerpt}</Text>
            </Box>
          </Flex>
        </Stack>
      </Flex>
    </Link>
  )
}

const postVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
    y: "100vh",
  },
  shown: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      type: "tween",
      when: "beforeChildren",
      // staggerChildren: 1
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
    y: "100vh",
  },
}

const Blog = props => {
  const isWide = useMedia({ minWidth: 960 })

  const {
    data,
    pageContext: { currentPage, totalPages },
  } = props

  return (
    <Layout>
      <SEO title="Home" />
      <Flex m={4} flexDir={isWide ? "row" : "column"}>
        <Stack flex={1} px={4}></Stack>

        <Stack flex={3} maxW={960}>
          <AnimatePresence>
            <motion.div
              exit={"exit"}
              initial={"hidden"}
              animate={"shown"}
              variants={{ shown: { transition: { staggerChildren: 0.2 } } }}
              // transition={{ staggerChildren: 3 }}
            >
              {data.allMarkdownRemark.edges.map((edge, i) => {
                return (
                  <motion.div key={i} variants={postVariants}>
                    <Post key={i} data={edge.node} />
                  </motion.div>
                )
              })}
            </motion.div>
          </AnimatePresence>
          <Flex my={10}>
            {currentPage > 1 && (
              <Link to={`/blog/page/${currentPage - 1}`}>Newer posts</Link>
            )}
            <Box flex={1}></Box>
            {currentPage < totalPages && (
              <Link to={`/blog/page/${currentPage + 1}`}>Older posts</Link>
            )}
          </Flex>
        </Stack>

        <Stack flex={1} px={4}></Stack>
      </Flex>
    </Layout>
  )
}

export const postListQuery = graphql`
  query PostListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMM, Do YYYY")
            thumbnail
            avatar
            author
            tags
          }
          excerpt
          fields {
            slug
          }
          timeToRead
        }
      }
    }
  }
`

export default Blog
