import React, { createContext, useMemo, useReducer } from "react";
import Table from "./Table";
import Form from "./Form";

export const CODE = {
  MINE: -7,
  NORMAL: -1,
  FLAG: -3,
  QUESTION: -2,
  QUESTION_MINE: -4,
  FLAG_MINE: -5,
  CLICKED_MINE: -6,
  OPENED: 0, // 0 이상이면 전부 OPENED로 변경
};

const TabelContext = createContext({
  tabelData: [
    [-1, -1, -1, -1, -1, -1, -1],
    [-7, -1, -1, -1, -1, -1, -1],
    [-1, -7, -1, -7, -7, -1, -1],
    [],
    [],
  ],
  dispatch: () => {},
});

const initialState = {
  tabelData: [],
  timer: 0,
  result: "",
};

export const START_GAME = "START_GAME";

const reducer = (state, action) => {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        tabelData: plantMine(action.row, action.cell, action.mine),
      };
    default:
      return state;
  }
};

const MineSearch = () => {
  // ContextApi 캐싱사용
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(
    () => ({
      tabelData: state.tabelData,
      dispatch,
    }),
    [state.tabelData]
  );

  return (
    <>
      <TabelContext.Provider value={value}>
        <Form />
        <div>{state.timer}</div>
        <Table />
        <div>{state.result}</div>
      </TabelContext.Provider>
    </>
  );
};

export default MineSearch;
