import React from "react"
import { Link } from "gatsby"
import DynamicComponent from "../dynamicComponent"

const RichTextList = ({ blok }) => {

  let if_list = false;

  const renderListElement = (type, blok, index) => {
    if (type === "paragraph") {
      if (blok.content) {
        const content = blok.content
        const elements = content.map(content => {
          if (content.type === "text") {
            let output_text = content.text
            if (content.marks) {
              content.marks.forEach((type, index) => {
                switch (type.type) {
                  case "bold":
                    output_text = <strong key={index}>{output_text}</strong>
                    break
                  case "italic":
                    output_text = <em key={index}>{output_text}</em>
                    break
                  case "underline":
                    output_text = <u key={index}>{output_text}</u>
                    break
                  case "strike":
                    output_text = <s key={index}>{output_text}</s>
                    break
                  case "link":
                    const link = type.attrs
                    if (
                      (link.linktype === "url" && link.href !== "") ||
                      (link.linktype === "asset" && link.href !== "")
                    ) {
                      output_text = (
                        <a key={index} href={link.href}>
                          {output_text}
                        </a>
                      )
                    }
                    if (link.linktype === "story" && link.href !== "") {
                      output_text = (
                        <Link key={index} to={link.href}>
                          {output_text}
                        </Link>
                      )
                    }
                    if (link.linktype === "email" && link.href !== "") {
                      const href_link = `mailto:${link.href}`
                      output_text = (
                        <a key={index} href={href_link}>
                          {output_text}
                        </a>
                      )
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
            <p> {elements}</p>
          </li>
        )
      }
      return null
    }
    if (type === "bullet_list") {
      // if (blok.content) {
      //   const list_items = blok.content.map((blok, index) => {
      //     return (
      //       <DynamicComponent
      //         blok={blok}
      //         editable={false}
      //         key={index}
      //         index={index}
      //       />
      //     )
      //   })
      //   if_list=true;
      //   return list_items
      // }
      // return null
    }
    if (type === "blok") {
      const components = blok.attrs.body.map((blok, index) => {
        if(blok.component === "list"){
          if_list = true;
        }
        return <DynamicComponent blok={blok} key={blok._uid} />
      })
      if(if_list){
        return <li className="list-in-list" key={index}>{components}</li>

      }
      return <li className="" key={index}>{components}</li>
    }
    return (
      <li key={index}> that type isn't implemented [richtextlist-{type}]</li>
    )
  }

  const elements = blok.richtext_list.content.map((blok, index) => {
    return renderListElement(blok.type, blok, index)
  })
  return elements
}

export default RichTextList
