import dynamic from "next/dynamic";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import slugify from "slugify";
import { addJob } from "../../../redux/actions/jobs.Action";
import { RootState } from "../../../utils/store";
import Swal from "sweetalert2";

export default function AddJobs() {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const addJobs = useSelector((state: RootState) => state.addJobs);
  const { loading, error, success }: any = addJobs;

  const submitJobs = ({ Title, preview, Stack }: any) => {
    console.log("called submit");
    let slug1 = slugify(Title.toLowerCase().trim(), "-");

    let slug2 = slugify(Stack.toLowerCase().trim(), "-");
    const slug = `${slug1}-${slug2}`;

    dispatch(addJob(Title, Stack, content, preview, slug) as any);
  };

  useEffect(() => {
    if (success) {
      Swal.fire("Successfull!", "Your message has been delivered!", "success");
      setContent("");
      setValue("title", "");
      setValue("stack", "");
    }
  }, []);
  return (
    <div className="flex flex-col">
      <div className="text-2xl c-text text-center">Add Jobs</div>
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
            {...register("Title", {
              required: "Please enter the Job Title",
            })}
            placeholder="Title of the Job"
            className=" w-full rounded-md border bordder-[#E9EDF4] py-3 px-5 bg-[#FCFDFE]text-base text-body-color placeholder-[#ACB6BE]
                outline-none
                focus-visible:shadow-none
                focus:border-primary
                "
          />
          {errors.Title && (
            <div className="text-red-500">{(errors.Title as any).message}</div>
          )}
        </div>
        <div className="mt-4">
          <label htmlFor="stack">Stack</label>
          <input
            type="text"
            {...register("Stack", {
              required: "Please enter technology required",
            })}
            placeholder="Job Stack used"
            className=" w-full rounded-md border bordder-[#E9EDF4] py-3 px-5 bg-[#FCFDFE]text-base text-body-color placeholder-[#ACB6BE]
                outline-none
                focus-visible:shadow-none
                focus:border-primary
                "
          />
          {errors.Stack && (
            <div className="text-red-500">{(errors.Stack as any).message}</div>
          )}
        </div>
        <div className="mt-4">
          <label htmlFor="jobtitle">Job Details</label>
          <JoditEditor
            ref={editor}
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
            value="Add"
            className="w-full rounded-md border py-3 button-primary text-base cursor-pointer transition"
          />
        </div>
      </form>
    </div>
  );
}
