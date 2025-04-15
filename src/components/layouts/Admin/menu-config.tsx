import type React from "react"
import {
  LayoutGrid,
  BookOpen,
  MessageCircle,
  Users,
  GraduationCap,
  Star,
  UserPlus,
  Settings,
  FileText,
  CheckSquare,
  Video,
  Folder,
  Award,
  LayoutTemplate,
  Bell,
} from "lucide-react"

// Define menu item type
export interface MenuItem {
  id?: number
  label?:string
  name: string
  url: string
  icon: React.ElementType
  badge?: number
  children?: Array<{
    name: string
    url: string
  }>
}

export interface MenuSection {
  id: number
  label: string
  items: MenuItem[]
}


const adminMenuItems: MenuItem[] = [
  {
    name: "Dashboard",
    url: "/dashboard",
    icon: LayoutGrid,
  },
  {
    name: "Courses",
    url: "/dashboard/courses",
    icon: BookOpen,
  },
  {
    name: "Messages",
    url: "/dashboard/messages",
    icon: MessageCircle,
    badge: 2,
  },
  {
    name: "Instructors",
    url: "/dashboard/instructors",
    icon: Users,
  },
  {
    name: "Students",
    url: "/dashboard/students",
    icon: GraduationCap,
  },
  {
    name: "Enrollment",
    url: "/dashboard/enrollment",
    icon: UserPlus,
  },
  {
    name: "Reviews",
    url: "/dashboard/review",
    icon: Star,
  },
  {
    name: "Setup Notifications",
    url: "/dashboard/notifications",
    icon: Bell,
  },
  {
    name: "User Permissions",
    url: "/dashboard/permissions",
    icon: Settings,
  },
  // {
  //   name: "Users",
  //   url: "/dashboard/users",
  //   icon: Users,
  // },
  // {
  //   name: "My Account",
  //   url: "/dashboard/my-account",
  //   icon: Settings,
  // },
]
const adminAcademiesItems: MenuItem[] = [
  {
    name: "Fourth Academy",
    url: "/dashboard/fourthit",
    icon: LayoutGrid, 
    children: [
      {
        name: "Resources",
        url: "/dashboard/fourthit/resource",
      },
      {
        name: "Types",
        url: "/dashboard/fourthit/types",
      },
      {
        name: "Partners",
        url: "/dashboard/fourthit/partners",
      },
      {
        name: "Managements",
        url: "/dashboard/fourthit/managements",
      },
    ],
  },
  {
    name: "Fourth IT",
    url: "/dashboard/my-account",
    icon: Settings,
  },
]

const menuData: MenuSection[] = [
  {
    id: 1,
    label: 'Menu',
    items: adminMenuItems
  },
  {
    id: 2,
    label: 'Academies',
    items: adminAcademiesItems
  },
]

const instructorMenuItems: MenuItem[] = [
  {
    name: "Dashboard",
    url: "/dashboard",
    icon: LayoutGrid,
  },
  {
    name: "My Courses",
    url: "/dashboard/courses",
    icon: BookOpen,
  },
  {
    name: "Quiz",
    url: "/dashboard/quiz",
    icon: CheckSquare,
    children: [
      {
        name: "All Quiz",
        url: "/dashboard/quiz",
      },
      {
        name: "Add Quiz",
        url: "/dashboard/quiz/quiz-creation",
      },
      {
        name: "Quiz Result",
        url: "/dashboard/quiz/quiz-result",
      },
    ],
  },
  {
    name: "Messages",
    url: "/dashboard/messages",
    icon: MessageCircle,
  },
  {
    name: "Students",
    url: "/dashboard/students",
    icon: GraduationCap,
  },
  {
    name: "Assignments",
    url: "/dashboard/assignment/all-assignments",
    icon: FileText,
    children: [
      {
        name: "All Assignment",
        url: "/dashboard/assignment/all-assignments",
      },
      {
        name: "Add Assignment",
        url: "/dashboard/assignment-creation",
      },
      {
        name: "Submitted Assignment",
        url: "/dashboard/assignment/submit-assignment",
      },
    ],
  },
  {
    name: "Live Class",
    url: "/dashboard/live-class-with-screen",
    icon: Video,
  },
  {
    name: "Files",
    url: "/dashboard/files",
    icon: Folder,
  },
  {
    name: "Grades",
    url: "/dashboard/grades",
    icon: FileText,
    children: [
      {
        name: "All Grade",
        url: "/dashboard/grades",
      },
      {
        name: "Grade",
        url: "/dashboard/student/all",
      },
    ],
  },
  {
    name: "Reviews",
    url: "/dashboard/review",
    icon: Star,
  },
  {
    name: "Page",
    url: "/dashboard/page",
    icon: LayoutTemplate,
  },
  {
    name: "My Account",
    url: "/dashboard/my-account",
    icon: Settings,
  },
]

