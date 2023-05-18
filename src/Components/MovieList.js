import React from 'react';

const MovieList = (props) => {
  
  return (
    
    <div style={{display :"flex" , gap :"20px" , borderRadius :"20px" }}>
        {props.movies.map((movie , index) =>(
            <div className='image-container '>
            <img src={movie.Poster} alt='movie'/>
            <div className='overlay '>
              
            </div>
            </div>
            ))}
    </div>
  );
}

export default MovieList;
