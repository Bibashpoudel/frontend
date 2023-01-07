import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";

export default function PrivacyPolicy() {
  const [content, setContent] = useState("");
  useEffect(() => {
    try {
      const fetchData = async () => {
        const { data }: any = await axios.get(
          "http://localhost:5001/api/v1/setting/privacy"
        );
        console.log(data.data[0].privacyData);
        setContent(data.data[0].privacyData);
      };
      fetchData().catch(console.error);
    } catch (error) {
      console.log(error);
    }
  }, []);
  console.log(content);
  return (
    <Layout>
      <div className="container pl-1 pr-1m-auto">
        {" "}
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </Layout>
  );
}
