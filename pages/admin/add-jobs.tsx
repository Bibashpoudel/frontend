import React, { useState } from "react";
//import AdminLayout from "../../components/AdminLayout";
// import AddJobs from "./components/jobs/addJobs";
// import ListJobs from "./components/jobs/listJobs";
// import ListAdd from "./components/listadd";

import dynamic from "next/dynamic";

const AddJobs = dynamic(() => import("./components/jobs/addJobs"), {
  ssr: false,
});
const ListJobs = dynamic(() => import("./components/jobs/listJobs"), {
  ssr: false,
});
const ListAdd = dynamic(() => import("./components/listadd"), { ssr: false });
const AdminLayout = dynamic(() => import("../../components/AdminLayout"), {
  ssr: false,
});

export default function AddJob() {
  const [id, setId] = useState("");
  const [list, setList] = useState(true);
  const [add, setAdd] = useState(false);

  return (
    <AdminLayout title={"Admin"} description={"Admin site of PaceCode"}>
      <div className="container m-auto">
        <ListAdd setList={setList} setAdd={setAdd}></ListAdd>
        {add && <AddJobs id={id}></AddJobs>}
        {list && (
          <ListJobs setAdd={setAdd} setId={setId} setList={setList}></ListJobs>
        )}
      </div>
    </AdminLayout>
  );
}
