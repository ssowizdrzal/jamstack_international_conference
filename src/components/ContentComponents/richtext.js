import React from 'react'
import { render} from 'storyblok-rich-text-react-renderer';

const RichText = ({blok}) => { 

    console.log(blok.richtext)
    return (
        <div>
         {
             render(blok.richtext)
            // render(story.content.long_text, {
            //   nodeResolvers: {
            //     [NODE_CODEBLOCK]: (children, story) => {
            //         return (
            //             <pre>
            //               <code { ...story }>{ children }</code>
            //             </pre>
            //         )
            //       }
            //     }
            //   }
            // )
          }
        </div>
    )
  }
  
export default RichText