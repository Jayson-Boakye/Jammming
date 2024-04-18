import React from 'react';

function Track({ track, isRemoval, onAdd, onRemove }) {

    const renderAction = () => {
        if (isRemoval) {
            return <button onClick={passTrackToRemove}>-</button>
        } else {
            return <button onClick={passTrack}>+</button>
        }
    }

    const passTrack = () => {
        onAdd(track);
    }

    const passTrackToRemove = () => {
        onRemove(track);
    }

    return ( 
        <div className='Track'>
            <div>
                <h3>{track.name}</h3>
                <p>{track.artist} | {track.album}</p>
            </div>
            {renderAction()}
        </div>
    )
}
export default Track;