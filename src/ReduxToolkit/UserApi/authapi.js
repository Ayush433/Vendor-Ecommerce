import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authapi = createApi({
  reducerPath: "authapi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/user" }),
  endpoints: (builder) => ({
    userLogin: builder.mutation({
      query: (user) => ({
        url: "/login",
        body: user,
        method: "POST",
      }),
    }),
    userSignup: builder.mutation({
      query: (user) => ({
        url: "/signUp",
        body: user,
        method: "POST",
      }),
    }),
  }),
});
export const { useUserLoginMutation, useUserSignupMutation } = authapi;
