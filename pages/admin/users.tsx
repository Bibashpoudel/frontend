import axios from "axios";
import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";

export default function Users() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    try {
      const fetchdata = async () => {
        const { data }: any = await axios.get(
          "https://www.pacecode.com.np/api/v1/contact/news-letter/users"
        );

        setUser(data.data);
      };

      fetchdata().catch(console.error);
    } catch (error) {}
  }, []);

  return (
    <AdminLayout title={"Admin"} description={"Admin site of pacecode"}>
      {user &&
        user.map((a: any, index: any) => (
          <div key={index} className="card">
            {a.email}
          </div>
        ))}
    </AdminLayout>
  );
}
