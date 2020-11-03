import React from "react"
import { Box, Button } from "@chakra-ui/core"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Stack from "@chakra-ui/core/dist/Stack"
import Flex from "@chakra-ui/core/dist/Flex"
import Image from "@chakra-ui/core/dist/Image"
import Text from "@chakra-ui/core/dist/Text"
import Badge from "@chakra-ui/core/dist/Badge"
import { graphql, Link } from "gatsby"
import { FiArrowRight, FiShare2 } from "react-icons/fi"

const Post = props => {
  const { data } = props
  const { thumbnail, date, tags, author, title } = data.frontmatter
  const slug = data.fields.slug
  const { timeToRead, excerpt: description } = data

  return (
    <Box>
      <Stack flexDir={{ sm: "column", md: "row" }} spacing={6}>
        <Image src={thumbnail} rounded={10} w={{ md: "300px", lg: "400px" }} />
        <Box ml={[0, 0, 4, 4]}>
          <Box mb={4}>
            <Link to={`/post/${slug}`}>
              <Text fontSize={{ md: "xl", lg: "2xl" }} fontWeight={800} mt={3}>
                {title}
              </Text>
            </Link>
            <Box fontSize="sm">
              {timeToRead} min{timeToRead > 1 ? "s" : ""} read
            </Box>
          </Box>
          {/* <Divider /> */}
          <Text fontSize={{ sm: "sm", md: "lg" }}>{description}</Text>
          <Box d={"flex"} alignItems={"center"}>
            <Box flex={1}>
              {tags?.map(tag => {
                return (
                  <Badge key={tag} variantColor={"orange"} mr={1}>
                    <Text>{tag}</Text>
                  </Badge>
                )
              })}
            </Box>
            <Stack isInline>
              <Button fontWeight={300}>
                Share <Box ml={2} as={FiShare2} />
              </Button>
              <Link to={`/post/${slug}`}>
                <Button fontWeight={300}>
                  Read <Box ml={2} as={FiArrowRight} />
                </Button>
              </Link>
            </Stack>
          </Box>
          <Flex fontSize={{ xs: "xs", sm: "sm" }}>
            <Box flex={1}>
              <Text>
                <i>written on {date}</i> by <b>{author}</b>
              </Text>
            </Box>
          </Flex>
        </Box>
      </Stack>
    </Box>
  )
}

const Blog = props => {
  const {
    data,
    pageContext: { currentPage, totalPages },
  } = props

  return (
    <Layout>
      <SEO title="Home" />
      <Box mt={16} p={[4, 4, 0, 0]}>
        <Stack spacing={16}>
          {data.allMarkdownRemark.edges.map((edge, i) => {
            return (
              <Box key={i}>
                <Post data={edge.node} />
              </Box>
            )
          })}
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
      </Box>
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
