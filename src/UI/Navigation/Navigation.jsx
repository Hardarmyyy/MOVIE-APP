import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import '../Navigation/Navigation.css'


function NavScrollExample({handlesearchMovie}) {

const [searchTitle, setSearchTitle] = useState('')

const handleTitleChange = (e) => {
    setSearchTitle(e.target.value)
}

//validate search title
const [invalid, setInvalid] = useState(false)

// define a function to search / filter the movies from the list;

const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!searchTitle) {
        return setInvalid(true)
    }
    handlesearchMovie(searchTitle)
    setSearchTitle('')
}

return (
    <>
        <Container fluid>

            <nav className='navigation my-4'>

                <Link to="/" onClick={() => {window.reload()}} className='links'> WATCH <span> MOVIES </span>  </Link>

                <form onSubmit={handleFormSubmit} className='navForm'>

                    <input className={invalid ? 'invalid' : null} onInput={() => {setInvalid(false)}} 
                    type="search" placeholder="Search movie by title" name = 'searchTitle' value={searchTitle} onChange={handleTitleChange} />

                    <div className='submit'>
                        <input type="submit" value='Search'/> 
                    </div>

                </form>

            </nav>

        </Container>
    </>
);
}

export default NavScrollExample;