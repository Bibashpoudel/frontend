import React, { useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import AddJobs from "./components/jobs/addJobs";
import ListJobs from "./components/jobs/listJobs";
import ListAdd from "./components/listadd";

export async function getServerSideProps(context: any) {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default function AddJob() {
  const [list, setList] = useState(true);
  const [add, setAdd] = useState(false);

  return (
    <AdminLayout title={"Admin"} description={"Admin site of PaceCode"}>
      <div className="container m-auto">
        <ListAdd setList={setList} setAdd={setAdd}></ListAdd>
        {add && <AddJobs></AddJobs>}
        {list && <ListJobs list={list}></ListJobs>}
      </div>
    </AdminLayout>
  );
}
