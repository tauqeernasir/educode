import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Flex from "@chakra-ui/core/dist/Flex"
import Text from "@chakra-ui/core/dist/Text"
import Box from "@chakra-ui/core/dist/Box"
import { useColorMode, Button, Stack } from "@chakra-ui/core"
import { FiHome, FiBook, FiInfo, FiMoon, FiSun } from "react-icons/fi"

const NavLink = ({ children, partiallyActive, icon, ...props }) => (
  <Link style={{ textDecoration: "none" }} to={props.to} {...props}>
    <Button fontWeight="light">
      <Box mr={2}>{icon}</Box>
      <Text as="span" display={["none", "none", "block", "block"]}>
        {children}
      </Text>
    </Button>
  </Link>
)

const Header = ({ siteTitle }) => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box px={2}>
      <Flex w="100%" py={4} justifyContent="center" alignItems="center">
        <Flex
          justifyContent="space-between"
          alignItems="center"
          flex={1}
          maxW={"960px"}
        >
          <Flex flexDirection="row" justifyContent="center" alignItems="center">
            <Link to={"/"}>
              <Box fontSize={"xl"}>
                <Text>{siteTitle}</Text>
              </Box>
            </Link>
          </Flex>

          <Stack isInline spacing={2} fontWeight={300}>
            <Box>
              <NavLink
                to={"/"}
                partiallyActive={false}
                icon={<Box as={FiHome} />}
              >
                Home
              </NavLink>
            </Box>

            <Box>
              <NavLink
                to={"/blog/page/1"}
                partiallyActive={false}
                icon={<Box as={FiBook} />}
              >
                Blog
              </NavLink>
            </Box>

            <Box>
              <NavLink
                to="/about"
                partiallyActive={false}
                icon={<Box as={FiInfo} />}
              >
                About
              </NavLink>
            </Box>

            {/* <Button onClick={() => toggleColorMode()}>
              {colorMode === "light" ? <Box as={FiMoon} /> : <Box as={FiSun} />}
            </Button> */}
          </Stack>
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
