import React from 'react';
import Track from './Track';
import Playlist from './Playlist';

function Tracklist({ userSearchResults, isRemoval, onAdd, onRemove }) {
    return (
        <div className='Tracklist'>
            {userSearchResults.map(track => (
                <Track track={track} key={track.id} isRemoval={isRemoval} onAdd={onAdd} onRemove={onRemove} />
            ))}
        </div>
        )
}

export default Tracklist;