import * as React from "react"
import { cleanUndefined, flatStringFromArray } from "../../lib/utils"
import { Link } from "gatsby"

const NavLink = ({ blok }) => {
  const wrapLink = () => {
    if (link.url === "" && link.id === "" && link.cached_url === "") {
      return text
    }
    if (link.linktype === "url" && link.url !== "") {
      const href_link = cleanUndefined(link.cached_url)
      return (
        <a
          href={href_link}
          className={` break-words ${text_size} ${styling} ${color} ${border_style_sides} ${background_color} ${border_radius} block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-blue-900 hover:underline mr-4  text-center`.replace(
            /\s\s+/g,
            " "
          )}
          style={{
            color: color_test ? `${color_text}` : null,
            backgroundColor: background_color_test
              ? `${background_color_text}`
              : null,
          }}
        >
          {text}
        </a>
      )
    }
    if (link.linktype === "story" && link.id !== "") {
      const url = cleanUndefined(link.cached_url)
      const stringed = "/" + url
      return (
        <Link
          to={stringed}
          className={` break-words ${text_size} ${styling} ${color} ${border_style_sides} ${background_color} ${border_radius} block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-blue-900 hover:underline mr-4  text-center`.replace(
            /\s\s+/g,
            " "
          )}
          style={{
            color: color_test ? `${color_text}` : null,
            backgroundColor: background_color_test
              ? `${background_color_text}`
              : null,
          }}
          partiallyActive={true}
          prefetch="true"
          activeClassName="text-indigo-900 underline"
        >
          {text}
        </Link>
      )
    }
    return text
  }

  const text = blok.text
  let color = cleanUndefined(blok.color[0])
  const styling = flatStringFromArray(blok.styling)
  const text_size = cleanUndefined(blok.text_size[0])
  const border_radius = cleanUndefined(blok.border_radius[0])
  const border_style_sides = cleanUndefined(blok.border_style_sides[0])
  let background_color = cleanUndefined(blok.background_color[0])

  const link = blok.link

  let color_text = `${blok.color_text ? blok.color_text : ""}`
  let background_color_text = `${
    blok.background_color_text ? blok.background_color_text : ""
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

  return <>{wrapLink()}</>
}

export default NavLink
