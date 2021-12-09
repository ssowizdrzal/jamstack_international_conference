import * as React from "react"
import { cleanUndefined, flatStringFromArray } from "../../lib/utils"


const TextSpan = ({ blok }) => {
  const text = blok.text
  const color = cleanUndefined(blok.color[0])
  const styling = flatStringFromArray(blok.styling)
  const text_size = cleanUndefined(blok.text_size[0])
  const border_radius = cleanUndefined(blok.border_radius[0])
  const border_style_sides = cleanUndefined(blok.border_style_sides[0])
  const background_color = cleanUndefined(blok.background_color[0])

  return (
    <span
      className={` break-words ${text_size} ${styling} ${color} ${border_style_sides} ${background_color} ${border_radius} `.replace(
        /\s\s+/g,
        " "
      )}
    >
      {text}
    </span>
  )
}

export default TextSpan
