import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentDate: new Date(),
  todaysDate: new Date(),
  currentImage: "",
  modalDisplay: false,
};

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    updateCurrentDate: (state, action) => {
      state.currentDate = action.payload;
    },
    updateTodaysDate: (state, action) => {
      state.todaysDate = action.payload;
    },
    updateCurrentImage: (state, action) => {
      state.currentImage = action.payload;
    },
    updateModalDisplay: (state, action) => {
      state.modalDisplay = action.payload;
    }
  },
});

export const { updateCurrentDate, updateTodaysDate, updateCurrentImage, updateModalDisplay } = calendarSlice.actions;

export default calendarSlice.reducer;