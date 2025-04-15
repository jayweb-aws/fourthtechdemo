import { apiSlice } from "../apiSlice";

export const typesApi = apiSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    //create live
    createTypes: builder.mutation({
      query: (data: any) => ({
        url: "/api/v1/types",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["types"],
    }),
    // get all
    getTypesAll: builder.query({
      query: (arg: any) => ({
        url: `/api/v1/types?page=${arg?.page}&limit=${arg?.limit}`,
        method: "GET",
      }),
      providesTags: ["types"],
    }),

    // delete
    deleteTypes: builder.mutation({
      query: ({ id }: { id: any }) => ({
        url: `/api/v1/types/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["types"],
    }),
    // update
    editTypes: builder.mutation({
      query: (arg: any) => ({
        url: `/api/v1/types/${arg?.id}`,
        method: "PATCH",
        body: arg?.data,
      }),
      invalidatesTags: ["types"],
    }),
    // get one
    getTypesOne: builder.query({
      query: (arg: any) => ({
        url: `/api/v1/types/${arg?.id}`,
        method: "GET",
      }),
      providesTags: ["types"],
    }),
  }),
});

export const {
  useCreateTypesMutation,
  useDeleteTypesMutation,
  useGetTypesOneQuery,
  useGetTypesAllQuery,
  useEditTypesMutation,
} = typesApi;
