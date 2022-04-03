import { configureStore } from "@reduxjs/toolkit";
import artistReducer from "../features/artistSlice";
export default configureStore({
  reducer: {
    artist: artistReducer,
  },
});
