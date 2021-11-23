import * as React from "react"
import { Link } from "gatsby"
import DynamicComponent from "../dynamicComponent"
import "../../styles/footer.css"

const Footer = ({ footerContent}) => {


  const links = footerContent[0].nav_links.map(blok => {
 
    return (<DynamicComponent blok={blok} key={blok._uid} />)
  });


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
        <ul>
          {links}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
