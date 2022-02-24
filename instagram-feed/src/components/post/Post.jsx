import React, { useContext, useEffect, useState } from 'react'
import { GlobalAppContext } from '../../contexts/GobalContext';
import { useHistory } from "react-router-dom";


const Post = ({post}) => {
    const  {id, caption, photoUrl} = post;
  let history = useHistory();


    const { posts, setPosts, setPostBeingEdited } = useContext(GlobalAppContext)
    const onClick = (data) => {
            let postsCopy = [...posts]
            setPosts(postsCopy)
      }

    return (

        <div>
            <img style={{ width: "400px", height: "400px" }} src={photoUrl} alt={"text"} />
            <p>{caption}</p>
            <button onClick={()=>{setPostBeingEdited(posts.find((post) => post.id === id))
            history.push(`/edit/${id}`)
            }
            }>Edit</button>
          </div>
    )
}

export default Post