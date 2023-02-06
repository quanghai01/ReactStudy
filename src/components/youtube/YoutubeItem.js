import React from "react";

const YoutubeItem = (props) => {
  return (
    <div>
      {props.children}
      <img
        src={props.image}
        alt=""
        className="youtube-avatar"
        style={{ height: "250px" }}
      />
      <div
        className="youtube-footer"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <img
          src={props.avatar}
          alt=""
          className="avatar"
          style={{ width: "100px", borderRadius: "50%", height: "100px" }}
        />
        <div className="youtube-info">
          <h3 className="youtube-title">{props.title}</h3>
          <h4 className="youtube-autor">{props.author}</h4>
        </div>
      </div>
    </div>
  );
};

export default YoutubeItem;
