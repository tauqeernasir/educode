import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Heading, Box, Button } from "@chakra-ui/core"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Box d="flex" flexDir="column" maxW="70%" my="50px">
      <Heading fontWeight="400">404</Heading>
      <Heading className="animated-gradient-text">
        Oops...we couldn't seem to find the page you are looking for.
      </Heading>
    </Box>
    <Link to="/">
      <Button>Go back to homepage</Button>
    </Link>
  </Layout>
)

export default NotFoundPage
