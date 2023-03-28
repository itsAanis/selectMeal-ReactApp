import React, { createContext} from 'react'
import  {useEffect, useState} from 'react'




import axios from 'axios'

const AppContext = React.createContext()

 const searchUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='

const randomUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'



const AppProvider = ({ children }) => {  


const [meals, setMeals] = useState([])
const [loading, setLoading] = useState()
const [searchTerm, setSearchTerm] = useState('')

const [showModal, setShowModal] = useState(false)
const [clickedMeal, setClickedMeal] = useState(null)



    const fetchMeals = async (url) => {
        setLoading(true)
        try {
            const {data} = await axios.get(url)
        if(data.meals) {
            setMeals(data.meals)
        }                           // check if api returns data
        else {setMeals([])} 
        }
        catch(err) {
                console.log(err)
        }
        setLoading(false)
    }


    useEffect(() => {
        fetchMeals(searchUrl)
      }, [])

    useEffect (() => {
        if(!searchTerm) return
        fetchMeals(`${searchUrl}${searchTerm}`) 
        },[searchTerm])  // useeffect runs when search is entered

        const fetchRandomMeal = () => {
            fetchMeals(randomUrl)
          }

          const clickMeal = idMeal => {
                let meal
            meal = meals.find((meal) => meal.idMeal === idMeal)
            setClickedMeal(meal)   // the meal div that is clicked on becomes
            setShowModal(true)
          }
          const closeModal = () => {
            setShowModal(false)
          }

  return (
    <AppContext.Provider value={{meals, loading, setSearchTerm, fetchRandomMeal, showModal, clickMeal, clickedMeal, closeModal }} >
    {children}
    </AppContext.Provider>
  )
  
}



export {AppContext, AppProvider}