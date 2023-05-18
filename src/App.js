
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './Components/MovieList';
import MovieListHeading from './Components/MovieListHeading';
import SearchBox from './Components/SearchBox';
import AddFavorites from './Components/AddFavorites';

function App() {
  const [movies , setMovies] = useState([]);
  const [searchValue , setSearchValue] = useState("")
  const getMovieRequest = async (searchValue) => {
  const url =`http://www.omdbapi.com/?s=${searchValue}&apikey=abcd6759` 

  const response = await fetch(url);
  const responseJson = await response.json();
  
  if(responseJson.Search) {
    setMovies(responseJson.Search);
  }
  

};

useEffect(() => {
  getMovieRequest(searchValue);
} , [searchValue])
  return (
    <div className='container-fluid '>
    <div className='row '>
        <MovieListHeading heading="Films" />
        <SearchBox searchValue ={searchValue} setSearchValue = {setSearchValue}/>
    </div>
    <div className='row'>
    <MovieList movies = {movies} FavouriteComponent = {AddFavorites}/>
    
    </div>
      
    </div>
  );
}

export default App;
