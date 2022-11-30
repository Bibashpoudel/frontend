/* eslint-disable @next/next/no-img-element */
import { Paper } from "@mui/material";
import Image from "next/image";

import React from "react";

export default function Slider({ image }: any) {
  return (
    <Paper>
      <div></div>
      <Image
        className="w-full"
        width={1200}
        height={600}
        src={image.image}
        alt="theam"
        quality={100}
      />
      <div className="absolute font-bold text-3xl text-white c-slider"></div>
    </Paper>
  );
}
