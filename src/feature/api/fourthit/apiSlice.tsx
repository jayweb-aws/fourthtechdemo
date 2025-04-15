import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "Fourthitapi",
  baseQuery: fetchBaseQuery({
    // baseUrl: process.env.REACT_APP_API_URL,
    // baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
    credentials: "include",
  }),
  tagTypes: ["resources", "types", "partners", "managements"],
  endpoints: (builder: any) => ({}),
});
