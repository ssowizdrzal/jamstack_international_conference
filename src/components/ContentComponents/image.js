import React from "react"
import { cleanUndefined, cleanUndefinedWithPrefix } from "../../lib/utils"

const Image = ({ blok }) => {
  const height = cleanUndefinedWithPrefix(blok.height, "h-")
  const width = cleanUndefinedWithPrefix(blok.width, "w-")
  const src = cleanUndefined(blok.image.filename)
  const id = cleanUndefined(blok._uid)
  const alt = cleanUndefined(blok.image.alt)
  const image_width = cleanUndefined(blok.width)
  const image_height = cleanUndefined(blok.height)

  return (
    <div className={`${height} ${width}`}>
      <img
        src={src}
        id={id}
        alt={alt !== "" ? blok.image.alt : "someimage"}
        width={image_width}
        height={image_height}
      />
    </div>
  )
}

export default Image
