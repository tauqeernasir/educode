import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import ThemeProvider from "@chakra-ui/core/dist/ThemeProvider"
import { CSSReset } from "@chakra-ui/core"
import Footer from "./footer"
import Box from "@chakra-ui/core/dist/Box"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider>
      <CSSReset/>

      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: '100%',
        }}
      >
        <Box as={'main'} mb={10} m>{children}</Box>
        <Footer/>
      </div>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
