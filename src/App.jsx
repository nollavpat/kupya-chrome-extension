import React from 'react';
import { useChromeStorageSync } from 'use-chrome-storage';

const App = () => {
  const [value, error] = useChromeStorageSync('ytMusicCookie');

  return (
    <div style={{ minWidth: '200px' }}>
      <div>Value: {value}</div>
      <div>Error: {error}</div>
    </div>
  );
};

export default App;
