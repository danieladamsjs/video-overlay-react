import { useRef, useState } from "react";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";

function VideoPlayer() {
  const videoRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);

  const onTimeUpdateHandler = () => {
    const timestamp = videoRef.current.currentTime * 1000;
    setCurrentTime(timestamp);
  };

  const images = [
    { name: "image1", startTime: 3500, endTime: 5000, image: image1, occurance: 1 },
    { name: "image2", startTime: 6000, endTime: 8000, image: image2, occurance: 2 },
    { name: "image3", startTime: 7000, endTime: 8500, image: image3, occurance: 3 },
  ];

  return (
    <div>
      <video className="video-player" ref={videoRef} onTimeUpdate={onTimeUpdateHandler} controls autoPlay>
        <source src="./Big_Buck_Bunny_1080_10s_5MB.mp4" type="video/mp4" /> Sorry, your browser doesn't support embedded videos
      </video>
    </div>
  );
}

export default VideoPlayer;
