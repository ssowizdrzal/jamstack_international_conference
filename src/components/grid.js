import React from 'react'
import DynamicComponent from './dynamicComponent'


const Grid = ({blok}) => {

    console.log(blok)
    return(  <div>
    
        {/* <ul className="flex flex-wrap p-8 bg-white container mx-auto"> */}
        <ul className={`grid p-2 container mx-auto ${blok.gap[0]} ${blok.grid_flow[0]} ${blok.grid_columns[0]} ${blok.grid_rows[0]}`}>
          {blok.columns.map((blok) => (
              <li key={blok._uid} className="flex-auto px-2">
                <DynamicComponent blok={blok} />
          
              </li>
            )
          )}
        </ul>
      </div>) 
}





export default Grid