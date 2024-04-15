import React from 'react';
import Tracklist from './Tracklist';

function SearchResults({ userSearchResults }) {
    return (
        <div className='SearchResults'>
            <Tracklist userSearchResults={userSearchResults}/>
        </div>
    )
}

export default SearchResults;