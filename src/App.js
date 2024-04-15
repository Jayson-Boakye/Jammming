import React, { useState } from 'react';
import "./styling/App.css";
import SearchBar from "./components/SearchBar";
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';

function App() {
    const [searchResults, setSearchResults] = useState([
      {name: 'over', artist: 'playboicarti', album: 'whole lotta red', id: '001'},
      {name: 'out tha way', artist: 'yeat', album: 'lyfe', id: '002'},
      {name: 'off the grid', artist: 'kanye west', album: 'donda', id: '003'},
      {name: 'neon guts', artist: 'lil uzi vert', album: 'luv is rage 2', id: '004'},
      {name: 'no stylist', artist: 'destroy lonely', album: 'no stylist', id: '005'}
  ]);

    const [playlistName, setPlaylistName] = useState('Example Playlist Name');
    const [playlistTrack, setPlayListTrack] = useState([
      {
        name: 'Example Playlist Name 1', 
        artist: 'Example Playlist Artist 1', 
        album: 'Example Playlist Album 1',
        id: 1,
      },
      {
        name: 'Example Playlist Name 2', 
        artist: 'Example Playlist Artist 2', 
        album: 'Example Playlist Album 2',
        id: 2,
      },
      {
        name: 'Example Playlist Name 3', 
        artist: 'Example Playlist Artist 3', 
        album: 'Example Playlist Album 3',
        id: 3,
      }
    ]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>This is a heading</h1>
      </header>
      <SearchBar />
      <div className='divider'>
        <div>
        <SearchResults userSearchResults={searchResults}/>
        </div>
        <div>
        <Playlist playlistName={playlistName} playlistTrack={playlistTrack}/>
        </div>
      </div>
    </div>
  );
}

export default App;
