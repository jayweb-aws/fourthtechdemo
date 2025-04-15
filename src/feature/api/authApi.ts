import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    // REGISTRATION
    register: builder.mutation({
      query: (body: {
        title: string;
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        state: string;
        country: string;
        currentJob: string;
        studentType: string;
        highestStudy: string;
        knowFrom: string;
      }) => ({
        url: "/api/v1/auth/register",
        method: "POST",
        body: body,
      }),
    }),
    // LOGIN
    login: builder.mutation({
      query: (body: { email: string; password: string }) => ({
        url: "/api/v1/auth/login",
        method: "POST",
        body: body,
        credentials: "include",
      }),
    }),
    // GET USER
    getUser: builder.query({
      query: () => ({ url: "/api/v1/users/me" }),
    }),
    // LOG OUT
    logout: builder.mutation({
      query: () => ({
        url: "/api/v1/auth/logout",
        method: "POST",
        credentials: "include",
      }),
    }),
    // FORGET PASSWORD REQUEST
    forgetPasswordRequest: builder.mutation({
      query: (body: { email: string }) => ({
        url: "/api/v1/auth/forgotPass",
        method: "POST",
        body: body,
      }),
    }),

    // RESET PASSWORD REQUEST
    resetPassword: builder.mutation({
      query: (body: { password: string; token: string }) => ({
        url: `/api/v1/auth/resetPassword/${body.token}`,
        method: "PATCH",
        body: { password: body.password },
      }),
    }),
  }),
});

export default authApi;

export const {
  useRegisterMutation,
  useLoginMutation,
  useGetUserQuery,
  useLogoutMutation,
  useForgetPasswordRequestMutation,
  useResetPasswordMutation,
} = authApi;
