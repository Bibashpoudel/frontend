import Layout from "../components/Layout";
import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import Card from "../components/Card";

export default function Home(): JSX.Element {
  const services = [
    {
      title: "Custom Software Development",
      description:
        "We help enterprises develop their custom software as per the needs not compromising on quality with the help of Our highly experienced team, top engineering practice and creativity.",
    },
    {
      title: "Web and Moblie App Development",
      description:
        "Now integrate your web application to the comfort of your hand as we are experts to incorporate and develop both web and mobile applications using cross platform and native framework.",
    },
    {
      title: "Enterprise System Development",
      description:
        "Our highly experienced team, top engineering practice and creativity will ensure a highly integrated Enterprise system that will support your business process, information flows, reporting and data analysis.",
    },
    {
      title: "Application Testing",
      description:
        "We scrutinize each and every functionality of an application, its integration, security, and usability.Our team makes sure ease in usability of the application.",
    },
    {
      title: "Maintenance & Support",
      description:
        "Our relation does not end just after the delivery of the product but we have a trusted network of customers where we are known not just for our products but also our after sales service and support. We have a super team dedicated for maintenance and support service for all our clients.",
    },
  ];
  const values = [
    {
      title: "Integrity",
      description:
        "Strong ethics is a priority for the company's wholesome behaviour.",
      logo: "/images/integrity.png",
    },
    {
      title: "Employee Satisfaction",
      description:
        "Customers will never love a company untill the employees love it first.",
      logo: "/images/employee.png",
    },
    {
      title: "Teamwork",
      description:
        "When working together we have the capability of creating something greater for the humankind.",
      logo: "/images/teamwork.png",
    },
    {
      title: "Quality",
      description:
        "We try to harness and maintain the highest standards with consistency for our products and services.",
      logo: "/images/quality.png",
    },
    {
      title: "Customer Satisfaction",
      description:
        "We feel responsible towards the customers, we try to build trust and work towards it by providing support even after our job is over. Afterall, customers are family. ",
      logo: "/images/logo.png",
    },
  ];
  const experties = [
    {
      title: "Backend",
      items: [
        {
          name: "Node",
        },
        {
          name: "java",
        },
        {
          name: "Python",
        },
      ],
    },
    {
      title: "Database",
      items: [
        {
          name: "MongoDb",
        },
        {
          name: "MySQL",
        },
        {
          name: "Postgre SQL",
        },
        {
          name: "Oracle",
        },
        {
          name: "SQLite",
        },
      ],
    },
    {
      title: "Testing",
      items: [
        {
          name: "cypress",
        },
        {
          name: "Selenium",
        },
        {
          name: "Postman",
        },

        {
          name: "insomnia",
        },
      ],
    },
    {
      title: "Cloud and DevOps",
      items: [
        {
          name: "Digital Ocean",
        },
        {
          name: "Amazon Web Services",
        },
        {
          name: "Google Cloud",
        },
        {
          name: "Cloud Flare",
        },
        {
          name: "Docker",
        },
        {
          name: "Kuberneties",
        },
      ],
    },
    {
      title: "Frontend",
      items: [
        {
          name: "React",
        },
        {
          name: "Vue",
        },
        {
          name: "Next",
        },
      ],
    },
    {
      title: "Mobility",
      items: [
        { name: "Flutter" },
        { name: "React Native" },
        {
          name: "iOS",
        },
        {
          name: "Android",
        },
      ],
    },
  ];
  const testimonial = [
    {
      message:
        "Pace Code has helped in providing a proper solutions for our CRM, Now our customer database are secure than ever and analysis are an ease. Thank you for your upfront support. Cheers to the team for their dedicated work.",
      position: "CEO",
      additionalPosition: "",
      name: "Sunim Mainali",

      companyName: "",
      logo: "/images/logo.png",
    },
    {
      message: "Sevenoath",
      position: "Co-founder",
      additionalPosition: "CA",
      name: "Rohit Lamichanne",

      companyName: "Sevenoath",
      logo: "/images/logo.png",
    },
    {
      message: "abc",
      position: "CEO",
      additionalPosition: "",
      name: "Sunim Mainali",

      companyName: "some",
      logo: "/images/logo.png",
    },
  ];
  return (
    <>
      <Layout title={"Home Page"}>
        <div className="">
          <div className="p-4 flex justify-center ">
            <div className="font-bold text-3xl" style={{ color: "#0279b1" }}>
              Our Service
            </div>
          </div>
          <div
            className="custom-bg mb-10"
            style={{
              backgroundImage: `url("https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350%22")`,
            }}
          >
            <div className=" container m-auto">
              <div className=" grid grid-cols-1 gap-4 md:grid-cols-2 sm:grid-cols-2  lg:grid-cols-3 ">
                {services.map((item: any, id: any) => (
                  <div
                    className="mt-10 relative flex justify-center items-center text-black shadow-md bg-stone-100 rounded-md c-hover "
                    style={{ minHeight: "20rem" }}
                    key={id}
                  >
                    <div className="flex flex-col p-4 text-center">
                      <div className="p-4 font-bold text-lg">
                        <h1 className="hover-text">{item.title}</h1>
                      </div>
                      <div className="p-4">{item.description}</div>
                    </div>
                    {/* <div className="absolute right-0 bottom-0  c-service-view  p-2 rounded-br-md">
                      View More
                    </div> */}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="container m-auto custom-moto">
            <div className="flex float-right">
              <div>
                <Image
                  height={100}
                  width={3000}
                  className="h-28 max-w-96 w-full rounded-l-md"
                  src="/images/teamwork.jpg"
                  alt=""
                />
              </div>
              <div className="flex p-6 items-center justify-center c-moto-text rounded-r-md font-bold w-full max-w-96 max-md:text-lg max-sm:text-sm  text-xl text-white">
                <p>
                  {" "}
                  Our expertise will help you create a better Business Model
                </p>
              </div>
            </div>
          </div>

          <div className="container m-auto mt-44">
            <div
              className="flex justify-center text-2xl font-bold border-b-2 shadow-md p-2"
              style={{ color: "#0279b1" }}
            >
              Experties
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4  lg:grid-cols-6 mt-10">
              {experties.map((item: any, id: any) => (
                <div className="flex flex-col" key={id}>
                  <div className="font-bold c-text" key={id}>
                    {item.title}
                  </div>
                  {item.items.map((vars: any, abc: any) => (
                    <div key={abc}>{vars.name}</div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="container m-auto mb-4">
            <div className="flex flex-col ">
              <div className="flex justify-center">
                <div
                  className="font-bold text-2xl mt-10 mb-4"
                  style={{ color: "#0279b1" }}
                >
                  {" "}
                  Our Core Value
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 sm:grid-cols-2  lg:grid-cols-3">
                {values.map((item: any, id: any) => (
                  <div
                    key={id}
                    className="flex flex-col justify-center max-sm:items-start max-sm:justify-start items-center hover:shadow-md hover:scale-105 rounded-md hover:border-t-4 p-2 duration-700"
                  >
                    <div className="h-20 w-20">
                      <Image
                        height={100}
                        width={100}
                        src={item.logo}
                        alt="logo"
                      ></Image>
                    </div>
                    <div className="font-bold text-lg hover:primary c-text">
                      {item.title}
                    </div>
                    <div className="">{item.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="container m-auto mb-4">
            <div className="flex justify-center font-bold text-xl c-text mb-4">
              {" "}
              What Client Say About Us
            </div>
            <Swiper
              loop={true}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              {testimonial.map((item: any, id: any) => (
                <SwiperSlide key={id}>
                  {" "}
                  <Card items={item} key={id} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Layout>
    </>
  );
}
