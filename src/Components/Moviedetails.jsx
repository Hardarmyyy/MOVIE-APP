import React from 'react'
import { useParams } from 'react-router-dom'
import { myMovieContext } from '../Utilities/MovieContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player/youtube'

const Moviedetails = () => {

const movieStyles = {
    container: {
        margin: '50px auto',
        width: '800px',
        
    },
    trailer: {
        border: '1px solid black',
        width: '100%',
        height: '400px',
        margin: '10px 0px',
    }
    
}

const {id} = useParams();

const {movie} = useContext(myMovieContext)

const filteredMovie = movie.filter((newMovie) => newMovie.id === id);

return (

<>
    <section>

        {filteredMovie.map(newMovie => 

            <div key={newMovie.id} style={movieStyles.container}>
                    
                    <p> DESCRIPTION: {newMovie.description} </p>

                    <ReactPlayer controls url={newMovie.trailer} style={movieStyles.trailer} />

                    <Link to='/' style={{textDecoration: 'none'}}> Back to home page </Link>
                    
            </div>

        )}

    </section>
</>

)
}

export default Moviedetails