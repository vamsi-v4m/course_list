import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const coursesQuery = createApi({
    reducerPath: 'coursesApi',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/courses" }),
    endpoints: (builder) => ({
        getCourses: builder.query({
            query: (name) => `/${name}`
        })
    })
})

export const { useGetCoursesQuery }= coursesQuery;