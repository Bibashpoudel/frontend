import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import React from "react";
import { useForm } from "react-hook-form";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import ContactMailIcon from "@mui/icons-material/ContactMail";
import Link from "next/link";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

export default function Footer({ nav }: any) {
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const submitHandler = async ({ email }: any) => {
    try {
      const { data } = await axios.post(
        "https://www.pacecode.com.np/api/v1/contact/news-letter",
        {
          email,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      if (data) {
        Swal.fire(
          "Successfull!",
          "Your email has been save successfully!",
          "success"
        );
        setValue("email", "");
        setTimeout(() => {
          router.push(router.pathname);
        }, 5000);
      }
    } catch (error) {}
  };
  return (
    <div className=" grid grid-cols-1 gap-4 max-md:gap-8 md:grid-cols-2 lg:grid-cols-4 ">
      <div className="flex  flex-col  p-4">
        <div className="font-bold  text-lg" style={{ color: "#0279b1" }}>
          Pace Code
        </div>
        <div>
          <p>
            We keep a high velocity in our work to match with the pace of your
            business and help them grow along, Because we value growing
            together.
          </p>
        </div>
      </div>
      <div className="flex flex-col  p-4">
        <div className="font-bold  text-lg" style={{ color: "#0279b1" }}>
          Links
        </div>
        <div className="flex flex-col">
          {nav.map((item: any, id: any) => (
            <div key={id}>
              <Link href={item.path}>{item.title}</Link>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col p-4">
        <div className="font-bold  text-lg" style={{ color: "#0279b1" }}>
          {" "}
          News Letter
        </div>
        <div>
          <form className="" onSubmit={handleSubmit(submitHandler)}>
            <div className="">
              <input
                type="text"
                {...register("email", {
                  required: "Please enter email",
                  pattern: {
                    value: /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                    message: "Please enter valid Email",
                  },
                })}
                placeholder="Email"
                className="
                        w-full
                        rounded-md
                        border
                        bordder-[#E9EDF4]
                        py-3
                        px-5
                        bg-[#FCFDFE]
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
              />
              {errors.email && (
                <div className="text-red-500">
                  {(errors.email as any).message}
                </div>
              )}
            </div>

            <div className="mt-2  ">
              <input
                type="submit"
                value="Submit"
                className="
                        newsLetter
                        w-full
                        rounded-md
                        border
                        
                        py-3
                        bg-primary
                        text-base text-green
                        cursor-pointer
                        
                        transition
                        "
              />
            </div>
          </form>
        </div>
      </div>
      <div className="flex  flex-col p-4">
        <div className="font-bold  text-lg" style={{ color: "#0279b1" }}>
          Follow us on
        </div>
        <div className="flex">
          <span className="pr-2 c-icon">
            {" "}
            <Link href="https://www.instagram.com/pace.code/" target="_blank">
              <Instagram
                aria-hidden="true"
                className="text-red-500 "
              ></Instagram>
            </Link>
          </span>
          <span className="pr-2 c-icon">
            {" "}
            <Link
              href="https://www.facebook.com/Pace-Code-107596282187044"
              target="_blank"
            >
              <Facebook
                aria-hidden="true"
                style={{ color: "#4267B2" }}
              ></Facebook>
            </Link>
          </span>
          <span className="pr-2 c-icon">
            {" "}
            <Link
              href="https://www.linkedin.com/company/pacecode/"
              target="_blank"
            >
              <LinkedIn
                aria-hidden="true"
                style={{ color: "#0072b1" }}
              ></LinkedIn>
            </Link>
          </span>
          <span className="c-icon">
            {" "}
            <Link href="https://twitter.com/Pace__Code" target="_blank">
              {" "}
              <Twitter
                aria-hidden="true"
                style={{ color: "#1DA1F2" }}
              ></Twitter>
            </Link>
          </span>
        </div>
        {/* <div className="mt-2 text-gray-500 p-1">
          <SmartphoneIcon className="h-5"></SmartphoneIcon> +977 9748307013
        </div> */}
        <div className="text-gray-500 p-1">
          <LocationOnIcon className="h-5"></LocationOnIcon> Kathmandu, Nepal
        </div>
        <div className="text-gray-500 p-1">
          <ContactMailIcon className="h-5"></ContactMailIcon>{" "}
          info@pacecode.com.np
        </div>
      </div>
    </div>
  );
}
