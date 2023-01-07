import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Layout from "../../components/Layout";
import { getJobDetails } from "../../redux/actions/jobs.Action";
import { RootState } from "../../utils/store";

export default function bibash() {
  const router = useRouter();
  const { query } = useRouter();

  const { slug } = query;

  console.log("slug", slug);

  const jobDetails = useSelector((state: RootState) => state.jobDetails);
  const { loading, error, job }: any = jobDetails;

  const dispatch = useDispatch();
  useEffect(() => {
    console.log("bibash");
    if (slug) {
      dispatch(getJobDetails(slug) as any);
    }
  }, [slug]);
  console.log(job);
  return (
    <Layout title={job?.data?.title - job?.data?.stack} loading={loading}>
      <div className="bg-gray-300 h-12 flex  flex-col justify-center">
        <div className="container pl-2 pr-2  m-auto ">
          <div className="h-auto">
            <span className="c-text">career </span>
            <span className="text-gray-500">
              / {job?.data?.title}-{job?.data?.stack}
            </span>
          </div>
        </div>
      </div>
      <div className="container pl-2 pr-2  m-auto mt-10 c-job-des">
        <div className="flex justify-between">
          <div className="text-2xl max-md:text-lg c-text">
            {" "}
            {job?.data?.title}-{job?.data?.stack}
          </div>
          <div>
            <button
              className="button-primary p-4 max-md:p-2"
              onClick={() => {
                sessionStorage.setItem(
                  "Apply",
                  `${job?.data?.title}-${job?.data?.stack}`
                );
                router.push(`apply/${job?.data?.slug}`);
              }}
            >
              Apply For this Position
            </button>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: job?.data?.content }}></div>
        <div className="flex mt-4 mb-4 flex-col items-center">
          <button
            className="button-primary p-4 max-md:p-2"
            onClick={() => {
              sessionStorage.setItem(
                "Apply",
                `${job?.data?.title}-${job?.data?.stack}`
              );
              router.push(`apply/${job?.data?.slug}`);
            }}
          >
            Apply For this Position
          </button>
        </div>
      </div>
    </Layout>
  );
}
