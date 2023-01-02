import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import AdminLayout from "../../components/AdminLayout";
import Pagination from "../../components/pagination";
import { getContactUs, getNewsLetter } from "../../redux/actions/news.Action";
import { RootState } from "../../utils/store";

export default function Inquire() {
  const [message, setMessage] = useState([]);
  const [page, setPage] = useState();
  const [size, setSize] = useState();

  const messagesList = useSelector((state: RootState) => state.messagesList);
  const { loading, error, messages }: any = messagesList;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContactUs(page ? page : 1, size ? size : 10) as any);
  }, [dispatch, page, size]);
  const changePage = (val: any) => {
    setPage(val);
  };

  const changeSize = (value: any) => {
    console.log(value);
    setSize(value);
  };
  return (
    <AdminLayout>
      <div className="flex flex-wrap">
        {messages?.data.map((a: any, index: any) => (
          <div key={index} className="card p-4  bg-gray-300 m-1  ">
            <div>
              <span>Full Name: </span>
              <strong> {a.fullName}</strong>
            </div>
            <div>
              <span>Email: </span>
              <strong> {a.email}</strong>
            </div>
            {a.phone && (
              <div>
                {" "}
                <span>Phone: </span>
                <strong> {a.phone}</strong>
              </div>
            )}
            <div>
              {" "}
              <span>Message: </span>
              <strong> {a.message}</strong>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        pageSize={messages?.size}
        setSize={changeSize}
        page={messages?.page}
        setPage={changePage}
        totalData={messages?.totaldata}
      ></Pagination>
    </AdminLayout>
  );
}
