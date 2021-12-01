import React from "react"
import DynamicComponent from "./dynamicComponent"
import { cleanUndefined } from "../lib/utils"
const Flex = ({ blok }) => {
  const direction = cleanUndefined(blok.direction[0])
  const wrap = cleanUndefined(blok.wrap[0])
  return (
    <div>
      <ul
        className={`flex mx-auto items-center justify-center p-2 ${direction} ${wrap}`}
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
