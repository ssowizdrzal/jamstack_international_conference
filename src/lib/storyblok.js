import { useEffect, useState } from "react"
import StoryblokClient from 'storyblok-js-client'
import config from '../../gatsby-config'
const sbConfig = config.plugins.find((item) => item.resolve === 'gatsby-source-storyblok')

const sbClient = new StoryblokClient({
  accessToken: sbConfig.options.accessToken,
  cache: {
    clear: 'auto',
    type: 'memory'
  }
})


export default function useStoryblok(originalStory, location) {
  let [story, setStory] = useState(originalStory)

  if(story && typeof story.content === "string"){
    story.content = JSON.parse(story.content)
  }
  
  // https://www.storyblok.com/docs/Guides/storyblok-latest-js
  function initEventListeners() {
    const { StoryblokBridge } = window

    if (typeof StoryblokBridge !== 'undefined') {
      const storyblokInstance = new StoryblokBridge({
        resolveRelations: "posts-list.posts"
      })

      storyblokInstance.on(['published', 'change'], (event) => {
        window.location.reload(true)
      })  
  
      storyblokInstance.on('input', (event) => {
        setStory(event.story)
      }) 

      storyblokInstance.on('enterEditmode', (event) => {
        sbClient
          .get(`cdn/stories/${event.storyId}`, {
            version: 'draft',
            resolve_relations: "posts-list.posts"
          })
          .then(({ data }) => {
            if(data.story) {
              setStory(data.story)
            }
          })
          .catch((error) => {
            console.log(error);
          }) 
      }) 
    }
  }

  function addBridge(callback) {
      const existingScript = document.getElementById("storyblokBridge");
      if (!existingScript) {
        const script = document.createElement("script");
        script.src = `//app.storyblok.com/f/storyblok-v2-latest.js`;
        script.id = "storyblokBridge";
        document.body.appendChild(script);
        script.onload = () => {
          callback()
        };
      } else {
          callback();
      }
  }

  useEffect(() => {
    if(location.search.includes("_storyblok")) {
      addBridge(initEventListeners)
    }
  }, [location.search]) 
  return story;
}