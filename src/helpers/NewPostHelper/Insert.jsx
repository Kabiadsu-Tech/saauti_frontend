import React, { useState } from "react";
import axios from "axios";
import { TextareaAutosize, Card, Button } from "@mui/material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import TextFormatIcon from "@mui/icons-material/TextFormat";
import ImageIcon from "@mui/icons-material/Image";

// We don't want this to re render again
const pageLayout = [];
const Insert = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [heroImage, setHeroImage] = useState("");
  const [heroImageCaption, setHeroImageCaption] = useState("");
  const [showTextField, setShowTextField] = useState(false);
  const [showImageField, setShowImageField] = useState(false);

  const handleNewOptions = (e) => {
    // to hide the input field when plus button is pressed again
    showTextField && setShowTextField(false);
    showImageField && setShowImageField(false);
    setShowOptions(!showOptions);
  };
  const textFieldToggler = (e) => {
    setShowTextField(!showTextField);
    setShowImageField(false);
  };
  const imageFieldToggler = (e) => {
    setShowImageField(!showImageField);
    setShowTextField(false);
  };
  //   hw4n6ufg
  const textHandler = (e) => {
    setText(e.target.value);
  };
  // title handler
  const titleHandler = (e) => {
    setTitle(e.target.value);
  };
  // hero image
  const heroImageHandler = (e) => {
    setHeroImage(e.target.value);
  };
  const heroImageCaptionHandler = (e) => {
    setHeroImageCaption(e.target.value);
  };
  //   image handler
  const imageHandler = (e) => {
    setImage(e.target.value);
  };
  const handleTextSubmit = (e) => {
    e.preventDefault();
    try {
      pageLayout.push({ paragraph: text });
      console.log("Page Layout", pageLayout);
      setText("");
    } catch {
      console.log("Could not append");
    }
  };

  //   Image Submit
  const handleImageSubmit = (e) => {
    e.preventDefault();
    try {
      pageLayout.push({ img: image });
      console.log("Page Layout", pageLayout);
      setImage("");
    } catch {
      console.log("Could not append");
    }
  };
  console.log(title, heroImage);
  // posts to api
  const postToAPIHandler = (e) => {
    console.log("I ran");
    e.preventDefault();
    axios
      .post("/posts", {
        userId: "635d5908a3f908474195adff",
        postData: pageLayout,
        title: title,
        author: "Pamir Gautam",
        postHeroImage: heroImage,
        postHeroImageCaption: heroImageCaption,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Card style={{ marginTop: "50px" }} variant="outlined">
        <form id="postForm" action="submit" onSubmit={postToAPIHandler}>
          <TextareaAutosize
            value={title}
            required
            placeholder="Title of your blog"
            className="addNewText"
            fullwidth
            onChange={titleHandler}
            id="fullWidth"
            label="Write"
            variant="outlined"
          />
          <TextareaAutosize
            value={heroImage}
            required
            placeholder="Hero Image URL"
            className="addNewText"
            fullwidth
            onChange={heroImageHandler}
            id="fullWidth"
            label="Write"
            variant="outlined"
          />
          <TextareaAutosize
            value={heroImageCaption}
            required
            placeholder="Hero Image Caption"
            className="addNewText"
            fullwidth
            onChange={heroImageCaptionHandler}
            id="fullWidth"
            label="Write"
            variant="outlined"
          />
        </form>

        {/* Dynamic Form for dynamic post data */}
        <div className="insert">
          <span onClick={handleNewOptions} style={{ cursor: "pointer" }}>
            <ControlPointIcon />
          </span>
          <span className={showOptions ? "showOptions" : "hideOptions"}>
            {" "}
            <TextFormatIcon onClick={textFieldToggler} />
          </span>
          <span className={showOptions ? "showOptions" : "hideOptions"}>
            <ImageIcon onClick={imageFieldToggler} />
          </span>
          {/* form for adding new texts */}
          <div className={showTextField ? "showOptions" : "hideOptions"}>
            <form id="addText" onSubmit={handleTextSubmit} action="submit">
              <TextareaAutosize
                value={text}
                placeholder="Type Here"
                className="addNewText"
                fullwidth
                onChange={textHandler}
                id="fullWidth"
                label="Write"
                variant="outlined"
              />
              <br />
              <Button
                sx={{ ml: 4.5, mt: 2, mb: 1, width: "10%" }}
                className="addContentBtn"
                type="submit"
                variant="contained"
                color="success"
                form="addText"
              >
                {" "}
                Add
              </Button>
            </form>
          </div>
          {/* For Image */}
          <div className={showImageField ? "showOptions" : "hideOptions"}>
            <form onSubmit={handleImageSubmit} action="submit">
              <input type="text" onChange={imageHandler} value={image} />
              <Button
                sx={{ ml: 4.5, mt: 2, mb: 1, width: "10%" }}
                className="addContentBtn"
                type="submit"
                variant="contained"
                color="success"
              >
                {" "}
                Add
              </Button>
            </form>
          </div>
        </div>
      </Card>
      <Button
        form="postForm"
        sx={{ ml: 4.5, mt: 2, mb: 1, width: "25%" }}
        className="addContentBtn"
        type="submit"
        variant="contained"
        color="success"
      >
        Publish Article
      </Button>
    </div>
  );
};

export default Insert;
