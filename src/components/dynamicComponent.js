import SbEditable from "storyblok-react"
import Teaser from "./teaser"
import React from "react"
import Paragraph from "./TextComponents/paragraph"
import Span from "./TextComponents/span"
import TextSpan from "./TextComponents/text"
import Link from "./TextComponents/link"
import Grid from "./grid"
import Flex from "./flex"
import RichText from "./ContentComponents/richtext"
import Image from "./ContentComponents/image"
import BreakLine from "./TextComponents/breakline"
import EmptyGrid from "./ContentComponents/emptygrid"

const Components = {
  teaser: Teaser,
  paragraph: Paragraph,
  span_copy: Span,
  text_copy: TextSpan,
  link: Link,
  grid: Grid,
  flex: Flex,
  slide: Image,
  richtext: RichText,
  break_line: BreakLine,
  empty_grid_space: EmptyGrid
}

const DynamicComponent = ({ blok, editable = true }) => {
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component]
    if (editable)
      return (
        <SbEditable content={blok} >
          <Component blok={blok} />
        </SbEditable>
      )
    else return <Component blok={blok} />
  }
  return (
    <p>
      The component <strong>{blok.component}</strong> has not been created yet.
    </p>
  )
}

export default DynamicComponent
