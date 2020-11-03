import React from "react"
import Box from "@chakra-ui/core/dist/Box"
import Text from "@chakra-ui/core/dist/Text"
import Flex from "@chakra-ui/core/dist/Flex"
import PseudoBox from "@chakra-ui/core/dist/PseudoBox"
import Badge from "@chakra-ui/core/dist/Badge"
import { graphql, Link, useStaticQuery } from "gatsby"
import { Divider, Image, Stack } from "@chakra-ui/core"
import useMedia from "use-media"

const Post = props => {
  const {
    title,
    description,
    slug,
    thumbnail,
    date,
    author,
    avatar,
    timeToRead,
    tags = [],
  } = props
  return (
    <PseudoBox>
      <Box fontWeight={300} position={"relative"}>
        <Image
          src={thumbnail}
          boxShadow={"2xl"}
          rounded={10}
          w={["200px", null, null, "400px"]}
        />
        <Link to={`/blog/${slug}`}>
          <Text fontSize={"xl"} fontWeight={"bold"} mt={3}>
            {title}
          </Text>
        </Link>
        <Flex fontSize={{ xs: "xs", sm: "sm" }}>
          <Box flex={1}>
            <Text>
              <i>written on {date}</i> by <b>{author}</b>
            </Text>
          </Box>
          <Box>
            {timeToRead} min{timeToRead > 1 ? "s" : ""} read
          </Box>
        </Flex>
        <Divider />
        <Text fontSize={{ sm: "sm", md: "lg" }}>{description}</Text>
        <Box d={"flex"} alignItems={"center"}>
          <Box flex={1}>
            {tags.map(tag => {
              return (
                <Badge key={tag} variantColor={"orange"} mr={1}>
                  <Text>{tag}</Text>
                </Badge>
              )
            })}
          </Box>
          <Link to={`/post/${slug}`}>
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
  const isWide = useMedia({ minWidth: 960 })

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 3
      ) {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "MM, Do YYYY")
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
    <Box d={"flex"} justifyContent={"space-around"}>
      <Box>
        <Flex justifyContent={"space-around"}>
          <Flex flexDir={isWide ? "row" : "column"} flexWrap={"wrap"}>
            {data.allMarkdownRemark.edges.map(edge => {
              const {
                frontmatter,
                excerpt,
                fields: { slug },
                timeToRead,
              } = edge.node

              return (
                <Box m={isWide ? 4 : 2} key={frontmatter.title}>
                  <Post
                    key={frontmatter.title}
                    title={frontmatter.title}
                    description={excerpt}
                    slug={slug}
                    thumbnail={frontmatter.thumbnail}
                    date={frontmatter.date}
                    avatar={frontmatter.avatar}
                    author={frontmatter.author}
                    timeToRead={timeToRead}
                    tags={frontmatter.tags}
                  />
                </Box>
              )
            })}
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}

export default RecentPosts
