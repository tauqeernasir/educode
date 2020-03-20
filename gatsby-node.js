const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.js")
  const blogListTemplate = path.resolve("./src/templates/blog-list.js")

  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const edges = res.data.allMarkdownRemark.edges

  edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/post/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })

  const postPerPage = 10
  const numberOfPages = Math.ceil(edges.length / postPerPage)

  Array.from({ length: numberOfPages }).forEach((_, index) => {
    // const isFirstPage = index === 0
    const currentPage = index + 1

    // if (isFirstPage) return

    createPage({
      path: `/blog/page/${currentPage}`,
      component: blogListTemplate,
      context: {
        limit: postPerPage,
        skip: index * postPerPage,
        currentPage,
        totalPages: numberOfPages
      }
    })
  })
}
