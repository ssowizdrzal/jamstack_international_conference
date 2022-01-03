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
import List from "./ContentComponents/list"
import RichTextList from "./ContentComponents/richtext_list"
import ListItem from "./ContentComponents/listitem"
import NavLink from "./GlobalComponents/nav_link"
import FeatureList from "./GlobalComponents/feature_list"

const Components = {
  teaser: Teaser,
  paragraph: Paragraph,
  span: Span,
  text: TextSpan,
  link: Link,
  grid: Grid,
  flex: Flex,
  slide: Image,
  richtext: RichText,
  break_line: BreakLine,
  empty_grid_space: EmptyGrid,
  list: List,
  richtext_list: RichTextList,
  list_item: ListItem,
  nav_link: NavLink,
  feature_list: FeatureList,
}

const DynamicComponent = ({ blok, editable = true, index }) => {
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
  if(blok.type){
    const Component = Components[blok.type]
    if (editable)
      return (
        <SbEditable content={blok} >
          <Component blok={blok} index={index}/>
        </SbEditable>
      )
    else return <Component blok={blok} index={index}/>
  }
  return (
    <p>
      The component <strong>{blok.component}{blok.type? blok.type:""}</strong> has not been created yet.
    </p>
  )
}

export default DynamicComponent
