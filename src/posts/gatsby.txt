---
title: "How to porperly use Gatsby to develop your own blog site"
date: "2018-03-03"
tags:
    - javascript
    - reactjs
    - nodejs
author: "Tauqeer Nasir"
avatar: ""
thumbnail: "https://c1.sfdcstatic.com/content/dam/blogs/ca/Blog%20Posts/anatomy-of-a-blog-post-deconstructed-open-graph.jpg"
---

![](https://c1.sfdcstatic.com/content/dam/blogs/ca/Blog%20Posts/anatomy-of-a-blog-post-deconstructed-open-graph.jpg)

I have been trying to work with the gatsby ecosystem and I found it really awesome to develop and write some awesome applications.
The best part that I really liked was building some static pages and putting them online to access on the internet and it's really fast.

Things that I really enjoyed were using chakra-ui, react and markdown to develop my blog. On this website, I am using same stack and hosting my files through digital ocean server.

- _Static Pages_
- _Dynamic Content Using GraphQL_

> Remember to follow me on @twitter to stay up to date to new posts.

## Topics covered are as follow

1. Gatsby
2. GraphQL
3. React

```javascript
class FlavorForm extends React.Component {
  // highlight-line
  constructor(props) {
    super(props)
    this.state = { value: "coconut" }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    // highlight-next-line
    this.setState({ value: event.target.value })
  }

  // highlight-start
  handleSubmit(event) {
    alert("Your favorite flavor is: " + this.state.value)
    event.preventDefault()
  }
  // highlight-end

  render() {
    return (<div>Hello</div>)
  }
}


```
> Always **double check** the _logic_ of you code
>
> Note one more thing
## Using hooks
