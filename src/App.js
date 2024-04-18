import React, { useState } from 'react';
import "./styling/App.css";
import SearchBar from "./components/SearchBar";
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import { Spotify } from './Util/Spotify/Spotify';

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

    const addTrack = track => {
      const existingTrack = playlistTrack.find(t => t.id === track.id);
      const newTrack = playlistTrack.concat(track);
      if (existingTrack) {
        console.log(`Track already exists`);
      } else {
        setPlayListTrack(newTrack);
      }
    }

    const removeTrack = track => {
      const existingTrack = playlistTrack.filter(t => t.id !== track.id);
      setPlayListTrack(existingTrack);
    }

    const updatePlaylistName = name => {
      setPlaylistName(name);
    }

    const savePlaylist = () => {
      const trackURIs = playlistTrack.map(t => t.uri);
      Spotify.savePlaylist(playlistName, trackURIs).then(() => {
        updatePlaylistName("New Playlist");
        setPlayListTrack([]);
      });
    }

    const search = term => {
      Spotify.search(term).then((result) => setSearchResults(result));
      console.log(term);
    }

  return (
    <div className="App">
      <header className="App-header">
        <h1>This is a heading</h1>
      </header>
      <SearchBar onSearch={search}/>
      <div className='divider'>
        <div>
        <SearchResults userSearchResults={searchResults} 
        onAdd={addTrack} 
        />
        </div>

        <div>
        <Playlist playlistName={playlistName} 
        playlistTrack={playlistTrack}
        onRemove={removeTrack}
        onNameChange={updatePlaylistName}
        onSave={savePlaylist}
        />
        </div>

      </div>
    </div>
  );
}

export default App;
