import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
export default function ListAdd({ setList, setAdd }: any) {
  const [list, setHList] = useState(true);
  const [add, setHAdd] = useState(false);
  return (
    <div className="flex justify-between">
      <div
        className={`px-4 py-1 cursor-pointer flex items-center  rounded-xl ${
          list ? "bg-emerald-500 text-white" : "bg-zinc-200"
        }`}
        onClick={() => {
          setList(true);
          setAdd(false);
          setHList(true);
          setHAdd(false);
        }}
      >
        <span>List</span> <TextSnippetIcon />
      </div>
      <div
        className={`px-4 py-1 cursor-pointer flex items-center  rounded-xl ${
          add ? "bg-emerald-500 text-white" : "bg-zinc-200"
        }`}
        onClick={() => {
          setList(false);
          setAdd(true);
          setHList(false);
          setHAdd(true);
        }}
      >
        <AddIcon></AddIcon> <span>Add</span>
      </div>
    </div>
  );
}
