import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authapi = createApi({
  reducerPath: "authapi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
  endpoints: (builder) => ({
    userLogin: builder.mutation({
      query: (user) => ({
        url: "/api/",
        body: user,
        method: "POST",
      }),
    }),
    userSignup: builder.mutation({
      query: (user) => ({
        url: "/api/signup",
        body: user,
        method: "POST",
      }),
    }),
  }),
});
export const { useUserLoginMutation, useUserSignupMutation } = authapi;
