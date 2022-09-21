import React from "react";

const Tile = ({ playMyTurn, index }) => {
  return (
    <div className="cell" onClick={(e) => playMyTurn(e, index )}></div>
  );
};

export default Tile;