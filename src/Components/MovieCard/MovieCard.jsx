import React from 'react'
import Card from 'react-bootstrap/Card';
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { Link } from 'react-router-dom';
import '../MovieCard/MovieCard.css'

const MovieCard = ({id, title, description, posterUrl, rating}) => {

return (

<>
    <div className='cardConatiner'>

        <img src={posterUrl} alt={title} />

        <p> {title} </p>

        {rating >= 8 && rating < 10 &&

            <div>
                <BsStarFill className='ratingIcon'></BsStarFill> 
                <BsStarFill className='ratingIcon'></BsStarFill>
                <BsStarFill className='ratingIcon'></BsStarFill>
                <BsStarFill className='ratingIcon'></BsStarFill>
                <BsStarFill className='ratingIcon'></BsStarFill>
            </div>

        }

        {rating >= 6 && rating < 8 &&
            <div>
                <BsStarFill className='ratingIcon'></BsStarFill>
                <BsStarFill className='ratingIcon'></BsStarFill>
                <BsStarFill className='ratingIcon'></BsStarFill>
                <BsStarHalf className='ratingIcon'></BsStarHalf>
                <BsStarHalf className='ratingIcon'></BsStarHalf>
            </div> 
        }

        {rating >= 4 && rating < 6 &&
            <div>
                <BsStarFill className='ratingIcon'></BsStarFill>
                <BsStarFill className='ratingIcon'></BsStarFill>
                <BsStarHalf className='ratingIcon'></BsStarHalf>
                <BsStarHalf className='ratingIcon'></BsStarHalf>
                <BsStarHalf className='ratingIcon'></BsStarHalf>
            </div> 
        }

        {rating >= 2 && rating < 4 &&
            <div>
                <BsStarFill className='ratingIcon'></BsStarFill>
                <BsStarHalf className='ratingIcon'></BsStarHalf>
                <BsStarHalf className='ratingIcon'></BsStarHalf>
                <BsStarHalf className='ratingIcon'></BsStarHalf>
                <BsStarHalf className='ratingIcon'></BsStarHalf>
            </div> 
        }

        {rating >= 1 && rating < 2 &&
            <div>
                <BsStarHalf className='ratingIcon'></BsStarHalf>
                <BsStarHalf className='ratingIcon'></BsStarHalf>
                <BsStarHalf className='ratingIcon'></BsStarHalf>
                <BsStarHalf className='ratingIcon'></BsStarHalf>
                <BsStarHalf className='ratingIcon'></BsStarHalf>
            </div> 
        }

        <Link to = {`/details/${id}`}> <button className='detailsBtn'> Details </button> </Link>

    </div>
</>
)
}

export default MovieCard