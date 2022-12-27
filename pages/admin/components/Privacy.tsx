import React, { useEffect, useMemo, useRef, useState } from "react";

import dynamic from "next/dynamic";
import axios from "axios";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { addPrivacy, getPrivacy } from "../../../redux/actions/settings.action";
import { useSelector } from "react-redux";
import { RootState } from "../../../utils/store";
import {
  ADD_ITEMS_RESET,
  ADD_PRIVACY_RESET,
} from "../../../redux/constant/settings.constants";
export async function getServerSideProps(context: any) {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default function Privacy() {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const JoditEditor = dynamic(() => import("jodit-react"), { ssr: true });
  const config: any = { placeholder: "start writing...." };

  const privacyAdd = useSelector((state: RootState) => state.addPrivacy);
  const { loading: a_loading, error: a_error, success }: any = privacyAdd;

  const privacyGet = useSelector((state: RootState) => state.getPrivacy);
  const { loading, error, privacy }: any = privacyGet;
  const dispatch = useDispatch();
  const submit = (id: any) => {
    console.log("id", id);
    dispatch(addPrivacy(id, content) as any);
  };

  if (success) {
    // Swal.fire("Successfull!", "Privacy updated successfully!", "success");

    dispatch({
      type: ADD_PRIVACY_RESET,
    });
    dispatch(getPrivacy() as any);
  }

  useEffect(() => {
    dispatch(getPrivacy() as any);
  }, [dispatch]);

  return (
    <div>
      <div className="">
        {
          <JoditEditor
            ref={editor}
            value={privacy?.data[0].privacyData}
            config={config}
            //onChange={(newContent) => setContent(newContent)}
            onBlur={(value) => {
              setContent(value);
            }} // preferred to use only this option to update the content for performance reasons
          />
        }
      </div>
      <div>
        <input
          type="submit"
          value="Add"
          className=" w-full rounded-md border py-3 button-primary text-base cursor-pointer transition "
          onClick={() => submit(privacy?.data[0]._id)}
        />
      </div>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  );
}
