import React, {useState} from 'react';

function SearchBar({ onSearch }) {

    const [term, setTerm] = useState('');

    const passTerm = () => {
        onSearch(term);
    }
    const handleTermChange = ({ target }) => {
        setTerm(target.value);
    }
    return (
        <div className='SearchBar'>
            <input type='text' placeholder='Enter a song' onChange={handleTermChange} />
            <button onClick={passTerm} >SEARCH</button> 
        </div>
    )
}

export default SearchBar;