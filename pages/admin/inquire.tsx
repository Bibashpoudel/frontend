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
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
                Message
              </th>
              <th scope="col" className="px-6 py-3">
                Response
              </th>
            </tr>
          </thead>

          {messages?.data.map((a: any, index: any) => (
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th>{a.fullName}</th>
                <td className="px-6 py-4">{a.email}</td>
                <td className="px-6 py-4">{a.phone}</td>
                <td className="px-6 py-4">{a.message}</td>
                <td className="px-6 py-4">
                  <input type="checkbox" defaultChecked={a.isReply} />
                </td>
              </tr>
            </tbody>
          ))}
        </table>
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
