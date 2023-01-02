import { join } from "path";
import React, { useEffect, useRef, useState } from "react";
import Layout from "../components/Layout";

import career from "../public/images/career.jpg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useSelector } from "react-redux";
import { RootState } from "../utils/store";
import { useDispatch } from "react-redux";
import { getJobs } from "../redux/actions/jobs.Action";
import Link from "next/link";

export default function Careers(): JSX.Element {
  const jobsList = useSelector((state: RootState) => state.jobsList);
  const { loading, error, jobs }: any = jobsList;

  const [job, setJob] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJobs() as any);
  }, []);

  return (
    <Layout
      title={"Careers"}
      description={
        "Do you have a strong desire to produce influential digital products? Join PaceCode great team of top-notch engineers and innovative thinkers if you want to create top-notch products."
      }
      image={career}
      shortDesc={{
        title: "Where we exchange the culture and talent",
        desc: "With the great knowledge and experience, want to share the environment and culture then go ahead and drop your CV",
      }}
      loading={loading}
    >
      <div className="container m-auto mt-10 mb-10">
        <div className="flex flex-col">
          <div className="text-lg font-bold text-center c-text">
            Creating a fun and enjoyable work environment can lead to improved
            team performance.
          </div>
          <div className="text-center">
            Our organization provides a positive work environment which increase
            motivation and engagement among employees. A fun atmosphere where
            you can foster team spirit and improve communication and
            collaboration among your colleagues, which helps in reducing stress
            leading to improved performance and success for you and the
            organization too.
          </div>

          <div className="mt-10">
            <div className="text-2xl font-bold c-text text-center">
              {" "}
              Current Job Openings
            </div>

            <div className="mt-10">
              {jobs?.data.map((a: any, index: any) => (
                <Link key={index} href={`/career/${a.slug}`}>
                  <div className="border rounded p-4 mt-4 hover:scale-105 duration-1000 hover:shadow">
                    <div>
                      <span className="text-lg font-bold c-text">
                        {a.title} - {a.stack}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <LocationOnIcon className="h-5 c-text"></LocationOnIcon>{" "}
                      Kathmandu, Nepal
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
