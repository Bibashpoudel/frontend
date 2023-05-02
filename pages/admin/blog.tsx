import React, { useEffect, useRef, useState } from "react";
import AdminLayout from "../../components/AdminLayout";

import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addCategoryAction } from "../../redux/actions/blog.action";
import { useSelector } from "react-redux";
import { RootState } from "../../utils/store";
import Swal from "sweetalert2";
import { RESET_CATEGORIES } from "../../redux/constant/blog.constants";
export async function getServerSideProps(context: any) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
export default function Blog() {
  const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });
  const [list, setList] = useState(true);
  const [add, setAdd] = useState(false);
  const [cat, setCat] = useState(false);
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);

  const addCategory = useSelector((state: RootState) => state.addCategory);
  const { loading, error, success }: any = addCategory;
  const dispatch = useDispatch();
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

  const addCat = (name: any) => {
    console.log(name);
    dispatch(addCategoryAction((name = name.categories)) as any);
  };

  useEffect(() => {
    if (success) {
      Swal.fire("Successfull!", "Your message has been delivered!", "success");

      setValue("categories", "");
      dispatch({ type: RESET_CATEGORIES });
    }
  }, [success]);

  return (
    <AdminLayout>
      <div>
        <div className="flex border hover:shadow">
          <div
            className={
              list
                ? "p-4 cursor-pointer p-hover c-active"
                : "p-4 cursor-pointer p-hover"
            }
            onClick={() => {
              setList(true);
              setAdd(false);
              setCat(false);
            }}
          >
            List
          </div>
          <div
            className={
              add
                ? "p-4 cursor-pointer p-hover c-active"
                : "p-4 cursor-pointer p-hover"
            }
            onClick={() => {
              setList(false);
              setCat(false);
              setAdd(true);
            }}
          >
            Add
          </div>
          <div
            className={
              cat
                ? "p-4 cursor-pointer w-full text-right p-hover  c-active"
                : "p-4 cursor-pointer w-full text-right p-hover "
            }
            onClick={() => {
              setList(false);
              setAdd(false);
              setCat(true);
            }}
          >
            Add Categories
          </div>
        </div>
        {list && <div>list</div>}
        {add && (
          <div>
            <div>
              <form onSubmit={handleSubmit(addBlog)}>
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
                    // onChange={(newContent) => setContent(newContent)}
                    onBlur={(value) => {
                      setContent(value);
                    }} // preferred to use only this option to update the content for performance reasons
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
              </form>
            </div>
          </div>
        )}
        {cat && (
          <div>
            <form onSubmit={handleSubmit(addCat)}>
              <div className="mb-4">
                <div>Categories Name</div>
                <input
                  type="text"
                  {...register("categories", {
                    required: "categoires is required",
                  })}
                  placeholder="Enter Categories"
                  className=" w-full rounded-md border bordder-[#E9EDF4] py-3 px-5 bg-[#FCFDFE]text-base text-body-color placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                />
                {errors.categories && (
                  <div className="text-red-500">
                    {(errors.categories as any).message}
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
        )}
      </div>
    </AdminLayout>
  );
}
