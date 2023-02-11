import React from "react";
import Video1 from "./Video1";
import { useRef } from "react";

const Imperative = () => {
  const videoRef = useRef();
  const handlePlay = () => {
    videoRef.current.play();
  };
  const handleStop = () => {
    videoRef.current.pause();
  };
  return (
    <div>
      <Video1 ref={videoRef}></Video1>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

export default Imperative;
