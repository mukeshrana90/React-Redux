import React from 'react';
import '../App.css';
import SongsList from './SongsList'
import SongDetails from './SongDetails'
import PostsList from './PostsList'

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="col">
          <SongsList />
          <SongDetails />
        </div>
        <div className="col">
          <PostsList />
        </div>
      </div>
    </div>
  );
}

export default App;
