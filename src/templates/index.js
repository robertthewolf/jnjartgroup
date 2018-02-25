import React from 'react';
import Helmet from 'react-helmet';
import PhotoGallery from '../components/Gallery/'
import Img from 'gatsby-image'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <section>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <div>
          <h1>
            {post.frontmatter.title}
          </h1>
          <div>

          </div>
          <h2>Biography</h2>
        </div>
      </section>
    );
  }
}

export const pageQuery = graphql`
  query IndexPage($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        nazev
      }
    }
  }
`;
