import axios from "axios";
import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";

export default function Inquire() {
  const [message, setMessage] = useState([]);
  useEffect(() => {
    try {
      const fetchdata = async () => {
        const { data }: any = await axios.get(
          "https://www.pacecode.com.np/api/v1/contact/message"
        );

        setMessage(data.data);
      };

      fetchdata().catch(console.error);
    } catch (error) {}
  }, []);
  return (
    <AdminLayout>
      <div className="flex flex-wrap">
        {message &&
          message.map((a: any, index: any) => (
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
    </AdminLayout>
  );
}
