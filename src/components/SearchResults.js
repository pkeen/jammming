import React from 'react';
import TrackList from './TrackList';

const SearchResults = ({searchResults}) => {
    return (
        <div className="SearchResults">
            <h2>Results</h2>
            <TrackList tracks={searchResults} />
        </div>      
    );
}

export default SearchResults;
