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
  heroPost && console.log(heroPost["title"]);
  console.log(data);
  return (
    <div className="homepage">
      {isPending && <Spinner animation="grow" />}
      {error && <div>{error} </div>}
      <div className="heroPostContainer">
        {/* <HomepageHeroHelper/> */}
        <TwoPostHorizontal />
        <LeftImageRightText
          imageLink={
            "https://www.nayapatrikadaily.com/uploads/news/images/PRAMILA-DEVKOTA2021-10-27-08-56-52.jpeg"
          }
          authorName={"Pramila Devkota"}
          title={"के वैदेशिक सहायता खराब हो ?"}
          postSnippet={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius conseqrepellendus saepe libero tenetur, non, beatae esse pariatur eos delectus error veritatis maxime aliquam nemo....."
          }
        />
        <LeftImageRightText
          imageLink={
            "https://images.unsplash.com/photo-1550642249-6e5605421172?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80"
          }
          authorName={"Pramila Devkota"}
          title={"के वैदेशिक सहायता खराब हो ?"}
          postSnippet={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius conseqrepellendus saepe libero tenetur, non, beatae esse pariatur eos delectus error veritatis maxime aliquam nemo....."
          }
        />
        <LeftImageRightText
          imageLink={
            "https://www.nayapatrikadaily.com/uploads/news/images/PRAMILA-DEVKOTA2021-10-27-08-56-52.jpeg"
          }
          authorName={"Pramila Devkota"}
          title={"के वैदेशिक सहायता खराब हो ?"}
          postSnippet={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius conseqrepellendus saepe libero tenetur, non, beatae esse pariatur eos delectus error veritatis maxime aliquam nemo....."
          }
        />
        <LeftImageRightText
          imageLink={
            "https://www.nayapatrikadaily.com/uploads/news/images/PRAMILA-DEVKOTA2021-10-27-08-56-52.jpeg"
          }
          authorName={"Pramila Devkota"}
          title={"के वैदेशिक सहायता खराब हो ?"}
          postSnippet={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius conseqrepellendus saepe libero tenetur, non, beatae esse pariatur eos delectus error veritatis maxime aliquam nemo....."
          }
        />
      </div>
    </div>
  );
};

export default Homepage;
