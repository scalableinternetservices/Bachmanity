import React from "react";

export default props => {
  var videoId = props.videoId;
  var videoUrl = "http://img.youtube.com/vi/".concat(videoId).concat("/0.jpg");

  const defaultStyle = {
    width: "480px",
    height: "270px",
    backgroundImage: "url(" + videoUrl + ")",
    backgroundPosition: "center",
    backgroundSize: "auto"
  };
  Object.assign(defaultStyle, props.style || {});
  return <div style={defaultStyle} />;
};
