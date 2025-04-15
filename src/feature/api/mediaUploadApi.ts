import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const mediaUploadApi = createApi({
    reducerPath: 'mediaUploadApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
        credentials: "include"
    }),
    endpoints: (builder) => ({
        // SINGLE PHOTO UPLOAD
        singlePhotoUpload: builder.mutation({
            query: (body: any) => ({
                url: "/api/v1/uploads/photo-single",
                method: "POST",
                body: body
            })
        }),
        // SINGLE File UPLOAD
        singleFileUpload: builder.mutation({
            query: (body: any) => ({
                url: "/api/v1/uploads/upload-any",
                method: "POST",
                body: body
            })
        }),
        // Single Video Upload
        singleVideoUpload: builder.mutation({
            query: (body: any) => ({
                url: "/api/v1/uploads/video-single",
                method: "POST",
                body: body
            })
        }),
         // csv file upload
         uploadCsv: builder.mutation({
            query: (body: any) => ({
                url: "/api/v1/uploads/upload-question-csv",
                method: "POST",
                body: body
            })
        })
    }),
})

export default mediaUploadApi;

export const {
    useSinglePhotoUploadMutation,
    useSingleFileUploadMutation,
    useSingleVideoUploadMutation,
    useUploadCsvMutation
} = mediaUploadApi;