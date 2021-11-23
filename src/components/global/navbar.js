import * as React from "react"
import { useState } from "react"
import DynamicComponent from "../dynamicComponent"
import { Link } from "gatsby"
import useStoryblok from "../../lib/storyblok"

const Navbar = ({ siteTitle, headerContent, location }) => {

  let header = useStoryblok(headerContent[0], location)

  let [isExpanded, toggleExpansion] = useState(false)

  const links = header.nav_links.map(blok => {
    return <DynamicComponent blok={blok} key={blok._uid} />
  })



  const image = header.logo
  const image_height = header.logo_height + "px"
  const image_width = header.logo_width + "px"
  const logo_flag = Boolean(parseInt(header.use_logo))
  const logo_link = header.logo_link.cached_url

  if (logo_flag) {
    return (
      <header className="sticky top-0 z-50 border-b border-gray-900 h-auto p-4 bg-white">
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-1">
          {/* LOGO AND TITLE*/}
          <div className="flex items-center flex-shrink-0 mr-6">
            <Link to={logo_link}>
              <img
                className="300 m-0"
                src={image}
                alt={"logo"}
                width={image_width}
                height={image_height}
              />
            </Link>
            <span className="font-semibold text-xl tracking-tight">
              {siteTitle}
            </span>
          </div>
          {/* END OF LOGO  */}
          {/* BUTTON EXPANSION */}
          <div className="block lg:hidden">
            <button
              onClick={() => toggleExpansion(!isExpanded)}
              className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-blue-900 hover:text-blue-900"
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          {/* BUTTON EXPANSION */}
          {/* LINKS */}
          <div
            className={`${
              isExpanded ? `block` : `hidden`
            } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
          >
            <div className="text-sm lg:flex-grow">{links}</div>
          </div>
          {/* END OF LINKS */}
        </nav>
      </header>
    )
  }
  return (
    <header className="sticky top-0 z-50 border-b border-gray-900 h-auto p-4 bg-white">
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-1">
        {/* TITLE*/}
        <div className="flex items-center flex-shrink-0 mr-6">
          <span className="font-semibold text-xl tracking-tight">
            {siteTitle}
          </span>
        </div>
        {/* END OF TITLE  */}
        {/* BUTTON EXPANSION */}
        <div className="block lg:hidden">
          <button
            onClick={() => toggleExpansion(!isExpanded)}
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-blue-900 hover:text-blue-900"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        {/* BUTTON EXPANSION */}
        {/* LINKS */}
        <div
          className={`${
            isExpanded ? `block` : `hidden`
          } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
        >
          <div className="text-sm lg:flex-grow">{links}</div>
        </div>
        {/* END OF LINKS */}
      </nav>
    </header>
  )
}

export default Navbar
