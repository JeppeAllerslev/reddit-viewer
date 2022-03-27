import React from 'react';
import { useState } from 'react';
import './styles/App.css';
import Searchbar from './Searchbar';
import ImageBrowser from './imagebrowser';

function App() {

  const [subreddit, setSubreddit] = useState("pics");

  function handleSubmit(value) {
    console.log("Subreddit: ", value);
    setSubreddit(value);
  }

  return (
    <div>
      <Searchbar submitFunction={handleSubmit}/>
      <ImageBrowser subreddit={subreddit}/>
    </div>
  );
}

export default App;