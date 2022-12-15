import React, { useRef, useState } from "react";
import AdminLayout from "../../components/AdminLayout";

import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
export default function Blog() {
  const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });
  const [list, setList] = useState(true);
  const [add, setAdd] = useState(false);
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm();
  const addtags = (e: any) => {
    e.preventDefault();
    const abc: any = [];
    const value: any = e.target.value.split(",");
    value.map((a: any) => {
      const trimtext = a.trim();
      const noSpace = trimtext.split(" ").join("");
      abc.push(noSpace.toLowerCase());
    });

    setTags(abc);
  };
  const addBlog = () => {};

  return (
    <AdminLayout>
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
          <div>
            <div>
              <form onSubmit={handleSubmit(addBlog)}> </form>
              <div className="mb-4">
                <div>Titles</div>
                <input
                  type="text"
                  {...register("company", {
                    required: "Please enter the company name",
                  })}
                  placeholder="Title of the Blog"
                  className=" w-full rounded-md border bordder-[#E9EDF4] py-3 px-5 bg-[#FCFDFE]text-base text-body-color placeholder-[#ACB6BE]
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
                <div>Image</div>
                <input
                  type="file"
                  {...register("image", {
                    required: "Please add ",
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
                <div>Tags</div>
                <input
                  type="text"
                  placeholder="seperate tags with comma  eg: AI, NepalAI, Machine learning"
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
                  onChange={addtags}
                />
              </div>
              <div className="">
                <JoditEditor
                  ref={editor}
                  value={content}
                  onChange={(newContent) => setContent(newContent)}
                />
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
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
