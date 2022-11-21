import Image from "next/image";
import React from "react";

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
        <div>{items.message}</div>
        <div className="flex items-center">
          <div>
            <Image
              width={100}
              height={100}
              src={items.img ? items.img : "/images/avatar.png"}
              alt={items.name}
            ></Image>
          </div>
          <div className="flex flex-col items-center">
            {" "}
            <div>{items.name} </div>
            <div>
              {items.position}{" "}
              {items.additionalPosition && items.additionalPosition} |{" "}
              {items.companyName}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
