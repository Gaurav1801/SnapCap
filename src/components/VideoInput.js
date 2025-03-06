import { useState } from "react";
import { useDispatch } from "react-redux";
import { setVideoUrl } from "../redux/captionSlice";
import { FaVideo } from "react-icons/fa";

const VideoInput = () => {
  const [url, setUrl] = useState("");
  const dispatch = useDispatch();

  const handleLoadVideo = () => {
    if (url.trim()) dispatch(setVideoUrl(url));
  };

  return (
    <div className="bg-gray-800 text-white p-6 rounded-xl shadow-lg flex flex-col items-center">
      <h2 className="text-xl font-semibold flex items-center gap-2">
        <FaVideo /> Enter Video URL
      </h2>
      <input
        type="text"
        placeholder="Paste video URL here..."
        className="mt-3 w-full p-3 text-black rounded-lg border border-gray-300"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button
        onClick={handleLoadVideo}
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
      >
        Load Video
      </button>
    </div>
  );
};

export default VideoInput;
