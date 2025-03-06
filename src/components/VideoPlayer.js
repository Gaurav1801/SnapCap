import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  const { videoUrl, captions } = useSelector((state) => state.captions);
  const videoRef = useRef(null);
  const [currentCaption, setCurrentCaption] = useState("");

  const handleTimeUpdate = (time) => {
    console.log("time",time)
    const activeCaption = captions.find(
      (cap) => time >= cap.startTime && time <= cap.endTime
    );
    setCurrentCaption(activeCaption ? activeCaption.text : "");
  };

  return (
    <div className="p-6 bg-gray-900 text-white rounded-xl shadow-lg">
      {videoUrl ? (
        <div className="relative w-full max-w-2xl mx-auto">
          <ReactPlayer
            ref={videoRef}
            url={videoUrl}
            controls
            playing
            onProgress={({ playedSeconds }) => handleTimeUpdate(playedSeconds)}
            width="100%"
          />
          {currentCaption && (
            <div className="absolute bottom-12 w-full text-center bg-black bg-opacity-70 text-white p-3 rounded-lg text-lg font-semibold">
              {currentCaption}
            </div>
          )}
        </div>
      ) : (
        <p className="text-center text-gray-300">Enter a video URL to load the player.</p>
      )}
    </div>
  );
};

export default VideoPlayer;
