import { apiSlice } from "../apiSlice";

export const resourceApi = apiSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    //create live
    createResource: builder.mutation({
      query: (data: any) => ({
        url: "/api/v1/resources",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["resources"],
    }),
    // get all
    getResourceAll: builder.query({
      query: (arg: any) => ({
        url: `/api/v1/resources?page=${arg?.page}&limit=${arg?.limit}`,
        method: "GET",
      }),
      providesTags: ["resources"],
    }),

    // delete
    deleteResource: builder.mutation({
      query: ({ id }: { id: any }) => ({
        url: `/api/v1/resources/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["resources"],
    }),
    // update
    editResource: builder.mutation({
      query: (arg: any) => ({
        url: `/api/v1/resources/${arg?.id}`,
        method: "PATCH",
        body: arg?.data,
      }),
      invalidatesTags: ["resources"],
    }),
    // get one
    getResourceOne: builder.query({
      query: (arg: any) => ({
        url: `/api/v1/resources/${arg?.id}`,
        method: "GET",
      }),
      providesTags: ["resources"],
    }),
  }),
});

export const {
  useCreateResourceMutation,
  useDeleteResourceMutation,
  useGetResourceOneQuery,
  useEditResourceMutation,
  useGetResourceAllQuery,
} = resourceApi;
