import React from "react"
import Nav from "../components/nav"
import { graphql } from "gatsby"

export const query = graphql`
  query($slug: String) {
    wordpressPost(slug: { eq: $slug }) {
      title
      date
      content
    }
  }
`

const Blog = props => {
  function createMarkup() {
    return { __html: props.data.wordpressPost.content }
  }
  return (
    <div>
      <Nav />
      <div dangerouslySetInnerHTML={createMarkup(props)} />
    </div>
  )
}

export default Blog
