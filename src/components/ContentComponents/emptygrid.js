import React from "react"

const EmptyGrid = ({ blok }) => {


  const margin_top = `${blok.margin_top ? blok.margin_top : "5"}px`
  const margin_bot = `${blok.margin_bot ? blok.margin_bot : "5"}px`
  const margin_left = `${blok.margin_left ? blok.margin_left : "5"}px`

  return (
    <div
      className={` `.replace(/\s\s+/g, " ")}
      style={{
        marginTop: margin_top,
        marginBottom: margin_bot,
        marginLeft: margin_left,
      }}
    >
      &nbsp;
    </div>
  )
}
export default EmptyGrid
