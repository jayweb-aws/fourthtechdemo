import { configureStore } from "@reduxjs/toolkit";
import authApi from "../feature/api/authApi";
import dashboardApi from "../feature/api/dashboardApi";
import { apiSlice } from "../feature/api/fourthit/apiSlice";
import mediaUploadApi from "../feature/api/mediaUploadApi";
import userApi from "../feature/api/userApi";
import userReducer from "../feature/auth/authSlice";
import courseReducer from '../feature/course/courseSlice';
import moduleVideoPlay from '../feature/course/moduleVideoplay';

const store = configureStore({
    reducer: {
        auth: userReducer,
        course:courseReducer,
        playVideo:moduleVideoPlay,
        [apiSlice.reducerPath]: apiSlice.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [mediaUploadApi.reducerPath]: mediaUploadApi.reducer,
        [dashboardApi.reducerPath]: dashboardApi.reducer
    },
    middleware: (getDefaultMiddleware:any) => getDefaultMiddleware().concat(
        apiSlice.middleware,
        authApi.middleware,
        userApi.middleware,
        mediaUploadApi.middleware,
        dashboardApi.middleware,
    ),
    devTools: true
})

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch