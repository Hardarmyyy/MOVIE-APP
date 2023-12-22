import { useState, useEffect } from 'react';
import '../MovieForm/MovieForm.css'


const AddMovie = ({handleAddMovie}) => {

const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterUrl: "",
    ratings: "",
    trailer: ""
});

const [error, setError] = useState({})

const [invalid, setInvalid] = useState({})

// handle change;
const handleChange = (e) => {
    const {name, value} = e.target;

    setNewMovie((newMovie) => {return {...newMovie, [name]: (name === 'posterUrl' || name === 'trailer') ? value.replace(/\s/g, "") : value}});

    //check form validation
    if (name === 'title') {
        setError((error) => {return {...error, title: value ? '' : 'Kindly enter a movie title'}})
        setInvalid((invalid) => {return {...invalid, title: value ? false : true}})
    }
    if (name === 'description') {
        setError((error) => {return {...error, description: value ? '' : 'Kindly enter the movie description'}})
        setInvalid((invalid) => {return {...invalid, description: value ? false : true}})
    }
    if (name === 'posterUrl') {
        setError((error) => {return {...error, posterUrl: value ? '' : 'Kindly enter the url for movie poster'}})
        setInvalid((invalid) => {return {...invalid, posterUrl: value ? false : true}})
    }
    if (name === 'ratings') {
        setError((error) => {return {...error, ratings: value ? '' : 'Kindly enter the movie ratings'}})
        setInvalid((invalid) => {return {...invalid, ratings: value ? false : true}})
    }
    if (name === 'trailer') {
        setError((error) => {return {...error, trailer: value ? '' : 'Kindly enter the url for movie trailer'}})
        setInvalid((invalid) => {return {...invalid, trailer: value ? false : true}})
    }
}

// validate form input dynamically

const validateForm = () => {
    const newErrors = {};
    const newInvalid = {};
    
    for (const field in newMovie) {
        if (field === 'title' && newMovie[field].trim() === '') {
            newErrors[field] = 'Kindly enter a movie title';
            newInvalid[field] = true;
        }
        if (field === 'description' && newMovie[field].trim() === '') {
            newErrors[field] = 'Kindly enter the movie description';
            newInvalid[field] = true;
        }
        if (field === 'posterUrl' && newMovie[field].trim() === '') {
            newErrors[field] = 'Kindly enter the url for movie poster';
            newInvalid[field] = true;
        }
        if (field === 'ratings' && newMovie[field].trim() === '') {
            newErrors[field] = 'Kindly enter the movie ratings';
            newInvalid[field] = true;
        }
        if (field === 'trailer' && newMovie[field].trim() === '') {
            newErrors[field] = 'Kindly enter the url for movie trailer';
            newInvalid[field] = true;
        }
    }
    
    setError(newErrors)
    setInvalid(newInvalid)
};

const [formSubmitted, setFormSubmitted] = useState(false);

useEffect(() => {

    if (formSubmitted) {
        if (newMovie.title && newMovie.description && newMovie.posterUrl && newMovie.ratings && newMovie.trailer) {
                if (newMovie.ratings < 1 || newMovie.ratings > 10) {
                        setError((error) => {return {...error, ratings: 'Kindly enter a value between 1 and 10'}})
                return  setInvalid((invalid) => {return {...invalid, ratings: true}})
            }

            handleAddMovie(newMovie.title, newMovie.description, newMovie.posterUrl, newMovie.ratings, newMovie.trailer);
            return setNewMovie({
                    title: "",
                    description: "",
                    posterUrl: "",
                    ratings: "",
                    trailer: ""
                    })
        }
        
    }

    return () => {
        setFormSubmitted(false)
    }

}, [formSubmitted])


// define an onSubmit function for the form to add a new movie to the movieList;
const handleFormSubmit = (e) => {
    e.preventDefault();
    validateForm()
    setFormSubmitted(true);
}

return (

<>

    <section className='addMovieContainer'>

        <h3> Add a new movie </h3>

        <form onSubmit = {handleFormSubmit}>

            <label> Movie Title </label>  <br /> 
            <input type="text" className= {invalid.title ? 'invalid' : null} 
            value={newMovie.title} onChange={handleChange} name="title" placeholder="Enter movie title"/> <br /> <br />
            {error.title && <p className='empty title'> {error.title}  </p> }

            <label> Movie Description </label>  <br /> 
            <input type="text" className={invalid.description ? 'invalid' : null} 
            value={newMovie.description} onChange={handleChange} name="description" placeholder="Enter movie description"/> <br /> <br />
            {error.description && <p className='empty description'> {error.description} </p> }

            <label> Movie Poster Url </label>  <br /> 
            <input type="text" className={invalid.posterUrl ? 'invalid' : null} 
            value={newMovie.posterUrl} onChange={handleChange} name="posterUrl" placeholder="Enter movie poster url"/> <br /> <br />
            {error.posterUrl && <p className='empty poster'> {error.posterUrl} </p> }

            <label> Movie Ratings </label>  <br /> 
            <input type="number" className={invalid.ratings ? 'invalid' : null} 
            value={newMovie.ratings} onChange={handleChange} name="ratings" placeholder="Enter movie rating between 1 - 10" /> <br /> <br />
            {error.ratings && <p className='empty ratings'> {error.ratings} </p> }

            <label> Movie Trailer Url </label>  <br /> 
            <input type="text" className={invalid.trailer ? 'invalid' : null} 
            value={newMovie.trailer} onChange={handleChange} name="trailer" placeholder="Enter movie trailer url" /> <br /> <br />
            {error.trailer && <p className='empty trailer'> {error.trailer} </p> }

            <input type="submit" />
            
        </form>

    </section>
</>
)
}

export default AddMovie
