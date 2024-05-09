import React from "react";

const Board = ({ children }) => {
  return (
    <div className="w-full h-80 border border-black rounded-md">{children}</div>
  );
};

export default Board;
