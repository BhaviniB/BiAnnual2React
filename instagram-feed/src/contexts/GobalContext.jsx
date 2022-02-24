import React, { useState } from 'react'
import {  useEffect } from "react";
import data from '../mock-data/mock-data.json';

export const GlobalAppContext = React.createContext({})

export const GlobalContext = ({ children }) => {
    console.log(data.posts)
    const [posts, setPosts] = useState([])
    const [postBeingEdited, setPostBeingEdited] = useState({})

    useEffect(()=>{
        setPosts(data.posts)
    },[])

    const state = {
        posts: posts,
        setPosts: setPosts,
        postBeingEdited: postBeingEdited,
        setPostBeingEdited: setPostBeingEdited,
    }

    return <GlobalAppContext.Provider value={state}>{children}</GlobalAppContext.Provider>
}

export default GlobalContext
