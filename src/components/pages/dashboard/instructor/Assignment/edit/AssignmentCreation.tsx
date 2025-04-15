import AssignementNaming from "./AssignementNaming";
import AssignmentDue from "./AssignmentDue";
import AssignmentFile from "./AssignmentFile";
import AssignmentScoreDeclare from "./AssignmentScoreDeclare";
import AssignmentUploadButtons from "./AssignmentUploadButtons";
import UploadFileTypes from "./UploadFileTypes";
import * as z from "zod";
import toast from 'react-hot-toast';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import React, { useState, Fragment, useMemo, useEffect } from "react";
import {
  useCreateAssignmentMutation,
  useUpdateAssignementMutation,
} from "../../../../../../feature/api/dashboardApi";
import { useSingleFileUploadMutation } from "../../../../../../feature/api/mediaUploadApi";
import { useRouter } from "next/router";

type assignmentType = {
  name: string;
  description: string;
  fileUrl: string;
  comment: string;
  score: number;
  submissionAttempts: string;
  availFrom: string;
  availUntil: string;
  key: string;
};

const assignmentDataPre = {
  name: "",
  description: "",
  fileUrl: "",
  comment: "",
  score: 0,
  submissionAttempts: "choose attempt",
  availFrom: "",
  availUntil: "",
  key: "",
};

const AssignmentCreation = ({ data: assignmentData }: { data: any }) => {
  const router = useRouter();
  const id = router.query.id;
  const [formData, setFormData] = useState<assignmentType>(assignmentDataPre);

  const [updateAssignment, { error, data, isLoading, isSuccess, isError }] =
    useUpdateAssignementMutation();

  const assignmentHandler = (data: assignmentType) => {
    if (!data.fileUrl) {
      alert("please select assignment file");
    }
    // console.log(formData);
    setFormData((prev: object) => ({ ...prev, ...data }));
    updateAssignment({
      id: id,
      name: formData.name,
      description: formData.description,
      fileUrl: formData.fileUrl,
      key: formData.key,
      comment: formData.comment,
      score: formData.score,
      submissionAttempts: formData.submissionAttempts,
      availFrom: formData.availFrom,
      availUntil: formData.availUntil,
    });
  };

  useEffect(() => {
    if (isError) {
      toast.error("Assignment has update error");
    } else if (isSuccess) {
      toast.success("Assignment has updated Successfully!");
      router.push(`/dashboard/assignment/all-assignments`);
    }
  }, [isError, isSuccess]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<assignmentType>({
    defaultValues: {
      name: assignmentData.name,
      description: assignmentData.description,
      fileUrl: assignmentData.fileUrl,
      comment: assignmentData.comment,
      score: assignmentData.score,
      availFrom: assignmentData.availFrom,
      availUntil: assignmentData.availUntil,
      key: assignmentData.key,
    },
  });
  // console.log(assignmentData)

  return (
    <div className="grid  lg:grid-cols-12 w-full justify-between gap-x-8">
      <div className="lg:col-span-8  col-span-12">
        <form onSubmit={handleSubmit(assignmentHandler)}>
          <AssignementNaming
            register={register}
            setValue={setValue}
            errors={errors}
            description={assignmentData.description}
          />
          <AssignmentFile
            setValue={setValue}
            errors={errors}
            register={register}
          />
          <UploadFileTypes register={register} errors={errors} />
          <div className="hidden lg:block">
            <AssignmentUploadButtons isLoading={isLoading} />
          </div>
        </form>
      </div>
      <div className="lg:col-span-4 col-span-12 ">
        <form onSubmit={handleSubmit(assignmentHandler)}>
          <AssignmentScoreDeclare register={register} errors={errors} />
          <AssignmentDue register={register} errors={errors} />
          <div className="block lg:hidden">
            <AssignmentUploadButtons isLoading={isLoading} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AssignmentCreation;
