import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import Pagination from "../../../../components/pagination";
import { getadminJobs, updateJob } from "../../../../redux/actions/jobs.Action";
import { UPDATE_JOB_RESET } from "../../../../redux/constant/jobs.constants";
import abc from "../../../../utils/abc";
import getLocal from "../../../../utils/getlocal";
import { RootState } from "../../../../utils/store";

export default function ListJobs({ setId, setAdd, setList }: any) {
  const [page, setPage] = useState();
  const [size, setSize] = useState();
  const changePage = (val: any) => {
    setPage(val);
  };

  const changeSize = (value: any) => {
    setSize(value);
  };
  const router = useRouter();
  const dispatch = useDispatch();
  const jobsList = useSelector((state: RootState) => state.jobsList);
  const { loading: l_Loading, error: l_error, jobs } = jobsList;
  const updateJobs = useSelector((state: RootState) => state.updateJobs);

  const {
    loading: u_loading,
    error: u_error,
    success: u_success,
  }: any = updateJobs;

  const update = (e: any, id: any, value: any) => {
    e.preventDefault();

    let abc: boolean;
    if (value == true) {
      abc = false;
    } else {
      abc = true;
    }

    dispatch(updateJob(id, null, abc, null, null, null) as any);
  };

  useEffect(() => {
    dispatch(getadminJobs(page ? page : 1, size ? size : 10) as any);
    if (u_success) {
      dispatch(getadminJobs(page ? page : 1, size ? size : 10) as any);
      dispatch({
        type: UPDATE_JOB_RESET,
      });
    }
  }, [dispatch, page, size, u_success]);
  if (u_error == "Unauthorized" || l_error == "Unauthorized") {
    console.log("Unauthorized");
    abc();
  }
  const token = getLocal();

  const deleteJobs = (id: any) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.delete(
          `${process.env.NEXT_PUBLIC_VALID_URL}/jobs/admin/delete/${id}`,
          {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              Authorization: `Bearer ${token?.access_token}`,
            },
          }
        );
        Swal.fire("Deleted!", "Jobs has been deleted.", "success");
        dispatch(getadminJobs(page ? page : 1, size ? size : 10) as any);
      }
    });
  };

  return (
    <div>
      <div className="container m-auto">
        {l_error && <div>{l_error}</div>}
        {u_error && <div>{u_error}</div>}
        <div className="mt-10">
          {jobs?.data.map((a: any, index: any) => (
            <div
              key={index}
              className="border rounded p-4 mt-4 hover:shadow flex justify-between sm:flex-wrap"
            >
              <div>
                <span className="text-lg font-bold c-text">
                  {a.title} - {a.stack}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-end float-right mr-2">
                  <div
                    className="flex h-5 items-center cursor-pointer"
                    onClick={(e) => update(e, a._id, a.isPreview)}
                  >
                    <input
                      id="preview"
                      type="checkbox"
                      defaultChecked={a.isPreview}
                      name="preview"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="preview"
                      className="font-medium text-gray-700"
                    >
                      Preview
                    </label>
                  </div>
                </div>
                <Link href={`/admin/jobs/${a._id}`}>
                  <div className="ml-3 text-sm text-white bg-green-500 p-2 rounded-md cursor-pointer">
                    Edit
                  </div>
                </Link>
                <div
                  className="ml-3 text-sm text-white bg-red-400 p-2 rounded-md cursor-pointer"
                  onClick={() => deleteJobs(a._id)}
                >
                  Delete
                </div>
              </div>
            </div>
          ))}
        </div>
        <Pagination
          pageSize={jobs?.size}
          setSize={changeSize}
          page={jobs?.page}
          setPage={changePage}
          totalData={jobs?.totaldata}
        ></Pagination>
      </div>
    </div>
  );
}
