import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const dashboardApi = createApi({
  reducerPath: "dashboardApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
    credentials: "include",
  }),
  tagTypes: [
    "users",
    "instructors",
    "courses",
    "categories",
    "assignment",
    "courseModule",
    "quiz",
    "enrollment",
    "faqs",
    "lesson",
    "msg",
    "msgUser",
    "grpUser",
    "review",
    "page",
    "announcement",
    "popularCourses",
    "mentoring",
    "optimization",
    "questions",
    "allfile",
    "liveclass",
    "complete",
  ],

  endpoints: (builder) => ({
    // GET single USERS
    getSingleUsers: builder.query({
      query: ({ id }: any) => ({ url: `/api/v1/users/${id}` }),
      providesTags: ["users"],
    }),
    // GET ALL USERS
    getAllUsers: builder.query({
      query: ({ limit, page, search }: any) => ({
        url: `/api/v1/users?page=${page}&limit=${limit}&search=${search}`,
      }),
      providesTags: ["users"],
    }),
    // DELETE A USER BY USER ID
    deleteUser: builder.mutation({
      query: (id: string) => ({
        url: `/api/v1/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["users", "instructors"],
    }),
    // UPDATE A USER BY ID
    updateUser: builder.mutation({
      query: (body: { id: string; user: {} }) => ({
        url: `/api/v1/users/${body.id}`,
        method: "PATCH",
        body: body.user,
      }),
      invalidatesTags: ["users", "instructors"],
    }),
    // ADD A USER
    addUser: builder.mutation({
      query: (body: {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        roles: string;
        password: string;
      }) => ({
        url: `/api/v1/users`,
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["users"],
    }),
    // GET ALL INSTRUCTORS
    getAllInstructors: builder.query({
      query: ({ page, limit, search = "" }) => ({
        url: `/api/v1/users?roles=instructor&page=${page}&limit=${limit}&search=${search}`,
      }),
      providesTags: ["instructors"],
    }),
    //get all course
    getAllCourse: builder.query({
      query: ({ page, limit }) => ({
        url: `/api/v1/courses?page=${page}&limit=${limit}`,
      }),
      providesTags: ["courses"],
    }),
    // DELETE A Course
    deleteCourse: builder.mutation({
      query: (id: string) => ({
        url: `/api/v1/courses/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["courses"],
    }),
    // ACCEPT A Course
    acceptCourse: builder.mutation({
      query: (id: string) => ({
        url: `/api/v1/courses/${id}`,
        method: "PATCH",
        body: { status: "active" },
      }),
      invalidatesTags: ["courses"],
    }),
    // update a course status
    updateCourseStatus: builder.mutation({
      query: ({ id, status }: { id: string; status: string }) => ({
        url: `/api/v1/courses/${id}`,
        method: "PATCH",
        body: { status },
      }),
      invalidatesTags: ["courses"],
    }),
    //Get all categories
    getCategories: builder.query({
      query: () => ({
        url: `/api/v1/categories`,
        method: "GET",
      }),
      providesTags: ["categories"],
    }),
    // DELETE A Course Categories
    deleteCourseCategories: builder.mutation({
      query: (id: string) => ({
        url: `/api/v1/categories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["categories"],
    }),
    //create Category
    createCategory: builder.mutation({
      query: (body: { name: string }) => ({
        url: "/api/v1/categories",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["categories"],
    }),
    // UPDATE A CATEGORY BY ID
    updateCategory: builder.mutation({
      query: (body: {
        id: string;
        data: {
          name: string;
          description: string;
        };
      }) => ({
        url: `/api/v1/categories/${body.id}`,
        method: "PATCH",
        body: body.data,
      }),
      invalidatesTags: ["categories"],
    }),
    // GET ALL STUDENTS
    getAllStudents: builder.query({
      query: ({ page, limit, search = "" }) => ({
        url: `/api/v1/users?roles=student&page=${page}&limit=${limit}&search=${search}`,
      }),
      providesTags: ["users"],
    }),
    //create a quiz
    createQuiz: builder.mutation({
      query: (body: {
        title: string;
        category: any;
        type: string;
        attempts: number;
        scorePerQuestion: number;
        questionPerPage: number;
        isSort: boolean;
        isRequired: boolean;
        startDate: string;
        startTime: string;
        timeAllowed: string;
      }) => ({
        url: "/api/v1/quiz",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["quiz"],
    }),
    // GET ALL ADMISSION REQUEST
    getAllAdmissionRequest: builder.query({
      query: ({ limit, page, search = "" }: any) => ({
        url: `/api/v1/users?isActive=false&roles=student&limit=${limit}&page=${page}&search=${search}`,
      }),
      providesTags: ["users"],
    }),
    // ACCEPT STUDENT ADMISSION REQUEST
    acceptStudentAdmissionRequest: builder.mutation({
      query: (id: string) => ({
        url: `/api/v1/users/acceptStudent/${id}`,
        method: "PATCH",
        body: {
          isActive: true,
          status: "active",
        },
      }),
      invalidatesTags: ["users"],
    }),
    //create course
    createCourse: builder.mutation({
      query: (body: {
        title: string;
        shortDescription: string;
        category: string;
        language: string;
        durationInMinutes: number;
        price: number;
        level: string;
        featured?: boolean;
        numberOfLectures: number;
        discountPrice: number;
        isDiscount?: boolean;
        description: string;
        courseImage: string;
        videoUrl: string;
      }) => ({
        url: "/api/v1/courses",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["courses"],
    }),

    // UPDATE A course BY ID
    updateCourse: builder.mutation({
      query: (body: {
        id: string;
        isPublished: boolean;
        messageToReviewer: string;
        tags: string[];
        title: string;
        shortDescription: string;
        category: string;
        language: string;
        durationInMinutes: number;
        price: number;
        level: string;
        featured?: boolean;
        numberOfLectures: number;
        discountPrice: number;
        isDiscount?: boolean;
        description: string;
        courseImage: string;
        videoUrl: string;
      }) => ({
        url: `/api/v1/courses/${body.id}`,
        method: "PATCH",
        body: body,
      }),
      invalidatesTags: ["courses"],
    }),
    // GET ALL COURSE REQUEST
    getAllCourseRequest: builder.query({
      query: ({ limit, page }) => ({
        url: `/api/v1/courses?status=pending&limit=${limit}&page=${page}`,
        method: "GET",
      }),
      providesTags: ["courses"],
    }),
    // GET ALL ACTIVE COURSE
    getAllActiveCourse: builder.query({
      query: () => ({
        url: "/api/v1/courses?status=active",
        method: "GET",
      }),
    }),
    //create assignment
    createAssignment: builder.mutation({
      query: (body: {
        name: string;
        description: string;
        fileUrl: string;
        comment: string;
        score: number;
        submissionAttempts: string;
        availFrom: string;
        availUntil: string;
        key: string;
      }) => ({
        url: "/api/v1/assignments",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["assignment"],
    }),
    //Get all assignment
    getAssignment: builder.query({
      query: () => ({
        url: `/api/v1/assignments`,
        method: "GET",
      }),
      providesTags: ["assignment"],
    }),
    //create course Module
    createModuleCourse: builder.mutation({
      query: (body: { name: string; course: string }) => ({
        url: "/api/v1/modules",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["courseModule"],
    }),
    //Get  course module
    getCourseModule: builder.query({
      query: (id: string) => ({
        url: `/api/v1/modules?course=${id}`,
        method: "GET",
      }),
      providesTags: ["courseModule"],
    }),
    //Get  course module
    getCourseInstructor: builder.query({
      query: (id: string) => ({
        url: `/api/v1/courses?instructors=${id}`,
        method: "GET",
      }),
    }),
    // UPDATE A module BY ID
    updateModule: builder.mutation({
      query: (body: { id: string; assignments: any }) => {
        return {
          url: `/api/v1/modules/${body.id}`,
          method: "PATCH",
          body: body,
        };
      },
      invalidatesTags: ["courseModule"],
    }),
    // UPDATE A module BY ID
    updateModuleName: builder.mutation({
      query: (body: { id: string; name: any }) => {
        return {
          url: `/api/v1/modules/${body.id}`,
          method: "PATCH",
          body: body,
        };
      },
      invalidatesTags: ["courseModule"],
    }),
    // UPDATE quiz
    updateQuiz: builder.mutation({
      query: (body: any) => {
        return {
          url: `/api/v1/quiz/${body?.id}`,
          method: "PATCH",
          body: body,
        };
      },
      invalidatesTags: ["quiz"],
    }),
    // UPDATE A module BY ID
    updateModulePage: builder.mutation({
      query: (body: { id: string; pages: any }) => {
        return {
          url: `/api/v1/modules/${body.id}`,
          method: "PATCH",
          body: body,
        };
      },
      invalidatesTags: ["courseModule"],
    }),
    // DELETE A Module
    deleteModule: builder.mutation({
      query: (id: string) => ({
        url: `/api/v1/modules/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["courseModule"],
    }),
    // UPDATE A module BY ID Video
    updateVideoModule: builder.mutation({
      query: (body: {
        module: string;
        topicName: string;
        localVideo: string;
        youtubeVideo: string;
        minutes: number;
        second: number;
        key: string;
      }) => {
        return {
          url: `/api/v1/videos`,
          method: "POST",
          body: body,
        };
      },
      invalidatesTags: ["courseModule"],
    }),
    updateVideo: builder.mutation({
      query: (body: {
        id: string;
        topicName: string;
        localVideo: string;
        youtubeVideo: string;
        minutes: number;
        second: number;
        key: string;
      }) => {
        return {
          url: `/api/v1/videos/${body.id}`,
          method: "PATCH",
          body: body,
        };
      },
      invalidatesTags: ["courseModule"],
    }),
    deleteVideo: builder.mutation({
      query: (id: string) => ({
        url: `/api/v1/videos/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["courseModule"],
    }),
    //Get all assignment
    getQuiz: builder.query({
      query: () => ({
        url: `/api/v1/quiz`,
        method: "GET",
      }),
    }),
    deleteQuiz: builder.mutation({
      query: (id: string) => ({
        url: `/api/v1/quiz/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["quiz"],
    }),
    // UPDATE A module BY ID
    updateModuleQuiz: builder.mutation({
      query: (body: { id: string; quizzes: any }) => {
        return {
          url: `/api/v1/modules/${body.id}`,
          method: "PATCH",
          body: body,
        };
      },
      invalidatesTags: ["courseModule"],
    }),
    //create slide
    createSlide: builder.mutation({
      query: (body: {
        title: string;
        fileUrl: string;
        key: string;
        module: string;
      }) => ({
        url: "/api/v1/slides",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["courseModule"],
    }),
    updateSlide: builder.mutation({
      query: (body: {
        id: string;
        title: string;
        fileUrl: string;
        key: string;
      }) => ({
        url: `/api/v1/slides/${body.id}`,
        method: "PATCH",
        body: body,
      }),
      invalidatesTags: ["courseModule"],
    }),
    deleteSlide: builder.mutation({
      query: (id: string) => ({
        url: `/api/v1/slides/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["courseModule"],
    }),
    // ENROLL IN COURSE
    enroll: builder.mutation({
      query: (id: string) => ({
        url: "/api/v1/enrollments",
        method: "POST",
        body: { course: id },
      }),
    }),
    //Get my enrollmentsall course
    getMyEnrollmentAll: builder.query({
      query: ({ page, limit }) => ({
        url: `/api/v1/enrollments/myEnroll/mine?page=${page}&limit=${limit}`,
        method: "GET",
      }),
      providesTags: ["enrollment"],
    }),
    //Get  course enrollment
    getEnrollment: builder.query({
      query: (id: string) => ({
        url: `/api/v1/enrollments/${id}`,
        method: "GET",
      }),
      providesTags: ["enrollment"],
    }),

    //create course querstion
    createQuestionCourse: builder.mutation({
      query: (body: {
        name: string;
        email: string;
        question: string;
        course: string;
      }) => ({
        url: "/api/v1/courseQuestions",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["enrollment"],
    }),
    //create course faqs
    createFaqs: builder.mutation({
      query: (body: { answer: string; question: string; course: string }) => ({
        url: "/api/v1/faqs",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["faqs"],
    }),
    //Get  faqs
    getFaqs: builder.query({
      query: (id: string) => ({
        url: `/api/v1/faqs?course=${id}`,
        method: "GET",
      }),
      providesTags: ["faqs"],
    }),
    //Get  faqs
    getAllLessonCourse: builder.query({
      query: (id: string) => ({
        url: `/api/v1/videos?course=${id}`,
        method: "GET",
      }),
      providesTags: ["lesson"],
    }),
    //assignment submit
    submitAssignment: builder.mutation({
      query: (body: {
        course: any;
        assignment: any;
        text: string;
        fileUrl: string[];
        comment: string;
      }) => ({
        url: "/api/v1/subAssignments",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["assignment"],
    }),
    //Get  all submit assignment
    getAllSubmitAssignment: builder.query({
      query: () => ({
        url: `/api/v1/subAssignments`,
        method: "GET",
      }),
      providesTags: ["assignment"],
    }),
    //Get  one submit assignment
    getOneSubmitAssignment: builder.query({
      query: (body: any) => ({
        url: `/api/v1/subAssignments/?student=${body.id}&assignment=${body.assignmentId}`,
        method: "GET",
      }),
      providesTags: ["assignment"],
    }),
    //create quiz querstion
    createQuizQuestion: builder.mutation({
      query: (body: any) => ({
        url: "/api/v1/questions/createBulk",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["questions"],
    }),
    //Get one quiz
    getOneQuiz: builder.query({
      query: (quiz: any) => ({
        url: `/api/v1/quiz/${quiz}`,
        method: "GET",
      }),
      providesTags: ["quiz"],
    }),
    //create quiz querstion
    submitQuiz: builder.mutation({
      query: (body: { quiz: any; course: any; answers: string[] }) => ({
        url: "/api/v1/subQuizzes",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["quiz"],
    }),
    // GET ALL active course by gatecory
    getCourseByCategory: builder.query({
      query: (id: any) => ({
        url: `/api/v1/courses?status=active${id}`,
        method: "GET",
      }),
    }),
    // GET single active course by gatecory
    getSingleCourse: builder.query({
      query: (id: any) => ({
        url: `/api/v1/courses/${id}`,
        method: "GET",
      }),
    }),
    // GET popular course
    getPopularCourse: builder.query({
      query: () => ({
        url: `/api/v1/courses?sort=-totalEnroll&limit=3`,
        method: "GET",
      }),
    }),
    // GET popular course
    getOneCourse: builder.query({
      query: (id: string) => ({
        url: `/api/v1/courses/${id}`,
        method: "GET",
      }),
    }),
    //post comment
    submitComment: builder.mutation({
      query: (body: { name: any; email: any; question: any; course: any }) => ({
        url: "/api/v1/courseQuestions",
        method: "POST",
        body: body,
      }),
      invalidatesTags: [],
    }),
    // GET popular course
    getComments: builder.query({
      query: () => ({
        url: `/api/v1/courseQuestions`,
        method: "GET",
      }),
    }),
    //message api
    getChatPeople: builder.query({
      query: () => ({
        url: `api/v1/chat?status=recent&page=1&limit=1000`,
        method: "GET",
      }),
      providesTags: ["msgUser"],
    }),
    //message api
    getChatGroup: builder.query({
      query: () => ({
        url: `api/v1/chat/group?status=recent&page=1&limit=1000`,
        method: "GET",
      }),
      providesTags: ["grpUser"],
    }),
    //message api
    getMsgChat: builder.query({
      query: (id: any) => ({
        url: `api/v1/message/${id}?page=1&limit=10000`,
        method: "GET",
      }),
      providesTags: ["msg"],
    }),
    //message api
    getMessage: builder.query({
      query: (id: any) => ({
        url: `api/v1/message/${id}?page=1&limit=10000`,
        method: "GET",
      }),
      providesTags: ["msg"],
    }),

    //post message
    postMessage: builder.mutation({
      query: (body: any) => ({
        url: "api/v1/message/create",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["msg"],
    }),
    //post message
    getUser: builder.query({
      query: (id: any) => ({
        url: `api/v1/chat/users?search=${id}&page=1&limit=1000`,
        method: "GET",
      }),
    }),

    //post message
    createChat: builder.mutation({
      query: (body: { userId: string }) => ({
        url: "api/v1/chat/create",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["msgUser"],
    }),

    //post message
    msgGroupCreate: builder.mutation({
      query: (body: any) => ({
        url: "api/v1/group/create",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["grpUser"],
    }),
    //post message
    deleteChat: builder.mutation({
      query: (id: string) => ({
        url: `api/v1/chat/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["msgUser", "grpUser"],
    }),

    //post message
    AddGroupMember: builder.mutation({
      query: (body: any) => ({
        url: "api/v1/group/add-to",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["grpUser"],
    }),
    //latest student
    latestStudent: builder.query({
      query: () => ({
        url: `api/v1/users?roles=student&sort=-createdAt`,
        method: "GET",
      }),
    }),
    //review create
    reviewCreate: builder.mutation({
      query: (body: any) => ({
        url: "api/v1/reviews",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["review"],
    }),
    //review all published
    getAllReviewPublish: builder.query({
      query: (id: any) => ({
        url: `api/v1/reviews?course=${id}&isPublished=true`,
        method: "GET",
      }),
      providesTags: ["review"],
    }),
    //review all unpublished
    getAllReviewUnPublish: builder.query({
      query: () => ({
        url: "api/v1/reviews?isPublished=false",
        method: "GET",
      }),
      providesTags: ["review"],
    }),
    //review all review
    getAllReview: builder.query({
      query: () => ({
        url: "api/v1/reviews",
        method: "GET",
      }),
      providesTags: ["review"],
    }),
    //review update
    UpdateReview: builder.mutation({
      query: ({ id, isPublished }: { id: string; isPublished: any }) => ({
        url: `api/v1/reviews/${id}`,
        method: "PATCH",
        body: { isPublished: isPublished },
      }),
      invalidatesTags: ["review"],
    }),
    //review update
    DeleteReview: builder.mutation({
      query: (body: any) => ({
        url: `api/v1/reviews/${body.id}`,
        method: "DELETE",
        body: body,
      }),
      invalidatesTags: ["review"],
    }),
    //get all assignment in instructor
    AllAssignmentInstructor: builder.query({
      query: (id: any) => ({
        url: `api/v1/assignments?createdBy=${id}`,
        method: "GET",
      }),
      providesTags: ["assignment"],
    }),
    //get single assignment in instructor
    singleAssignment: builder.query({
      query: (id: any) => ({
        url: `api/v1/assignments/${id}`,
        method: "GET",
      }),
      providesTags: ["assignment"],
    }),
    //get all quiz in instructor
    AllQuizInstructor: builder.query({
      query: (id: any) => ({
        url: `/api/v1/quiz/getQuiz/mine`,
        method: "GET",
      }),
      providesTags: ["quiz", "questions"],
    }),
    //delete quiz
    DeleteQuiz: builder.mutation({
      query: (id: any) => ({
        url: `api/v1/quiz/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["quiz"],
    }),
    //create page
    createPage: builder.mutation({
      query: (body: { title: string; description: string }) => ({
        url: "/api/v1/pages",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["page"],
    }),
    //get all page
    getAllPage: builder.query({
      query: (id: any) => ({
        url: `/api/v1/pages`,
        method: "GET",
      }),
      providesTags: ["page"],
    }),
    //get all published Review
    getAllPublishedReview: builder.query({
      query: () => ({
        url: `api/v1/reviews?isPublished=true`,
        method: "GET",
      }),
      providesTags: ["review"],
    }),
    //get all submit quiz in instructor
    getAllSubmitQuizInstructor: builder.query({
      query: (id: string) => ({
        url: `api/v1/subQuizzes?instructors=${id}`,
        method: "GET",
      }),
      providesTags: [],
    }),
    //get all submit assignment in instructor
    getAllSubmitAssignmentInstructor: builder.query({
      query: (id: string) => ({
        url: `api/v1/subAssignments?instructors=${id}`,
        method: "GET",
      }),
      providesTags: [],
    }),
    //get one submit assignment in
    getOneSubmitAssignmentInstructor: builder.query({
      query: (id: any) => ({
        url: `api/v1/subAssignments/${id}`,
        method: "GET",
      }),
      providesTags: [],
    }),
    //    submitAssignmentUdpate:update
    submitAssignmentUdpate: builder.mutation({
      query: ({
        mark,
        grade,
        comment,
        id,
      }: {
        mark: string;
        grade: string;
        comment: string;
        id: any;
      }) => ({
        url: `api/v1/subAssignments/${id}`,
        method: "PATCH",
        body: { mark: mark, grade: grade, comment: comment },
      }),
      invalidatesTags: [],
    }),
    //get all quiz mark of an single student
    getAllSubmittedQuizOfAnStudent: builder.query({
      query: (id: any) => ({
        url: `/api/v1/subQuizzes?student=${id}`,
        method: "GET",
      }),
      providesTags: ["quiz"],
    }),
    //create an announcement
    createAnAnnouncement: builder.mutation({
      query: (body: { title: string; description: string }) => ({
        url: `/api/v1/announcements`,
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["announcement"],
    }),
    //get all announcement
    GetAllAnnouncement: builder.query({
      query: () => ({
        url: `/api/v1/announcements`,
        method: "GET",
      }),
      providesTags: ["announcement"],
    }),
    //delete one announcement
    deleteOneAnnouncement: builder.mutation({
      query: (id: string) => ({
        url: `/api/v1/announcements/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["announcement"],
    }),
    //get all enrollment of an
    GetAllEnrollment: builder.query({
      query: ({ id, page, limit, search = "" }: any) => ({
        url: `/api/v1/enrollments?page=${page}&limit=${limit}&search=${search}`,
        method: "GET",
      }),
      providesTags: ["enrollment"],
    }),
    //get all enrollment of active
    GetAllEnrollmentActive: builder.query({
      query: ({ id, page, limit, active = false }: any) => ({
        url: `/api/v1/enrollments?page=${page}&limit=${limit}&active=${active}`,
        method: "GET",
      }),
      providesTags: ["enrollment"],
    }),
    //get all enrollment of an instructor active
    GetAllEnrollmentInstructorActive: builder.query({
      query: ({ id, page, limit, active = false }: any) => ({
        url: `/api/v1/enrollments?instructors=${id}&page=${page}&limit=${limit}&active=${active}`,
        method: "GET",
      }),
      providesTags: ["enrollment"],
    }),
    //get all enrollment of an instructor
    GetAllEnrollmentInstructor: builder.query({
      query: ({ id, page, limit }: any) => ({
        url: `/api/v1/enrollments?instructors=${id}&page=${page}&limit=${limit}`,
        method: "GET",
      }),
      providesTags: ["enrollment"],
    }),
    // UPDATE A enrollment BY ID
    updateEnrollment: builder.mutation({
      query: (body: any) => {
        // console.log(body);
        return {
          url: `/api/v1/enrollments/${body.id}`,
          method: "PATCH",
          body: body,
        };
      },
      invalidatesTags: ["enrollment"],
    }),
    //delete enrollment
    deleteEnrollment: builder.mutation({
      query: (body: any) => ({
        url: `/api/v1/enrollments/${body.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["enrollment"],
    }),
    // UPDATE A assginment BY ID
    updateAssignement: builder.mutation({
      query: (body: any) => {
        return {
          url: `/api/v1/assignments/${body.id}`,
          method: "PATCH",
          body: body,
        };
      },
      invalidatesTags: ["assignment"],
    }),
    //delete one assignment by id
    deleteAssignment: builder.mutation({
      query: (body: any) => ({
        url: `/api/v1/assignments/${body.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["assignment"],
    }),
    //get one page
    getOnePage: builder.query({
      query: (id: any) => ({
        url: `/api/v1/pages/${id}`,
        method: "GET",
      }),
      providesTags: ["page"],
    }),
    //get one submit quiz
    getOneSubQuiz: builder.query({
      query: (id: any) => ({
        url: `/api/v1/subQuizzes/${id}`,
        method: "GET",
      }),
      providesTags: [],
    }),
    getAllPopularCourse: builder.query({
      query: ({ limit = 5 }) => ({
        url: `/api/v1/courses?sort=-totalEnroll&limit=${limit}`,
        method: "GET",
      }),
      providesTags: ["popularCourses"],
    }),
    getAllInstructorPage: builder.query({
      query: () => ({
        url: "/api/v1/pages/getPage/mine",
        method: "GET",
      }),
      providesTags: ["page"],
    }),
    //delete one page by id
    deletePage: builder.mutation({
      query: (body: any) => ({
        url: `/api/v1/pages/${body.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["page"],
    }),
    //    update page:update
    updatePage: builder.mutation({
      query: ({
        title,
        description,
        id,
      }: {
        title: string;
        description: string;
        id: any;
      }) => ({
        url: `api/v1/pages/${id}`,
        method: "PATCH",
        body: { title: title, description: description },
      }),
      invalidatesTags: ["page"],
    }),
    // mentoring request
    createMentoring: builder.mutation({
      query: (body: {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        interest: string;
        currentJob: string;
        message: string;
      }) => ({
        url: `/api/v1/mentorings`,
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["mentoring"],
    }),
    //create Optimization
    createOptimization: builder.mutation({
      query: (body: {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        interest: string;
        currentJob: string;
        message: string;
      }) => ({
        url: `/api/v1/optimizes`,
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["optimization"],
    }),
    //delete one optimization

    getAllMentorings: builder.query({
      query: ({ page, limit }) => ({
        url: `/api/v1/mentorings?page=${page}&limit=${limit}`,
        method: "GET",
      }),
      providesTags: ["mentoring"],
    }),
    getAllOptimizes: builder.query({
      query: ({ page, limit }) => ({
        url: `/api/v1/optimizes?page=${page}&limit=${limit}`,
        method: "GET",
      }),
      providesTags: ["optimization"],
    }),
    getAllInstructorCourse: builder.query({
      query: ({ page, limit }) => ({
        url: `/api/v1/courses/getMyCourses?page=${page}&limit=${limit}`,
        method: "GET",
      }),
      providesTags: ["courses"],
    }),
    //create an file
    createFile: builder.mutation({
      query: (body: { file: string; key: string }) => ({
        url: `/api/v1/files`,
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["allfile"],
    }),
    getInstructorFile: builder.query({
      query: (id: any) => ({
        url: `/api/v1/files?createdBy=${id}`,
        method: "GET",
      }),
      providesTags: ["allfile"],
    }),
    allfiles: builder.query({
      query: (id: any) => ({
        url: `/api/v1/files`,
        method: "GET",
      }),
      providesTags: ["allfile"],
    }),
    //send contract us page
    sendContact: builder.mutation({
      query: (body: any) => ({
        url: "/api/v1/uploads/send",
        method: "POST",
        body: body,
      }),
      invalidatesTags: [],
    }),
    getStudentSubAssignment: builder.query({
      query: (id: any) => ({
        url: `/api/v1/subAssignments?student=${id}`,
        method: "GET",
      }),
      providesTags: [],
    }),
    //delete one file by id
    deleteByFile: builder.mutation({
      query: (body: any) => ({
        url: `/api/v1/files/${body.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["allfile"],
    }),
    //get one mentoring
    getOneMentoring: builder.query({
      query: (id: string) => ({
        url: `/api/v1/mentorings/${id}`,
        method: "GET",
      }),
      providesTags: ["mentoring"],
    }),
    //get one mentoring
    getOneOptimization: builder.query({
      query: (id: string) => ({
        url: `/api/v1/optimizes/${id}`,
        method: "GET",
      }),
      providesTags: ["optimization"],
    }),
    //delete one mentoring
    deleteOneMentoring: builder.mutation({
      query: (id: string) => ({
        url: `/api/v1/mentorings/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["mentoring"],
    }),
    deleteOneOptimization: builder.mutation({
      query: (id: string) => ({
        url: `/api/v1/optimizes/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["optimization"],
    }),
    updateOneMetoring: builder.mutation({
      query: ({
        id,
        interest,
        createdAt,
        firstName,
        email,
      }: {
        id: string;
        interest: string;
        createdAt: string;
        firstName: string;
        email: string;
      }) => ({
        url: `/api/v1/mentorings/${id}`,
        method: "PATCH",
        body: {
          id,
          interest,
          createdAt,
          firstName,
          email,
        },
      }),
      invalidatesTags: ["mentoring"],
    }),
    // GET ALL enroll
    allEnrollment: builder.query({
      query: (body: any) => ({
        url: `/api/v1/enrollments`,
      }),
    }),
    //meet create live class
    meetCreate: builder.mutation({
      query: (body: { topic: string; link: string }) => ({
        url: "/api/v1/meets",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["liveclass"],
    }),
    // GET ALL meet
    allMeet: builder.query({
      query: (body: any) => ({
        url: `/api/v1/meets`,
      }),
      providesTags: ["liveclass"],
    }),
    // GET ALL meet
    submitassignmentBystudentBycourse: builder.query({
      query: (body: any) => ({
        url: `/api/v1/subAssignments?student=${body.student}&course=${body.course}`,
      }),
      providesTags: [],
    }),
    // GET ALL meet
    submitquizBystudentBycourse: builder.query({
      query: (body: any) => ({
        url: `/api/v1/subQuizzes?student=${body.student}&course=${body.course}`,
      }),
      providesTags: [],
    }),
    // GET ALL star
    getOverViewStar: builder.query({
      query: (body: any) => ({
        url: `/api/v1/stats/getOverviewStats`,
      }),
      providesTags: [],
    }),
    // GET ALL announcement count
    getAnnouncementCount: builder.query({
      query: () => ({
        url: `/api/v1/announcements/getCount`,
      }),
    }),
    // GET ALL complete course
    getCompleteCourse: builder.query({
      query: ({ enroll, student }) => ({
        url: `/api/v1/completes?enrollment=${enroll}&student=${student}`,
      }),
      providesTags: ["complete"],
    }),
    //create complete course
    createCompleteCourse: builder.mutation({
      query: (body) => ({
        url: "/api/v1/completes",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["complete"],
    }),
    // GET ALL certificates
    getCertificates: builder.query({
      query: ({ student }: any) => ({
        url: `/api/v1/certificates?student=${student}`,
      }),
    }),
    // GET single certificates
    getSingleCertificates: builder.query({
      query: ({ id }: any) => ({
        url: `/api/v1/certificates/${id}`,
      }),
    }),
    // GET single certificates
    getRoleCertificates: builder.query({
      query: ({ student, course }: any) => ({
        url: `/api/v1/certificates?student=${student}&course=${course}`,
      }),
      providesTags: ["complete"],
    }),
    // GET ALL meet instructor
    allMeetInstructor: builder.query({
      query: (body: any) => ({
        url: `/api/v1/meets?createdBy=${body?.id}&page=${body?.page}&limit=${body?.limit}`,
      }),
      providesTags: ["liveclass"],
    }),
    // GET student meet
    allMeetStudent: builder.query({
      query: (body: any) => ({
        url: `/api/v1/meets/getStudentMeet`,
      }),
      providesTags: ["liveclass"],
    }),
    //delete one mentoring
    deleteMeet: builder.mutation({
      query: ({ id }: any) => ({
        url: `/api/v1/meets/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["liveclass"],
    }),
    //delete one mentoring
    deleteQuestion: builder.mutation({
      query: ({ id }: any) => ({
        url: `/api/v1/questions/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["quiz"],
    }),
  }),
});

export default dashboardApi;

export const {
  useGetPopularCourseQuery,
  useAllMeetInstructorQuery,
  useDeleteQuestionMutation,
  useAllMeetStudentQuery,
  useDeleteMeetMutation,
  useGetRoleCertificatesQuery,
  useGetSingleCertificatesQuery,
  useGetAllEnrollmentActiveQuery,
  useGetAllEnrollmentInstructorActiveQuery,
  useGetCertificatesQuery,
  useGetAllEnrollmentQuery,
  useCreateCompleteCourseMutation,
  useGetOverViewStarQuery,
  useGetCompleteCourseQuery,
  useGetAnnouncementCountQuery,
  useGetAllReviewQuery,
  useSubmitquizBystudentBycourseQuery,
  useSubmitassignmentBystudentBycourseQuery,
  useAllMeetQuery,
  useMeetCreateMutation,
  useAllEnrollmentQuery,
  useDeleteByFileMutation,
  useGetStudentSubAssignmentQuery,
  useGetOneOptimizationQuery,
  useSendContactMutation,
  useAllfilesQuery,
  useGetInstructorFileQuery,
  useGetAllInstructorCourseQuery,
  useCreateFileMutation,
  useGetAllInstructorPageQuery,
  useUpdatePageMutation,
  useUpdateEnrollmentMutation,
  useDeleteEnrollmentMutation,
  useDeletePageMutation,
  useGetOneSubQuizQuery,
  useGetOnePageQuery,
  useDeleteAssignmentMutation,
  useGetAllEnrollmentInstructorQuery,
  useUpdateAssignementMutation,
  useGetAllSubmitAssignmentInstructorQuery,
  useGetOneSubmitAssignmentInstructorQuery,
  useGetAllSubmitQuizInstructorQuery,
  useSubmitAssignmentUdpateMutation,
  useGetAllPageQuery,
  useCreatePageMutation,
  useUpdateModulePageMutation,
  useDeleteQuizMutation,
  useAllAssignmentInstructorQuery,
  useUpdateReviewMutation,
  useAllQuizInstructorQuery,
  useUpdateQuizMutation,
  useSingleAssignmentQuery,
  useGetAllReviewUnPublishQuery,
  useDeleteReviewMutation,
  useGetAllReviewPublishQuery,
  useReviewCreateMutation,
  useLatestStudentQuery,
  useAddGroupMemberMutation,
  useGetCourseInstructorQuery,
  useDeleteChatMutation,
  useMsgGroupCreateMutation,
  useGetUserQuery,
  useCreateChatMutation,
  usePostMessageMutation,
  useGetMessageQuery,
  useGetMsgChatQuery,
  useGetChatGroupQuery,
  useGetChatPeopleQuery,
  useGetOneCourseQuery,
  useGetAllUsersQuery,
  useGetSingleCourseQuery,
  useAddUserMutation,
  useGetSingleUsersQuery,
  useDeleteUserMutation,
  useUpdateUserMutation,
  useGetAllInstructorsQuery,
  useGetAllCourseQuery,
  useGetAllActiveCourseQuery,
  useDeleteCourseMutation,
  useAcceptCourseMutation,
  useUpdateCourseStatusMutation,
  useGetCategoriesQuery,
  useDeleteCourseCategoriesMutation,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useGetAllStudentsQuery,
  useCreateCourseMutation,
  useGetAllAdmissionRequestQuery,
  useAcceptStudentAdmissionRequestMutation,
  useCreateQuizMutation,
  useGetAllCourseRequestQuery,
  useCreateAssignmentMutation,
  useCreateModuleCourseMutation,
  useGetCourseModuleQuery,
  useGetAssignmentQuery,
  useUpdateModuleMutation,
  useUpdateVideoModuleMutation,
  useGetQuizQuery,
  useUpdateModuleQuizMutation,
  useCreateSlideMutation,
  useUpdateSlideMutation,
  useEnrollMutation,
  useUpdateCourseMutation,
  useGetMyEnrollmentAllQuery,
  useGetEnrollmentQuery,
  useCreateQuestionCourseMutation,
  useCreateFaqsMutation,
  useGetFaqsQuery,
  useGetAllLessonCourseQuery,
  useSubmitAssignmentMutation,
  useCreateQuizQuestionMutation,
  useGetAllSubmitAssignmentQuery,
  useGetOneSubmitAssignmentQuery,
  useGetOneQuizQuery,
  useSubmitQuizMutation,
  useUpdateModuleNameMutation,
  useDeleteModuleMutation,
  useGetCourseByCategoryQuery,
  useSubmitCommentMutation,
  useGetCommentsQuery,
  useGetAllPublishedReviewQuery,
  useGetAllSubmittedQuizOfAnStudentQuery,
  useCreateAnAnnouncementMutation,
  useGetAllAnnouncementQuery,
  useDeleteOneAnnouncementMutation,
  useGetAllPopularCourseQuery,
  useCreateMentoringMutation,
  useCreateOptimizationMutation,
  useGetAllMentoringsQuery,
  useGetAllOptimizesQuery,
  useGetOneMentoringQuery,
  useDeleteOneOptimizationMutation,
  useDeleteOneMentoringMutation,
  useUpdateOneMetoringMutation,
  useUpdateVideoMutation,
  useDeleteVideoMutation,
  useDeleteSlideMutation,
} = dashboardApi;
