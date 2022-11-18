import "./singlecard.scss";
import { Link } from "react-router-dom";

const SingleCard = ({ imageLink, authorName, title, postSnippet,linkTo }) => {
  return (
    <div className="singlePost">
      <div className="imageContainer">
        <img src={imageLink} alt="heroPostImage" />
      </div>
      <div className="textContainer">
        <div className="authorName">
          <small>{authorName}</small>
        </div>
        <div className="title">
          <Link to={`posts/${linkTo}`}><h3>{title}</h3></Link>
        </div>
        <div className="post-snippet">{postSnippet}</div>
      </div>
    </div>
  );
};

export default SingleCard;
