import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavScrollExample({handlesearchMovie}) {

// define a function to search / filter the movies from the list;

const handleFormSubmit = (e) => {
    e.preventDefault();
    const search = e.target.searchTitle.value;
    handlesearchMovie(search)
}

return (
    <Navbar expand="lg" className="bg-body-secondary">
        <Container fluid>
            <Navbar.Brand href="#"> WATCH MOVIES </Navbar.Brand>

            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Nav.Link href="#action1"> Home </Nav.Link>
                <Nav.Link href="#action2"> About </Nav.Link>
                <Nav.Link href="#"> Contact us </Nav.Link>
                <Nav.Link to = '/addmovie'> Add movie </Nav.Link>
            </Nav>

            <Form className="d-flex" onSubmit= {handleFormSubmit}>
                <Form.Control
                type="search"
                placeholder="search movie title"
                className="me-2"
                aria-label="Search"
                name = 'searchTitle'
                />
                <Form.Control type="submit" value="search"/>
            </Form>
    
        </Container>
    </Navbar>
);
}

export default NavScrollExample;