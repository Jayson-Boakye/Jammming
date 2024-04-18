import React from 'react';
import Tracklist from './Tracklist';

function SearchResults({ userSearchResults, onAdd }) {
    return (
        <div className='SearchResults'>
            <Tracklist userSearchResults={userSearchResults} isRemoval={false} onAdd={onAdd}/>
        </div>
    )
}

export default SearchResults;