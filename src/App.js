import VideoInput from "./components/VideoInput";
import CaptionEditor from "./components/CaptionEditor";
import VideoPlayer from "./components/VideoPlayer";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black p-6 md:p-10">
        <div className="w-full max-w-5xl bg-white/10 backdrop-blur-xl shadow-2xl rounded-2xl p-6 md:p-10 border border-white/20">
          {/* Title */}
          <h1 className="text-center text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg mb-6">
            🎬 SnapCap
          </h1>

          {/* Responsive Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <VideoInput />
            <CaptionEditor />
          </div>

          {/* Video Player Section */}
          <div className="mt-6 md:mt-8">
            <VideoPlayer />
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default App;
