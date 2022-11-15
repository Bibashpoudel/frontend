import Carousel from "react-material-ui-carousel";

import Layout from "../components/Layout";
import Slider from "../components/Slider";
import Background from "../public/images/abc.webp";

import slideImage from "../utils/imageslider";

export default function Home() {
  console.log(Background);
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
                {[
                  {
                    title: "Custom Software Development",
                    description: `We combine decades of experience, top software engineering, and creativity to bring you the best software development`,
                    path: "",
                  },
                  {
                    title: "Enterprise System Development",
                    description: `We provide the next generation solutions to improve an organization's and business using our experties of differnet sectors`,
                  },
                  {
                    title: "Web and Moblie App Development",
                    description: `We design and develop native and cross platform applaction using different framework and run in different browser. Our design are responsive and user friendly`,
                  },
                  {
                    title: "Maintenance & Support",
                    description: `Our job is not done after building your software for you. We continue working with all our customers to provide high-quality and dedicated support`,
                  },
                  {
                    title: "Application Testing",
                    description: `We test every elemnet of the application: performance, functioning, integrations, security, and usability.`,
                  },
                ].map((item: any, id: any) => (
                  <div
                    className="mt-10 relative flex justify-center items-center shadow-md bg-stone-100 rounded-md c-hover "
                    style={{ minHeight: "20rem" }}
                    key={id}
                  >
                    <div className="flex flex-col p-4 text-center">
                      <div className="p-4 font-bold text-lg">
                        <h1>{item.title}</h1>
                      </div>
                      <div className="p-4">{item.description}</div>
                    </div>
                    <div className="absolute right-0 bottom-0  c-service-view  p-2 rounded-br-md">
                      View More
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="container m-auto custom-moto">
            <div className="flex float-right">
              <div>
                <img
                  className="h-28 max-w-96 w-full rounded-l-md"
                  src="/images/teamwork.jpg"
                  alt=""
                ></img>
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
              {[
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
              ].map((item: any, id: any) => (
                <div className="flex flex-col" key={id}>
                  <div className="font-bold">{item.title}</div>
                  {item.items.map((vars: any) => (
                    <>
                      <div>{vars.name}</div>
                    </>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="container m-auto">
            <div className="flex flex-col ">
              <div className="flex justify-center">
                <div className="font-bold text-2xl mt-10"> Our Models</div>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 sm:grid-cols-2  lg:grid-cols-3">
                {[
                  {
                    title: "Employee Satifaction",
                    description: "some thing descride",
                    logo: "/images/under.jpg",
                  },
                  {
                    title: "Aglie Framework",
                    description: "some thing descride",
                    logo: "/images/under.jpg",
                  },
                  {
                    title: "Customer Satifaction",
                    description: "some thing descride",
                    logo: "/images/under.jpg",
                  },
                ].map((item: any, id: any) => (
                  <div
                    key={id}
                    className="flex flex-col justify-center items-center hover:shadow-md hover:scale-105 rounded-md hover:border-t-4 p-2 duration-700"
                  >
                    <div className="h-20 w-20">
                      <img src={item.logo}></img>
                    </div>
                    <div className="font-bold text-lg">{item.title}</div>
                    <div className="">{item.description}</div>
                  </div>
                ))}
                <div>Bibash</div>
                <div>Bibash</div>
                <div>Bibash</div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
