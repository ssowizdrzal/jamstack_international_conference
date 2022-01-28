import * as React from "react"
import "../../styles/footer.css"
import DynamicComponent from "../dynamicComponent"
import { cleanUndefined, flatStringFromArray } from "../../lib/utils"

const Footer = ({ location, footerContent }) => {
  let footer = footerContent[0]
  let footer_diclaimers = footer.disclaimers[0]
  let footer_features = footer.features[0]

  let footer_diclaimers_color = cleanUndefined(footer_diclaimers.color[0])
  const footer_diclaimers_padding_top = cleanUndefined(
    footer_diclaimers.padding_top[0]
  )
  const footer_diclaimers_padding_bot = cleanUndefined(
    footer_diclaimers.padding_bot[0]
  )
  const footer_diclaimers_padding_left = cleanUndefined(
    footer_diclaimers.padding_left[0]
  )
  const footer_diclaimers_padding_right = cleanUndefined(
    footer_diclaimers.padding_right[0]
  )

  const footer_diclaimers_align = cleanUndefined(footer_diclaimers.align[0])
  const footer_diclaimers_text_size = cleanUndefined(
    footer_diclaimers.text_size[0]
  )
  const footer_diclaimers_line_height = cleanUndefined(
    footer_diclaimers.line_height[0]
  )

  let footer_diclaimers_background_color = cleanUndefined(
    footer_diclaimers.background_color[0]
  )

  const footer_diclaimers_styling = flatStringFromArray(
    footer_diclaimers.styling
  )

  const footer_diclaimers_margin_top = `${
    footer_diclaimers.margin_top ? footer_diclaimers.margin_top : "5"
  }px`
  const footer_diclaimers_margin_bot = `${
    footer_diclaimers.margin_bot ? footer_diclaimers.margin_bot : "5"
  }px`

  let footer_diclaimers_color_text = `${
    footer_diclaimers.color_text ? footer_diclaimers.color_text : ""
  }`
  let footer_diclaimers_background_color_text = `${
    footer_diclaimers.background_color_text
      ? footer_diclaimers.background_color_text
      : ""
  }`

  let footer_diclaimers_color_test = false
  let footer_diclaimers_background_color_test = false
  const regex_rgb_value =
    /^([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]),([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]),([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/
  const regex_hex_value = /^(#[0-9a-f]{6}|#[0-9a-f]{3})$/i

  if (footer_diclaimers_color_text !== "") {
    if (regex_rgb_value.test(footer_diclaimers_color_text)) {
      footer_diclaimers_color_text = `rgb(${footer_diclaimers_color_text})`
      footer_diclaimers_color = ""
      footer_diclaimers_color_test = true
    }
    if (regex_hex_value.test(footer_diclaimers_color_text)) {
      footer_diclaimers_color = ""
      footer_diclaimers_color_test = true
    }
  }

  if (footer_diclaimers_background_color_text !== "") {
    if (regex_rgb_value.test(footer_diclaimers_background_color_text)) {
      footer_diclaimers_background_color_text = `rgb(${footer_diclaimers_background_color_text})`
      footer_diclaimers_background_color = ""
      footer_diclaimers_background_color_test = true
    }
    if (regex_hex_value.test(footer_diclaimers_background_color_text)) {
      footer_diclaimers_background_color = ""
      footer_diclaimers_background_color_test = true
    }
  }
  let footer_features_color = cleanUndefined(footer_features.color[0])
  const footer_features_padding_top = cleanUndefined(
    footer_features.padding_top[0]
  )
  const footer_features_padding_bot = cleanUndefined(
    footer_features.padding_bot[0]
  )
  const footer_features_padding_left = cleanUndefined(
    footer_features.padding_left[0]
  )
  const footer_features_padding_right = cleanUndefined(
    footer_features.padding_right[0]
  )

  const footer_features_align = cleanUndefined(footer_features.align[0])
  const footer_features_text_size = cleanUndefined(footer_features.text_size[0])
  const footer_features_line_height = cleanUndefined(
    footer_features.line_height[0]
  )

  let footer_features_background_color = cleanUndefined(
    footer_features.background_color[0]
  )

  const footer_features_styling = flatStringFromArray(footer_features.styling)

  const footer_features_margin_top = `${
    footer_features.margin_top ? footer_features.margin_top : "5"
  }px`
  const footer_features_margin_bot = `${
    footer_features.margin_bot ? footer_features.margin_bot : "5"
  }px`

  let footer_features_color_text = `${
    footer_features.color_text ? footer_features.color_text : ""
  }`
  let footer_features_background_color_text = `${
    footer_features.background_color_text
      ? footer_features.background_color_text
      : ""
  }`

  let footer_features_color_test = false
  let footer_features_background_color_test = false

  if (footer_features_color_text !== "") {
    if (regex_rgb_value.test(footer_features_color_text)) {
      footer_features_color_text = `rgb(${footer_features_color_text})`
      footer_features_color = ""
      footer_features_color_test = true
    }
    if (regex_hex_value.test(footer_features_color_text)) {
      footer_features_color = ""
      footer_features_color_test = true
    }
  }

  if (footer_features_background_color_text !== "") {
    if (regex_rgb_value.test(footer_features_background_color_text)) {
      footer_features_background_color_text = `rgb(${footer_features_background_color_text})`
      footer_features_background_color = ""
      footer_features_background_color_test = true
    }
    if (regex_hex_value.test(footer_features_background_color_text)) {
      footer_features_background_color = ""
      footer_features_background_color_test = true
    }
  }

  return (
    <footer
      style={{
        background: `
        transparent`,
      }}
    >
      <div>
        {/*FEATURES */}
        <div
          style={{
            maxWidth: `80%`,
            width: `80%`,
            marginLeft: `auto`,
            marginRight: `auto`,
          }}
        >
          <hr></hr>
          <div
            className={`features pb-2 ${footer_features_align} ${footer_features_text_size} ${footer_features_line_height} ${footer_features_styling} ${footer_features_color} ${footer_features_background_color} ${footer_features_padding_top} ${footer_features_padding_bot} ${footer_features_padding_left} ${footer_features_padding_right}`.replace(
              /\s\s+/g,
              " "
            )}
            style={{
              borderTop: `1px`,
              marginTop: footer_features_margin_top,
              marginBottom: footer_features_margin_bot,
              color: footer_features_color_test
                ? `${footer_features_color_text}`
                : null,
              backgroundColor: footer_features_background_color_test
                ? `${footer_features_background_color_text}`
                : null,
            }}
          >
            {footer &&
              footer_features.features.map((blok, index) => (
                <DynamicComponent blok={blok} key={index} editable={true} />
              ))}
          </div>
        </div>

        {/* END OF FEATURES */}
        {/*DISCLAIMERS */}
        <div
          className={`disclaimers text-white bg-black pb-2 ${footer_diclaimers_align} ${footer_diclaimers_text_size} ${footer_diclaimers_line_height} ${footer_diclaimers_styling} ${footer_diclaimers_color} ${footer_diclaimers_background_color} ${footer_diclaimers_padding_top} ${footer_diclaimers_padding_bot} ${footer_diclaimers_padding_left} ${footer_diclaimers_padding_right}`.replace(
            /\s\s+/g,
            " "
          )}
          style={{
            marginTop: footer_diclaimers_margin_top,
            marginBottom: footer_diclaimers_margin_bot,
            color: footer_diclaimers_color_test
              ? `${footer_diclaimers_color_text}`
              : null,
            backgroundColor: footer_diclaimers_background_color_test
              ? `${footer_diclaimers_background_color_text}`
              : null,
          }}
        >
          {footer &&
            footer_diclaimers.disclaimers.map((blok, index) => (
              <DynamicComponent blok={blok} key={index} editable={true} />
            ))}
        </div>
        {/* END OF DISCLAIMERS */}
      </div>
    </footer>
  )
}

export default Footer
