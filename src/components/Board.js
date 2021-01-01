import React from "react";
import Square from "./Square";

const Board = ({squares, onClick}) => {
  // TODO: Populate the board with squares
  const map = squares.map((value, i) => (<Square key={i} value={value} onClick={() => onClick(i)}/>));

  return (
    <div className='board' >
      {map}
    </div>
    );
  };

export default Board;
