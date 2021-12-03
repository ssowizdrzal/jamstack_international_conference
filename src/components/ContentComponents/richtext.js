import React from 'react'
import { render} from 'storyblok-rich-text-react-renderer';
import Flex from '../flex';

const RichText = ({blok}) => { 

    return (
        <div>
         {
             render(blok.richtext
              , {

              blokResolvers: {
                ['flex']: (props) => <Flex blok = {props} />
            }
          }
          )
          
          }
        </div>
    )
  }
  
export default RichText