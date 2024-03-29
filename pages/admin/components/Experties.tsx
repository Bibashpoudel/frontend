import React, { useState } from "react";
import { useForm } from "react-hook-form";

import AddIcon from "@mui/icons-material/Add";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import ListAdd from "./listadd";
export async function getServerSideProps(context: any) {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default function Experties() {
  const [list, setList] = useState(true);
  const [add, setAdd] = useState(false);

  const [items, setItems] = useState([]);

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm();

  const addExperties = ({ title }: any) => {
    console.log(title, items);
  };

  const handleItems = (e: any) => {
    e.preventDefault();
    const abc: any = [];
    const value: any = e.target.value.split(",");
    value.map((a: any) => {
      const trimtext = a.trim();
      abc.push(trimtext.charAt(0).toUpperCase() + trimtext.slice(1));
    });
    setItems(abc);
  };

  return (
    <div>
      <ListAdd setList={setList} setAdd={setAdd}></ListAdd>
      {list && <div>list</div>}

      {add && (
        <div>
          <form className="" onSubmit={handleSubmit(addExperties)}>
            <div className="mb-4">
              <div>Title</div>
              <input
                type="text"
                {...register("title", {
                  required: "Please enter title ",
                })}
                placeholder="Title "
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
              {errors.title && (
                <div className="text-red-500">
                  {(errors.title as any).message}
                </div>
              )}
            </div>
            <div className="mb-4">
              <div>Items</div>
              <input
                type="text"
                placeholder="seperate items with comma  eg: Node,Java"
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
                onChange={handleItems}
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
      )}
    </div>
  );
}
