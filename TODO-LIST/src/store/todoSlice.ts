import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    {
      id: 1,
      name: "sagar",
      age: 21,
      gender: "male",
    },
    {
      id: 2,
      name: "kulkarni",
      age: 22,
      gender: "male",
    },
  ],
  isOpen: false,
  inputDetails: {},
  editingId: null,
};

export const todoList = createSlice({
  name: "todo-list",
  initialState,
  reducers: {
    addToList: (state, action) => {
      state.list.push(action.payload);
    },
    editFromList: (state, action) => {
      const editElement = state.list.find((item) => item.id == action.payload);
      if (editElement) {
        state.isOpen = true;
        state.editingId = action.payload;
        state.inputDetails = { ...editElement };
      }
    },
    deleteFromList: (state, action) => {
      window.confirm();
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
    handleFormOpen: (state) => {
      state.isOpen = !state.isOpen;
      state.editingId = null;
      state.inputDetails = {};
    },
    handleInput: (state, action) => {
      state.inputDetails = { ...state.inputDetails, ...action.payload };
      console.log(state.inputDetails);
    },
    handleSubmit: (state) => {
      if (!state.editingId) {
        // Adding new item
        state.list.push({
          id: Date.now(),
          ...state.inputDetails,
        });
      } else {
        const editIndex = state.list.findIndex(
          (item) => item.id == state.editingId
        );
        if (editIndex !== -1) {
          state.list[editIndex] = {
            ...state.list[editIndex],
            ...state.inputDetails,
          };
        }
      }

      state.inputDetails = {};
      state.isOpen = false;
      state.editingId = null;
    },
  },
});

export const {
  addToList,
  editFromList,
  deleteFromList,
  handleFormOpen,
  handleInput,
  handleSubmit,
} = todoList.actions;
export default todoList.reducer;
