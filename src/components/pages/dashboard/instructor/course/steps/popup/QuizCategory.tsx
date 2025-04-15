"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { useAppSelector } from "../../../../../../../app/hooks"
import {
  useAllQuizInstructorQuery,
  useGetQuizQuery,
  useUpdateModuleQuizMutation,
} from "../../../../../../../feature/api/dashboardApi"
import Loading from "../../../../../../common/Loading"
import ButtonLoader from "../../../../../../utils/loaders/ButtonLoader"
import { ChevronDown, Plus, X } from "lucide-react"

const QuizCategory = ({
  id,
  setShowModal,
  moduleName = "Introduction of Module 1",
}: {
  id: string
  setShowModal: any
  moduleName?: string
}) => {
  const { id: userId, roles } = useAppSelector((state) => state.auth.user)
  const { data, isSuccess, isError, isLoading } = useGetQuizQuery({})
  const {
    data: instructorAllQuiz,
    isSuccess: instructorQuizSuccess,
    isError: instructorQuizIsError,
    isLoading: instructorQuizLoading,
  } = useAllQuizInstructorQuery({})
  const [updateModuleQuiz, { error, data: moduleData, isLoading: loadingModule, isSuccess: moduleisSuccess }] =
    useUpdateModuleQuizMutation()
  const [QuizId, setQuizId] = useState("")
  const [activeClass, setactiveClass] = useState("")
  const [indentation, setIndentation] = useState("Don't Indent")

  const clickQuiz = (id: string) => {
    setQuizId(id)
    setactiveClass(id)
  }

  const update = () => {
    updateModuleQuiz({ id, quizzes: QuizId })
  }

  useEffect(() => {
    if (isError) {
      toast.error((error as any).data.message)
    } else if (moduleisSuccess) {
      toast.success("Module has updated Successfully!")
      setShowModal(false)
    }
  }, [isError, moduleisSuccess])

  return (
    <div className="rounded-lg max-w-2xl w-full mx-auto">
      <div className="p-6 space-y-6">
        <p className="text-gray-600 text-sm">
          Select the quiz you want to associate with this module or add an quiz by selecting "Create quiz"
        </p>

        {/* Quiz List */}
        <div className="border rounded-md overflow-hidden">
          {roles.includes("admin") &&
            (isLoading ? (
              <div className="p-4 flex justify-center">
                <Loading />
              </div>
            ) : isError ? (
              <div className="p-4 text-center text-red-500">Error loading quizzes</div>
            ) : isSuccess && data?.data?.quazes && data.data.quazes.length > 0 ? (
              <div className="max-h-64 overflow-y-auto">
                {data.data.quazes.map(({ title, id }: { title: string; id: string }, index: number) => (
                  <div
                    key={id}
                    onClick={() => clickQuiz(id)}
                    className={`px-4 py-3 cursor-pointer border-b last:border-b-0 hover:bg-gray-50 transition-colors ${
                      activeClass === id ? "bg-blue-50 text-indigo-600 border-l-4 border-l-indigo-600" : ""
                    }`}
                  >
                    Quiz {index + 1} - {title}
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center text-gray-500">No quizzes available</div>
            ))}

          {roles.includes("instructor") &&
            (instructorQuizLoading ? (
              <div className="p-4 flex justify-center">
                <Loading />
              </div>
            ) : instructorQuizIsError ? (
              <div className="p-4 text-center text-red-500">Error loading quizzes</div>
            ) : instructorQuizSuccess && instructorAllQuiz?.data?.quazes && instructorAllQuiz.data.quazes.length > 0 ? (
              <div className="max-h-64 overflow-y-auto">
                {instructorAllQuiz.data.quazes.map(({ title, id }: { title: string; id: string }, index: number) => (
                  <div
                    key={id}
                    onClick={() => clickQuiz(id)}
                    className={`px-4 py-3 cursor-pointer border-b last:border-b-0 hover:bg-gray-50 transition-colors ${
                      activeClass === id ? "bg-blue-50 text-indigo-600 border-l-4 border-l-indigo-600" : ""
                    }`}
                  >
                    Quiz {index + 1} - {title}
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center text-gray-500">No quizzes available</div>
            ))}

          {/* Create Quiz Button */}
          <Link href="/dashboard/quiz/quiz-creation">
            <div className="flex items-center justify-center p-3 text-indigo-600 hover:bg-indigo-50 transition-colors cursor-pointer border-t">
              <Plus className="h-4 w-4 mr-2" />
              <span>Create Quiz</span>
            </div>
          </Link>
        </div>

        {/* Indentation Dropdown */}

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600 mb-2">Indentation</label>
          <div className="relative">
            <select
              className="block w-full px-4 py-3 text-base border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={indentation}
              onChange={(e) => setIndentation(e.target.value)}
            >
              <option value="Don't Indent">Don't Indent</option>
              <option value="Indent">Indent</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-end items-center gap-3 p-6 border-t">
        <button
          onClick={() => setShowModal(false)}
          className="px-5 py-2.5 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={update}
          disabled={loadingModule || !QuizId}
          className="px-5 py-2.5 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[120px]"
        >
          {loadingModule ? <ButtonLoader /> : "Add Content"}
        </button>
      </div>
    </div>
  )
}

export default QuizCategory
