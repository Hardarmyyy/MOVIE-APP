import React from 'react'
import Card from 'react-bootstrap/Card';
import { BsStarFill, BsStarHalf } from "react-icons/bs";

const MovieCard = ({posterUrl, title, description, rating}) => {

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

    </Card>
</>
)
}

export default MovieCard