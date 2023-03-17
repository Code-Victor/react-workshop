import React from "react";
import "./app.css";

export function Tweet(props) {
  let { header, image_url, message } = props;
  return (
    <div className="tweet">
      <div>
        <img className="tweet-avatar" src={image_url} />
      </div>
      <div className="tweet-info">
        <h1>{header}</h1>
        <p>{message}</p>
      </div>
    </div>
  );
}
// DIY : Don't Repeat Yourself
