/* eslint-disable @next/next/no-img-element */
import { Paper } from "@mui/material";
import Image from "next/image";

import React from "react";

export default function Slider({ image, customImg, shortDesc }: any) {
  return (
    <Paper style={{ position: "relative" }}>
      {customImg ? (
        <div
          className=" w-full "
          // width={1200}
          // height={600}
          // src={customImg}
          // alt="theam"
          // quality={100}
          style={{
            opacity: "0.5",
            backgroundImage: `url('${customImg.src}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            minHeight: "550px",
            height: "100%",
            backgroundPosition: "center center",
            backgroundAttachment: "fixed",
          }}
        />
      ) : (
        <Image
          className="w-full"
          width={1200}
          height={400}
          src={image.image}
          alt="theam"
          quality={100}
        />
      )}
      <div
        className="conatiner m-auto w-full absolute font-bold   text-center"
        style={{ top: "50%" }}
      >
        {shortDesc && (
          <>
            <div
              className="text-2xl max-sm:text-lg "
              style={{ color: "#0279b1" }}
            >
              {shortDesc?.title}
            </div>
            <div className="text-lg max-sm:text-md text-gray-500 ">
              <span style={{ backgroundColor: "" }}> {shortDesc?.desc}</span>
            </div>
          </>
        )}
      </div>
    </Paper>
  );
}
