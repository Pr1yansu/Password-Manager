import { api } from "@/store/api";
import type { operations } from "@/api";

export const accountsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllAccounts: builder.query<
      operations["getAllAccounts"]["responses"][200]["content"]["*/*"],
      void
    >({
      query: () => "/api/accounts",
      providesTags: ["Account"],
    }),

    createAccount: builder.mutation<
      operations["createAccount"]["responses"][200]["content"]["*/*"],
      operations["createAccount"]["requestBody"]["content"]["application/json"]
    >({
      query: (accountData) => ({
        url: "/api/accounts",
        method: "POST",
        body: accountData,
      }),
      invalidatesTags: ["Account"],
    }),
  }),
});

export const { useGetAllAccountsQuery, useCreateAccountMutation } = accountsApi;
