import axios from "axios";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import PostRender from "../../helpers/PostRenderHelper/PostRender";

const AllPost = () => {
  const [allPosts, setAllPosts] = useState();
  useEffect(() => {
    document.title = "Hello";
    fetch("https://saauti-dev.onrender.com/posts")
      .then((response) => response.json())
      .then((data) => setAllPosts(data));
  }, []);
  console.log(allPosts);
  return (
    <div>
      <h2>All Posts </h2>
      {allPosts &&
        allPosts.map((data) => (
          <div>
            <p>{data.author}</p>
            {data.postData.map((data)=>(
              Object.keys(data)=="text"?<p>
                {data.text}
              </p>:Object.keys(data)=="img"?<img src={data.img}/>:""
            ))}
           <Link to={`${data._id}`}>Read More</Link>

          </div>
        ))}
    </div>
  );
};

export default AllPost;
