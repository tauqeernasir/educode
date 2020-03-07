import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Flex from "@chakra-ui/core/dist/Flex"
import Text from "@chakra-ui/core/dist/Text"
import Box from "@chakra-ui/core/dist/Box"

const NavLink = ({ children, partiallyActive, ...props }) => (
  <Link style={{ color: 'white', padding: '5px 10px', marginRight: '10px' }} activeStyle={{ color: 'white', borderBottom: '1px solid white' }} partiallyActive={partiallyActive} {...props}>
      <Text as="span">{children}</Text>
  </Link>
)

const Header = ({ siteTitle }) => (
  <Box>
    <Flex
      bg="#2e3192"
      w="100%"
      px={5}
      py={8}
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        flex={1}
        maxW={"960px"}
      >
        <Flex flexDirection="row" justifyContent="center" alignItems="center">
          <Text color="white" fontWeight={300} fontSize={'1.1em'} letterSpacing={2}>
            <b>\\\</b> <span>{siteTitle.toLowerCase()}</span>
          </Text>
        </Flex>
        <Box fontWeight={300} fontSize={'1.1em'}>
          <NavLink to={"/"}>
            Home
          </NavLink>
          <NavLink to={"/blog"} partiallyActive={true}>Blog</NavLink>
          <NavLink to="/page-2">
           About
          </NavLink>
        </Box>
      </Flex>
    </Flex>
  </Box>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
