import { configureStore } from "@reduxjs/toolkit";
import quoteSliceReducer from "./slices/quoteSlice";

const store = configureStore({
  reducer: {
    quote: quoteSliceReducer,
  },
});

export default store;
