import React from 'react';

function SearchBar() {
    return (
        <div className='SearchBar'>
            <input type='text' placeholder='Enter a song'/>
            <button>SEARCH</button> 
        </div>
    )
}

export default SearchBar;