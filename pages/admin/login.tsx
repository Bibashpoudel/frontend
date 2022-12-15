import React, { useMemo, useRef, useState } from "react";
import Layout from "../../components/Layout";

export default function Login(): JSX.Element {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  return (
    <div>
      <div className="container m-auto"></div>

      <div
        className="container m-auto"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
}
