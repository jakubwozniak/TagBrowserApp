import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import UserDataInterface from "../../Interfaces/userDataInterface";

interface UserDataState {
  userData: UserDataInterface;
}

const initialState: UserDataInterface = {
  tagApiAccessToken: "",
};

const userDataSlice = createSlice({
  name: "userDataSlice",
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      if (action.payload != null) state.tagApiAccessToken = action.payload;
    },
    removeAccessToken: (state) => {
      state.tagApiAccessToken = "";
    },
  },
});

export const { setAccessToken, removeAccessToken } = userDataSlice.actions;

export default userDataSlice.reducer;
