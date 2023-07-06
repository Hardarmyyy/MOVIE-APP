import React from 'react'
import Card from 'react-bootstrap/Card';
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { Link } from 'react-router-dom';

const MovieCard = ({id, title, description, posterUrl, rating}) => {

const btnStyle = {
    backgroundColor:'black',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    margin: '10px auto 20px',
    borderRadius: '5px',
}

return (

<>
    <Card style={{ width: '18rem', textAlign: "center", cursor: "pointer" }}>

        <Card.Img variant="top" src={posterUrl} alt={title} style={{height: "250px"}} />

        <Card.Body>

            <Card.Title> {title} </Card.Title>
            <Card.Text>
                {description}
            </Card.Text>

            {rating <= 8 ?

            <div>
                <BsStarFill style={{color: "red"}}></BsStarFill> 
                <BsStarFill style={{color: "red"}}></BsStarFill>
                <BsStarFill style={{color: "red"}}></BsStarFill>
                <BsStarHalf style={{color: "red"}}></BsStarHalf>
            </div>

            : 
            <div>
                <BsStarFill style={{color: "red"}}></BsStarFill>
                <BsStarFill style={{color: "red"}}></BsStarFill>
                <BsStarFill style={{color: "red"}}></BsStarFill>
                <BsStarFill style={{color: "red"}}></BsStarFill>
                <BsStarFill style={{color: "red"}}></BsStarFill>
            </div> 
            }
        </Card.Body>

        <Link to = {`/details/${id}`}> <button style={btnStyle}> Details </button> </Link>

    </Card>
</>
)
}

export default MovieCard