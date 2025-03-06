import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCaption } from "../redux/captionSlice";
import { FaPlus } from "react-icons/fa";

const CaptionEditor = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleAddCaption = () => {
    if (!text || !startTime || !endTime) return;
    dispatch(addCaption({ text, startTime: parseFloat(startTime), endTime: parseFloat(endTime) }));
    setText("");
    setStartTime("");
    setEndTime("");
  };

  return (
    <div className="bg-gray-800 text-white p-6 rounded-xl shadow-lg flex flex-col items-center">
      <h2 className="text-xl font-semibold flex items-center gap-2">
        📝 Add Captions
      </h2>
      <input
        type="text"
        placeholder="Enter Caption"
        className="mt-3 w-full p-3 text-black rounded-lg border border-gray-300"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="flex gap-2 mt-3">
        <input
          type="number"
          placeholder="Start Time (s)"
          className="w-1/2 p-2 text-black rounded-lg border border-gray-300"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />
        <input
          type="number"
          placeholder="End Time (s)"
          className="w-1/2 p-2 text-black rounded-lg border border-gray-300"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
        />
      </div>
      <button
        onClick={handleAddCaption}
        className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg flex items-center gap-2"
      >
        <FaPlus /> Add Caption
      </button>
    </div>
  );
};

export default CaptionEditor;
