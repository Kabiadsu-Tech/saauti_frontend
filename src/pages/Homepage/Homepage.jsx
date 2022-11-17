import { useCallback } from "react";
import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import LeftImageRightText from "../../helpers/UI_Helpers/LeftImageRightText/LeftImageRightText";
import TwoPostHorizontal from "../../helpers/UI_Helpers/TwoPostHorizontal/TwoPostHorizontal";
import { useFetch } from "../../hooks/useFetch";
import "./homepage.scss";

const Homepage = () => {
  const [heroPost, setHeroPost] = useState();
  const { data, isPending, error } = useFetch(
    `${process.env.REACT_APP_DEVELOPMENT_API}/posts`
  );
  const setDifferentPosts = useCallback(() => {
    data && setHeroPost(data[0]);
  }, [data]);

  useEffect(() => {
    setDifferentPosts();
  }, [setDifferentPosts]);


  heroPost && console.log("Bole toh hero", heroPost);
  return (
    <div className="homepage">
      {isPending && <Spinner animation="grow" />}
      {error && <div>{error} </div>}
      {/* The main post is the lates post */}
      {heroPost && (
        <div className="mainPost">
          <div className="imageContainer">
            <img src={heroPost["postHeroImage"]} alt="" />
          </div>
          <p className="authorName">{heroPost["author"]}</p>
          <div className="title">
            <h1>{heroPost["title"]}</h1>
          </div>
          <div dangerouslySetInnerHTML={{ __html: heroPost["postData"] }} />
        </div>
      )}
    </div>
  );
}




export default Homepage;
