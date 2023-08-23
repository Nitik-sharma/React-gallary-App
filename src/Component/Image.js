import React from 'react'
import "./App.css"
function Image({images}) {
  return (
    <div className='container'>
      <div className='images'>
     {
        images.map((item)=>{

           return(
            <img  
            src={item.urls.small_s3}
            alt={item.alt_description}
            
           className='pic' />
           )
        })
     }
    </div>
    </div>
  )
}

export default Image