import React from 'react'
import "./style.css"


const FavoriteItem = (props) => {
   const {id, image, title} = props
   console.log(props)
  

  return (
    <div key={id} className='favorite-item'>
      <div>
        <img src={image} alt="image of recipe"/>
      </div>
      <p>{title}</p>
      <button type='button' >Remove from favouites</button>
    </div>
  )
}

export default FavoriteItem
