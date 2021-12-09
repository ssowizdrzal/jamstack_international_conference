import * as React from "react"
import { cleanUndefined, flatStringFromArray } from "../../lib/utils"
import { Link } from "gatsby"

const TextSpan = ({ blok }) => {
  const wrapLink = () => {
    if (link.url === "" && link.id === "" && link.cached_url === "") {
      return text
    }
    if (link.linktype === "url" && link.url !== "") {
      const href_link = cleanUndefined(link.cached_url)
      return <a href={href_link}>{text}</a>
    }
    if (link.linktype === "story" && link.id !== "") {
      const url = cleanUndefined(link.cached_url)
      const stringed = "/" + url
      return <Link to={stringed}>{text}</Link>
    }
    return text
  }

  const text = blok.text
  const color = cleanUndefined(blok.color[0])
  const styling = flatStringFromArray(blok.styling)
  const text_size = cleanUndefined(blok.text_size[0])
  const border_radius = cleanUndefined(blok.border_radius[0])
  const border_style_sides = cleanUndefined(blok.border_style_sides[0])
  const background_color = cleanUndefined(blok.background_color[0])

  const link = blok.link

  return (
    <span
      className={` break-words ${text_size} ${styling} ${color} ${border_style_sides} ${background_color} ${border_radius} `.replace(
        /\s\s+/g,
        " "
      )}
    >
      {wrapLink()}
    </span>
  )
}

export default TextSpan
