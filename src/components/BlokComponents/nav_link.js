import * as React from "react"
import { Link } from "gatsby"

const NavLink = ({blok}) => {
    const url = blok.link.cached_url
    const stringed = "/" + url
    return (
        <Link
        to={stringed}
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        {blok.name}
      </Link>
    )
}

export default NavLink