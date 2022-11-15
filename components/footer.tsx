import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import React from "react";

export default function Footer() {
  return (
    <div className=" grid grid-cols-1 gap-4 max-md:gap-8 md:grid-cols-2 lg:grid-cols-4 ">
      <div className="flex  flex-col  p-4">
        <div className="font-bold  text-lg">Abc</div>
        <div>
          <p>
            The experties and soultion provide by us help you to rise the
            business and reduce the operation. Customer are proud of us for
            providing high quality software and solution{" "}
          </p>
        </div>
      </div>
      <div className="flex flex-col  p-4">
        <div className="font-bold  text-lg">Links</div>
        <div className="flex flex-col">
          <div>Our Service</div>
          <div>Career</div>
          <div>Blog</div>
          <div>About Us</div>
        </div>
      </div>
      <div className="flex flex-col p-4">
        <div className="font-bold  text-lg"> News Letter</div>
        <div>
          <form className="">
            <div className="">
              <input
                type="text"
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
            </div>

            <div className="mt-2  ">
              <input
                type="submit"
                value="Sign In"
                className="
                        w-full
                        rounded-md
                        border
                        border-green-400
                        py-3
                        bg-primary
                        text-base text-green
                        cursor-pointer
                        hover:bg-green-600 hover:text-white
                        transition
                        "
              />
            </div>
          </form>
        </div>
      </div>
      <div className="flex  flex-col p-4">
        <div className="font-bold  text-lg">Follow us on</div>
        <div className="flex">
          <Instagram aria-hidden="true" className="text-red-500"></Instagram>
          <Facebook aria-hidden="true" style={{ color: "#4267B2" }}></Facebook>
          <YouTube aria-hidden="true" style={{ color: "#FF0000" }}></YouTube>
          <Twitter aria-hidden="true" style={{ color: "#1DA1F2" }}></Twitter>
        </div>
      </div>
    </div>
  );
}
