import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Course = {
    id: string,
    title:string
}
type CourseEdit = {
    title:any,
    shortDescription: string,
    category: string,
    language: string,
    durationInMinutes: number,
    price: number,
    level: string,
    featured: boolean,
    numberOfLectures: number,
    discountPrice: number,
    isDiscount: boolean,
    description: string,
    courseImage:string,
    videoUrl:string,
    messageToReviewer:string,
    tags:string[]
}

type InitialState = {
    course: Course,
    refresh: boolean,
    courseEdit:CourseEdit
}

const initialState: InitialState = {
    course: {
        id: "",
        title:""
    },
    courseEdit:{
        title:"",
        shortDescription: "",
        category: "",
        language: "",
        durationInMinutes: 0,
        price: 0,
        level: "",
        featured: false,
        numberOfLectures: 0,
        discountPrice: 0,
        isDiscount: false,
        description: "",
        courseImage:"",
        videoUrl:"",
        messageToReviewer:"",
        tags:[]
    },
    refresh: false
}

const CourseSlice = createSlice({
    name: "course",
    initialState,
    reducers: {
        Course: (state, action: PayloadAction<Course>) => {
            state.course = action.payload
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
        SuccessCreate:(state) => {
            state.course.id = "",
            state.course.title =""
        },
        EditCourse:(state,action:PayloadAction<CourseEdit>) => {
            state.courseEdit = action.payload
            state.refresh = true
        },
        DelEditCourse:(state) => {
            state.courseEdit.title = "",
            state.courseEdit.shortDescription = "",
            state.courseEdit.category = "",
            state.courseEdit.language= "",
            state.courseEdit.durationInMinutes= 0,
            state.courseEdit.price= 0,
            state.courseEdit.level= "",
            state.courseEdit.featured= false,
            state.courseEdit.numberOfLectures= 0,
            state.courseEdit.discountPrice= 0,
            state.courseEdit.isDiscount= false,
            state.courseEdit.description= "",
            state.courseEdit.courseImage="",
            state.courseEdit.videoUrl="",
            state.courseEdit.messageToReviewer="",
            state.courseEdit.tags=[],
            state.refresh=false
        },
    
    }
})

export default CourseSlice.reducer;
export const { Course,SuccessCreate,EditCourse,DelEditCourse } = CourseSlice.actions;