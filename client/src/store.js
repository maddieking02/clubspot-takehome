import { configureStore } from "@reduxjs/toolkit";
import calendar from "./auth.js";

const store = configureStore({
  reducer: {
    calendar,
  },
});

export default store;