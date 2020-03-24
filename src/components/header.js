import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Flex from "@chakra-ui/core/dist/Flex"
import Text from "@chakra-ui/core/dist/Text"
import Box from "@chakra-ui/core/dist/Box"
import Typing from "react-typing-animation"
import useMedia from "use-media"
import { motion } from "framer-motion"

const NavLink = ({ children, partiallyActive, ...props }) => (
  <Link
    style={{
      color: "white",
      padding: "5px 10px",
      borderRadius: "10px",
      marginRight: "10px",
      backgroundColor: "rgba(0,0,0,.1)",
    }}
    activeStyle={{
      color: "white",
      fontWeight: 500,
      backgroundColor: "rgba(255,255,255,.1)",
    }}
    partiallyActive={partiallyActive}
    {...props}
  >
    <Text as="span">{children}</Text>
  </Link>
)

const variants = {
  hidden: {
  },
  visible: {
    scale: 1,
    transition: {
      delayChildren: .5,
      staggerChildren: .125
    },
  },
}

const variantsChildren = {
  hidden: {
    opacity: 0,
    scale: 0,
    y: -70,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
  },
}

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
            <Link to={"/"}>
              <Box fontSize={"xl"} fontWeight={"bold"} color={"white"}>
                <Typing speed={50}>
                  <b style={{ fontSize: "130%" }}>\\ </b>{" "}
                  <Box as={"span"} d={isWide ? "inline" : "none"}>
                    devplode.com
                  </Box>
                </Typing>
              </Box>
            </Link>
          </Flex>
          <motion.div
            initial={"hidden"}
            animate={"visible"}
            variants={variants}
          >
            <Box fontWeight={300} fontSize={"1.1em"}>
              <motion.div variants={variantsChildren} style={{ display: 'inline-block'}}>
                <NavLink to={"/"}>Home</NavLink>
              </motion.div>
              <motion.div variants={variantsChildren}  style={{ display: 'inline-block'}}>
                <NavLink to={"/blog/page/1"}>Blog</NavLink>
              </motion.div>
              <motion.div variants={variantsChildren}  style={{ display: 'inline-block'}}>
                <NavLink to="/about">About</NavLink>
              </motion.div>
            </Box>
          </motion.div>
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
