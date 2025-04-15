import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    // CHANGE PASSWORD
    changePassword: builder.mutation({
      query: (body: {
        currentPassword: string;
        password: string;
        passwordConfirm: string;
      }) => ({
        url: "/api/v1/auth/change-password",
        method: "PATCH",
        body: body,
        credentials: "include",
      }),
    }),
    // UPDATE USER DATA
    updateUser: builder.mutation({
      query: (body: {
        avatar: string;
        firstName: string;
        lastName: string;
        phone: string;
        email: string;
        expertise: string;
        userName: string;
        houseOrFlat: string;
        landMark: string;
        streetAddress: string;
        townOrCity: string;
        stateOrCountry: string;
        postalOrZip: string;
      }) => ({
        url: "/api/v1/users/updateMe",
        method: "PATCH",
        body: body,
        credentials: "include",
      }),
    }),
  }),
});

export default userApi;

export const { useChangePasswordMutation, useUpdateUserMutation } = userApi;
