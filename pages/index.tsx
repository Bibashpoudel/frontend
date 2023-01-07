import Layout from "../components/Layout";
import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import Card from "../components/Card";

import home from "../public/images/home.png";

export default function Home(): JSX.Element {
  const services = [
    {
      title: "Custom Software Development",
      description:
        "We help enterprises develop their custom software as per the needs not compromising on quality with the help of Our highly experienced team, top engineering practice and creativity.",
    },
    {
      title: "Web  Application Development",
      description:
        "Now integrate your web application to the comfort of your hand as we are experts to incorporate and develop both web and mobile applications using cross platform and native framework.",
    },
    // {
    //   title: "Enterprise System Development",
    //   description:
    //     "Our highly experienced team, top engineering practice and creativity will ensure a highly integrated Enterprise system that will support your business process, information flows, reporting and data analysis.",
    // },
    {
      title: "Mobile Application Development",
      description:
        "we create a fully connected infrastructure to meet your mobile application needs. We develop iOS (iPad/iPhone) and Android apps for mobile devices,  as well as apps that can run on both platforms when cross-platform is desired.",
    },
    // {
    //   title: "Application Testing",
    //   description:
    //     "We scrutinize each and every functionality of an application, its integration, security, and usability.Our team makes sure ease in usability of the application.",
    // },
    {
      title: "IT Consulting",
      description:
        "To provide businesses all around the world with the greatest IT services, we have the best IT talent and specialists working continuously.",
    },
    {
      title: "Maintenance & Support",
      description:
        "Our relation does not end just after the delivery of the product but we have a trusted network of customers where we are known not just for our products but also our after sales service and support. We have a super team dedicated for maintenance and support service for all our clients.",
    },
    {
      title: "Cloud Computing",
      description:
        "We use our extensive knowledge of cloud computing to assist clients all around the world in planning, implementing, and managing their cloud journeys. we provide a committed team of Cloud & DevOps experties to our clients.",
    },
  ];

  const values = [
    {
      title: "Integrity",
      description:
        "Strong ethics is a priority for the company's wholesome behaviour.",
      logo: "/images/integrity1.png",
    },
    {
      title: "Employee Satisfaction",
      description:
        "Customers will never love a company untill the employees love it first.",
      logo: "/images/employee1.png",
    },
    {
      title: "Teamwork",
      description:
        "When working together we have the capability of creating something greater for the humankind.",
      logo: "/images/teamwork1.png",
    },
    {
      title: "Quality",
      description:
        "We try to harness and maintain the highest standards with consistency for our products and services.",
      logo: "/images/quality1.png",
    },
    {
      title: "Customer Satisfaction",
      description:
        "We feel responsible towards the customers, we try to build trust and work towards it by providing support even after our job is over. Afterall, customers are family. ",
      logo: "/images/customer1.png",
    },
    {
      title: "offshore",
      description:
        "According to the needs of the client, we offer a team of offshore engineers and project management officers. ",
      logo: "/images/offshore1.png",
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
          name: "Java",
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
          name: "Cypress",
        },
        {
          name: "Selenium",
        },
        {
          name: "Postman",
        },

        {
          name: "Insomnia",
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
        {
          name: "Jenkins",
        },
        {
          name: "Terraform",
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
      position: "MD",
      additionalPosition: "",
      name: "Sunim Mainali",
      img: "/images/sunim1.jpg",
      companyName: "Barha Thari",
      logo: "/images/logo.png",
    },
    {
      message:
        "Pace Code has helped us designing and devloping our idea to business logic. The team had wide range of the standarlization and clear vision of customer thinking and preference. we are glad to be the part of their service.",
      position: "Co-founder",
      additionalPosition: "CA",
      name: "Rohit Lamichanne",
      img: "/images/rohit.jpeg",
      companyName: "Sevenoath",
      logo: "/images/logo.png",
    },
  ];
  return (
    <>
      <Layout
        title={
          "Pace Code | Exceeding your Expectations in Software Development  "
        }
        description={
          "Pace Code facilitates business owners in developing software products. We specialized in the creation of custom software development, enterprise system development, web and mobile applications, cyber security,  and cloud engineering."
        }
        image={home}
        shortDesc={{
          title:
            "We help you create a better business model, with our expertise",
          desc: "Exceeding your Expectations in Software Development",
        }}
      >
        <div className="">
          <div className="p-4 flex justify-center ">
            <div className="font-bold text-3xl " style={{ color: "#0279b1" }}>
              Our Service
            </div>
          </div>
          <div
            className="custom-bg mb-10"
            style={{
              backgroundImage: `url("https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350%22")`,
            }}
          >
            <div className=" container pl-2 pr-2  m-auto px-1">
              <div className=" grid grid-cols-1 gap-4 md:grid-cols-2 sm:grid-cols-2  lg:grid-cols-3 ">
                {services.map((item: any, id: any) => (
                  <div
                    className="mt-10 relative flex justify-center  text-black shadow-md bg-stone-100 rounded-md c-hover "
                    style={{ minHeight: "20rem" }}
                    key={id}
                  >
                    <div className="flex flex-col p-4 text-center">
                      <div className="p-4 font-bold text-lg ">
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
          <div className="container pl-2 pr-2  m-auto custom-moto px-1">
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

          <div className="container pl-2 pr-2  m-auto mt-44 px-1">
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
          <div className="container pl-2 pr-2  m-auto mb-8 px-1">
            <div className="flex flex-col ">
              <div className="flex justify-center">
                <div
                  className="font-bold text-2xl mt-10 mb-4"
                  style={{ color: "#0279b1" }}
                >
                  {" "}
                  Why work with Us?
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 sm:grid-cols-2  lg:grid-cols-3">
                {values.map((item: any, id: any) => (
                  <div
                    key={id}
                    className="flex flex-col  items-center hover:shadow-md hover:scale-105 rounded-md hover:border-t-4 p-2 duration-700"
                  >
                    <div className="h-20 w-20">
                      <Image
                        height={100}
                        width={100}
                        src={item.logo}
                        alt="logo"
                      ></Image>
                    </div>
                    <div className="font-bold text-lg hover:primary c-text mb-4">
                      {item.title}
                    </div>
                    <div className="text-center">{item.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* <div className="container pl-2 pr-2  m-auto mb-4">
            <div className="flex flex-col ">
              <div className="flex justify-center">
                <div
                  className="font-bold text-2xl mt-10 mb-4"
                  style={{ color: "#0279b1" }}
                >
                  {" "}
                  Why work with Us?
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 sm:grid-cols-2  lg:grid-cols-3">
                {values.map((item: any, id: any) => (
                  <div
                    key={id}
                    className="flex flex-col justify-center max-sm:items-start max-sm:justify-start items-center hover:shadow-md hover:scale-105 rounded-md hover:border-t-4 p-2 duration-700"
                  >
                    <div className="font-bold text-lg hover:primary c-text">
                      {item.title}
                    </div>
                    <div className="">{item.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div> */}
          <div className="w-full bg-transparent">
            <div className="container pl-2 pr-2  m-auto mb-4 px-1">
              <div className="flex justify-center font-bold text-xl c-text mb-4">
                {" "}
                What Client Say About Us?
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
        </div>
      </Layout>
    </>
  );
}
