import { createSlice } from "@reduxjs/toolkit";

export const getDataSliceInfo = createSlice({
  name: "globalInfo",
  initialState: {
    name: "",
    DT: [],
    dataAvtorized: [],
    avtorizedStop: true,
  },

  reducers: {
    addDataUser(state, action) {
      console.log("this is action", action);
      state.dataAvtorized = action.payload;
    },
    changeStopAvtorized(state, action) {
      state.avtorizedStop = action.payload;
    },
  },
});

export default getDataSliceInfo.reducer;
export const { addDataUser, changeStopAvtorized } = getDataSliceInfo.actions;
