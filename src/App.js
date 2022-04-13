import React from 'react';
import { useState } from 'react';
import './styles/App.css';
import Searchbar from './Searchbar';
import ImageBrowser from './imagebrowser';
import SubredditHandler from './reddit/SubredditHandler';

function App() {

  const [subreddit, setSubreddit] = useState("pics");
  const [getOptions, setGetOptions] = useState({type:"hot", time:"all"});

  function handleSubmit(value) {
    setSubreddit(value);
  }

  function handleSort(getOptions) {
    let val = getOptions.value;
    let type = val.split("-")[0];
    let time = val.split("-")[1];
    setGetOptions({type:type, time:time});
  }

  return (
    <React.Fragment>
      <Searchbar submitFunction={handleSubmit} sortFunction={handleSort}/>
      <ImageBrowser subreddit={subreddit} getOptions={getOptions}/>
    </React.Fragment>
  );
}

export default App;