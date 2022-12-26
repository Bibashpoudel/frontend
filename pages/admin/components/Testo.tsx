import React, { useState } from "react";
import { useForm } from "react-hook-form";
export async function getServerSideProps(context: any) {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default function Testo() {
  const [list, setList] = useState(true);
  const [add, setAdd] = useState(false);
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm();

  const addTesto = ({ username, password }: any) => {
    console.log(username, password);
  };
  return (
    <div>
      <div className="flex">
        <div
          className="p-4 cursor-pointer"
          onClick={() => {
            setList(true);
            setAdd(false);
          }}
        >
          List
        </div>
        <div
          className="p-4 cursor-pointer"
          onClick={() => {
            setList(false);
            setAdd(true);
          }}
        >
          add
        </div>
      </div>
      {list && <div>list</div>}
      {add && (
        <div className="flex flex-col items-center w-full">
          <div className="font-bold text-lg">Add New Testonomoni</div>
          <div className="w-full">
            <form className="w-full" onSubmit={handleSubmit(addTesto)}>
              <div className="mb-4">
                <div>Client Name</div>
                <input
                  type="text"
                  {...register("clientName", {
                    required: "Please enter name of client ",
                  })}
                  placeholder="Client Name"
                  autoComplete="off"
                  className="
                        w-full
                        rounded-md
                        border
                        bordder-[#E9EDF4]
                        py-3
                        px-5
                        bg-[#FCFDFE]
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                />
                {errors.clientName && (
                  <div className="text-red-500">
                    {(errors.clientName as any).message}
                  </div>
                )}
              </div>
              <div className="mb-4">
                <div>Company Name</div>
                <input
                  type="text"
                  {...register("company", {
                    required: "Please enter the company name",
                  })}
                  placeholder="Company"
                  className="
                        w-full
                        rounded-md
                        border
                        bordder-[#E9EDF4]
                        py-3
                        px-5
                        bg-[#FCFDFE]
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                />
                {errors.company && (
                  <div className="text-red-500">
                    {(errors.company as any).message}
                  </div>
                )}
              </div>
              <div className="mb-4">
                <div>Company Logo</div>
                <input
                  type="file"
                  {...register("logo", {
                    required: "Please add company logo",
                  })}
                  placeholder="Company"
                  className="
                        w-full
                        rounded-md
                        border
                        bordder-[#E9EDF4]
                        py-3
                        px-5
                        bg-[#FCFDFE]
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                />
                {errors.logo && (
                  <div className="text-red-500">
                    {(errors.logo as any).message}
                  </div>
                )}
              </div>
              <div className="mb-4">
                <div>Client Photo</div>
                <input
                  type="file"
                  {...register("image", {
                    required: "Please add client photo",
                  })}
                  placeholder="Image"
                  className="
                        w-full
                        rounded-md
                        border
                        bordder-[#E9EDF4]
                        py-3
                        px-5
                        bg-[#FCFDFE]
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                />
                {errors.image && (
                  <div className="text-red-500">
                    {(errors.image as any).message}
                  </div>
                )}
              </div>
              <div className="mb-4">
                <div>Client Name</div>
                <textarea
                  {...register("message", {
                    required: "Please enter Client Message ",
                  })}
                  placeholder="Client Message"
                  autoComplete="off"
                  className="
                        w-full
                        rounded-md
                        border
                        bordder-[#E9EDF4]
                        py-3
                        px-5
                        bg-[#FCFDFE]
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                />
                {errors.message && (
                  <div className="text-red-500">
                    {(errors.message as any).message}
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
      )}
    </div>
  );
}
