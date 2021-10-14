import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  { id: "ads_asda123", username: "john", description: "hi i m john" },
];

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    create: (state, { payload }) => {
      payload.id = nanoid();
      state.push(payload);
    },
    edit: (state, { payload }) => {
      const index = state.findIndex((item) => item.id === payload.id);
      if (index) {
        state[index] = payload;
      } else {
        
      }
    },
    delete: (state, { payload }) => {
      const index = state.findIndex((item) => item.id === payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const {
  create: useCreateMutation,
  edit: useEditMutation,
  delete: useDeleteMutation,
} = userSlice.actions;

export const userSliceReducer = userSlice.reducer;
