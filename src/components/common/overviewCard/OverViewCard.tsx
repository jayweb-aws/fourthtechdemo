"use client"

import { Users, BookOpen, GraduationCap, DollarSign } from "lucide-react"

const OverViewCard = () => {
  const cardsData = [
    {
      name: "Total Users",
      number: "603",
      icon: <Users className="h-6 w-6 text-indigo-600" />,
      bgColor: "bg-[#f8f9ff]",
    },
    {
      name: "Active Courses",
      number: "4215",
      icon: <BookOpen className="h-6 w-6 text-indigo-600" />,
      bgColor: "bg-[#f8f9ff]",
    },
    {
      name: "New Enrollments",
      number: "245",
      icon: <GraduationCap className="h-6 w-6 text-indigo-600" />,
      bgColor: "bg-[#f8f9ff]",
    },
    {
      name: "Total Earnings",
      number: "$252,931.85",
      icon: <DollarSign className="h-6 w-6 text-indigo-600" />,
      bgColor: "bg-[#f8f9ff]",
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
      {cardsData.map((item, index) => (
        <div key={index} className={`${item.bgColor} rounded-xl shadow-sm p-5 flex flex-col justify-between`}>
          <div className="text-gray-500 text-sm font-medium">{item.name}</div>
          <div className="flex justify-between items-center mt-4">
            <div className="font-bold text-2xl">
              {item.name === "Total Earnings" ? <span className="text-gray-400 mr-1">$</span> : ""}
              {item.name === "Total Earnings" ? item.number.replace("$", "") : item.number}
            </div>
            <div className="bg-white p-2 rounded-full shadow-sm">{item.icon}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default OverViewCard
