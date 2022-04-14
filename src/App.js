import React from 'react';
import { useState } from 'react';
import './styles/App.css';
import Searchbar from './Searchbar';
import ImageBrowser from './imagebrowser';
import SubredditHandler from './reddit/SubredditHandler';
import { useParams, useNavigate } from 'react-router-dom';

const handler = new SubredditHandler();

function App() {

  let params = useParams();
  let navigate = useNavigate();
  const [post, setPost] = useState({url:"",title:""});
  const [subreddit, setSubreddit] = useState(params.subreddit || "pics");
  const [getOptions, setGetOptions] = useState({type:"hot", time:"all"});

  function handleSubmit(value) {
    setSubreddit(value);
    navigate(`/${value}`);
  }

  function updatePost() {
    setPost(handler.post);
  }

  function handleSort(getOptions) {
    let val = getOptions.value;
    let [type, time] = val.split("-");
    setGetOptions({type:type, time:time});
  }

  
  return (
    <React.Fragment>
      <Searchbar submitFunction={handleSubmit} sortFunction={handleSort} post={post}/>
      <ImageBrowser handler={handler} subreddit={subreddit} getOptions={getOptions} postUpdateFunction={updatePost} />
    </React.Fragment>
  );
}

export default App;