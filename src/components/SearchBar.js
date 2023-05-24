import React from 'react';
import TrackList from './TrackList'


const SearchBar = ({testProp}) => {
    return (
        <div className="SearchBar">
            <input placeholder="Enter A Song, Album, or Artist" />
            <button className="SearchButton">SEARCH</button>
        </div>
    )
}

export default SearchBar;
