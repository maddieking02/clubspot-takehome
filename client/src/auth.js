import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentDate: new Date(),
};

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    updateCurrentDate: (state, action) => {
      state.currentDate = action.payload;
    }
  },
});

export const { updateCurrentDate } = calendarSlice.actions;

export default calendarSlice.reducer;