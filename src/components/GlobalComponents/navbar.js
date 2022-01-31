import * as React from "react"
import { useState } from "react"
import { Link } from "gatsby"
import DynamicComponent from "../dynamicComponent"
import { cleanUndefined, flatStringFromArray } from "../../lib/utils"

const Navbar = ({ siteTitle, headerContent, location }) => {
  let header = headerContent[0]

  let [isExpanded, toggleExpansion] = useState(false)

  const image = header.logo
  const image_height = header.logo_height + "px"
  const image_width = header.logo_width + "px"
  const logo_flag = Boolean(parseInt(header.use_logo))

  let color = cleanUndefined(header.color[0])
  const padding_top = cleanUndefined(header.padding_top[0])
  const padding_bot = cleanUndefined(header.padding_bot[0])
  const padding_left = cleanUndefined(header.padding_left[0])
  const padding_right = cleanUndefined(header.padding_right[0])
  let background_color = cleanUndefined(header.background_color[0])

  const styling = flatStringFromArray(header.styling)

  const margin_top = `${header.margin_top ? header.margin_top : "5"}px`
  const margin_bot = `${header.margin_bot ? header.margin_bot : "5"}px`

  let color_text = `${header.color_text ? header.color_text : ""}`
  let background_color_text = `${
    header.background_color_text ? header.background_color_text : ""
  }`

  let color_test = false
  let background_color_test = false
  const regex_rgb_value =
    /^([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]),([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]),([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/
  const regex_hex_value = /^(#[0-9a-f]{6}|#[0-9a-f]{3})$/i

  if (color_text !== "") {
    if (regex_rgb_value.test(color_text)) {
      color_text = `rgb(${color_text})`
      color = ""
      color_test = true
    }
    if (regex_hex_value.test(color_text)) {
      color = ""
      color_test = true
    }
  }

  if (background_color_text !== "") {
    if (regex_rgb_value.test(background_color_text)) {
      background_color_text = `rgb(${background_color_text})`
      background_color = ""
      background_color_test = true
    }
    if (regex_hex_value.test(background_color_text)) {
      background_color = ""
      background_color_test = true
    }
  }

  const wrapLink = () => {
    const link = header.logo_link
    if (link.url === "" && link.id === "" && link.cached_url === "") {
      return null
    }
    if (link.linktype === "url" && link.url !== "") {
      const href_link = cleanUndefined(link.cached_url)
      return (
        <a href={href_link}>
          <img
            className="300 m-0"
            src={image}
            alt={"logo"}
            width={image_width}
            height={image_height}
            style={{
              marginRight: `10px`
            }}
          />
        </a>
      )
    }
    if (link.linktype === "story" && link.id !== "") {
      const url = cleanUndefined(link.cached_url)
      const stringed = "/" + url
      return (
        <Link to={stringed}>
          <img
            className="300 m-0"
            src={image}
            alt={"logo"}
            width={image_width}
            height={image_height}
          />
        </Link>
      )
    }
    return null
  }

  return (
    <header className={`sticky top-0 z-50 border-b border-gray-900 h-auto p-4  ${styling} ${color} ${background_color} ${padding_top} ${padding_bot} ${padding_left} ${padding_right}`.replace(
      /\s\s+/g,
      " "
    )}
      style={{
        marginTop: margin_top,
        marginBottom: margin_bot,
        color: color_test ? `${color_text}` : null,
        backgroundColor: background_color_test
          ? `${background_color_text}`
          : null,
      }}
    >
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-1">
        {/* LOGO AND TITLE*/}
        <div className="flex items-center flex-shrink-0 mr-6">
          {logo_flag ? wrapLink() : null}

          <span className="font-semibold text-xl tracking-tight">
            {siteTitle}
          </span>
        </div>
        {/* END OF LOGO  */}
        {/* BUTTON EXPANSION */}
        <div className="block lg:hidden">
          <button
            onClick={() => toggleExpansion(!isExpanded)}
            className="flex items-center px-3 py-2 border rounded hover:text-blue-900 "
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
          <div className="lg:flex-grow  lg:text-sm  text-3xl">
            {header &&
              header.nav_links.map((blok, index) => {
                if (blok.component === `span`) {
                  return <DynamicComponent key={blok._uid} blok={blok} />
                }
                if (blok.component === `nav_link`) {
                  return <DynamicComponent key={blok._uid} blok={blok} />
                }
                return null
              })}
          </div>
        </div>
        {/* END OF LINKS */}
      </nav>
    </header>
  )
}
export default Navbar
