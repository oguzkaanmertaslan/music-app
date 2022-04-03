import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  artist: [],
};

const artistSlice = createSlice({
  name: "artist",
  initialState,
  reducers: {
    setArtist: (state, action) => {
      state.artist = action.payload;
    },
  },
});

export const { setArtist } = artistSlice.actions;
export const selectArtist = (state) => state.artist;
export default artistSlice.reducer;
