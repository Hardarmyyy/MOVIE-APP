import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavScrollExample from './UI/Navigation/Navigation'
import Moviedetails from './Pages/MovieDetails/Moviedetails'
import Home from './Pages/Home/Home'
import { useContext } from 'react'
import { myMovieContext } from './Utilities/MovieContext'
import NotFound from './Pages/NotFound/NotFound'

function App() {

const {handlesearchMovie} = useContext(myMovieContext)

return (

  <>

    <NavScrollExample handlesearchMovie = {handlesearchMovie} ></NavScrollExample>

    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/details/:id' element={<Moviedetails></Moviedetails>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes>

  </>

)
}

export default App
