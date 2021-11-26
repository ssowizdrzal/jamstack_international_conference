import * as React from "react"
import "../../styles/footer.css"
import DynamicComponent from "../dynamicComponent"

const Footer = ({ location, footerContent }) => {
  let footer = footerContent[0]

  // const features_lists = footer.blocks.map(blok => {
  //   return <DynamicComponent blok={blok} key={blok._uid} />
  // })

  return (
    <footer
      style={{
        background: `rebeccapurple`,
      }}
    >
      <div>
        {/*DISCLAIMERS */}
        <div className=" disclaimers text-white bg-black pb-2">
          {footer &&
            footer.disclaimers.map((blok, index) => (
              <DynamicComponent blok={blok} key={index} editable={false} />
            ))}
        </div>
        {/* END OF DISCLAIMERS */}
      </div>
    </footer>
  )
}

export default Footer
