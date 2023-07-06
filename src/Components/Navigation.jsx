import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';

function NavScrollExample({handlesearchMovie}) {

const [searchTitle, setSearchTitle] = useState('')
const [searchRating, setSearchRating] = useState('')

const handleTitleChange = (e) => {
    setSearchTitle(e.target.value)
}

const handleRatingChange = (e) => {
    setSearchRating(e.target.value)
}

// define a function to search / filter the movies from the list;

const handleFormSubmit = (e) => {
    e.preventDefault();
    handlesearchMovie(searchTitle, searchRating)
    setSearchTitle('')
    setSearchRating('')
}

return (
    <Navbar expand="lg" className="bg-body-secondary">
        <Container fluid>
            <Nav.Link href="/"> <Navbar.Brand> WATCH MOVIES </Navbar.Brand> </Nav.Link>

            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Nav.Link href="/"> Home </Nav.Link>
                <Nav.Link href="#"> About </Nav.Link>
                <Nav.Link href="#"> Contact us </Nav.Link>
            </Nav>

            <Form className="d-flex" onSubmit= {handleFormSubmit}>
                <Form.Control
                type="search"
                placeholder="search title"
                className="me-2"
                aria-label="Search"
                name = 'searchTitle'
                value={searchTitle}
                onChange={handleTitleChange}
                />
                
                <Form.Control
                type="number"
                min={1}
                max={10}
                placeholder="search rating"
                className="me-2"
                aria-label="Search"
                name = 'searchRating'
                value={searchRating}
                onChange={handleRatingChange}
                />

                <Form.Control type="submit" value="search"/>
            </Form>
    
        </Container>
    </Navbar>
);
}

export default NavScrollExample;