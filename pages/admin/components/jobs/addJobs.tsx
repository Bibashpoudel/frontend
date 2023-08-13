import axios from "axios";
import { getURL } from "next/dist/shared/lib/utils";
import dynamic from "next/dynamic";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { set, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import slugify from "slugify";

import Swal from "sweetalert2";
import {
  addJob,
  getAdminJobsDetails,
  getJobDetails,
} from "../../../../redux/actions/jobs.Action";
import { JOB_ADD_RESET } from "../../../../redux/constant/jobs.constants";
import abc from "../../../../utils/abc";
import getLocal from "../../../../utils/getlocal";
import { RootState } from "../../../../utils/store";
import { checkUrl } from "../../../../utils/url";

export default function AddJobs({ id }: any) {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [formData, setFormData] = useState({}) as any;
  const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });
  const jobId = id;

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
    reset,
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
      reset();
      setContent("");
      dispatch({
        type: JOB_ADD_RESET,
      });
    }
  }, []);
  const URL = checkUrl();
  console.log("url", URL);
  const token = getLocal();
  useMemo(async () => {
    if (jobId) {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `http://localhost:5001/api/v1/jobs/get-job/${jobId}`, // Remove the extra curly brace here
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token?.access_token}`,
              },
            }
          );

          if (response.ok) {
            const responseData = await response.json(); // Add await here
            setFormData(responseData);
          } else {
            console.log(
              "Response not OK:",
              response.status,
              response.statusText
            );
          }
        } catch (error) {
          console.log("Error fetching data:", error);
        }
      };

      fetchData();
      console.log(fetchData());
    }
  }, [jobId, token]);
  if (error === "Unauthorized") {
    console.log("Unauthorized");
    abc();
  }
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
              value={formData.isPreview}
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
            value={formData.title}
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
            value={formData.stack}
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
