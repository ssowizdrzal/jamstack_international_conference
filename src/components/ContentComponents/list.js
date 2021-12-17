import React from "react"
import { cleanUndefined, flatStringFromArray } from "../../lib/utils"
import DynamicComponent from "../dynamicComponent"

const List = ({ blok }) => {
  let rich = null
  if (blok.elements[0]) {
    const richtext_list = blok.elements[0]
    rich = <DynamicComponent blok={richtext_list} index={richtext_list._uid} />
  }
  const list_decoration = cleanUndefined(blok.list_decoration[0])
  const style = cleanUndefined(blok.style[0])
  const align = cleanUndefined(blok.align[0])
  let color = cleanUndefined(blok.color[0])
  const border_style_sides = cleanUndefined(blok.border_style_sides[0])
  let background_color = cleanUndefined(blok.background_color[0])
  const padding_top = cleanUndefined(blok.padding_top[0])
  const padding_bot = cleanUndefined(blok.padding_bot[0])
  const padding_left = cleanUndefined(blok.padding_left[0])
  const padding_right = cleanUndefined(blok.padding_right[0])
  const border_radius = cleanUndefined(blok.border_radius[0])

  const text_size = cleanUndefined(blok.text_size[0])

  const styling = flatStringFromArray(blok.styling)

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

  const margin_top = `${blok.margin_top ? blok.margin_top : "5"}px`
  const margin_bot = `${blok.margin_bot ? blok.margin_bot : "5"}px`
  const margin_left = `${blok.margin_left ? blok.margin_left : "5"}px`

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

  return (
    <ul
      className={` ${style} ${text_size} ${styling} ${align} ${color} ${border_style_sides} ${background_color} ${padding_top} ${padding_bot} ${padding_left} ${padding_right} ${border_radius} `.replace(
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
        listStyle: `${list_decoration}`,
      }}
    >
      {background_color_test}
      {rich}
    </ul>
  )
}

export default List
