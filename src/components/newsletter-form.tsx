import React, { useRef, useState } from "react"
import Text from "@chakra-ui/core/dist/Text"
import Box from "@chakra-ui/core/dist/Box"
import { Button, Input, Heading } from "@chakra-ui/core"
import addToMailchimp from "gatsby-plugin-mailchimp"

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
    <Box>
      {!subscribed ? (
        <>
          <Heading mb={4} fontSize="lg" textAlign="center">
            Subscribe to our newsletter
          </Heading>
          <form onSubmit={onSubmit}>
            <Box d={"flex"} flexWrap={"wrap"} justifyContent="center">
              <Box m={1}>
                <Input
                  ref={nameRef}
                  w={"2xs"}
                  placeholder={"Enter your name"}
                  type={"text"}
                  isRequired
                />
              </Box>

              <Box m={1}>
                <Input
                  ref={emailRef}
                  w={"2xs"}
                  placeholder={"Enter your email address"}
                  type={"email"}
                  isRequired
                />
              </Box>

              <Button m={1} type={"submit"} variantColor="orange">
                Subscribe
              </Button>
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
  )
}

export default NewsletterForm
