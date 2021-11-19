import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import useStoryblok from "../lib/storyblok"
import DynamicComponent from "../components/dynamicComponent"

const Header = ({ siteTitle, location }) => {

  const data = useStaticQuery(graphql`
    query getHeaderQuery {
      global: storyblokEntry(full_slug: {eq: "global"}) {
        content 
      }
    }
  `)

  let story = data.global

  story = useStoryblok(story, location)
  const links = story.content.header[0].nav_links.map(blok => {
 
    return (<DynamicComponent blok={blok} key={blok._uid} />)
  });


  return(
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <ul>
          {links}
        </ul>
      </div>
    </header>
  )
}






Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
