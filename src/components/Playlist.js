import React from 'react';
import Tracklist from './Tracklist';

function Playlist({ playlistTrack, PlaylistName, onRemove, onNameChange, onSave }) {
    const handleNameChange = ({ target }) => {
        onNameChange(target.value);
    }
    return (
        <div className='Playlist'>
            <input defaultValue={'New Playlist'} onChange={handleNameChange} />
            <Tracklist userSearchResults={playlistTrack} onRemove={onRemove} isRemoval={true} />
            <button className='Playlist-save' onClick={onSave} >SAVE TO SPOTIFY</button>
        </div>
    )
}

export default Playlist;