import React from "react"
import { cleanUndefined } from "../../lib/utils"
import { Link } from "gatsby"
import DynamicComponent from "../dynamicComponent"
import ListItem from "./listitem"

const RichTextList = ({ blok }) => {
  //console.log(blok)

  const renderSwitch = (type, blok, index) => {
    // console.log(blok)
    switch (type) {
      case "bullet_list":
        if (blok.content) {
          const list_items = blok.content.map((blok, index) => {
            return (
              <DynamicComponent
                blok={blok}
                key={index}
                index={index}
                editable={false}
              />
            )
          })
          return list_items
        }

        return null
      case "paragraph":
        if (blok.content) {
          const content = blok.content
          const elements = content.map(content => {
            if (content.type === "text") {
              let output_text = content.text
              if (content.marks) {
                content.marks.map(type => {
                  switch (type.type) {
                    case "bold":
                      output_text = <strong>{output_text}</strong>
                      break
                    case "italic":
                      output_text = <em>{output_text}</em>
                      break
                    case "underline":
                      output_text = <u>{output_text}</u>
                      break
                    case "strike":
                      output_text = <s>{output_text}</s>
                      break
                    case "link":
                      const link = type.attrs
                      if ((link.linktype === "url" && link.href !== "") || (link.linktype === "asset" && link.href !== ""))  {
                        output_text = <a href={link.href}>{output_text}</a>
                      }
                      if (link.linktype === "story" && link.href !== "") {
                        output_text = <Link to={link.href}>{output_text}</Link>
                      }
                      if (link.linktype === "email" && link.href !== "") {
                       
                        const href_link = `mailto:${link.href}`
                        output_text = <a href={href_link}>{output_text}</a>
                      }
                      break
                    default:
                      break
                  }
                })
              }
              return output_text
            }

            return null
          })

          return (
            <li key={index}>
              <p>{elements}</p>
            </li>
          )
        }
        break
      default:
        return <li key={index}>that type isn't implemented</li>
    }
  }

  const elements = blok.richtext_list.content.map((blok, index) => {
    return renderSwitch(blok.type, blok, index)
  })

  //   const li_elements = blok.content.map((blok) => (
  //     console.log(blok)
  //   ))
  //   const imageInput = () => {
  //     return (
  //       <img
  //         className=" m-0"
  //         src={src}
  //         id={id}
  //         alt={alt !== "" ? blok.image.alt : "imageplaceholderalt"}
  //         width={image_width}
  //         style={{
  //           marginTop: margin_top,
  //           marginBottom: margin_bot,
  //           marginLeft: margin_left,
  //           marginRight: `0px`,
  //         }}
  //       />
  //     )
  //   }

  //   const wrapLink = () => {
  //     if (link.url === "" && link.id === "" && link.cached_url === "") {
  //       return imageInput()
  //     }
  //     if (link.linktype === "url" && link.url !== "") {
  //       const href_link = cleanUndefined(link.cached_url)
  //       return <a href={href_link}>{imageInput()}</a>
  //     }
  //     if (link.linktype === "story" && link.id !== "") {
  //       const url = cleanUndefined(link.cached_url)
  //       const stringed = "/" + url
  //       return <Link to={stringed}>{imageInput()}</Link>
  //     }
  //     return imageInput()
  //   }

  //   const src = cleanUndefined(blok.image.filename)
  //   const id = cleanUndefined(blok._uid)
  //   const alt = cleanUndefined(blok.image.alt)
  //   let image_width = cleanUndefined(blok.width)
  //   const margin_top = `${blok.margin_top ? blok.margin_top : "5"}px`
  //   const margin_bot = `${blok.margin_bot ? blok.margin_bot : "5"}px`
  //   const margin_left = `${blok.margin_left ? blok.margin_left : "5"}px`

  //   const link = blok.link

  return <ol> {elements}</ol>
}

export default RichTextList
