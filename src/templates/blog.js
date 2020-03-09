import React from "react"

import Layout from "../components/layout"
import { graphql } from "gatsby"
import { Badge, Heading } from "@chakra-ui/core"
import Box from "@chakra-ui/core/dist/Box"
import Text from "@chakra-ui/core/dist/Text"

import "./blog.css"
import SEO from "../components/seo"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        tags
      }
      html
    }
  }
`

const Blog = props => {
  const {
    data: { markdownRemark },
  } = props

  return (
    <Layout>
      <SEO title={markdownRemark.frontmatter.title} />
      <Box d={"flex"} justifyContent={'center'} px={4} fontSize={'xl'}>
        <Box maxW={960} minW={0}>
          <Box my={10}>
            <Heading size={'xl'}>
              {markdownRemark.frontmatter.title}
            </Heading>
            <Text>{markdownRemark.frontmatter.date}</Text>
            <Box>
              {markdownRemark.frontmatter.tags && markdownRemark.frontmatter.tags.split(",").map(tag => (
                <Badge
                  p={1}
                  mr={1}
                  color={"white"}
                  backgroundColor={"purple.800"}
                >
                  <Text><Box as={'span'} p={2} color={'white'} style={{ textShadow: '0px 0px 10px white'}}>#</Box>{tag}</Text>
                </Badge>
              ))}
            </Box>
          </Box>
          <Box className={"blog--container"}>
            <Text>
              <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
            </Text>
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}

export default Blog
