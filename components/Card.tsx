import Image from "next/image";
import React from "react";
import FormatQuoteOutlinedIcon from "@mui/icons-material/FormatQuoteOutlined";
import { borderRadius } from "@mui/system";

export default function Card({ items }: any) {
  return (
    <div className="flex max-sm:flex-col  ">
      {/* <div className="flex items-center">
        <Image
          width={100}
          height={100}
          src={items.logo}
          alt={items.companyName}
        ></Image>
        <div>{items.companyName}</div>
      </div> */}
      <div className="flex flex-col items-center sm:ml-10">
        <div>
          <FormatQuoteOutlinedIcon
            style={{ color: "#0279b1", height: "1rem" }}
          ></FormatQuoteOutlinedIcon>
          {items.message}
          <FormatQuoteOutlinedIcon
            style={{ color: "#0279b1", height: "1rem" }}
          ></FormatQuoteOutlinedIcon>
        </div>
        <div className="flex items-center">
          <div className="mr-3">
            <Image
              width={100}
              height={100}
              src={items.img ? items.img : "/images/avatar.png"}
              alt={items.name}
              style={{ height: "2.5rem", width: "2.5rem", borderRadius: "50%" }}
            ></Image>
          </div>
          <div className="flex flex-col items-center">
            {" "}
            <div className="text-lg ">{items.name} </div>
            <div className="text-sm text-gray-400">
              {items.position}
              {items.additionalPosition && ", "}
              {items.additionalPosition && items.additionalPosition}{" "}
              {items.companyName && "| "}
              {items.companyName}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
