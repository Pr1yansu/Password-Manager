import { api } from "@/store/api";
import type { operations } from "@/api";

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation<
      operations["registerUser"]["responses"][200]["content"]["*/*"],
      operations["registerUser"]["requestBody"]["content"]["application/json"]
    >({
      query: (userData) => ({
        url: "/api/auth/register",
        method: "POST",
        body: userData,
      }),
      invalidatesTags: ["User"],
    }),

    loginUser: builder.mutation<
      operations["loginUser"]["responses"][200]["content"]["*/*"],
      operations["loginUser"]["requestBody"]["content"]["application/json"]
    >({
      query: (loginData) => ({
        url: "/api/auth/login",
        method: "POST",
        body: loginData,
      }),
      invalidatesTags: ["User"],
    }),

    getCurrentUser: builder.query<
      operations["getCurrentUser"]["responses"][200]["content"]["*/*"],
      void
    >({
      query: () => "/api/auth/profile",
      providesTags: ["User"],
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useGetCurrentUserQuery,
} = authApi;
