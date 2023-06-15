import React from "react";
import Layout from "../components/Layout";
import blog from "../public/images/blogs.png";

export default function Blog() {
  return (
    <Layout
      title={"Find solutions and important articles through us | Pace Code"}
      description={
        "A blog is a collection of insights and advice by experienced engineers at Pace Code. Increase your knowledge with Pace Code."
      }
      image={blog}
      shortDesc={{
        title: "Pace Code",
        desc: "Enhance you knowledge and also, Get other to know",
      }}
    ></Layout>
  );
}
