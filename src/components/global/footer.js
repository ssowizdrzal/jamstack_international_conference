import * as React from "react"
import { Link } from "gatsby"
import "../../styles/footer.css"
import useStoryblok from "../../lib/storyblok"
import DynamicComponent from "../dynamicComponent"

const Footer = ({ location, footerContent}) => {

  let footer = useStoryblok(footerContent[0], location)

  const features_lists = footer.blocks.map(blok => {
    return <DynamicComponent blok={blok} key={blok._uid} />
  })

  const disclaimers = footer.disclaimers.map(blok => {
    return <DynamicComponent blok={blok} key={blok._uid} />
  })
  

  return(
    <footer
      style={{
        background: `rebeccapurple`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
              Tytul
          </Link>
        </h1>
            <small> <a href="https://a.storyblok.com/f/133099/x/4d9aa2815c/wust_event_privacy_policy.pdf"> WUST EVENT POLICY</a> Tekst</small>

            <div>
              {disclaimers}
            </div>
      </div>
    </footer>
  )
}

export default Footer
