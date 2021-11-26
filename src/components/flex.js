import React from "react"
import DynamicComponent from "./dynamicComponent"

const Flex = ({ blok }) => {
  console.log(blok.direction[0])
  return (
    <div>
      <ul className={`flex mx-auto ${blok.direction[0]} ${blok.wrap[0]}`}>

        {blok.elements.map(blok => (
          <li key={blok._uid} className="flex-auto px-2">
            <DynamicComponent blok={blok} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Flex
