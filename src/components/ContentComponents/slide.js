import React from 'react'

const Slider = ({blok}) => {

  return (
    <div className ={`h-${blok.height} w-${blok.width}`}>
        <img className="" src={blok.image.filename} id={blok._uid} alt={blok.image.alt? blok.image.alt : "someimage"} width={blok.width} height={blok.height}/>
    </div>
    )
}

export default Slider