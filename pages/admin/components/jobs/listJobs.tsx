import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Pagination from "../../../../components/pagination";
import { getadminJobs, updateJob } from "../../../../redux/actions/jobs.Action";
import { UPDATE_JOB_RESET } from "../../../../redux/constant/jobs.constants";
import abc from "../../../../utils/abc";
import { RootState } from "../../../../utils/store";

export default function ListJobs(list: any) {
  const [page, setPage] = useState();
  const [size, setSize] = useState();
  const changePage = (val: any) => {
    setPage(val);
  };

  const changeSize = (value: any) => {
    console.log(value);
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
    console.log(e.target.value);
    let abc: boolean;
    if (value == true) {
      abc = false;
    } else {
      abc = true;
    }
    console.log(abc, id);

    dispatch(updateJob(id, null, abc) as any);
  };

  useEffect(() => {
    if (list) {
      dispatch(getadminJobs(page ? page : 1, size ? size : 10) as any);
    }
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

  return (
    <div>
      <div className="container m-auto">
        {l_error && <div>{l_error}</div>}
        {u_error && <div>{u_error}</div>}
        <div className="mt-10">
          {jobs?.data.map((a: any, index: any) => (
            <div
              key={index}
              className="border rounded p-4 mt-4 hover:shadow flex justify-between"
            >
              <div>
                <span className="text-lg font-bold c-text">
                  {a.title} - {a.stack}
                </span>
              </div>
              <div className="flex ">
                <div className="flex items-end float-right">
                  <div className="flex h-5 items-center ">
                    <input
                      id="preview"
                      type="checkbox"
                      defaultChecked={a.isPreview}
                      onClick={(e) => update(e, a._id, a.isPreview)}
                      name="preview"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
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
