import React ,{useContext, useState, useSearchParams, useEffect} from 'react'
import { GlobalAppContext } from '../../contexts/GobalContext';
import { useHistory } from "react-router-dom";
import { useParams } from 'react-router-dom';

// yuo can find all params from here
const EditPost = () => {
const params = useParams()
console.log(params)
  let history = useHistory();

    const {posts, setPosts} = useContext(GlobalAppContext)
    // const { postBeingEdited } = useContext(GlobalAppContext)
    const [postBeingEdited, setPostBeingEdited] = useState(null)
    const [cap, setCap] = useState('')
    useEffect(()=>{
        let temp = posts?.find((post) => post.id === +(params.id))
        setPostBeingEdited(temp)
        setCap(temp?.caption)
    },[posts])
    
    console.log("post being edited", postBeingEdited)
    function save (){
        let postsCopy = [...posts]
        let postToBeUpdated = postsCopy.find((post) => post.id === postBeingEdited?.id)
        postToBeUpdated.caption = cap;
        setPosts(postsCopy)
        setCap("")
        history.push('/')
      }
  return (
    <div>
    <img style={{ width: "400px", height: "400px" }} src={postBeingEdited?.photoUrl} alt={"text"} />
    <p>{postBeingEdited?.caption}</p>
    
                        <input
                          type="text" 
                          value={cap}
                          onChange={(e) => setCap(e.target.value)}
                        />
            <button onClick={()=>save()}>save</button>
    </div>
  )
}

export default EditPost