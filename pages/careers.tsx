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
import { Helmet } from "react-helmet";

export default function Careers(): JSX.Element {
  const jobsList = useSelector((state: RootState) => state.jobsList);
  const { loading, error, jobs }: any = jobsList;

  const [job, setJob] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJobs() as any);
  }, []);

  const description =
    "Do you have a strong desire to produce influential digital products? Join a great team of top engineers and innovative thinkers to create top-notch products.";
  const title = "Join our team to create top-notch products | Pace Code";
  const type = "website";
  const owner = "Pace Code";
  const url = "https://www.pacecode.com.np/careers";
  return (
    <Layout
      title={"Join our team to create top-notch products | Pace Code"}
      description={
        "Do you have a strong desire to produce influential digital products? Join a great team of top engineers and innovative thinkers to create top-notch products."
      }
      image={career}
      shortDesc={{
        title: "Where we exchange the culture and talent",
        desc: "With the great knowledge and experience, want to share the environment and culture then go ahead and drop your CV",
      }}
      loading={loading}
    >
      <Helmet>
        <div itemScope itemType="https://schema.org/Organization">
          <a itemProp="url" href="https://www.pacecode.com.np/careers">
            Carrers
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
      <div className="container pl-2 pr-2  m-auto mt-10 mb-10 ">
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
