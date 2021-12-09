import * as React from "react"
import { cleanUndefined, flatStringFromArray } from "../../lib/utils"
import DynamicComponent from "../dynamicComponent"

const Span = ({ blok }) => {
  const elements = blok.elements.map(blok => {
    return <DynamicComponent blok={blok} key={blok._uid} editable={true} />
  })

  const align = cleanUndefined(blok.align[0])
  const color = cleanUndefined(blok.color[0])
  const text_size = cleanUndefined(blok.text_size[0])
  const padding_top = cleanUndefined(blok.padding_top[0])
  const padding_bot = cleanUndefined(blok.padding_bot[0])
  const padding_left = cleanUndefined(blok.padding_left[0])
  const padding_right = cleanUndefined(blok.padding_right[0])
  const border_radius = cleanUndefined(blok.border_radius[0])
  const border_style_sides = cleanUndefined(blok.border_style_sides[0])
  const background_color = cleanUndefined(blok.background_color[0])

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

  return (
    <span
      className={` break-words ${text_size} ${styling} ${align} ${color} ${border_style_sides} ${background_color} ${padding_top} ${padding_bot} ${padding_left} ${padding_right} ${border_radius} `.replace(
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
      {" "}
      {elements}{" "}
    </span>
  )
}

export default Span
