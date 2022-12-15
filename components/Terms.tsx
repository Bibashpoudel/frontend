import React, { useEffect, useRef, useState } from "react";

import dynamic from "next/dynamic";

export default function Terms() {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

  return (
    <div>
      <div className="">
        <JoditEditor
          ref={editor}
          value={content}
          onChange={(newContent) => setContent(newContent)}
        />
      </div>
    </div>
  );
}
