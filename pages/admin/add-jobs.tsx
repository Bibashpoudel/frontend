import React, { useState } from "react";
import AdminLayout from "../../components/AdminLayout";

import AddJobs from "./components/addJobs";
import ListJobs from "./components/listJobs";
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
        <div className="flex">
          <div
            className={
              list
                ? "p-4 cursor-pointer c-text font-bold"
                : "p-4 cursor-pointer"
            }
            onClick={() => {
              setList(true);
              setAdd(false);
            }}
          >
            List
          </div>
          <div
            className={
              add ? "p-4 cursor-pointer c-text font-bold" : "p-4 cursor-pointer"
            }
            onClick={() => {
              setList(false);
              setAdd(true);
            }}
          >
            Add
          </div>
        </div>
        {add && <AddJobs></AddJobs>}
        {list && <ListJobs list={list}></ListJobs>}
      </div>
    </AdminLayout>
  );
}
