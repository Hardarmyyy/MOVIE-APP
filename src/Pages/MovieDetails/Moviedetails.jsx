import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { myMovieContext } from '../../Utilities/MovieContext';
import { useContext } from 'react';
import ReactPlayer from 'react-player/youtube'
import { Container } from 'react-bootstrap';
import '../MovieDetails/MovieDetails.css'

const Moviedetails = () => {


const {id} = useParams();

const {movie} = useContext(myMovieContext)

const filteredMovie = movie.filter((newMovie) => newMovie.id === id);

return (

<>  

    <Container fluid>

        {filteredMovie.map(newMovie => 

            <div key={newMovie.id} className='movieDetailsContainer'>
                    
                    <p> DESCRIPTION: {newMovie.description} </p>

                    <ReactPlayer className='player' controls url={newMovie.trailer} />

                    <Link to='/'> Back to home page </Link>
                    
            </div>

        )}

    </Container>
</>

)
}

export default Moviedetails