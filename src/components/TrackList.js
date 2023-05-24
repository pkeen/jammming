import React from 'react';

const TrackList = ({searchResults}) => {

    searchResults = searchResults.map((searchResult) => {
        return <li><p>{searchResult.name}, {searchResult.artist}, {searchResult.album}</p></li>
    })

    return (
        <div className="TrackList">
            <ul>{searchResults}</ul>
        </div>
    );
}

export default TrackList;
