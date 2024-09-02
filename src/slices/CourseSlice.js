import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    courses: []
}
const CourseSlice = createSlice({
    name: "course",
    initialState: initialState,
    reducers: {
        setCourses: (state, action) => {
            state.courses = action.payload
        }
    }
})

export const { setCourses } = CourseSlice.actions;

export default CourseSlice.reducer;