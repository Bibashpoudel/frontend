import React, { useState } from "react";

export default function Pagination({
  totalData,
  page,
  setPage,
  pageSize,
  setSize,
}: any) {
  const [pageSize1, setPageSize1] = useState(10);
  const [addPage, setAddPage] = useState() as any;
  let newPage = Math.ceil(totalData / pageSize1);

  const changeSize = (e: any) => {
    setPageSize1(e.target.value);
    setSize(e.target.value);
  };

  const increasePage = () => {
    setPage(page + 1);
  };
  const decreasePage = () => {
    setPage(page + -1);
  };

  return (
    <div className="flex w-full h-10 bg-gray-100 text-black justify-end items-center p-2">
      <div className=" p-2">
        <select
          name=""
          id=""
          disabled={page > 1}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e: any) => changeSize(e)}
        >
          <option value="1">1</option>
          <option value="10" selected>
            10
          </option>
          <option value="25">25</option>
        </select>
      </div>
      <div className="p-2">
        {pageSize == 1 ? page : pageSize == 10 ? page * 10 - 9 : page * 25 - 24}{" "}
        - {pageSize1 > totalData ? totalData : page} of {totalData}
      </div>
      <div className="flex p-2">
        <div className="p-2  ">
          <button
            disabled={page <= 1 ? true : false}
            className=" disabled:opacity-20 cursor-pointer"
            onClick={decreasePage}
          >
            {"<"}
          </button>
        </div>
        <button
          disabled={page >= newPage ? true : false}
          className=" disabled:opacity-20 cursor-pointer"
          onClick={increasePage}
        >
          {">"}
        </button>
      </div>
    </div>
  );
}
