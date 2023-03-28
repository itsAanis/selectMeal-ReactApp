import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../Context'
import{BsHandThumbsUp} from 'react-icons/bs'



const Meals = () => {
  const {meals, loading, clickMeal} = useContext(AppContext)

  if (loading) {
    return <section className="section">
      <h4>Loading...</h4>     {/* loading message for async */}
    </section>
  }

  if (meals.length < 1) {
    return <section className="section">
      <h4>No meals matched your search term. Please try again.</h4>
    </section>
  }


  return (
    <div className='section-center'>
      {meals.map(meal => {
        const{idMeal, strMeal:title, strMealThumb:image} = meal
       return <article key={idMeal} className='single-meal'>
        <img src={image}   className='img' onClick={ () => clickMeal(idMeal)}
        style={{width: '200px'}}/>
        <footer>
          <h5>{title}</h5>
          <button className='like-btn'><BsHandThumbsUp/></button>
        </footer>
       </article>
      })}
    </div>
  )
} 

export default Meals