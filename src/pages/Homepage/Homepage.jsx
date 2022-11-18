import { useCallback } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getPostsFromIndex } from "../../helpers/utils/getPostsFromIndex";
import TwoPostHorizontal from "../../helpers/UI_Helpers/TwoPostHorizontal/TwoPostHorizontal";
import LeftImageRightText from "../../helpers/UI_Helpers/LeftImageRightText/LeftImageRightText";
import Spinner from "react-bootstrap/Spinner";
import { useFetch } from "../../hooks/useFetch";
import "./homepage.scss";
import SingleCard from "../../helpers/UI_Helpers/SingleCard/SingleCard";

const Homepage = () => {
  const [heroPost, setHeroPost] = useState();
  const [twoPosts,setTwoPosts]=useState([]);
  const [remainingPosts,setRemainingPosts]=useState([])

  const { data, isPending, error } = useFetch(
    `${process.env.REACT_APP_DEVELOPMENT_API}/posts`
  );
  const setDifferentPosts = useCallback(() => {
    if(data){
      setHeroPost(data[0]);
      setTwoPosts(getPostsFromIndex(data,1,2))
      setRemainingPosts(data, 3,data.length)
    } 

  }, [data]);

  useEffect(() => {
    setDifferentPosts();
  }, [setDifferentPosts]);

  heroPost && console.log("Bole toh hero", remainingPosts);
  return (
    <div className="homepage">
      {isPending && <Spinner animation="grow" />}
      {error && <div>{error} </div>}
      {/* The main post is the lates post */}
      {heroPost && (
        <div className="mainPost">
          <div className="imageContainer">
            <img src={heroPost["postHeroImage"]} alt="" />
            <div className="mainPostSnippet">
              <p className="authorName">{heroPost["author"]}</p>
              <div className="title">
                <Link to={`posts/${heroPost["_id"]}`}>
                  <h1>{heroPost["title"]}</h1>
                </Link>
              </div>
              <div className="snippet">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui,
                illum,{`.....`}
              </div>
            </div>
          </div>

          {/* <div dangerouslySetInnerHTML={{ __html: heroPost["postData"] }} /> */}
        </div>
      )}
      <div className="otherPosts">
        <div className="horizontalPosts">
          {twoPosts.map((post)=>{
            return(
              <SingleCard imageLink={post.postHeroImage} authorName={post.author}
              title={post.title}
              postSnippet="loremskdljasdk;lasjdasd jaksdaskdlasdjsak"
              linkTo={post._id}
              />
             
            )
          })}

        </div>
        <div className="remainingPosts">
          {remainingPosts.map((post)=>{
            // return(
            //   <LeftImageRightText imageLink={post.postHeroImage} authorName={post.author}
            //   title={post.title}
            //   postSnippet="loremskdljasdk;lasjdasd jaksdaskdlasdjsak"/>
            // )
          })}
        </div>
    
      </div>
    </div>
  );
};

export default Homepage;
