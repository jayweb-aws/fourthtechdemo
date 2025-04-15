"use client"

import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useCreateModuleCourseMutation } from "../../../../../../../../feature/api/dashboardApi"
import { useAppSelector } from "../../../../../../../../app/hooks"
import { X } from "lucide-react"

type FormData = {
  name: string
}

const Schema = z.object({
  name: z.string().min(1, "Module name is required!"),
})

const AddModuleModal = ({
  show,
  setShowModal,
}: {
  show: boolean
  setShowModal: Function
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(Schema),
  })

  const {
    course: { id },
  } = useAppSelector((state) => state.course)

  const [createModuleCourse, { error, isLoading, isSuccess, isError }] = useCreateModuleCourseMutation()

  const CreateModuleHandler = (data: FormData) => {
    createModuleCourse({ name: data.name, course: id })
  }

  useEffect(() => {
    if (isError) {
      toast.error((error as any).data.message)
    } else if (isSuccess) {
      setShowModal(false)
      toast.success("Course module has been added successfully!")
    }
  }, [isError, isSuccess, error, setShowModal])

  if (!show) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 md:p-0 p-3">
      <div className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        {/* Close button */}
        <button
          onClick={() => setShowModal(false)}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          type="button"
        >
          <X size={20} />
        </button>

        <div className="mb-6">
          <h3 className="text-xl font-medium text-gray-900">Add Module</h3>
        </div>

        <p className="mb-4 text-sm text-gray-600">Use a password at least long with both letters and numbers.</p>

        <form onSubmit={handleSubmit(CreateModuleHandler)}>
          <div className="mb-6">
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
              Module name
            </label>
            <input
              {...register("name")}
              id="name"
              type="text"
              placeholder="The name of the module"
              className={`w-full rounded-md border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500`}
            />
            {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-indigo-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-70"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                  <span className="ml-2">Processing...</span>
                </div>
              ) : (
                "Confirm"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddModuleModal
