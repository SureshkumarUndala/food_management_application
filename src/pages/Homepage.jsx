import React from 'react'
import { useState,useEffect } from 'react'
import Search from '../components/search'
import "./Homepage.css"
import RecipeItem from '../components/receipe-item'
import FavoriteItem from '../components/favorite-item'

const Homepage = () => {

  //loading state
  const [loadingstate, setloadingstate] = useState(false)
  // save results that we receive from api
  const [receipes, setreceipes] = useState([])

  //favourites data state
  const [favorites, setfavorites] = useState([])

  const getdatafromsearchComp = (getdata) => {
    //keep loadingstate as true before calling api
    setloadingstate(true)

    const getReceipes = async () => {
      fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=59f2d2ae331c41e983498e792ef620db&query=${getdata}`)
        .then(res => res.json())
        .then((data) => {
          const { results } = data
          if (results && results.length > 0) {
            //set loading state false again
            //set the receipe state 
            setloadingstate(false)
            setreceipes(results)
          }
        })
    }
    getReceipes()
  }
  // console.log(loadingstate, receipes)

  const addTofavourites = (getCurrentRecipe) => {
    let copyFavourites = [...favorites]
    console.log(copyFavourites )
    // checking currentrecipe item is in the favorite array or not 
    const index = copyFavourites.findIndex(item =>item.id === getCurrentRecipe.id)  // returns -1 it not equal
    // console.log(index)
    if(index == -1){
      copyFavourites.push(getCurrentRecipe)
      setfavorites(copyFavourites)
      // save the items in localstorage
      localStorage.setItem("favorites", JSON.stringify(copyFavourites))
    }
    else{
      alert("item is already present in the favourite folder")
    }

  }
  // useEffect(()=>{
  //   const ExtractFavoritesFromLocalStoragePageLoad = JSON.parse(localStorage.getItem("favorites"))
  //   setfavorites(ExtractFavoritesFromLocalStoragePageLoad)
  // },[])
  // console.log(favorites)


  return (
    <div>
      <Search getdatafromsearchComp={getdatafromsearchComp} />

      {/*show wrapper items */}
      <div className='favorites-wrapper'>
        <h1 className='favorites-title'>Favorites</h1>
        <div className='favorites'>
          {
            favorites && favorites.length >0 ?
            favorites.map(item => (<FavoriteItem
              id={item.id}
              image={item.image}
              title={item.title}
              />))
              :null
          }
        </div>

      </div>


      {/*show loading state*/}

      {loadingstate && (
        <div className="loading">Loading receipies ! please wait.</div>
      )}

      {/*map through  all the receipies*/}

      <div className='items'>
        {
          receipes && receipes.length > 0 ? receipes.map((item) => <RecipeItem
            addTofavourites={() => addTofavourites(item)}
            id={item.id}
            image={item.image}
            title={item.title} />) : null
        }
      </div>
    </div>
  )
}

export default Homepage