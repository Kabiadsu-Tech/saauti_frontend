import React, { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";
import axios from "axios";
import { Card, Button, TextField } from "@mui/material";

const Insert = ({ placeholder }) => {
  // for jodit
  const editor = useRef(null);
  const [content, setContent] = useState("");
  // jodit part ends here
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [heroImage, setHeroImage] = useState("");
  const [heroImageCaption, setHeroImageCaption] = useState("");

  //   hw4n6ufg

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
  const authorHandler = (e) => {
    setAuthor(e.target.value);
  };
  // posts to api
  const postToAPIHandler = (e) => {
    e.preventDefault();
    axios
      .post("posts", {
        userId: "635d5908a3f908474195adff",
        postData: content,
        title: title,
        author: author,
        postHeroImage: heroImage,
        postHeroImageCaption: heroImageCaption,
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          alert("The post has been published");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Card style={{ marginTop: "50px" }} variant="outlined">
        <form id="postForm" action="submit" onSubmit={postToAPIHandler}>
          <TextField
            id="outlined-basic"
            value={title}
            required
            placeholder="Title of your blog"
            className="addNewText"
            fullwidth
            onChange={titleHandler}
          />{" "}
          <br />
          <TextField
            id="outlined-basic"
            value={heroImage}
            required
            placeholder="Hero Image URL"
            className="addNewText"
            fullwidth
            onChange={heroImageHandler}
          />
          <br />
          <TextField
            id="outlined-basic"
            value={heroImageCaption}
            required
            placeholder="Hero Image Caption"
            className="addNewText"
            fullwidth
            onChange={heroImageCaptionHandler}
          />
          <TextField
          sx={{ mt:"1rem" }}
            value={author}
            id="outlined-basic"
            required
            placeholder="Author Name"
            className="addNewText"
            fullwidth
            onChange={authorHandler}
          />
        </form>
        <div className="joddit-form-container">
          <JoditEditor
            ref={editor}
            value={content}
            // config={config}
            tabIndex={1} // tabIndex of textarea
            onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
            onChange={(newContent) => {}}
          />
        </div>
        <div style={{ width: "90%", margin: "auto" }}>
          <form style={{ width: "100%" }} id="addText" action="submit">
            <br />
          </form>
        </div>
      </Card>
      <Button
        form="postForm"
        sx={{ ml: "5vw", width: "90vw" }}
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
