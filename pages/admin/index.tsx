import { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import CKeditor from "../../components/Ckeditor";

export default function Home(): JSX.Element {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState("");
  useEffect(() => {
    setEditorLoaded(true);
  }, []);
  return (
    <AdminLayout>
      <div className="p-10">
        <CKeditor
          name="description"
          onChange={(data: any) => {
            setData(data);
          }}
          editorLoaded={editorLoaded}
          value={data}
        />
        <div className=""> {JSON.stringify(data)}</div>
        <div className="" dangerouslySetInnerHTML={{ __html: data }} />
      </div>
    </AdminLayout>
  );
}
