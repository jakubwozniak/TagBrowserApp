import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import TagInterface from "../../Interfaces/tagInterface";

interface TagsState {
  tags: TagInterface[];
}

const initialState: TagsState = {
  tags: [],
};

const tagsSlice = createSlice({
  name: "tagsSlice",
  initialState,
  reducers: {
    addTag: (state, action) => {
      if (action.payload != null) state.tags.push(action.payload);
    },
    removeTag: (state, action: PayloadAction<TagInterface>) => {
      if (action.payload != null)
        state.tags = state.tags.filter((tag) => tag !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addTagAsync.pending, (state) => {
        console.log("addTagAsync.pending");
      })
      .addCase(
        addTagAsync.fulfilled,
        (state, action: PayloadAction<TagInterface>) => {
          state.tags.push(action.payload);
        }
      );
  },
});

export const addTagAsync = createAsyncThunk(
  "tagsSlice/addTagAsync",
  async (tag: TagInterface) => {
    await new Promise((resolve) => setTimeout(resolve, 10000));
    return tag;
  }
);

export const { addTag, removeTag } = tagsSlice.actions;

export default tagsSlice.reducer;
