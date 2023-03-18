import React from "react";
import Layout from "../components/Layout";
import blog from "../public/images/blogs.png";

export default function Blog() {
  return (
    <Layout
      title={"Blogs"}
      description={"Find solution and important article through us"}
      image={blog}
      shortDesc={{
        title: "Pace Code",
        desc: "Enhance you knowledge and also, Get other to know",
      }}
    ></Layout>
  );
}
