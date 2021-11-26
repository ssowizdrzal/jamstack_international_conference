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
import SidePanel from "./GlobalComponents/sidePanel"
import "../styles/layout.css"
import Navbar from "./GlobalComponents/navbar"

const Layout = ({ children, location}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      global: storyblokEntry(full_slug: {eq: "global"}) {
        content 
      }
    }
  `)

  let story = data.global

  if(story && typeof story.content === "string"){
    story.content = JSON.parse(story.content)
  }
  
  console.log(story.content.header)
  console.log(story.content)

  return (
    <>
      {/* NAVBAR */}
      <Navbar siteTitle={data.site.siteMetadata?.title || `Title`} location={location} headerContent={story.content.header} />
      {/* END OF NAVBAR */}
      <div className=" min-h-screen"
        style={{
          maxWidth: visualViewport,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        {/* <!--This is a comment. Comments are not displayed in the browser--> */}
        <div className="contentArea min-h-full">
          <main 
            style={{
              flexDirection: `row`
            }}>
            <section
              style={{
                order: `2`,
              }}>
              {children} 
            </section>
            <aside
              style={{
                order: `3`,
              }}>
              <SidePanel /> 
            </aside>
          </main>
        </div>
      </div>
      <Footer location={location} footerContent={story.content.footer} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
