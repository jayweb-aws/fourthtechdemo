import { apiSlice } from "../apiSlice";

export const managementApi = apiSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    //create live
    createManagement: builder.mutation({
      query: (data: any) => ({
        url: "/api/v1/managements",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["managements"],
    }),
    // get all
    getManagementAll: builder.query({
      query: (arg: any) => ({
        url: `/api/v1/managements?page=${arg?.page}&limit=${arg?.limit}`,
        method: "GET",
      }),
      providesTags: ["managements"],
    }),

    // delete
    deleteManagement: builder.mutation({
      query: ({ id }: { id: any }) => ({
        url: `/api/v1/managements/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["managements"],
    }),
    // update
    editManagement: builder.mutation({
      query: (arg: any) => ({
        url: `/api/v1/managements/${arg?.id}`,
        method: "PATCH",
        body: arg?.data,
      }),
      invalidatesTags: ["managements"],
    }),
    // get one
    getManagementOne: builder.query({
      query: (arg: any) => ({
        url: `/api/v1/managements/${arg?.id}`,
        method: "GET",
      }),
      providesTags: ["managements"],
    }),
  }),
});

export const {
  useCreateManagementMutation,
  useGetManagementOneQuery,
  useDeleteManagementMutation,
  useEditManagementMutation,
  useGetManagementAllQuery,
} = managementApi;
