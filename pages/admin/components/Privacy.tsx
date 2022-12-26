import React, { useEffect, useMemo, useRef, useState } from "react";

import dynamic from "next/dynamic";
import axios from "axios";
import Swal from "sweetalert2";
export async function getServerSideProps(context: any) {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default function Privacy() {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [data, setData] = useState("");
  const [id, setId] = useState("");

  const JoditEditor = dynamic(() => import("jodit-react"), { ssr: true });
  const config: any = { placeholder: "start writing...." };
  const submit = async () => {
    try {
      const { data } = await axios.patch(
        `http://localhost:5001/api/v1/setting/add-privacy/${id}`,
        {
          privacyData: content,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      if (data) {
        Swal.fire(
          "Successfull!",
          "Your message has been delivered!",
          "success"
        );
      }
    } catch (error) {}
  };
  useEffect(() => {
    try {
      const fetchData = async () => {
        const { data }: any = await axios.get(
          "http://localhost:5001/api/v1/setting/privacy"
        );
        console.log(data.data[0].privacyData);
        setContent(data.data[0].privacyData);
        setId(data.data[0]._id);
      };
      fetchData().catch(console.error);
    } catch (error) {
      console.log(error);
    }
  }, [data]);
  console.log(content, id);
  return (
    <div>
      <div className="">
        {
          <JoditEditor
            ref={editor}
            value={content}
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
          onClick={() => submit()}
        />
      </div>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  );
}
