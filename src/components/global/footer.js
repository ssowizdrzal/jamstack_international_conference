import * as React from "react"
import { Link } from "gatsby"
import "../../styles/footer.css"

const Footer = ({ footerContent}) => {




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
            <span>USLO</span>
            <span>USLO</span>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
