import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
 
import Layout from "../components/layout"
import Seo from "../components/seo"
import DynamicComponent from "../components/dynamicComponent"
import useStoryblok from "../lib/storyblok"
 
const Page = ({ pageContext, location }) => { 
  let story = pageContext.story
  story = useStoryblok(story, location)
 
  const components = story.content.body.map(blok => {
    return (<DynamicComponent blok={blok} key={blok._uid} />)
  })
 
  return (
  <Layout location={location}>
    <Seo title={ story.content.title }/>
    <h1>{ story.content.title }</h1>
    { components }
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
    "Empty :)" 
    </p>
  </Layout>
)}
 
export default Page