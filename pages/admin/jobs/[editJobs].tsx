import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import slugify from "slugify";
import Swal from "sweetalert2";
import { updateJob } from "../../../redux/actions/jobs.Action";
import { UPDATE_JOB_RESET } from "../../../redux/constant/jobs.constants";
import abc from "../../../utils/abc";

import { RootState } from "../../../utils/store";

const AdminLayout = dynamic(() => import("../../../components/AdminLayout"), {
  ssr: false,
});

export async function getServerSideProps({ params }: any) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_VALID_URL}/jobs/admin/get-job/${params.editJobs}`
  );

  const data = await response.json();

  return {
    props: {
      details: data,
    },
  };
}
export default function editJob({ details }: any) {
  const router = useRouter();
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [formData, setFormData] = useState({}) as any;
  const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });
  const jobId = router.asPath.split("/")[3];
  console.log({ jobId });

  const updateJobs = useSelector((state: RootState) => state.updateJobs);
  const { loading, error, success }: any = updateJobs;
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm();
  console.log(details);

  useMemo(() => {
    setValue("title", details.data.title);
    setValue("stack", details.data.stack);
    setContent(details.data.content);
    setValue("preview", details.data.isPreview);
  }, []);
  const dispatch = useDispatch();

  const submitJobs = ({ title, stack, preview }: any) => {
    let slug1 = slugify(title.toLowerCase().trim(), "-");

    let slug2 = slugify(stack.toLowerCase().trim(), "-");
    const slug = `${slug1}-${slug2}`;
    dispatch(updateJob(jobId, content, preview, title, slug, stack) as any);
  };

  useEffect(() => {
    if (success) {
      Swal.fire("Successfull!", "You job has been updated", "success");
      dispatch({
        type: UPDATE_JOB_RESET,
      });
      router.push("/admin/add-jobs");
    }
  }, [success]);

  if (error === "Unauthorized") {
    abc();
  }
  return (
    <AdminLayout title={"Admin"} description={"Admin site of PaceCode"}>
      <div className="container m-auto">
        <div className="flex flex-col">
          <div className="text-2xl c-text text-center">Edit Jobs</div>
          <form onSubmit={handleSubmit(submitJobs)}>
            <div className="flex items-end float-right">
              <div className="flex h-5 items-center ">
                <input
                  id="preview"
                  type="checkbox"
                  {...register("preview", {})}
                  name="preview"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="preview" className="font-medium text-gray-700">
                  Preview
                </label>
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="jobtitle">Job Title</label>
              <input
                type="text"
                {...register("title", {
                  required: "Please enter the Job Title",
                })}
                placeholder="Title of the Job"
                //defaultValue={formData.title}
                className=" w-full rounded-md border bordder-[#E9EDF4] py-3 px-5 bg-[#FCFDFE]text-base text-body-color placeholder-[#ACB6BE]
                outline-none
                focus-visible:shadow-none
                focus:border-primary
                "
              />
              {errors.title && (
                <div className="text-red-500">
                  {(errors.title as any).message}
                </div>
              )}
            </div>
            <div className="mt-4">
              <label htmlFor="stack">Stack</label>
              <input
                type="text"
                {...register("stack", {
                  required: "Please enter technology required",
                })}
                placeholder="Job Stack used"
                //defaultValue={formData.stack}
                className=" w-full rounded-md border bordder-[#E9EDF4] py-3 px-5 bg-[#FCFDFE]text-base text-body-color placeholder-[#ACB6BE]
                outline-none
                focus-visible:shadow-none
                focus:border-primary
                "
              />
              {errors.stack && (
                <div className="text-red-500">
                  {(errors.stack as any).message}
                </div>
              )}
            </div>
            <div className="mt-4">
              <label htmlFor="jobtitle">Job Details</label>
              <JoditEditor
                ref={editor}
                // value={formData.content}
                value={content}
                // onChange={(newContent) => setContent(newContent)}
                onBlur={(value) => {
                  setContent(value);
                }} // preferred to use only this option to update the content for performance reasons
              />
            </div>
            <div className="mt-4">
              <input
                type="submit"
                value="Update"
                className="w-full rounded-md border py-3 button-primary text-base cursor-pointer transition"
              />
            </div>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
}
