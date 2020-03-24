import React, { useRef, useState } from "react"
import Text from "@chakra-ui/core/dist/Text"
import Box from "@chakra-ui/core/dist/Box"
import { Button, Input } from "@chakra-ui/core"
import { motion } from "framer-motion"
import addToMailchimp from "gatsby-plugin-mailchimp"

const variants = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      staggerChildren: 0.125,
      when: "beforeChildren",
    },
  },
}

const variantsChildren = {
  hidden: {
    scale: 0,
    x: -70,
  },
  visible: {
    scale: 1,
    x: 0,
  },
}

const NewsletterForm = () => {
  const nameRef = useRef(undefined)
  const emailRef = useRef(undefined)

  const [subscribed, setSubscribed] = useState(undefined)

  const onSubmit = async event => {
    event.preventDefault()
    const name = nameRef.current && nameRef.current.value
    const email = emailRef.current && emailRef.current.value

    console.log(name, email)
    if (!name || !email) {
      return
    }
    try {
      const data = await addToMailchimp(email, { name })
      if (
        data.result === "error" &&
        data.msg.indexOf("already subscribed") > -1
      ) {
        setSubscribed(
          "You're already subscribed to newsletter. You will receive emails about the latest and trending content."
        )
      } else {
        setSubscribed(
          "Thank you for subscribing to our newsletter. You will receive emails about the latest and trending content."
        )
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <motion.div initial={"hidden"} animate={"visible"} variants={variants}>
      <Box p={2} background={"rgba(255, 255, 255, .05)"} rounded={10}>
        <Box p={2} background={"rgba(255, 255, 255, .05)"} rounded={10}>
          <Box
            p={4}
            maxW={700}
            rounded={10}
            boxShadow={"xl"}
            background={
              "linear-gradient(to bottom right,darkorange 10%,purple)"
            }
          >
            {!subscribed ? (
              <>
                <Text
                  color={"white"}
                  mb={4}
                  fontWeight={500}
                  fontSize={{ sm: "md", md: "xl" }}
                >
                  Subscribe to our newsletter to stay up to date with latest
                  content
                </Text>
                <form onSubmit={onSubmit}>
                  <Box d={"flex"} flexWrap={"wrap"}>
                    <motion.div variants={variantsChildren}>
                      <Box m={1}>
                        <Input
                          ref={nameRef}
                          w={"2xs"}
                          placeholder={"Enter your name"}
                          type={"text"}
                          required
                        />
                      </Box>
                    </motion.div>
                    <motion.div variants={variantsChildren}>
                      <Box m={1}>
                        <Input
                          ref={emailRef}
                          w={"2xs"}
                          placeholder={"Enter your email address"}
                          type={"email"}
                          required
                        />
                      </Box>
                    </motion.div>
                    <motion.div variants={variantsChildren}>
                      <Button m={1} type={"submit"}>
                        <Text>Subscribe</Text>
                      </Button>
                    </motion.div>
                  </Box>
                </form>
              </>
            ) : (
              <Box>
                <Text
                  color={"white"}
                  mb={4}
                  fontWeight={500}
                  fontSize={{ sm: "md", md: "xl" }}
                >
                  {subscribed}
                </Text>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </motion.div>
  )
}

export default NewsletterForm
