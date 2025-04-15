import toast from 'react-hot-toast';
import { useForm } from "react-hook-form";
import React, { useState, Fragment, useMemo, useEffect } from "react";
import { useSingleAssignmentQuery } from "../../../../../../feature/api/dashboardApi";
import { useRouter } from "next/router";
import AssignmentCreations from "./AssignmentCreation";

const AssignmentEdit = () => {
  const router = useRouter();
  const id = router.query.id;
  const { data:assignmentData, isSuccess:assignmentIsSuccess, isError:assignmentIsError, isLoading:assignmentLoading } = useSingleAssignmentQuery(id);
 // console.log(dataAssignement)
 // console.log(dataAssignement)
 const [dataAssignement, setdataAssignement] = useState()

  useEffect(() => {
    if (assignmentIsError) {
      toast.error("Assignment has added error");
    } else if (assignmentIsSuccess) {
      setdataAssignement(assignmentData.data.assignment)
    }
  }, [assignmentIsError, assignmentIsSuccess]);
  
 

  



  return (
    <> 
       {
        assignmentIsSuccess  && dataAssignement &&
                        <AssignmentCreations data={dataAssignement}/>
       }
    </>
  );
};

export default AssignmentEdit;
