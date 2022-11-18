import "./twoPostHorizontal.scss";
import SingleCard from "../SingleCard/SingleCard";
const TwoPostHorizontal = ({ imageLink, authorName, title, postSnippet,linkTo }) => {
  return (
 <div>
     <div className="twoHorizontalPostContainer">
      <SingleCard
        imageLink={imageLink}      
        authorName={authorName}
        title={title}
        postSnippet={postSnippet}
        linkTo={linkTo}
        />
         <SingleCard
        imageLink={imageLink}
        authorName={authorName}
        title={title}
        postSnippet={postSnippet}
        linkTo={linkTo}
        />
    </div>
    <hr className="line" />
 </div>
  
  );
};

export default TwoPostHorizontal;
