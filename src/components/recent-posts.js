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
    tags = []
  } = props
  return (
    <PseudoBox
      bg={"white"}
      style={{
        boxShadow:
          "0 20px 25px -5px rgba(85, 60, 154, .3), 0 10px 10px -5px rgb(85, 60, 154, .3)",
      }}
      p={4}
      rounded={5}
      borderWidth={1}
      borderColor={"grey.400"}
      maxW={480}
      minH={500}
      transition={"all .3s"}
      _hover={{
        boxShadow: "sm",
        backgroundColor: "gray.100",
        cursor: "pointer",
      }}
    >
      <Box fontWeight={300} position={"relative"}>
        <Image
          src={thumbnail}
          boxShadow={"2xl"}
          opacity={0.3}
          rounded={10}
          style={{ filter: "blur(1.5px)" }}
        />
        <Image
          src={thumbnail}
          position={"absolute"}
          right={-25}
          top={-25}
          rounded={10}
          boxShadow={"2xl"}
        />
        <Link to={`/blog/${slug}`}>
          <Text fontSize={"xl"} fontWeight={"bold"} color={"purple.700"} mt={3}>
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
            {tags.map((tag) => {
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
      <Box
        bg={"white"}
        p={isWide ? 4 : 1}
        position={"relative"}
        // top={-180}
        maxW={"90%"}
        rounded={5}
        // boxShadow={"2xl"}
      >
        {/*<Box*/}
        {/*  background={"rgba(0, 0, 0, .1)"}*/}
        {/*  p={1}*/}
        {/*  rounded={10}*/}
        {/*  position={"absolute"}*/}
        {/*  top={"45%"}*/}
        {/*  left={-90}*/}
        {/*  transform={"rotate(-90deg)"}*/}
        {/*>*/}
        {/*  <Text*/}
        {/*    fontSize={"1.2em"}*/}
        {/*    color={"white"}*/}
        {/*    background={"linear-gradient(to bottom right, purple 30%, orange)"}*/}
        {/*    p={2}*/}
        {/*    rounded={10}*/}
        {/*  >*/}
        {/*    Recent blog posts*/}
        {/*  </Text>*/}
        {/*</Box>*/}
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
