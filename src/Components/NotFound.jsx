import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {

const notFoundStyle = {
    container: {
        textAlign: 'center',
        margin: '80px auto'
    },
    link: {
        textDecoration: 'none',
    }
}

return (

<>
    <section style={notFoundStyle.container}>
        <h1> Page not found </h1>
        <p> <Link to='/' style={notFoundStyle.link}> Back to home </Link> </p>
    </section>
</>

)
}

export default NotFound