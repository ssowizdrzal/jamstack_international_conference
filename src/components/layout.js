/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Footer from "./GlobalComponents/footer"
import "../styles/layout.css"
import Navbar from "./GlobalComponents/navbar"

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      global: storyblokEntry(full_slug: { eq: "global" }) {
        content
      }
    }
  `)

  let story = data.global

  if (story && typeof story.content === "string") {
    story.content = JSON.parse(story.content)
  }
  return (
    <>
      <div className="wrapper min-h-screen flex flex-col ">
        {/* NAVBAR */}
        <Navbar
          siteTitle={data.site.siteMetadata?.title || `Title`}
          location={location}
          headerContent={story.content.header}
        />
        {/* END OF NAVBAR */}
        {/* MAIN CONTENT */}
        <div className="contentArea flex-grow">
          <main
            className="p-2"
            style={{
              maxWidth: `80%`,
              width: `80%`,
              marginLeft: 0,
              marginRight: 0,
            }}
          >
            <section
              style={{
                overflow: "hidden",
                width: `100%`,
                marginLeft: 0,
                marginRight: 0,
              }}
            >
              {children}
            </section>
          </main>
        </div>
        {/* END OF MAIN CONTENT */}
        {/* FOOTER */}

        <Footer location={location} footerContent={story.content.footer} />
        {/* END OF FOOTER */}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
