import axios from "axios";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import {useFetch} from "../../hooks/useFetch";

const AllPost = () => {
  const {data} = useFetch(`${process.env.REACT_APP_DEVELOPMENT_API}/posts`);
  
  console.log(data);
  return (
    <div>
      <h2>All Posts </h2>
      {data &&
        data.map((data) => (
          <div>
            <p>{data.author}</p>
            <img src={data.postHeroImage} />
            {/* Need to find alternative for the dangerouslySetInnerHTML */}
            <div dangerouslySetInnerHTML={{__html:data.postData}} />
           <Link to={`${data._id}`}>Read More</Link>

          </div>
        ))}
    </div>
  );
};

export default AllPost;
