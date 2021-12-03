import React from "react"
import DynamicComponent from "./dynamicComponent"
import { cleanUndefined } from "../lib/utils"
const Flex = ({ blok }) => {
  var direction = cleanUndefined(blok.direction[0])
  const wrap = cleanUndefined(blok.wrap[0])
  const border_style_sides = cleanUndefined(blok.border_style_sides[0])
  const justify_content = cleanUndefined(blok.justify_content[0])
  var support_responsive = ""
  if (direction === "") direction = "flex-row"
  if (blok.support_responsive === "1" && direction !== "") {
    direction = "sm:" + direction
    if (direction === "sm:flex-row-reverse") {
      support_responsive = "flex-col-reverse"
    } else {
      support_responsive = "flex-col"
    }
  } else {
  }

  const padding_top = cleanUndefined(blok.padding_top[0])
  const padding_bot = cleanUndefined(blok.padding_bot[0])
  const padding_left = cleanUndefined(blok.padding_left[0])
  const padding_right = cleanUndefined(blok.padding_right[0])
  const background_color = cleanUndefined(blok.background_color[0])
  const border_radius = cleanUndefined(blok.border_radius[0])

  return (
    <div>
      <ul
        className={`flex mx-auto items-center p-2 ${justify_content} ${direction} ${wrap} ${border_style_sides} ${support_responsive} ${padding_top} ${padding_bot} ${padding_left} ${padding_right} ${background_color} ${border_radius}`}
      >
        {blok.elements.map(blok => (
          <li key={blok._uid} className="px-2">
            <DynamicComponent blok={blok} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Flex
