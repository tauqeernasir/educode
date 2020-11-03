import React from "react"

import Layout from "../components/layout"
import { graphql } from "gatsby"
import { Badge, Heading } from "@chakra-ui/core"
import Box from "@chakra-ui/core/dist/Box"
import Text from "@chakra-ui/core/dist/Text"

import "./blog.css"
import SEO from "../components/seo"
import Stack from "@chakra-ui/core/dist/Stack"

import Disqus from "disqus-react"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMM, Do YYYY")
        tags
        author
      }
      html
    }
  }
`

const Blog = props => {
  const {
    data: { markdownRemark },
  } = props

  const baseUrl = 'https://devplode.netlify.com'

  const disqusShortname = 'devplode'
  const disqusConfig = {
    identifier: markdownRemark.id,
    title: markdownRemark.frontmatter.title,
    url: baseUrl + props.pageContext.slug
  }

  return (
    <Layout>
      <SEO title={markdownRemark.frontmatter.title} />
      <Box d={"flex"} justifyContent={"center"} px={4} fontSize={"xl"}>
        <Box maxW={960} minW={0}>
          <Box my={10}>
            <Heading size={"xl"}>{markdownRemark.frontmatter.title}</Heading>
            <Stack isInline fontSize={{ xs: "xs", sm: "sm" }}>
              <Text>
                <i>written on {markdownRemark.frontmatter.date}</i>
              </Text>
              <Text>
                by <b>{markdownRemark.frontmatter.author}</b>
              </Text>
            </Stack>
            <Box>
              {markdownRemark.frontmatter.tags &&
                markdownRemark.frontmatter.tags.map(tag => (
                  <Badge
                    key={tag}
                    p={1}
                    mr={1}
                    color={"white"}
                    backgroundColor={"purple.800"}
                  >
                    <Text>
                      <Box
                        as={"span"}
                        p={2}
                        color={"white"}
                        style={{ textShadow: "0px 0px 10px white" }}
                      >
                        #
                      </Box>
                      {tag}
                    </Text>
                  </Badge>
                ))}
            </Box>
          </Box>
          <Box className={"blog--container"}>
            <Text>
              <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
            </Text>
          </Box>
          <Box mt={4}>
            <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}

export default Blog
