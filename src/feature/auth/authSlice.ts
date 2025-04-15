import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type User = {
    id: string
    _id:string
    title: string
    firstName: string
    lastName: string
    gender: string
    email: string
    phone: string
    state: string
    country: string
    currentJob: string
    studentType: string
    status: string
    highestStudy: string
    avatar: string
    userName: string
    expertise: string
    houseOrFlat: string
    landMark: string
    streetAddress: string
    townOrCity: string
    stateOrCountry: string
    postalOrZip: string
    roles: ("admin" | "student" | "hr" | "instructor")[]
}

type InitialState = {
    user: User,
    refresh: boolean
}

const initialState: InitialState = {
    user: {
        id: "",
        _id:"",
        title: "",
        firstName: "",
        lastName: "",
        gender: "",
        email: "",
        phone: "",
        state: "",
        country: "",
        currentJob: "",
        studentType: "",
        status: "",
        highestStudy: "",
        avatar: "",
        roles: [],
        userName: "",
        expertise: "",
        houseOrFlat: "",
        landMark: "",
        streetAddress: "",
        townOrCity: "",
        stateOrCountry: "",
        postalOrZip: ""
    },
    refresh: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signin: (state, action: PayloadAction<User>) => {
            state.user = action.payload
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
        logout: (state) => {
            state.user.id = ""
            state.user._id = ""
            state.user.title = ""
            state.user.firstName = ""
            state.user.lastName = ""
            state.user.gender = ""
            state.user.email = ""
            state.user.phone = ""
            state.user.state = ""
            state.user.country = ""
            state.user.currentJob = ""
            state.user.studentType = ""
            state.user.status = ""
            state.user.highestStudy = ""
            state.user.avatar = ""
            state.user.roles = []
            state.user.userName = ""
            state.user.expertise = ""
            state.user.houseOrFlat = ""
            state.user.landMark = ""
            state.user.streetAddress = ""
            state.user.townOrCity = ""
            state.user.stateOrCountry = ""
            state.user.postalOrZip = ""
        },
        refresher: (state) => {
            state.refresh = true
        }
    }
})

export default authSlice.reducer;
export const { signin, logout, refresher } = authSlice.actions;