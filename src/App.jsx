import './App.css'
import NavScrollExample from './Components/Navigation'
import { useState } from 'react'
import { Movies } from './Components/MovieList'
import MovieCard from './Components/MovieCard'
import AddMovie from './Components/MovieForm'
import { nanoid } from "nanoid"

function App() {

// import the movies data from Movielist component;

const [movie, setMovie] = useState(Movies)

// define a function to add movie to the list;

const handleAddMovie = (title, description, posterUrl, ratings) => {
  setMovie((movie) => {return [...movie, {id: nanoid(), title: title, description: description, posterUrl: posterUrl, ratings: ratings}]});
}

// define a function for search by title;

const handlesearchMovie = (title, rating) => {
  let filteredMovie = movie;
  if (title) {
    filteredMovie = movie.filter((movie) => movie.title.toLowerCase().includes(title.toLowerCase()));
  }
  else if (rating) {
    filteredMovie = movie.filter((movie) => movie.ratings == rating);
  }
  
  setMovie(filteredMovie)
}

return (

  <>

    <NavScrollExample handlesearchMovie = {handlesearchMovie} ></NavScrollExample>

    <div className='movieContainer'>

      {movie.map((movie) => (
        
        <MovieCard key={movie.id} posterUrl={movie.posterURL} title={movie.title} description={movie.description} rating={movie.ratings}></MovieCard>

      ))}

    </div> 

    <div className='addMovie'>

    <AddMovie handleAddMovie = {handleAddMovie}></AddMovie>

    </div>

  </>

)
}

export default App
