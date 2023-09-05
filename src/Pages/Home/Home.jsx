import React from 'react'
import { useContext } from 'react'
import { Container } from 'react-bootstrap'
import MovieCard from '../../Components/MovieCard/MovieCard'
import AddMovie from '../../Components/MovieForm/MovieForm'
import { myMovieContext } from '../../Utilities/MovieContext'
import '../Home/Home.css'

const Home = () => {


const {movie, handleAddMovie} = useContext(myMovieContext);

return (

<>
    <Container fluid>

        {movie.length === 0 && 
            
            <h1 className='emptyMovie'> Movie not found </h1> 
            
        }
        
        <div className='movieContainer'>

            {movie.length !== 0 && 
                movie.map((movie) => (
            
                <MovieCard key={movie.id} posterUrl={movie.posterURL} rating={movie.ratings} {...movie}></MovieCard>

            ))

            }

        </div>

        <div className='addMovie'>

            <AddMovie handleAddMovie = {handleAddMovie}></AddMovie>

        </div>

    </Container>
</>

)
}

export default Home