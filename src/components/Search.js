import React from 'react'
import { useContext, useState } from 'react'
import { AppContext } from '../Context'


function Search() {
    const {setSearchTerm, fetchRandomMeal} = useContext(AppContext)

    const [text, setText] = useState('')

    const handleSearch = (e) => {
        setText(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(text) {   //if search bar not empty
            setSearchTerm(text) 
             //sends text as search query to api
        }
      
      }
      const handleRandomMeal = () => {
        setSearchTerm('')
        setText('')
        fetchRandomMeal()
      }


  return (
    <header className='search-container'>
        <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleSearch}  value ={text} className='form-input'/>
        <button type="submit" className="btn">search</button>
        <button type="submit" className='btn btn-hipster' onClick={handleRandomMeal}>auto</button>
        </form>



    </header>
  )
}

export default Search