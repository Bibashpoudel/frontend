import React, { useEffect, useRef, useState } from "react";
import AdminLayout from "../../components/AdminLayout";

import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  addCategoryAction,
  getCategoriesAction,
} from "../../redux/actions/blog.action";
import { useSelector } from "react-redux";
import { RootState } from "../../utils/store";
import Swal from "sweetalert2";
import { RESET_CATEGORIES } from "../../redux/constant/blog.constants";
import AddCategoires from "./components/blog/addCategoires";
import ListAdd from "./components/listadd";
export async function getServerSideProps(context: any) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
export default function Blog() {
  const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });
  const [blog, setBlog] = useState(true);
  const [cat, setCat] = useState(false);

  const [list, setList] = useState(true);
  const [add, setAdd] = useState(false);

  console.log({ cat }, { add }, { blog }, { list });
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);

  const [page, setPage] = useState();
  const [size, setSize] = useState();

  const listcategories = useSelector(
    (state: RootState) => state.listcategories
  );
  const {
    loading: listCat_load,
    error: listCat_err,
    categoires,
  }: any = listcategories;
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

  useEffect(() => {
    dispatch(getCategoriesAction(page ? page : 1, size ? size : 10) as any);
  }, [dispatch]);

  return (
    <AdminLayout>
      <div>
        <div className="flex  hover:shadow justify-between">
          <div
            className={
              blog
                ? "p-4 cursor-pointer p-hover c-active"
                : "p-4 cursor-pointer p-hover"
            }
            onClick={() => {
              setBlog(true);
              setCat(false);
            }}
          >
            Blog {blog && <div className="hrLine "></div>}
          </div>
          <div
            className={
              cat
                ? "p-4 cursor-pointer p-hover c-active"
                : "p-4 cursor-pointer p-hover"
            }
            onClick={() => {
              setBlog(false);
              setCat(true);
            }}
          >
            Categoires
            {cat && <div className="hrLine "></div>}
          </div>
        </div>
        <div className="mt-2">
          <ListAdd setList={setList} setAdd={setAdd}></ListAdd>
        </div>
        {blog && (
          <>
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
          </>
        )}
        {cat && (
          <div>
            {list && (
              <div>
                {categoires.data.map((a: any, index: number) => (
                  <div className=" " key={index}>
                    {a.name}
                    <span className="mt-10">X</span>
                  </div>
                ))}
              </div>
            )}
            {add && <AddCategoires></AddCategoires>}
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
