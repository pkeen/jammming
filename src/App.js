import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'
import Playlist from './components/Playlist'

function App() {

  const searchResults = [{name: 'Two', album: 'Two', artist: 'Me'}, {name: 'In the Woods', album: 'In the Woods', artist: 'Changing Faces'}];

  return (
    <div>
      <h1>Ja<span class="highlight">mmm</span>ing</h1>
      <div class="App">
        <SearchBar />
        <div class="App-playlist">
          <SearchResults searchResults={searchResults}/>
          <Playlist />
        </div>
      </div>
    </div>
  );
}

export default App;
