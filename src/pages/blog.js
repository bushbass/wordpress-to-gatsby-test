import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allWordpressPost {
        edges {
          node {
            slug
            title
            date(formatString: "MMMM Do YYYY")
            excerpt
          }
        }
      }
    }
  `)

  return (
    <div>
      <ul>
        {data.allWordpressPost.edges.map(post => (
          <li>
            <Link to={`/${post.node.slug}`}>
              <h3>{post.node.title}</h3>
            </Link>
            <p>{post.node.date}</p>
            <p>{post.node.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Blog
