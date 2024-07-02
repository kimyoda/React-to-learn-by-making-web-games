import React, { act, useCallback, useReducer, useState } from "react";
import Table from "./Table";

const initalState = {
  winner: "",
  turn: "0",
  tableData: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ],
};

const SET_WINNER = "SET_WINNER";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_WINNER:
      // 기존에서 새로운 state를 만들어 바뀔 부분만 바꾸기
      return {
        ...state,
        winner: action.winner,
      };
  }
};

// useRedcuer
const TicTacTeo = () => {
  const [state, dispatch] = useReducer(reducer, initalState);
  // const [winner, setWinner] = useState("");
  // const [turn, setTurn] = useState("0");
  // const [tabelData, setTableData] = useState(
  //   ["", "", ""],
  //   ["", "", ""],
  //   ["", "", ""]
  // );

  const onClickTable = useCallback(() => {
    dispatch({ type: SET_WINNER, winner: "O" });
  }, []);

  return (
    <>
      <Table onClick={onClickTable} tableData={state.tableData} />
      {state.winner && <div>{state.winner}님의 승리</div>}
    </>
  );
};

export default TicTacTeo;
