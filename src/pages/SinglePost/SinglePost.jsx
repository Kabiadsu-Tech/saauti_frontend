import { useState,useEffect } from "react";
import {Link,useParams} from "react-router-dom"
const SinglePost = () => {
  const [singlePost,setSinglePost]= useState()
  const {id}=useParams()
  useEffect(() => {
    document.title = "Hello";
    fetch(`https://saauti-dev.onrender.com/posts/${id}`)
      .then((response) =>{ response.json()})
      .then((data) => setSinglePost(data));
  }, []);
  console.log("Hi",id)
  return (
    <div>SinglePost page for id {id}
      {singlePost && <p>The post is with me</p>}
    </div>
  )
}

export default SinglePost