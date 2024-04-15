import React from 'react';
import Tracklist from './Tracklist';

function Playlist({ playlistTrack, PlaylistName }) {
    return (
        <div className='Playlist'>
            <input defaultValue={'New PLaylist'}/>
            <Tracklist userSearchResults={playlistTrack}/>
            <button className='Playlist-save'>SAVE TO SPOTIFY</button>
        </div>
    )
}

export default Playlist;