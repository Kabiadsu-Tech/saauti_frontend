import "./leftImageRightText.scss";

const LeftImageRightText = ({ imageLink, authorName, title, postSnippet }) => {
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
          <h3>{title}</h3>
        </div>
        <div className="post-snippet">{postSnippet}</div>
      </div>
    </div>
    <hr className="line" />
  </div>
  );
};

export default LeftImageRightText;
