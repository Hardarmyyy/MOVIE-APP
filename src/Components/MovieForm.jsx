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

const [title, setTitle] = useState();
const [description, setDescription] = useState();
const [posterUrl, setPosterUrl] = useState();
const [ratings, setRatings] = useState();

const handleTitleChange = (e) => {
    setTitle(e.target.value);
}

const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
}

const handlePosterChange = (e) => {
    setPosterUrl(e.target.value);
}

const handleSetRatings = (e) => {
    setRatings(e.target.value);
}

// define an onSubmit function for the form to add a new movie to the movieList;

const handleFormSubmit = (e) => {
    e.preventDefault();
    handleAddMovie(title, description, posterUrl, ratings);
    console.log(posterUrl);
    setTitle(' ');
    setDescription(' ');
    setPosterUrl(' ');
    setRatings(' ');
}

return (

<>

    <h3> Add a new movie </h3>

    <Form onSubmit = {handleFormSubmit}>

        <label> Movie Title </label>  <br /> 
        <input type="text" value={title} onChange={handleTitleChange} name="title" placeholder="Enter movie title" style={formStyle.inputStyle}/> <br /> <br />

        <label> Movie Description </label>  <br /> 
        <input type="text" value={description} onChange={handleDescriptionChange} on name="Description" placeholder="Enter movie description" style={formStyle.inputStyle}/> <br /> <br />

        <label> Movie Poster Url </label>  <br /> 
        <input type="text" value={posterUrl} onChange={handlePosterChange} name="posterUrl" placeholder="Enter movie poster url" style={formStyle.inputStyle}/> <br /> <br />

        <label> Movie Ratings </label>  <br /> 
        <input type="number" value={ratings} onChange={handleSetRatings} name="rating" placeholder="Enter movie rating between 1 - 10" min = "1" max = "10" style={formStyle.inputStyle} /> <br /> <br />
        
        <input type="submit" style={formStyle.submitStyle}/>
        
    </Form>
</>
)
}

export default AddMovie
