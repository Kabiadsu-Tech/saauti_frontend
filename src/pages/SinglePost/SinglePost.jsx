import { useFetch } from "../../hooks/useFetch";
import "./singlePost.scss"
import { Link, useParams } from "react-router-dom";
import { useState,useEffect } from "react";
const SinglePost = () => {
  const [currentPost,setCurrentPost]= useState("")
  let {id}= useParams()
  useEffect(() => {
    fetch(`${process.env.REACT_APP_DEVELOPMENT_API}/posts/${id}`).then((response)=>response.json()).then(data=>setCurrentPost(data))
  }, [])
  
  currentPost && console.log("yoYo ",currentPost)
  return (
    // Author Name HEading PostedDate Picture NEws
    <div className="singlePostContainer">
      <div className="authorName">{currentPost["author"]}</div>
      <h1>{currentPost["title"]}</h1>
      {/* <small className="date">{currentPost["date"]}</small> */}
      <div className="postPicture"><img src={currentPost["postHeroImage"]} alt="" /></div>
      <div dangerouslySetInnerHTML={{__html:currentPost["postData"]}} />

    </div>
  );
};

export default SinglePost;
