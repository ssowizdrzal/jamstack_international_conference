/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./global/header"
import Footer from "./global/footer"
import SidePanel from "./global/sidePanel"
import "../styles/layout.css"
import useStoryblok from "../lib/storyblok"
import Navbar from "./global/navbar"

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
  console.log(story.content.header)
  story = useStoryblok(story, location)

  console.log(story.content)

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} location={location} headerContent={story.content.header} /> */}
      {/* NAVBAR */}
      <Navbar siteTitle={data.site.siteMetadata?.title || `Title`} location={location} headerContent={story.content.header} />
      {/* END OF NAVBAR */}
      <div
        style={{
          maxWidth: visualViewport,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        {/* <!--This is a comment. Comments are not displayed in the browser--> */}
        <div className="contentArea">
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
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      
      </div>
      <Footer footerContent={story.content.header}/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
