import React, { useState } from "react";
import { Helmet } from "react-helmet";
import BlogCategoires from "../components/BlogCategoires";
import Layout from "../components/Layout";
import blog from "../public/images/blogs.png";

export default function Blog() {
  const description =
    "A blog is a collection of insights and advice by experienced engineers at Pace Code. Increase your knowledge with Pace Code.";
  const title = "Find solutions and important articles through us | Pace Code";
  const type = "website";
  const owner = "Pace Code";
  const url = "https://www.pacecode.com.np/blog";

  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectionChange = (selectedItems: any) => {
    setSelectedItems(selectedItems);
  };
  console.log(selectedItems);

  return (
    <>
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
      >
        <Helmet>
          <div itemScope itemType="https://schema.org/Organization">
            <a itemProp="url" href="https://www.pacecode.com.np/blog">
              Blog
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
        <div className="container m-auto">
          <BlogCategoires onSelectionChange={handleSelectionChange} />

          <div className="bg-white pt-10 pb-10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto grid max-w-2xl grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-16  border-gray-200 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                <article className="flex max-w-xl flex-col items-start justify-between border rounded ">
                  <div className="rounded w-full">
                    <img
                      className="w-full"
                      src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="p-2">
                    <div className="flex items-center gap-x-4 text-xs">
                      <time dateTime="2020-03-16" className="text-gray-500">
                        Mar 16, 2020
                      </time>
                      <a
                        href="#"
                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                      >
                        Marketing
                      </a>
                    </div>
                    <div className="group relative">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <a href="#">
                          <span className="absolute inset-0"></span>
                          Boost your conversion rate
                        </a>
                      </h3>
                      <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                        Illo sint voluptas. Error voluptates culpa eligendi. Hic
                        vel totam vitae illo. Non aliquid explicabo
                        necessitatibus unde. Sed exercitationem placeat
                        consectetur nulla deserunt vel. Iusto corrupti dicta.
                      </p>
                    </div>
                    <div className="relative mt-8 flex items-center gap-x-4">
                      <img
                        src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                        className="h-10 w-10 rounded-full bg-gray-50"
                      />
                      <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                          <a href="#">
                            <span className="absolute inset-0"></span>
                            Michael Foster
                          </a>
                        </p>
                        <p className="text-gray-600">Co-Founder / CTO</p>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="flex max-w-xl flex-col items-start justify-between">
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime="2020-03-16" className="text-gray-500">
                      Mar 16, 2020
                    </time>
                    <a
                      href="#"
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      Marketing
                    </a>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href="#">
                        <span className="absolute inset-0"></span>
                        Boost your conversion rate
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                      Illo sint voluptas. Error voluptates culpa eligendi. Hic
                      vel totam vitae illo. Non aliquid explicabo necessitatibus
                      unde. Sed exercitationem placeat consectetur nulla
                      deserunt vel. Iusto corrupti dicta.
                    </p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <img
                      src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                      className="h-10 w-10 rounded-full bg-gray-50"
                    />
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        <a href="#">
                          <span className="absolute inset-0"></span>
                          Michael Foster
                        </a>
                      </p>
                      <p className="text-gray-600">Co-Founder / CTO</p>
                    </div>
                  </div>
                </article>
                <article className="flex max-w-xl flex-col items-start justify-between">
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime="2020-03-16" className="text-gray-500">
                      Mar 16, 2020
                    </time>
                    <a
                      href="#"
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      Marketing
                    </a>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href="#">
                        <span className="absolute inset-0"></span>
                        Boost your conversion rate
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                      Illo sint voluptas. Error voluptates culpa eligendi. Hic
                      vel totam vitae illo. Non aliquid explicabo necessitatibus
                      unde. Sed exercitationem placeat consectetur nulla
                      deserunt vel. Iusto corrupti dicta.
                    </p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <img
                      src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                      className="h-10 w-10 rounded-full bg-gray-50"
                    />
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        <a href="#">
                          <span className="absolute inset-0"></span>
                          Michael Foster
                        </a>
                      </p>
                      <p className="text-gray-600">Co-Founder / CTO</p>
                    </div>
                  </div>
                </article>
                <article className="flex max-w-xl flex-col items-start justify-between">
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime="2020-03-16" className="text-gray-500">
                      Mar 16, 2020
                    </time>
                    <a
                      href="#"
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      Marketing
                    </a>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href="#">
                        <span className="absolute inset-0"></span>
                        Boost your conversion rate
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                      Illo sint voluptas. Error voluptates culpa eligendi. Hic
                      vel totam vitae illo. Non aliquid explicabo necessitatibus
                      unde. Sed exercitationem placeat consectetur nulla
                      deserunt vel. Iusto corrupti dicta.
                    </p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <img
                      src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                      className="h-10 w-10 rounded-full bg-gray-50"
                    />
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        <a href="#">
                          <span className="absolute inset-0"></span>
                          Michael Foster
                        </a>
                      </p>
                      <p className="text-gray-600">Co-Founder / CTO</p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
