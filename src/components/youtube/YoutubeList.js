import React from "react";
import { YoutubeData } from "../../data";
import YoutubeItem from "./YoutubeItem";

const YoutubeList = (props) => {
  return (
    <div
      className=""
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
      }}
    >
      {YoutubeData.map((item, index) => (
        <YoutubeItem
          key={item.id}
          title={item.title || "I Love You"}
          author={item.author || "Quang Hai"}
          image={item.image || item.image}
          avatar={item.avatar}
        >
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            officia, molestiae laborum laboriosam a facilis reprehenderit eum in
            ipsum pariatur praesentium dicta dignissimos voluptates enim porro
            optio consectetur? Aut, doloribus?
          </h2>
        </YoutubeItem>
      ))}
    </div>
  );
};

export default YoutubeList;
