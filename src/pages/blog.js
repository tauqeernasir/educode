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
import { graphql, useStaticQuery, Link } from "gatsby"

const Post = props => {
  const isWide = useMedia({ minWidth: 960 })
  const { data } = props

  return (
    <Link to={`/post/${data.fields.slug}`}>
      <Flex borderWidth={1} boxShadow={"lg"} p={4} mb={4} rounded={10}>
        <Stack isInline={isWide} alignItems={"flex-start"}>
          <Box w={isWide ? 300 : "auto"} alignSelf={"center"}>
            <Image
              src={data.frontmatter.thumbnail}
              rounded={10}
              boxShadow={"lg"}
            />
          </Box>
          <Flex flexDir={"column"} flex={2}>
            <Box>
              {data.frontmatter.tags.map((tag) => (
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
              <Box>2 minutes read</Box>
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

const Blog = () => {
  const isWide = useMedia({ minWidth: 960 })

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 2
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
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <Flex m={4} flexDir={isWide ? "row" : "column"}>
        <Stack flex={1} px={4}>
          <Text>Left Content</Text>
        </Stack>

        <Stack flex={3} maxW={960}>
          {data.allMarkdownRemark.edges.map((edge, i) => {
            return <Post key={i} data={edge.node} />
          })}
        </Stack>

        <Stack flex={1} px={4}>
          <Text>Right Content</Text>
        </Stack>
      </Flex>
    </Layout>
  )
}

export default Blog
