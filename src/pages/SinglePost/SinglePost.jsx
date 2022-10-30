import React from 'react'

const SinglePost = () => {
    const [singlePost, setSinglePost] = useState();
    useEffect(() => {
    //   document.title = "Hello";
      fetch("/posts/")
        .then((response) => response.json())
        .then((data) => setAllPosts(data));
    }, []);
  return (
    <div>

    </div>
  )
}

export default SinglePost