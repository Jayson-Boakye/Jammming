import React from 'react';
import Track from './Track';
import Playlist from './Playlist';

function Tracklist({ userSearchResults }) {
    return (
        <div className='Tracklist'>
            {userSearchResults.map(track => (
                <Track track={track} key={track.id}/>
            ))}
        </div>
        )
}

export default Tracklist;