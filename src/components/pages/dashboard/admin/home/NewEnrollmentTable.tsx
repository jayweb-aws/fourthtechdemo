import { ArrowUpRight } from "lucide-react";
import SortDropdown from "../common/Dropdown";
import Image from "next/image";
import ArrowRightUp from '../../../../../assets/ArrowRightUp.svg'

interface User {
    id: number
    name: string
    username: string
    avatar: string
    date: string
    status: "Active" | "Inactive"
  }
  
  const users: User[] = [
    {
      id: 1,
      name: "John Doe",
      username: "@doer241",
      avatar: "/placeholder.svg?height=48&width=48",
      date: "06 Jun, 2024",
      status: "Active",
    },
    {
      id: 2,
      name: "Theresa Webb",
      username: "@whitegoose497",
      avatar: "/placeholder.svg?height=48&width=48",
      date: "14 Sep, 2024",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Jenny Wilson",
      username: "@sadpanda176",
      avatar: "/placeholder.svg?height=48&width=48",
      date: "02 Nov, 2024",
      status: "Active",
    },
    {
      id: 4,
      name: "Esther Howard",
      username: "@silverfrog195",
      avatar: "/placeholder.svg?height=48&width=48",
      date: "03 Aug, 2024",
      status: "Inactive",
    },
  ]

export default function NewEnrollmentTable() {
  return (
    <div className=" text-white rounded-xl">
      {/* Header */}
        <div className='flex h-[26px] px-[6px] justify-between items-center self-stretch mb-4'>
                <p className="text-[#293642] font-medium text-[21px] leading-[26px] font-[Poppins]">New Enrollment (13)</p>
                <SortDropdown />
              </div>

      {/* Table Header */}
      <div className="w-full  rounded-xl overflow-hidden bg-white border border-[#E8ECEE]">
      <div className="w-full overflow-y-auto">
        <table className="w-full border-collapse ">
          <thead>
            <tr className="bg-[#F8F9FB]">
              <th className="py-5 px-6 text-left text-[#293642] font-[Poppins] text-[12px] font-semibold leading-[16px] uppercase">NAME</th>
              <th className="py-5 px-6 text-left text-[#293642] font-[Poppins] text-[12px] font-semibold leading-[16px] uppercase">DATE</th>
              <th className="py-5 px-6 text-left text-[#293642] font-[Poppins] text-[12px] font-semibold leading-[16px] uppercase">STATUS</th>
              <th className="py-5 px-6 text-left text-[#293642] font-[Poppins] text-[12px] font-semibold leading-[16px] uppercase">ACTION</th>
            </tr>
          </thead>
          <tbody >
            {users.map((user) => (
              <tr key={user.id} className=" border-b border-[#E8ECEE] rounded-xl bg-none">
                <td className="py-5 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full overflow-hidden">
                      <Image
                        src={user.avatar || "/placeholder.svg"}
                        alt={user.name}
                        width={36}
                        height={36}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="overflow-hidden text-ellipsis whitespace-nowrap text-[#293642] font-[Poppins] text-[14px] font-medium leading-[16px]">{user.name}</p>
                      <p className="text-[#5578A0] font-[Poppins] text-[12px] font-normal leading-[12px] mt-1">{user.username}</p>
                    </div>
                  </div>
                </td>
                <td className="py-5 px-6 whitespace-nowrap text-[#293642] font-[Poppins] text-[14px] font-normal leading-[18px]">{user.date}</td>
                <td className="py-5 px-6">
                  <span
                    className={`rounded-md flex px-3 py-2 justify-center items-center gap-[11px] ${
                      user.status === "Active" ? "bg-[#E0F3E4] text-[#80CA8F] text-center font-poppins text-sm font-medium leading-4" : "bg-[#ECF1F3] text-[#84848B] text-center font-poppins text-sm font-medium leading-4"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="py-4 px-6 text-left">
                  <Image src={ArrowRightUp} alt="arrow" width={21} height={21} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}
