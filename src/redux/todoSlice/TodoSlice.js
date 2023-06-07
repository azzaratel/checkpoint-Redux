import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todolist: [
    {
      id: Math.random(),
      title: "todo Item 1",
      description: "description todo item 1",
      isDone: false,
    },
    {
      id: Math.random(),
      title: "todo Item 2",
      description: "description todo item 2",
      isDone: false,
    },
    {
      id: Math.random(),
      title: "todo Item 3",
      description: "description todo item 3",
      isDone: true,
    },
  ],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addtask: (state, action) => {
      state.todolist.push(action.payload);
    },
    deletetask: (state, action) => {
      state.todolist = state.todolist.filter((el) => el.id !== action.payload.id);
    },
    donetask: (state, action) => {
      let index = state.todolist.findIndex((el) => el.id === action.payload.id);
      state.todolist[index] = {
        ...state.todolist[index],
        isDone: !state.todolist[index].isDone,
      };
    },
    edittask: (state, action) => {
      let index = state.todolist.findIndex((el) => el.id === action.payload.id);
      state.todolist[index] = {
        ...state.todolist[index],
        title: action.payload.edited.title,
        description: action.payload.edited.description,
      };
    },
  },
});

export const { addtask, deletetask, donetask, edittask } = todoSlice.actions;

export default todoSlice.reducer;
