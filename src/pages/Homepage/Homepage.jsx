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
  const [remainingPosts,setRemainingPosts]=useState()

  const { data, isPending, error } = useFetch(
    `${process.env.REACT_APP_DEVELOPMENT_API}/posts`
  );
  const setDifferentPosts = useCallback(() => {
    if(data){
      setHeroPost(data[0]);
      setTwoPosts(getPostsFromIndex(data,1,2))
      setRemainingPosts(getPostsFromIndex(data, 3,5))
    } 

  }, [data]);

  useEffect(() => {
    setDifferentPosts();
  }, [setDifferentPosts]);

  heroPost && console.log("Remaining posts", remainingPosts);
  return (
    <div className="homepage">
      {isPending && <Spinner animation="grow" />}
      {error && <div>{error} </div>}
      {/* The main post is the latest post */}
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore expedita aspernatur tempore officia ratione maxime culpa laboriosam vel. Culpa incidunt, eos possimus doloremque at veniam excepturi numquam consequuntur sed?,{`.....`}
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
              postSnippet="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere nihil cum itaque quibusdam et unde ullam eveniet explicabo, possimus veritatis eligendi optio similique modi nesciunt."
              linkTo={post._id}
              />
             
            )
          })}
          

        </div>
        <div className="remainingPosts">
          {remainingPosts && remainingPosts.map((post)=>{
             return(
              <LeftImageRightText imageLink={post["postHeroImage"]} authorName={post["author"]}
              title={post["title"]}
              postSnippet={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere nihil cum itaque quibusdam et unde ullam eveniet explicabo, possimus veritatis eligendi optio similique modi nesciunt."}
              linkTo={post["_id"]}
              />
             )
            })}
        </div>
    
      </div>
    </div>
  );
};

export default Homepage;
