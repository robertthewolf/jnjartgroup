import React from 'react';
import Helmet from 'react-helmet';
import PhotoGallery from '../components/Gallery/'
import Img from 'gatsby-image'


export default function Template({ data }) {
  const { markdownRemark: post } = data;

  return (
    <section className="section">
      <Helmet title={`${post.frontmatter.title}`} />
      <header key={post.id}>
        <p>
          <span className="en">{post.frontmatter.description}</span>
          <span className="cs">{post.frontmatter.popis}</span>
        </p>
      </header>


          {
            post.frontmatter.images.map(({ image }) => {
              if (image && image.childImageSharp) {
                return(
                  <figure className="thumbnail" key={image.id}>
                  <Img sizes={image.childImageSharp.sizes} />
                <figcaption>
                  <small>
                    <span className="cs">{post.frontmatter.cena} CZK</span>
                    <span className="en">{post.frontmatter.price} EUR</span>
                  </small>
                </figcaption>
                  </figure>
                )
              } else {
                console.warn('image not found')
              }
            })
          }


    </section>
  );
}

export const pageQuery = graphql`
  query GalleryByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        images {
          image {
            childImageSharp {
              sizes(maxWidth: 700) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
      }
    }
  }
`;
