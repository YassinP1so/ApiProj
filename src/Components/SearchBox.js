import React from 'react';

const SearchBox = (props) => {
  return (
    <div className='col col-sm-4'> 
        <input className='form-control' value={props.value} onChange={(e)=>props.setSearchValue(e.target.value)} placeholder='Type to search...' style={{width :"25%" , marginLeft :"850px"}}/>
    </div>
  );
}

export default SearchBox;
