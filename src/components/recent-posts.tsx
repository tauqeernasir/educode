import React from "react"
import Box from "@chakra-ui/core/dist/Box"
import Text from "@chakra-ui/core/dist/Text"
import Flex from "@chakra-ui/core/dist/Flex"
import PseudoBox from "@chakra-ui/core/dist/PseudoBox"
import Badge from "@chakra-ui/core/dist/Badge"
import { graphql, Link, useStaticQuery } from "gatsby"
import { Image, Stack, Button } from "@chakra-ui/core"
import { FiArrowRight, FiShare2 } from "react-icons/fi"

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
    <PseudoBox
      borderBottom={{ xs: "1px solid rgba(255, 255, 255, .1)", md: "none" }}
    >
      <Stack isInline spacing={6}>
        <Image
          d={["none", "none", "block", "block"]}
          src={thumbnail}
          rounded={10}
          w={{ md: "300px", lg: "400px" }}
        />
        <Box>
          <Box mb={4}>
            <Link to={`/blog/${slug}`}>
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
              {tags.map(tag => {
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
    </PseudoBox>
  )
}

const RecentPosts = () => {
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
    <Box px={[4, 4, 0, 0]} my={8}>
      <Flex justifyContent={"space-around"}>
        <Stack spacing={16}>
          {data.allMarkdownRemark.edges.map(edge => {
            const {
              frontmatter,
              excerpt,
              fields: { slug },
              timeToRead,
            } = edge.node

            return (
              <Box mb={[2, null, null, 4]} key={frontmatter.title}>
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
        </Stack>
      </Flex>
    </Box>
  )
}

export default RecentPosts
