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

export const SET_WINNER = "SET_WINNER";
export const CLICK_CELL = "CLICK_CELL";
export const CHANGE_TURN = "CHANGE_TURN";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_WINNER:
      // 기존에서 새로운 state를 만들어 바뀔 부분만 바꾸기
      return {
        ...state,
        winner: action.winner,
      };
    case CLICK_CELL: {
      const tableData = [...state.tableData];
      tableData[action.row] = [...tableData[action.row]]; // immer라는 라이브러리로 가독성 문제 해결
      tableData[action.row][action.cell] = state.turn;
      return {
        ...state,
        tableData,
      };
    }
    case CHANGE_TURN: {
      return {
        ...state,
        turn: state.turn === "O" ? "X" : "O",
      };
    }
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
      <Table
        onClick={onClickTable}
        tableData={state.tableData}
        dispatch={dispatch}
      />
      {state.winner && <div>{state.winner}님의 승리</div>}
    </>
  );
};

export default TicTacTeo;
