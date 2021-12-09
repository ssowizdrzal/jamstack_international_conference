import * as React from "react"
import { cleanUndefined, flatStringFromArray } from "../../lib/utils"
import { Link } from "gatsby"

const Paragraph = ({ blok }) => {
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

  const P1 = () => {
    return (
      <p
        className={` break-words align-middle overflow-hidden ${text_size} ${styling} ${align} ${color} ${border_style_sides} ${background_color} ${padding_top} ${padding_bot} ${padding_left} ${padding_right} ${border_radius} `.replace(
          /\s\s+/g,
          " "
        )}
        style={{
          width: widthVal,
          height: heightVal,
          backgroundSize: `${widthVal} ${heightVal}`,
          marginTop: margin_top,
          marginBottom: margin_bot,
          marginLeft: margin_left,
          // marginRight: margin_right,
        }}
      >
        {wrapLink()}
      </p>
    )
  }

  const H1 = () => {
    return (
      <h1
        className={` break-words align-middle ${text_size} ${styling} ${align} ${color} ${border_style_sides} ${background_color} ${padding_top} ${padding_bot} ${padding_left} ${padding_right} ${border_radius} `.replace(
          /\s\s+/g,
          " "
        )}
        style={{
          width: widthVal,
          height: heightVal,
          backgroundSize: `${widthVal} ${heightVal}`,
          marginTop: margin_top,
          marginBottom: margin_bot,
          marginLeft: margin_left,
          // marginRight: margin_right,
        }}
      >
        {wrapLink()}
      </h1>
    )
  }

  const H2 = () => {
    return (
      <h2
        className={` break-words align-middle ${text_size} ${styling} ${align} ${color} ${border_style_sides} ${background_color} ${padding_top} ${padding_bot} ${padding_left} ${padding_right} ${border_radius} `.replace(
          /\s\s+/g,
          " "
        )}
        style={{
          width: widthVal,
          height: heightVal,
          backgroundSize: `${widthVal} ${heightVal}`,
          marginTop: margin_top,
          marginBottom: margin_bot,
          marginLeft: margin_left,
          // marginRight: margin_right,
        }}
      >
        {wrapLink()}
      </h2>
    )
  }

  const H3 = () => {
    return (
      <h3
        className={` break-words align-middle ${text_size} ${styling} ${align} ${color} ${border_style_sides} ${background_color} ${padding_top} ${padding_bot} ${padding_left} ${padding_right} ${border_radius} `.replace(
          /\s\s+/g,
          " "
        )}
        style={{
          width: widthVal,
          height: heightVal,
          backgroundSize: `${widthVal} ${heightVal}`,
          marginTop: margin_top,
          marginBottom: margin_bot,
          marginLeft: margin_left,
          // marginRight: margin_right,
        }}
      >
        {wrapLink()}
      </h3>
    )
  }

  const H4 = () => {
    return (
      <h4
        className={` break-words align-middle ${text_size} ${styling} ${align} ${color} ${border_style_sides} ${background_color} ${padding_top} ${padding_bot} ${padding_left} ${padding_right} ${border_radius} `.replace(
          /\s\s+/g,
          " "
        )}
        style={{
          width: widthVal,
          height: heightVal,
          backgroundSize: `${widthVal} ${heightVal}`,
          marginTop: margin_top,
          marginBottom: margin_bot,
          marginLeft: margin_left,
          // marginRight: margin_right,
        }}
      >
        {wrapLink()}
      </h4>
    )
  }

  const H5 = () => {
    return (
      <h5
        className={` break-words align-middle ${text_size} ${styling} ${align} ${color} ${border_style_sides} ${background_color} ${padding_top} ${padding_bot} ${padding_left} ${padding_right} ${border_radius} `.replace(
          /\s\s+/g,
          " "
        )}
        style={{
          width: widthVal,
          height: heightVal,
          backgroundSize: `${widthVal} ${heightVal}`,
          marginTop: margin_top,
          marginBottom: margin_bot,
          marginLeft: margin_left,
          // marginRight: margin_right,
        }}
      >
        {wrapLink()}
      </h5>
    )
  }

  const H6 = () => {
    return (
      <h6
        className={` break-words align-middle ${text_size} ${styling} ${align} ${color} ${border_style_sides} ${background_color} ${padding_top} ${padding_bot} ${padding_left} ${padding_right} ${border_radius} `.replace(
          /\s\s+/g,
          " "
        )}
        style={{
          width: widthVal,
          height: heightVal,
          backgroundSize: `${widthVal} ${heightVal}`,
          marginTop: margin_top,
          marginBottom: margin_bot,
          marginLeft: margin_left,
          // marginRight: margin_right,
        }}
      >
        {wrapLink()}
      </h6>
    )
  }

  const text = blok.text
  const style = cleanUndefined(blok.style[0])
  const align = cleanUndefined(blok.align[0])
  const color = cleanUndefined(blok.color[0])
  const text_size = cleanUndefined(blok.text_size[0])
  const border_style_sides = cleanUndefined(blok.border_style_sides[0])
  const background_color = cleanUndefined(blok.background_color[0])
  const padding_top = cleanUndefined(blok.padding_top[0])
  const padding_bot = cleanUndefined(blok.padding_bot[0])
  const padding_left = cleanUndefined(blok.padding_left[0])
  const padding_right = cleanUndefined(blok.padding_right[0])
  const border_radius = cleanUndefined(blok.border_radius[0])

  const width_string = cleanUndefined(blok.width)
  const height_string = cleanUndefined(blok.height)
  const width_int = parseInt(blok.width)
  const height_int = parseInt(blok.height)
  var heightVal = ""
  var widthVal = ""
  if (width_int >= 0) {
    widthVal = `${cleanUndefined(width_string)}px`
  } else {
    widthVal = "auto"
  }
  if (height_int >= 0) {
    heightVal = `${cleanUndefined(height_string)}px`
  } else {
    heightVal = "auto"
  }
  const styling = flatStringFromArray(blok.styling)

  const margin_top = `${blok.margin_top ? blok.margin_top : "5"}px`
  const margin_bot = `${blok.margin_bot ? blok.margin_bot : "5"}px`
  const margin_left = `${blok.margin_left ? blok.margin_left : "5"}px`
  // const margin_right = `${blok.margin_right ? blok.margin_right : "5"}px`

  const link = blok.link

  switch (style) {
    case "h1":
      return <H1></H1>
    case "h2":
      return <H2></H2>
    case "h3":
      return <H3></H3>
    case "h4":
      return <H4></H4>
    case "h5":
      return <H5></H5>
    case "h6":
      return <H6></H6>
    case "span":
    default:
      return <P1></P1>
  }
}

export default Paragraph
