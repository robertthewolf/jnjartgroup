import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import HorizontalScroll from 'react-scroll-horizontal'

import './all.sass'

import { window } from 'global'

import Link from 'gatsby-link'
import logo from '../img/logo.svg'


// netlify login
const handleClickAdmin = () => {
  if(typeof window !== 'undefined') {
    if (window.netlifyIdentity) {
      if (window.netlifyIdentity.currentUser()) {
        document.location.href = "/admin/"
      } else {
        window.netlifyIdentity.open()
      }
    }
  }
}


const TemplateWrapper = ({
  children,
  data: { pages },
  ...props
}) => (
  <div>
    <Helmet
      htmlAttributes={{"lang": "en"}}
      title="Gallery pages"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />

  <div className="scrollWrapper">
    <nav >
        <Link to="/">
            <img src={logo} alt="JNJ Art Group" />
        </Link>
        <ul>
          {
            pages.edges && pages.edges.map(
              ({ node: { frontmatter }}) => {
                return(

                  <li>
                    <Link activeClassName="active" to={frontmatter.path}>
                      <span className="en">{frontmatter.title}</span>
                      <span className="cs">Zrcadlo</span>
                    </Link>
                  </li>
                )
              }
            )
          }
        </ul>
    </nav>
    {children()}
      </div>


         <a
            onClick={handleClickAdmin}
            href="#"
          >
            Admin
          </a>



  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper


export const query = graphql`
  query LayoutQuery {
    pages: allMarkdownRemark(
      filter: {
        id: { regex: "/pages/"},
        frontmatter: {kind: {eq: "gallery"}}
      },
      sort: {order: ASC, fields: [frontmatter___order]}
    ) {
      edges {
        node {
          frontmatter {
            path
            title
          }
        }
      }
    }

  }
`
