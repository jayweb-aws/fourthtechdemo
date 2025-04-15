import { apiSlice } from "../apiSlice";

export const partnersApi = apiSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    //create live
    createPartners: builder.mutation({
      query: (data: any) => ({
        url: "/api/v1/partners",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["partners"],
    }),
    // get all
    getPartnersAll: builder.query({
      query: (arg: any) => ({
        url: `/api/v1/partners?page=${arg?.page}&limit=${arg?.limit}`,
        method: "GET",
      }),
      providesTags: ["partners"],
    }),

    // delete
    deletePartners: builder.mutation({
      query: ({ id }: { id: any }) => ({
        url: `/api/v1/partners/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["partners"],
    }),
    // update
    editPartners: builder.mutation({
      query: (arg: any) => ({
        url: `/api/v1/partners/${arg?.id}`,
        method: "PATCH",
        body: arg?.data,
      }),
      invalidatesTags: ["partners"],
    }),
    // get one
    getPartnersOne: builder.query({
      query: (arg: any) => ({
        url: `/api/v1/partners/${arg?.id}`,
        method: "GET",
      }),
      providesTags: ["partners"],
    }),
  }),
});

export const {
  useCreatePartnersMutation,
  useGetPartnersOneQuery,
  useDeletePartnersMutation,
  useEditPartnersMutation,
  useGetPartnersAllQuery,
} = partnersApi;
