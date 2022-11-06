import{useFetch} from "../../hooks/useFetch"
import {Link,useParams} from "react-router-dom"
const SinglePost = () => {
  const [singlePost] = useFetch(`${process.env.REACT_APP_DEVELOPMENT_API}/posts`);
  return (
    <div>
      <h2>All Posts </h2>
      {singlePost &&
        singlePost.map((data) => (
          <div>
            <p>{data.author}</p>
            <img src={data.postHeroImage} />
            {/* Need to find alternative for the dangerouslySetInnerHTML */}
            <div dangerouslySetInnerHTML={{__html:data.postData}} />
           <Link to={`${data._id}`}>Read More</Link>

          </div>
        ))}
    </div>
  )
}

export default SinglePost