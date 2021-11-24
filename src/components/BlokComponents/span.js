import * as React from "react"
import DynamicComponent from "../dynamicComponent"

const Span = ({ blok }) => {

  const span_parts = blok.span_parts.map(blok => {
    return <DynamicComponent blok={blok} key={blok._uid} />
  })

  return <span> {span_parts} </span>
  
}

export default Span
