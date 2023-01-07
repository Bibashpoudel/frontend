import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import Layout from "../../../components/Layout";
import { applyJobAction } from "../../../redux/actions/jobs.Action";
import { APPLY_JOB_RESET } from "../../../redux/constant/jobs.constants";
import { RootState } from "../../../utils/store";

export default function Apply() {
  const [apply, setApply] = useState("") as any;

  const applyjob = useSelector((state: RootState) => state.applyjob);

  const { loading, error, success }: any = applyjob;

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const applyJob = ({ fullName, email, phone, intro, file }: any) => {
    console.log("value", fullName, email, phone, intro, file[0], apply);
    dispatch(
      applyJobAction(fullName, email, phone, intro, file[0], apply) as any
    );
  };

  useEffect(() => {
    const apply = sessionStorage?.getItem("Apply");
    setApply(apply);
    if (success) {
      setValue("fullName", "");
      setValue("email", "");
      setValue("phone", "");
      setValue("intro", "");
      setValue("file", "");
      Swal.fire("Successfull!", "Your Resume has been submitted", "success");
      dispatch({
        type: APPLY_JOB_RESET,
      });
    }
  }, [success]);
  return (
    <Layout title={"Apply Jobs"}>
      <div className="container pl-2 pr-2  m-auto">
        <div className="flex flex-col w-full items-center">
          <div className="flex flex-col  items-center text-2xl c-text font-bold">
            {apply}
          </div>
          <div className="flex flex-col  items-center text-lg text-gray-400">
            Apply for a Position
          </div>
          <div className="flex flex-col w-3/5 max-md:w-4/5 max-sm:w-full">
            <form onSubmit={handleSubmit(applyJob)} className="w-full">
              <div className="mb-4">
                <div>
                  Full Name <span className="text-red-500 text-sm">*</span>
                </div>
                <input
                  type="text"
                  {...register("fullName", {
                    required: "Full Name is required",
                  })}
                  placeholder="Enter your full Name"
                  className=" w-full rounded-md border bordder-[#E9EDF4] py-3 px-5 bg-[#FCFDFE]text-base text-body-color placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                />
                {errors.fullName && (
                  <div className="text-red-500">
                    {(errors.fullName as any).message}
                  </div>
                )}
              </div>
              <div className="mb-4">
                <div>
                  Email <span className="text-red-500 text-sm">*</span>
                </div>
                <input
                  type="text"
                  {...register("email", {
                    required: "Email is required",
                  })}
                  placeholder="Enter your Email"
                  className=" w-full rounded-md border bordder-[#E9EDF4] py-3 px-5 bg-[#FCFDFE]text-base text-body-color placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                />
                {errors.email && (
                  <div className="text-red-500">
                    {(errors.email as any).message}
                  </div>
                )}
              </div>
              <div className="mb-4">
                <div>
                  Phone <span className="text-red-500 text-sm">*</span>
                </div>
                <input
                  type="text"
                  {...register("phone", {
                    required: "Phone number is required",
                  })}
                  placeholder="Enter your Phone Number"
                  className=" w-full rounded-md border bordder-[#E9EDF4] py-3 px-5 bg-[#FCFDFE]text-base text-body-color placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                />
                {errors.phone && (
                  <div className="text-red-500">
                    {(errors.phone as any).message}
                  </div>
                )}
              </div>
              <div className="mb-4 ">
                <div>
                  Introduction <span className="text-red-500 text-sm">*</span>
                </div>
                <div
                  className="text-gray-400 absolute"
                  style={{ top: "7%", left: "90%" }}
                ></div>
                <textarea
                  {...register("intro", {
                    required: "Short Introduction is required",
                  })}
                  placeholder="Introduce yourself"
                  className=" w-full rounded-md border bordder-[#E9EDF4] py-3 px-5 bg-[#FCFDFE]text-base text-body-color placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                />

                {errors.intro && (
                  <div className="text-red-500">
                    {(errors.intro as any).message}
                  </div>
                )}
              </div>
              <div className="mb-4">
                <div>
                  Resume <span className="text-red-500 text-sm">*</span>
                </div>
                <input
                  type="file"
                  {...register("file", {
                    required: "CV is required",
                    validate: {
                      //lessThan10MB: (files) => files[0]?.size < 30000 || "Max 30kb"
                      acceptedFormats: (files) =>
                        ["application/pdf"].includes(files[0]?.type) ||
                        "Only Pdf format is valid",
                    },
                  })}
                  accept=".pdf"
                  placeholder="add your Cv"
                  className=" w-full rounded-md border bordder-[#E9EDF4] py-3 px-5 bg-[#FCFDFE]text-base text-body-color placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                />
                {errors.file && (
                  <div className="text-red-500">
                    {(errors.file as any).message}
                  </div>
                )}
              </div>
              <div className="mb-10">
                <input
                  type="submit"
                  value="Add"
                  className="
                                  w-full
                                  rounded-md
                                  border
                                  py-3
                                  button-primary
                                  text-base 
                                  cursor-pointer
                                  transition
                        "
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
