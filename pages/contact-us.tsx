import React from "react";
import Layout from "../components/Layout";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import ContactMailIcon from "@mui/icons-material/ContactMail";
import { useForm } from "react-hook-form";

export default function Contactus() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const submitHandler = ({ fullname, email, phone, message }: any) => {
    console.log(fullname, email, phone, message);
  };
  return (
    <Layout title={"Contact Us"}>
      <div className="contact bg-gray-300">
        <div className="container flex justify-between max-md:flex-col m-auto containers">
          <div className="contactInfo md:w-1/2 text-white">
            <div className="boxs">
              <div className="icons">
                <LocationOnIcon
                  style={{
                    color: "#0279b1",
                    height: "2.5rem",
                    width: "2.5rem",
                  }}
                ></LocationOnIcon>
              </div>
              <div className="texts">
                <h3>Address</h3>
                <p>Kathmandu 46200, Nepal</p>
              </div>
            </div>
            <div className="boxs">
              <div className="icons">
                <ContactMailIcon
                  style={{
                    color: "#0279b1",
                    height: "2.5rem",
                    width: "2.5rem",
                  }}
                ></ContactMailIcon>
              </div>
              <div className="texts">
                <h3>Email</h3>
                <p>info@pacecode.com.np</p>
              </div>
            </div>
            <div className="boxs">
              <div className="icons">
                <SmartphoneIcon
                  style={{
                    color: "#0279b1",
                    height: "2.5rem",
                    width: "2.5rem",
                  }}
                ></SmartphoneIcon>
              </div>
              <div className="texts">
                <h3>Phone</h3>
                <p>+977 9863025214</p>
              </div>
            </div>
          </div>
          <div className="contactForm w-auto mb-10 mt-4">
            <form onSubmit={handleSubmit(submitHandler)}>
              <h2>Send Message</h2>
              <div className="inputBox">
                <input
                  type="text"
                  {...register("fullname", {
                    required: "Please Enter your Name",
                  })}
                  name="fullname"
                  autoComplete="off"
                ></input>
                <span>Full Name</span>
              </div>
              {errors.fullname && (
                <div className="text-red-500">
                  {(errors.fullname as any).message}
                </div>
              )}
              <div className="inputBox">
                <input
                  type="email"
                  autoComplete="off"
                  {...register("email", {
                    required: "Please Enter your Email",
                    pattern: {
                      value: /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                      message: "Please enter valid Email",
                    },
                  })}
                  name="email"
                ></input>
                <span>Email</span>
              </div>
              {errors.email && (
                <div className="text-red-500">
                  {(errors.email as any).message}
                </div>
              )}
              <div className="inputBox">
                <input type="phone" name="phone" autoComplete="off"></input>
                <span>Phone</span>
              </div>
              <div className="inputBox">
                <textarea
                  type="text"
                  {...register("message", {
                    required: "Please Enter your Message",
                  })}
                  name="message"
                  autoComplete="off"
                ></textarea>
                <span>Type your Message</span>
              </div>
              {errors.message && (
                <div className="text-red-500">
                  {(errors.message as any).message}
                </div>
              )}
              <div className="inputBox">
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
