import React from 'react';
import './styles/App.css';
import Searchbar from './Searchbar';
import ImageBrowser from './imagebrowser';

function App() {
  return (
    <div>
      <Searchbar/>
      <ImageBrowser/>
    </div>
  );
}

export default App;