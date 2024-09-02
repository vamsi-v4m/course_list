import { configureStore } from "@reduxjs/toolkit";
import CourseSlice from "./slices/CourseSlice";
import { coursesQuery } from "./services/courses.query";
import authSlice from "./slices/authSlice";

export const myStore = configureStore({
    reducer: {
        // Add the generated reducer as a specific top-level slice
        [coursesQuery.reducerPath]: coursesQuery.reducer,
        auth:authSlice,
        course: CourseSlice,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(coursesQuery.middleware)
})