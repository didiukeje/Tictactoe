import React from "react";
import Tile from "./Tile.js";
const Board = (props) => {
    return (
        <div className="board" ref={props.ref}>
          <Tile />
        </div>
    );
};
export default Board;
