import Form from 'react-bootstrap/Form';
import { useState } from 'react';


const AddMovie = ({handleAddMovie}) => {

const formStyle = {
    inputStyle: {
        width: "100%",
        borderRadius: "5px",
        border: "1px solid gray",
        padding: "5px 10px"
    }, 
    submitStyle: {
        color: "white",
        backgroundColor: "#61A1FE",
        borderRadius: "5px",
        border: "1px solid transparent",
        padding: "5px 10px", 
        margin: "10px auto 40px",
        float: "right"
    }
}

const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterUrl: "",
    ratings: "",
    trailer: ""
});

// handle change;
const handleChange = (e) => {
    setNewMovie((newMovie) => {return {...newMovie, [e.target.name]: e.target.value}});
}

// define an onSubmit function for the form to add a new movie to the movieList;

const handleFormSubmit = (e) => {
    e.preventDefault();
    handleAddMovie(newMovie.title, newMovie.description, newMovie.posterUrl, newMovie.ratings, newMovie.trailer);
    console.log(newMovie);
    setNewMovie({
        title: "",
        description: "",
        posterUrl: "",
        ratings: "",
        trailer: ""
    })
}

return (

<>

    <h3> Add a new movie </h3>

    <Form onSubmit = {handleFormSubmit}>

        <label> Movie Title </label>  <br /> 
        <input type="text" value={newMovie.title} onChange={handleChange} name="title" placeholder="Enter movie title" style={formStyle.inputStyle}/> <br /> <br />

        <label> Movie Description </label>  <br /> 
        <input type="text" value={newMovie.description} onChange={handleChange} name="description" placeholder="Enter movie description" style={formStyle.inputStyle}/> <br /> <br />

        <label> Movie Poster Url </label>  <br /> 
        <input type="text" value={newMovie.posterUrl} onChange={handleChange} name="posterUrl" placeholder="Enter movie poster url" style={formStyle.inputStyle}/> <br /> <br />

        <label> Movie Ratings </label>  <br /> 
        <input type="number" value={newMovie.ratings} onChange={handleChange} name="ratings" placeholder="Enter movie rating between 1 - 10" min = "1" max = "10" style={formStyle.inputStyle} /> <br /> <br />
        
        <label> Movie Trailer Url </label>  <br /> 
        <input type="text" value={newMovie.trailer} onChange={handleChange} name="trailer" placeholder="Enter movie trailer url" style={formStyle.inputStyle} /> <br /> <br />

        <input type="submit" style={formStyle.submitStyle}/>
        
    </Form>
</>
)
}

export default AddMovie
