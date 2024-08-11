import { createSlice } from "@reduxjs/toolkit";

interface GlobalInfoState {
  name: string;
  DT: any[];
  dataAvtorized: any[];
  avtorizedStop: boolean;
}

const initialState: GlobalInfoState = {
  name: "",
  DT: [],
  dataAvtorized: [],
  avtorizedStop: true,
};


export const getDataSliceInfo = createSlice({
  name: "globalInfo",
  initialState,
  reducers: {
    addDataUser(state, action) {
      state.dataAvtorized = action.payload;
    },
    changeStopAvtorized(state, action) {
      state.avtorizedStop = action.payload;
    },
  },
});

export default getDataSliceInfo.reducer;
export const { addDataUser, changeStopAvtorized } = getDataSliceInfo.actions;
