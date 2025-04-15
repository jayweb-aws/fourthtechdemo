import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type playVideo = {
    localVideo: string,
}

type InitialState = {
    playVideo: playVideo,
    refresh: boolean
}

const initialState: InitialState = {
    playVideo: {
       localVideo: "",
    },
    refresh: false
}

const playVideoSlice = createSlice({
    name: "playVideo",
    initialState,
    reducers: {
        playVideo: (state, action: PayloadAction<playVideo>) => {
            state.playVideo = action.payload
            // state.user.id = action.payload.id
            // state.user.userName = action.payload.userName
            // state.user.email = action.payload.email
            // state.user.avatar = action.payload.avatar
            // state.user.status = action.payload.status
            // state.user.title = action.payload.title
            // state.user.firstName = action.payload.firstName
            // state.user.lastName = action.payload.lastName
            // state.user.gender = action.payload.gender
            // state.user.phone = action.payload.phone
            // state.user.state = action.payload.state
            // state.user.country = action.payload.country
            // state.user.currentJob = action.payload.currentJob
            // state.user.studentType = action.payload.studentType
            // state.user.highestStudy = action.payload.highestStudy
            // state.user.roles = action.payload.roles
            state.refresh = true
        },
    
    }
})

export default playVideoSlice.reducer;
export const { playVideo } = playVideoSlice.actions;