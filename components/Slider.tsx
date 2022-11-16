/* eslint-disable @next/next/no-img-element */
import { Paper } from "@mui/material";

import React from "react";

export default function Slider({ image }: any) {
  return (
    <Paper>
      <div></div>
      <img className="w-full max-h-96 " src={image.image} alt="bibash"></img>
      <div className="absolute font-bold text-3xl text-white c-slider">
        ENTERPRISE SYSTEM DEVELOPMENT
      </div>
    </Paper>
  );
}
