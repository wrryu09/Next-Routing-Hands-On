import React from "react";
import Board from "../Board";
import Image from "next/image";
import sumsimsImg from "../../../assets/sumsimsImg.jpg";
const Sumsims = () => {
  return (
    <Board>
      <Image src={sumsimsImg} alt="sumsims" className="w-full h-full" />
    </Board>
  );
};

export default Sumsims;
