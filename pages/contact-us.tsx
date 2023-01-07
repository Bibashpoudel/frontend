import React, { useEffect } from "react";
import Layout from "../components/Layout";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import ContactMailIcon from "@mui/icons-material/ContactMail";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "../utils/store";
import { useDispatch } from "react-redux";
import { contactUS } from "../redux/actions/news.Action";
import imgContact from "../public/images/contactus.jpg";

export default function Contactus() {
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm();
  const contatcUs = useSelector((state: RootState) => state.contatcUs);
  const { loading, error, success }: any = contatcUs;
  const dispatch = useDispatch();
  const router = useRouter();

  const submitHandler = async ({ fullname, email, phone, message }: any) => {
    dispatch(contactUS(fullname, phone, message, email) as any);
  };
  useEffect(() => {
    if (success) {
      Swal.fire("Successfull!", "Your message has been sent!", "success");
      setValue("email", "");
      setValue("phone", "");
      setValue("fullname", "");
      setValue("message", "");
    }
  }, [success]);
  return (
    <Layout
      title={"Contact Us | Tell us a little about yourself, and your project"}
      description={
        "We would like connecting with you. Tell us a little about yourself, your project, and the best way to contact you. We'll get back to you right away."
      }
      shortDesc={{
        title: "Tell us a little about yourself, and your project",
        desc: "We would like connecting with you. Tell us a little about yourself, your project, and the best way to contact you",
      }}
      image={imgContact}
      loading={loading}
    >
      <div className="contact ">
        <div className="container pl-2 pr-2  flex max-md:flex-col m-auto containers">
          <div className="contactInfo ">
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
                <p>+977 9748307013</p>
              </div>
            </div>
          </div>
          <div className="contactForm w-auto md:ml-20  shadow mb-10">
            <form onSubmit={handleSubmit(submitHandler)} className="p-2">
              <h2 className="text-center c-text sm:text-3xl max-sm:text-xl font-bold">
                Send Message
              </h2>
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
                <input
                  type="phone"
                  {...register("phone", {})}
                  name="phone"
                  autoComplete="off"
                ></input>
                <span>Phone</span>
              </div>
              <div className="inputBox">
                <textarea
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
