import React, { useContext, useEffect, useState } from 'react'
import { GlobalAppContext } from '../../contexts/GobalContext'
import Post from '../post/Post'



export default function Feed() {
  const { posts } = useContext(GlobalAppContext);
  const [feedPosts, setFeedPosts] = useState([]);

  let postsInterval;

  useEffect(()=>{
    console.log('rerendered... posts!');
    if(posts) {
      let postsCopy = [...posts];
      let spliced = postsCopy.splice(0, 5);
      setFeedPosts(spliced.reverse());
    }
  },[posts]);

  useEffect(() => {
    

    console.log('rerendered...', feedPosts);
    if(feedPosts.length > 0) {
      refreshFeed();
    }
    // refreshFeed();
    return () => clearInterval(postsInterval);

  }, [feedPosts])

  const refreshFeed = () => {
    if(!postsInterval) {
      postsInterval = setInterval(() => {
        if(feedPosts.length === 10) {
          clearIntervalFeedPosts();
        }
        else if(feedPosts.length < 10) {
          let postsCopy = [...posts];
          let addition = postsCopy[feedPosts.length];
          console.log('addition...', addition);
          setFeedPosts([addition, ...feedPosts]);
        }
  
      }, 15000);
    } else {
      clearIntervalFeedPosts();
    }
  }
  const clearIntervalFeedPosts = () => {
    console.log('clear interval called...');
    clearInterval(postsInterval);
      postsInterval = null; 
  }

  return (
    <>
      <h3>{"Feed"}</h3>
      {
        feedPosts.map((post) => {
          return (<Post post={post} />)
        })
      }
    </>
  )
}