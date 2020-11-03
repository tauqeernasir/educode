import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import ThemeProvider from "@chakra-ui/core/dist/ThemeProvider"
import {
  CSSReset,
  ColorModeProvider,
  theme,
  ITheme,
  DarkMode,
} from "@chakra-ui/core"
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
      <ColorModeProvider>
        <DarkMode>
          <CSSReset />
          <Box maxW="960px" mx="auto">
            <Header siteTitle={data.site.siteMetadata.title} />
            <div
              style={{
                margin: `0 auto`,
                maxWidth: "100%",
              }}
            >
              <Box as={"main"} mb={10}>
                {children}
              </Box>
              <Footer />
            </div>
          </Box>
        </DarkMode>
      </ColorModeProvider>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
