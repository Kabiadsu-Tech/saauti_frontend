import "./twoPostHorizontal.scss";
import SingleCard from "../SingleCard/SingleCard";
const TwoPostHorizontal = ({ imageLink, authorName, title, postSnippet }) => {
  return (
 <div>
     <div className="twoHorizontalPostContainer">
      <SingleCard
        imageLink={
          "https://www.nayapatrikadaily.com/uploads/news/images/PRAMILA-DEVKOTA2021-10-27-08-56-52.jpeg"
        }
        authorName={"Pramila Devkota"}
        title={"के वैदेशिक सहायता खराब हो ?"}
        postSnippet={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius conseqrepellendus saepe libero tenetur, non, beatae esse pariatur eos delectus error veritatis maxime aliquam nemo....."}
      />
         <SingleCard
        imageLink={
          "https://www.nayapatrikadaily.com/uploads/news/images/PRAMILA-DEVKOTA2021-10-27-08-56-52.jpeg"
        }
        authorName={"Pramila Devkota"}
        title={"के वैदेशिक सहायता खराब हो ?"}
        postSnippet={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius conseqrepellendus saepe libero tenetur, non, beatae esse pariatur eos delectus error veritatis maxime aliquam nemo....."}
      />
    </div>
    <hr className="line" />
 </div>
  
  );
};

export default TwoPostHorizontal;
