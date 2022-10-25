import React, { useState } from "react";
import Axios from "axios";
import { TextareaAutosize,Card,Button } from "@mui/material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import TextFormatIcon from "@mui/icons-material/TextFormat";
import ImageIcon from "@mui/icons-material/Image";

// We don't want this to re render again
const pageLayout = [];
const Insert = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [showTextField, setShowTextField] = useState(false);
  const [showImageField, setShowImageField] = useState(false);

  const handleNewOptions = (e) => {
    // to hide the input field when plus button is pressed again
    showTextField && setShowTextField(false);
    showImageField && setShowImageField(false)
    setShowOptions(!showOptions);
  };
  const textFieldToggler = (e) => {
    setShowTextField(true);
    setShowImageField(false);
  };
  const imageFieldToggler = (e) => {
    setShowImageField(true);
    setShowTextField(false);
  };
  //   hw4n6ufg
  const textHandler = (e) => {
    setText(e.target.value);
  };

  //   image handler
  const imageHandler = (e) => {
    // As we only upload 1 image at a time
    setImage(e.target.files[0]);
  };
  const handleTextSubmit = (e) => {
    e.preventDefault();
    try {
      pageLayout.push({ paragraph: text });
      console.log("Page Layout", pageLayout);
    } catch {
      console.log("Could not append");
    }
  };

  //   Image Submit
  const handleImageSubmit = (e) => {
    e.preventDefault();
    try {
      pageLayout.push({ imageField: image });
      console.log("Page Layout", pageLayout);
    } catch {
      console.log("Could not append");
    }
  };

  return (
    <Card style={{marginTop:"50px"}} variant="outlined">
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
          <form onSubmit={handleTextSubmit} action="submit">
            <TextareaAutosize placeholder="Type Here" className="addNewText" fullWidth onChange={textHandler} id="fullWidth" label="Write" variant="outlined" />
            <br />
            <Button sx={{ ml: 4.5, mt:2, mb:1, width: '10%' }} className="addContentBtn" type="submit" variant="contained" color="success"> Add</Button> 
          </form>
        </div>
           {/* For Image */}
      <div className={showImageField ? "showOptions" : "hideOptions"}>
        <form onSubmit={handleImageSubmit} action="submit">
          <input type="file" onChange={imageHandler} />
          <Button sx={{ ml: 4.5, mt:2, mb:1, width: '10%' }} className="addContentBtn" type="submit" variant="contained" color="success"> Add</Button> 

        </form>
      </div>
      </div>

      {/* For Text */}

   
    </Card>
  );
};

export default Insert;
