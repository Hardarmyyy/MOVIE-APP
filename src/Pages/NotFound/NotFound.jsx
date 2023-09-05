import React from 'react'
import { Link } from 'react-router-dom'
import '../NotFound/NotFound.css'
import { Container } from 'react-bootstrap'

const NotFound = () => {

return (

<>  
    <Container fluid>
        <section className='container'>
            <h1> Page not found </h1>
            <p> <Link to='/'> Back to home </Link> </p>
        </section>
    </Container>
</>

)
}

export default NotFound