import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Flex from "@chakra-ui/core/dist/Flex"
import Text from "@chakra-ui/core/dist/Text"
import Box from "@chakra-ui/core/dist/Box"
import Typing from "react-typing-animation"
import useMedia from "use-media"

const NavLink = ({ children, partiallyActive, ...props }) => (
  <Link
    style={{ color: "white", padding: "5px 10px", borderRadius: '10px', marginRight: "10px", backgroundColor: "rgba(0,0,0,.1)" }}
    activeStyle={{ color: "white", fontWeight: 500, backgroundColor: "rgba(255,255,255,.1)" }}
    partiallyActive={partiallyActive}
    {...props}
  >
    <Text as="span">{children}</Text>
  </Link>
)

const Header = ({ siteTitle }) => {
  const isWide = useMedia({ minWidth: 960 })

  return (
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
            <Link to={'/'}>
              <Box fontSize={"xl"} fontWeight={"bold"} color={"white"}>
                <Typing speed={1}>
                  <b style={{ fontSize: "130%" }}>\\ </b>{" "}
                  <Box as={"span"} d={isWide ? 'inline' : 'none'}>
                    backslashes.io
                  </Box>
                </Typing>
              </Box>
            </Link>
          </Flex>
          <Box fontWeight={300} fontSize={"1.1em"}>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/blog"}>
              Blog
            </NavLink>
            <NavLink to="/page-2">About</NavLink>
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
