import React from 'react';
import '../App.css';
import SongsList from './SongsList'
import SongDetails from './SongDetails'

function App() {
  return (
    <div className="App">
      <SongsList />
      <SongDetails />
    </div>
  );
}

export default App;
