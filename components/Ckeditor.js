import React, { useEffect, useRef } from "react";

export default function CKeditor({ onChange, editorLoaded, name, value }) {
  const editorRef = useRef();
  const { CKEditor, ClassicEditor } = editorRef.current || {};
  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
      ClassicEditor: require("../ckeditor-custom/build/ckeditor"),
    };
  }, []);
  return (
    <div className="">
      {editorLoaded ? (
        <CKEditor
          type=""
          name={name}
          editor={ClassicEditor}
          data={value}
          onChange={(event, editor) => {
            const data = editor.getData();
            onChange(data);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
        />
      ) : (
        <div>Editor loading</div>
      )}
    </div>
  );
}
