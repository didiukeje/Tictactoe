import React, { useEffect, useRef, useState } from "react";
import "./TicTacToe.css";
const TicTacToe = (props) => {
  let { player1, player2 } = props;
  const [turn, setTurn] = useState(0); // 0 means 'P1' , 1 means 'P2'
  const [dataList, setDataList] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const [winner, setWinner] = useState("");
  const ref = useRef(null);

  const resetGame = () => {
    const board = Array.from(ref.current.children);
    board.forEach((cell) => {
      cell.innerText = "";
    });
    setWinner("");
    setDataList(["", "", "", "", "", "", "", "", ""]);
    setTurn(0);
  };

  //Matching Row wise
  const checkRowMatch = () => {
    let matchRes = false;
    for (let i = 0; i < 9; i += 3) {
      if (
        dataList[i] === dataList[i + 1] &&
        dataList[i] === dataList[i + 2] &&
        dataList[i] !== ""
      ) {
        console.log("");
        matchRes = true;
      }
    }
    console.log("row", matchRes);
    return matchRes;
  };

  // Matching Column Wise
  const checkColMatch = () => {
    let matchRes = false;
    for (let i = 0; i < 3; i++) {
      if (
        dataList[i] === dataList[i + 3] &&
        dataList[i] === dataList[i + 6] &&
        dataList[i] !== ""
      ) {
        matchRes = true;
      }
    }
    return matchRes;
  };

  // Matching Diagonal Wise
  const checkDiagonalMatch = () => {
    let matchRes = false;
    if (
      (dataList[0] === dataList[4] &&
        dataList[0] === dataList[8] &&
        dataList[0] !== "") ||
      (dataList[2] === dataList[4] &&
        dataList[2] === dataList[6] &&
        dataList[2] !== "")
    ) {
      matchRes = true;
    }
    return matchRes;
  };

  // Check for Tie
  const checkForTie = () => {
    let nonEmptyCell = true;
    dataList.forEach((col) => {
      if (col === "") {
        nonEmptyCell = false;
      }
    });
    return nonEmptyCell;
  };

  const checkWinner = () => {
    if (checkRowMatch() || checkColMatch() || checkDiagonalMatch()) {
      setWinner(turn === 0 ? `${player1} Wins!!` : `${player2} Wins!!`);
    } else if (checkForTie()) {
      setWinner("It's a tie");
    }
    setTurn(turn === 0 ? 1 : 0);
  };

  const playMyTurn = (e, index) => {
    if (e.target.innerText === "") {
      const currentVal = turn === 0 ? "X" : "0";
      let dataListArry = dataList;
      dataListArry[index] = currentVal; // Set new Value to DataList Array
      setDataList(dataListArry); // Update Data List
      e.target.innerText = currentVal;
      checkWinner();
    } else {
      return false;
    }
  };

  return (
    <>
      <div className="board-container">
        <div className="board" ref={ref}>
          <div className="cell" onClick={(e) => playMyTurn(e, 0)}></div>
          <div className="cell" onClick={(e) => playMyTurn(e, 1)}></div>
          <div className="cell" onClick={(e) => playMyTurn(e, 2)}></div>
          <div className="cell" onClick={(e) => playMyTurn(e, 3)}></div>
          <div className="cell" onClick={(e) => playMyTurn(e, 4)}></div>
          <div className="cell" onClick={(e) => playMyTurn(e, 5)}></div>
          <div className="cell" onClick={(e) => playMyTurn(e, 6)}></div>
          <div className="cell" onClick={(e) => playMyTurn(e, 7)}></div>
          <div className="cell" onClick={(e) => playMyTurn(e, 8)}></div>
        </div>
        {winner !== "" && (
          <>
            <div className="winner-table">
              <span className="winner-text">{winner}</span>
            </div>
          </>
        )}
      </div>
      <div className="gamecontrols">
        <button className="resetBtn" onClick={(e) => resetGame()}>
          {" "}
          Reset Game
        </button>
      </div>
    </>
  );
};

export default TicTacToe;
