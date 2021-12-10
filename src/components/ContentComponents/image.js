import React from "react"
import { cleanUndefined } from "../../lib/utils"
import { Link } from "gatsby"

const Image = ({ blok }) => {
  console.log(blok)
  const imageInput = () => {
    return (
      <img
        className=" m-0"
        src={src}
        id={id}
        alt={alt !== "" ? blok.image.alt : "imageplaceholderalt"}
        width={image_width}
        style={{
          marginTop: margin_top,
          marginBottom: margin_bot,
          marginLeft: margin_left,
          marginRight: `0px`,
        }}
      />
    )
  }

  const wrapLink = () => {
    if (link.url === "" && link.id === "" && link.cached_url === "") {
      return imageInput()
    }
    if (link.linktype === "url" && link.url !== "") {
      const href_link = cleanUndefined(link.cached_url)
      return <a href={href_link}>{imageInput()}</a>
    }
    if (link.linktype === "story" && link.id !== "") {
      const url = cleanUndefined(link.cached_url)
      const stringed = "/" + url
      return <Link to={stringed}>{imageInput()}</Link>
    }
    return imageInput()
  }

  const src = cleanUndefined(blok.image.filename)
  const id = cleanUndefined(blok._uid)
  const alt = cleanUndefined(blok.image.alt)
  let image_width = cleanUndefined(blok.width)
  const margin_top = `${blok.margin_top ? blok.margin_top : "5"}px`
  const margin_bot = `${blok.margin_bot ? blok.margin_bot : "5"}px`
  const margin_left = `${blok.margin_left ? blok.margin_left : "5"}px`

  const link = blok.link

  return wrapLink()
}

export default Image
