import { createContext } from "react";
import { useState, useEffect } from 'react'
import { Movies } from './MovieList'
import { nanoid } from "nanoid"

export const myMovieContext = createContext();


export const MovieContext = ({children}) => {

// import the movies data from Movielist component;

const [movie, setMovie] = useState(Movies)

// define a function for search by title;

const handlesearchMovie = (title) => {
    let filteredMovie = movie;
    if (title) {
        filteredMovie = movie.filter((movie) => movie.title.toLowerCase().includes(title.toLowerCase()));
        setMovie(filteredMovie)
    }
}

// define a function to add movie to the list;

const handleAddMovie = (title, description, posterUrl, ratings, trailer) => {
    setMovie((movie) => {return [...movie, {id: nanoid(), title: title, description: description, posterUrl: posterUrl, ratings: ratings, trailer: trailer}]});
}

const movieJSON = JSON.stringify(movie);

useEffect(() => {
        localStorage.setItem("movies", movieJSON)
}, [movie])



return (

    <myMovieContext.Provider value={{movie, handlesearchMovie, handleAddMovie}}>
        {children}
    </myMovieContext.Provider>
)
}