const instructormenuData: MenuSection[] = [
  {
    id: 1,
    label: 'Menu',
    items: instructorMenuItems
  },
]

const studentSelfPaceMenuItems: MenuItem[] = [
  {
    name: "Dashboard",
    url: "/dashboard",
    icon: LayoutGrid,
  },
  {
    name: "My Courses",
    url: "/dashboard/my-course",
    icon: BookOpen,
  },
  {
    name: "Files",
    url: "/dashboard/files",
    icon: Folder,
  },
  {
    name: "Messages",
    url: "/dashboard/messages",
    icon: MessageCircle,
  },
  {
    name: "My Account",
    url: "/dashboard/my-account",
    icon: Settings,
  },
]

const studentSelfmenuData: MenuSection[] = [
  {
    id: 1,
    label: 'Menu',
    items: studentSelfPaceMenuItems
  },
]

const studentInstructorLedMenuItems: MenuItem[] = [
  {
    name: "Dashboard",
    url: "/dashboard",
    icon: LayoutGrid,
  },
  {
    name: "My Courses",
    url: "/dashboard/my-course",
    icon: BookOpen,
  },
  {
    name: "Assignment",
    url: "/dashboard/assignment/all-assignments",
    icon: FileText,
  },
  {
    name: "Quiz",
    url: "/dashboard/quiz/all-quizes",
    icon: CheckSquare,
  },
  {
    name: "Messages",
    url: "/dashboard/messages",
    icon: MessageCircle,
  },
  {
    name: "Certificate",
    url: "/dashboard/certificates",
    icon: Award,
  },
  {
    name: "Files",
    url: "/dashboard/files",
    icon: Folder,
  },
  {
    name: "Live Class",
    url: "/dashboard/live-class-with-screen",
    icon: Video,
  },
  {
    name: "Grades",
    url: "/dashboard/students/grade",
    icon: FileText,
  },
  {
    name: "My Account",
    url: "/dashboard/my-account",
    icon: Settings,
  },
]

const studentInstructormenuData: MenuSection[] = [
  {
    id: 1,
    label: 'Menu',
    items: studentInstructorLedMenuItems
  },
]

const managerMenuItems: MenuItem[] = [
  {
    name: "Dashboard",
    url: "/dashboard",
    icon: LayoutGrid,
  },
  {
    name: "Courses",
    url: "/dashboard/courses",
    icon: BookOpen,
  },
  {
    name: "Instructors",
    url: "/dashboard/instructors",
    icon: Users,
  },
  {
    name: "Students",
    url: "/dashboard/students",
    icon: GraduationCap,
  },
  {
    name: "Reports",
    url: "/dashboard/reports",
    icon: FileText,
  },
  {
    name: "My Account",
    url: "/dashboard/my-account",
    icon: Settings,
  },
]

const managerMenuData: MenuSection[] = [
  {
    id: 1,
    label: 'Menu',
    items: managerMenuItems
  },
]

export const getMenuItemsByRole = (role: string, studentType?: string): MenuItem[] | MenuSection[] => {
  switch (role) {
    case "admin":
      return menuData
    case "instructor":
      return instructormenuData
    case "student":
      return studentType === "self-pace" ? studentSelfmenuData : studentInstructormenuData
    case "manager":
      return managerMenuData
    default:
      return [
        {
          name: "Dashboard",
          url: "/dashboard",
          icon: LayoutGrid,
        },
        {
          name: "My Account",
          url: "/dashboard/my-account",
          icon: Settings,
        },
      ]
  }
}

