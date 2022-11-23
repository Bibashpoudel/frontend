import Image from "next/image";
import React from "react";
import FormatQuoteOutlinedIcon from "@mui/icons-material/FormatQuoteOutlined";

export default function Card({ items }: any) {
  return (
    <div className="flex max-sm:flex-col">
      {/* <div className="flex items-center">
        <Image
          width={100}
          height={100}
          src={items.logo}
          alt={items.companyName}
        ></Image>
        <div>{items.companyName}</div>
      </div> */}
      <div className="flex flex-col items-center ml-10">
        <div>
          <FormatQuoteOutlinedIcon></FormatQuoteOutlinedIcon>
          {items.message}
          <FormatQuoteOutlinedIcon></FormatQuoteOutlinedIcon>
        </div>
        <div className="flex items-center">
          <div className="mr-3">
            <Image
              width={100}
              height={100}
              src={items.img ? items.img : "/images/avatar.png"}
              alt={items.name}
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
