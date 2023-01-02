import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import AdminLayout from "../../components/AdminLayout";
import Pagination from "../../components/pagination";
import { getNewsLetter } from "../../redux/actions/news.Action";
import { RootState } from "../../utils/store";

export default function Users() {
  const [page, setPage] = useState();
  const [size, setSize] = useState();

  const newsList = useSelector((state: RootState) => state.newsList);
  const { loading, error, news }: any = newsList;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewsLetter(page ? page : 1, size ? size : 10) as any);
  }, [dispatch, page, size]);
  const changePage = (val: any) => {
    setPage(val);
  };

  const changeSize = (value: any) => {
    console.log(value);
    setSize(value);
  };

  return (
    <AdminLayout title={"Admin"} description={"Admin site of pacecode"}>
      {news?.data?.map((a: any, index: any) => (
        <div key={index} className="card">
          {a.email}
        </div>
      ))}
      <Pagination
        pageSize={news?.size}
        setSize={changeSize}
        page={news?.page}
        setPage={changePage}
        totalData={news?.totaldata}
      ></Pagination>
    </AdminLayout>
  );
}
