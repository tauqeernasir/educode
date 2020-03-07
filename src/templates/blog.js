import React from "react"

import Layout from "../components/layout"
import { graphql } from "gatsby"
import { Heading } from "@chakra-ui/core"
import Box from "@chakra-ui/core/dist/Box"
import Text from "@chakra-ui/core/dist/Text"

import './blog.css'

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
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
      <Box d={"flex"} justifyContent={"space-around"}>
        <Box minW={600} maxW={960} w={960}>
          <Box my={10}>
            <Heading>{markdownRemark.frontmatter.title}</Heading>
          </Box>
          <Box className={'blog--container'}>
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
