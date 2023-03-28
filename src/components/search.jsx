import React, { useState } from 'react'
import "./search.css"

const Search = (props) => {
  const [inputvalue, setinputvalue] = useState("")
 
  const {getdatafromsearchComp} = props

  
  const handlesubmit = (e) =>{
    e.preventDefault()
    getdatafromsearchComp(inputvalue)


  }


  return (
    <form onSubmit={handlesubmit} className='Search'>
        <input name='search' value={inputvalue} onChange={(e)=>setinputvalue(e.target.value)} placeholder='Search Recipes' id='search'/>
        <button type='submit'>Search</button>
      
    </form>
  )
}

export default Search