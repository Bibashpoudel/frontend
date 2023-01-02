/* eslint-disable @next/next/no-img-element */
import { Paper } from "@mui/material";
import Image from "next/image";

import React from "react";

export default function Slider({ image, customImg, shortDesc }: any) {
  return (
    <Paper style={{ position: "relative" }}>
      {customImg ? (
        <>
          <div
            className=" w-full "
            // width={1200}
            // height={600}
            // src={customImg}
            // alt="theam"
            // quality={100}
            style={{
              backgroundImage: `url('${customImg.src}')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              minHeight: "550px",
              height: "100%",
              backgroundPosition: "center center",
              backgroundAttachment: "fixed",

              zIndex: "-1000",
            }}
          />
          <div
            className="absolute w-full"
            style={{
              height: "550px",
              backgroundColor: "black",
              opacity: ".5",
              zIndex: "1000",
              top: "0%",
            }}
          ></div>
        </>
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
        style={{ top: "50%", zIndex: "10000" }}
      >
        {shortDesc && (
          <>
            <div className="text-2xl max-sm:text-lg text-white">
              {shortDesc?.title}
            </div>
            <div className="text-lg max-sm:text-md c-text ">
              <span style={{ fontWeight: "300" }}> {shortDesc?.desc}</span>
            </div>
          </>
        )}
      </div>
    </Paper>
  );
}
