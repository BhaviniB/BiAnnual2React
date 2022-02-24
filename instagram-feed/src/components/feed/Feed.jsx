import React, { useContext, useEffect, useState } from 'react'
import { GlobalAppContext } from '../../contexts/GobalContext'
import Post from '../post/Post'



export default function Feed() {
  const { posts } = useContext(GlobalAppContext)

  const[filteredPosts, setFilteredPosts] = useState([])
  useEffect(()=>{
    let postsCopy = [...posts]
  },[posts])

  return (
    <>
      <h3>{"Feed"}</h3>
      {
        posts.map((post) => {
          return (<Post post={post} />)
        })
      }
    </>
  )
}