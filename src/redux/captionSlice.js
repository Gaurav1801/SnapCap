import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  videoUrl: "",
  captions: [],
};

const captionSlice = createSlice({
  name: "captions",
  initialState,
  reducers: {
    setVideoUrl: (state, action) => {
      state.videoUrl = action.payload;
    },
    addCaption: (state, action) => {
      state.captions.push(action.payload);
    },
  },
});

export const { setVideoUrl, addCaption } = captionSlice.actions;
export default captionSlice.reducer;
