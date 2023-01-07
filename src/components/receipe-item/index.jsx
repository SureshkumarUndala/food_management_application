import React from 'react'
import "./style.css"

const RecipeItem = (props) => {
   const {id,image, title, addTofavourites} = props
  

  return (
    <div key={id} className='receipe-item'>
      <div>
        <img src={image} alt="image of recipe"/>
      </div>
      <p>{title}</p>
      <button type='button' onClick={addTofavourites}>Add to favouites</button>

     
    </div>
  )
}

export default RecipeItem
