import React from 'react';
import Track from './Track';

const TrackList = ({tracks}) => {

    tracks = tracks.map((track) => {
        return <Track name={track.name} artist={track.artist} album={track.album} />
    })

    return (
        <div className="TrackList">
            <ul>{tracks}</ul>
        </div>
    );
}

export default TrackList;
