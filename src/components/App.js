import React from 'react';
import MusicInfo from './musicInfo';

function App() {
  const trackDetails = {
    artistName: 'Toro Y Moi',
    albumName: 'Outer Peace',
    trackName: 'Ordinary Pleasure',
    albumImgUrl: 'https://i.scdn.co/image/bc37539ee4ad2d9bc3fe51d96cbf443f0d44aece',
    trackLink: 'https://open.spotify.com/track/31F0KxmTD4rz3o0tJht5RL'
  }

  return (
    <div>
      <MusicInfo trackDetails={trackDetails} />
    </div>
  );
}

export default App;
