import React from 'react'
import MovieCard from './MovieCard'
import AddMovie from './MovieForm'
import { useContext } from 'react'
import { myMovieContext } from '../Utilities/MovieContext'

const Home = () => {


const {movie, handleAddMovie} = useContext(myMovieContext);

return (

<>

    <div className='movieContainer'>

        {movie.length === 0 ? <h1> Movie not found </h1> : 

        movie.map((movie) => (
        
        <MovieCard key={movie.id} posterUrl={movie.posterURL} rating={movie.ratings} {...movie}></MovieCard>

        ))

        }

    </div>

    <div className='addMovie'>

        <AddMovie handleAddMovie = {handleAddMovie}></AddMovie>

    </div>
</>

)
}

export default Home