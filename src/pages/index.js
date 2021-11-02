import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { graphql } from "gatsby"

import DynamicComponent from "../components/dynamicComponent"
import useStoryblok from "../lib/storyblok"

const IndexPage = ({data, location}) =>
{
  let story = data.storyblokEntry
  story = useStoryblok(story, location)
  

 

  console.log(story)

  const components = story.content.body.map(blok => {
    return (<DynamicComponent blok={blok} key={blok._uid} />)
  })

  return(
    <Layout>
      <Seo title="Home" />
      <h1>{story.content.title}</h1>
      { components }
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <p>
        "Empty :)" 
      </p>
    </Layout>
    )

} 

export default IndexPage

export const query = graphql`
  query HomeQuery {

  storyblokEntry (full_slug:{eq:"home"}){
		name
    content
  }
}
`