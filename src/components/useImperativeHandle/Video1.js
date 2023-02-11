import video1 from "./video.mp4";
import { forwardRef, useImperativeHandle, useRef } from "react";
const Video1 = (props, ref) => {
  const videoRef = useRef();
  useImperativeHandle(ref, () => ({
    play() {
      videoRef.current.play();
    },
    pause() {
      videoRef.current.pause();
    },
  }));
  return (
    <div>
      <video src={video1} width={200} controls ref={videoRef}></video>
    </div>
  );
};

export default forwardRef(Video1);
