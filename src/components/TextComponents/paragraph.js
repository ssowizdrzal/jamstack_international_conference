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
        className={` break-words align-middle overflow-hidden ${line_height} ${text_size} ${styling} ${align} ${color} ${border_style_sides} ${background_color} ${padding_top} ${padding_bot} ${padding_left} ${padding_right} ${border_radius} `.replace(
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
          color: color_test ? `${color_text}` : null,
          backgroundColor: background_color_test
            ? `${background_color_text}`
            : null,
        }}
      >
        {wrapLink()}
      </p>
    )
  }

  const H1 = () => {
    return (
      <h1
        className={` break-words align-middle ${line_height} ${text_size} ${styling} ${align} ${color} ${border_style_sides} ${background_color} ${padding_top} ${padding_bot} ${padding_left} ${padding_right} ${border_radius} `.replace(
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
          color: color_test ? `${color_text}` : null,
          backgroundColor: background_color_test
            ? `${background_color_text}`
            : null,
        }}
      >
        {wrapLink()}
      </h1>
    )
  }

  const H2 = () => {
    return (
      <h2
        className={` break-words align-middle ${line_height} ${text_size} ${styling} ${align} ${color} ${border_style_sides} ${background_color} ${padding_top} ${padding_bot} ${padding_left} ${padding_right} ${border_radius} `.replace(
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
          color: color_test ? `${color_text}` : null,
          backgroundColor: background_color_test
            ? `${background_color_text}`
            : null,
        }}
      >
        {wrapLink()}
      </h2>
    )
  }

  const H3 = () => {
    return (
      <h3
        className={` break-words align-middle ${line_height} ${text_size} ${styling} ${align} ${color} ${border_style_sides} ${background_color} ${padding_top} ${padding_bot} ${padding_left} ${padding_right} ${border_radius} `.replace(
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
          color: color_test ? `${color_text}` : null,
          backgroundColor: background_color_test
            ? `${background_color_text}`
            : null,
        }}
      >
        {wrapLink()}
      </h3>
    )
  }

  const H4 = () => {
    return (
      <h4
        className={` break-words align-middle ${line_height} ${text_size} ${styling} ${align} ${color} ${border_style_sides} ${background_color} ${padding_top} ${padding_bot} ${padding_left} ${padding_right} ${border_radius} `.replace(
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
          color: color_test ? `${color_text}` : null,
          backgroundColor: background_color_test
            ? `${background_color_text}`
            : null,
        }}
      >
        {wrapLink()}
      </h4>
    )
  }

  const H5 = () => {
    return (
      <h5
        className={` break-words align-middle ${line_height} ${text_size} ${styling} ${align} ${color} ${border_style_sides} ${background_color} ${padding_top} ${padding_bot} ${padding_left} ${padding_right} ${border_radius} `.replace(
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
          color: color_test ? `${color_text}` : null,
          backgroundColor: background_color_test
            ? `${background_color_text}`
            : null,
        }}
      >
        {wrapLink()}
      </h5>
    )
  }

  const H6 = () => {
    return (
      <h6
        className={` break-words align-middle ${line_height} ${text_size} ${styling} ${align} ${color} ${border_style_sides} ${background_color} ${padding_top} ${padding_bot} ${padding_left} ${padding_right} ${border_radius} `.replace(
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
          color: color_test ? `${color_text}` : null,
          backgroundColor: background_color_test
            ? `${background_color_text}`
            : null,
        }}
      >
        {wrapLink()}
      </h6>
    )
  }

  const line_height = cleanUndefined(blok.line_height[0])
  const text = blok.text
  const style = cleanUndefined(blok.style[0])
  const align = cleanUndefined(blok.align[0])
  let color = cleanUndefined(blok.color[0])
  const text_size = cleanUndefined(blok.text_size[0])
  const border_style_sides = cleanUndefined(blok.border_style_sides[0])
  let background_color = cleanUndefined(blok.background_color[0])
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
    widthVal = "100%"
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
