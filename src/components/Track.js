import React from 'react';

function Track({ track, key }) {

    const renderAction = (isRemoval) => {}

    return ( 
        <div className='Track'>
            <div>
                <h3>{track.name}</h3>
                <p>{track.artist} | {track.album}</p>
            </div>
        </div>
    )
}
export default Track;