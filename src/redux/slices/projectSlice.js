import { createSlice } from "@reduxjs/toolkit";
import { projectsData } from "../../components/Projects";

const projectSlice = createSlice({
  name: "projectSlice",
  initialState: {
    projects: projectsData,
  },
  reducers: {
    setProjects: (state, action) => {
      state.projects = [...state.projects, ...action.payload];
    },
  },
});

export const { setProjects } = projectSlice.actions;
export default projectSlice.reducer;
