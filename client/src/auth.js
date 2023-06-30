import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentDate: new Date(),
  currentImage: "",
};

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    updateCurrentDate: (state, action) => {
      state.currentDate = action.payload;
    },
    updateCurrentImage: (state, action) => {
      state.currentImage = action.payload;
    }
  },
});

export const { updateCurrentDate, updateCurrentImage } = calendarSlice.actions;

export default calendarSlice.reducer;