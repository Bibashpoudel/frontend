import React, { useEffect, useRef, useState } from "react";

import dynamic from "next/dynamic";
import { useDispatch } from "react-redux";
import { addTerms, getTerms } from "../../../redux/actions/settings.action";
import { useSelector } from "react-redux";
import { RootState } from "../../../utils/store";
import Swal from "sweetalert2";
import { ADD_ITEMS_RESET } from "../../../redux/constant/settings.constants";
export async function getServerSideProps(context: any) {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default function Terms() {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [id, setId] = useState();

  const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

  const termsAdd = useSelector((state: RootState) => state.addTerms);
  const { loading: a_loading, error: a_error, success }: any = termsAdd;

  const termsGet = useSelector((state: RootState) => state.getTerms);
  const { loading, error, terms }: any = termsGet;
  const config: any = { placeholder: "start writing...." };

  const dispatch = useDispatch();
  if (success) {
    Swal.fire("Successfull!", "Terms added successfully!", "success");

    dispatch({
      type: ADD_ITEMS_RESET,
    });
    dispatch(getTerms() as any);
  }

  useEffect(() => {
    dispatch(getTerms() as any);
  }, []);

  const submit = (id: any) => {
    console.log("called hallpy");

    dispatch(addTerms(id, content) as any);
  };
  //console.log("content", content);

  return (
    <div>
      <div className="">
        <JoditEditor
          ref={editor}
          value={terms?.data[0]?.termsData}
          config={config}
          onBlur={(value) => {
            setContent(value);
          }}
        />
      </div>

      <div>
        <button
          onClick={() => submit(terms?.data[0]?._id)}
          className="rounded-md border button-primary w-full py-3 text-base cursor-pointer transition"
        >
          Add
        </button>
      </div>
    </div>
  );
}
