import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Layout from "../../components/Layout";
import { getJobDetails } from "../../redux/actions/jobs.Action";
import { RootState } from "../../utils/store";
import { checkUrl } from "../../utils/url";
import API from "../api";
import career from "../public/images/career.jpg";

export async function getServerSideProps({ params }: any) {
  const response = await fetch(
    `http://localhost:5001/api/v1/jobs/get-job/${params.slug}`
  );
  const data = await response.json();

  return {
    props: {
      jobDetails: data,
    },
  };
}
export default function jobDetails({ jobDetails }: any) {
  const router = useRouter();
  const job = jobDetails.data;
  console.log(job);

  const description =
    "Do you have a strong desire to produce influential digital products? Join a great team of top engineers and innovative thinkers to create top-notch products.";
  const title = `${job.title} - ${job.stack} | Pace Code`;
  const type = "website";
  const owner = "Pace Code";
  const url = `https://www.pacecode.com.np/career/${job.slug}`;
  return (
    <Layout title={job.title - job.stack}>
      <Helmet>
        <div itemScope itemType="https://schema.org/Organization">
          <a itemProp="url" href={url}>
            {job.title - job.stack}
          </a>
          <img
            itemProp="logo"
            src="https://pacecode.com.np/image/assets/logo.png"
          />
        </div>
        ‍<title> {title}</title>
        <meta name="title" content={title}></meta>
        <meta name="description" content={description} />
        {/* for facebook */}
        <meta name="title" property="og:title" content={title}></meta>
        <meta
          name="description"
          property="og:description"
          content={description}
        />
        <meta name="url" property="og:url" content={url} />
        <meta name="type" property="og:type" content={type} />
        <meta property="og:image" content="url_to_image" />
        <meta property="og:site_name" content="Pace Code" />
        <meta property="og:locale" content="en_US" />
        <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
        {/* for twiter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content={owner} />
        <meta name="twitter:creator" content={owner} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="url_to_image" />
      </Helmet>
      <div className="bg-gray-300 h-12 flex  flex-col justify-center">
        <div className="container pl-2 pr-2  m-auto ">
          <div className="h-auto">
            <span className="c-text">career </span>
            <span className="text-gray-500">
              / {job.title}-{job.stack}
            </span>
          </div>
        </div>
      </div>
      <div className="container pl-2 pr-2  m-auto mt-10 c-job-des">
        <div className="flex justify-between">
          <div className="text-2xl max-md:text-lg c-text">
            {" "}
            {job.title}-{job.stack}
          </div>
          <div>
            <button
              className="button-primary p-4 max-md:p-2"
              onClick={() => {
                sessionStorage.setItem("Apply", `${job.title}-${job.stack}`);
                router.push(`apply/${job.slug}`);
              }}
            >
              Apply For this Position
            </button>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: job.content }}></div>
        <div className="flex mt-4 mb-4 flex-col items-center">
          <button
            className="button-primary p-4 max-md:p-2"
            onClick={() => {
              sessionStorage.setItem(
                "Apply",
                `${job?.data?.title}-${job.stack}`
              );
              router.push(`apply/${job.slug}`);
            }}
          >
            Apply For this Position
          </button>
        </div>
      </div>
    </Layout>
  );
}
