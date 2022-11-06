//Key is the object name
// value is the objects value

// {
//     "postData": [
//         {
//             "text": "This is the first paragraph hehe"
//         },
//         {
//             "img": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.seiu1000.org%2Fpost%2Fimage-dimensions&psig=AOvVaw31UU6eQeGRYWRaDkStJR3V&ust=1667060720926000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCMie2KKrg_sCFQAAAAAdAAAAABAE"
//         },
//         {
//             "img": "https://cdn.stocksnap.io/img-thumbs/960w/pink-flowers_XYIZLJI756.jpg"
//         }
//     ],
// }
const PostRender = ({key,value}) => {
  return (
    <div>
       <p>{Object.keys(key)=="text"}</p>
    </div>
  )
}

export default PostRender