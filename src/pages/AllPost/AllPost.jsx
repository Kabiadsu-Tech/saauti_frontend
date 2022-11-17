import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import "./allPost.scss";

const AllPost = () => {
  const { data } = useFetch(`${process.env.REACT_APP_DEVELOPMENT_API}/posts`);

  return (
    <div className="allPostContainer">
      {data &&
        data.map((data) => (
          <div className="allPostCard">
            <img style={{ maxWidth: "100%" }} src={data.postHeroImage} />
            <h2 className="postTitle">{data.title}</h2>
            <b><i><p className="author">{data.author}</p></i></b>
            {/* Need to find alternative for the dangerouslySetInnerHTML */}
            {/* <div dangerouslySetInnerHTML={{__html:data.postData}} /> */}
            <Link className="readMore" to={`${data._id}`}>Read More</Link>
          </div>
        ))}
    </div>
  );
};

export default AllPost;
