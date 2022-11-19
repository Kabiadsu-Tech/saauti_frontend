import { Link } from "react-router-dom";
import "./leftImageRightText.scss";

const LeftImageRightText = ({ imageLink, authorName, title, postSnippet,linkTo }) => {
  return (
  <div>
      <div className="leftImageRightText">
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
    <hr className="line" />
  </div>
  );
};

export default LeftImageRightText;
