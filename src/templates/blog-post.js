import * as React from "react"
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default ({ data }) => {
    const post = data.markdownRemark;
    return (
        <Layout>
            <div>
                <h1>{post.frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </Layout>
    )
}


export const query = graphql`
    query($slug: String!) {
        markdownRemark( fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
            }
        }
    }
`

// import * as React from "react"
// import { Link } from "gatsby"

// import Layout from "../components/layout"
// import Seo from "../components/seo"

// const UsingDSG = () => (
//   <Layout>
//     <h1>
//       Hello from a <b>DSG Page</b>
//     </h1>
//     <p>This page is not created until requested by a user.</p>
//     <p>
//       To learn more, head over to our{" "}
//       <a href="https://www.gatsbyjs.com/docs/reference/rendering-options/deferred-static-generation/">
//         documentation about Deferred Static Generation
//       </a>
//       .
//     </p>
//     <Link to="/">Go back to the homepage</Link>
//   </Layout>
// )

// export const Head = () => <Seo title="Using DSG" />

// export default UsingDSG
