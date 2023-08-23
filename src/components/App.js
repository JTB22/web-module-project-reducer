import React, { useState, useReducer } from "react";

import "./App.css";

import TotalDisplay from "./TotalDisplay";
import CalcButton from "./CalcButton";
import { initialState, reducer } from "../reducers/index";
import {
  applyNumber,
  addOne,
  changeOperation,
  clear,
  memPlus,
  memRecall,
  memClear,
} from "../actions/index";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          {" "}
          Reducer Challenge
        </a>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} onClick={() => dispatch(memPlus())} />
              <CalcButton value={"MR"} onClick={() => dispatch(memRecall())} />
              <CalcButton value={"MC"} onClick={() => dispatch(memClear())} />
            </div>

            <div className="row">
              <CalcButton
                value={1}
                onClick={(e) => dispatch(applyNumber(parseInt(e.target.value)))}
              />
              <CalcButton
                value={2}
                onClick={(e) => dispatch(applyNumber(parseInt(e.target.value)))}
              />
              <CalcButton
                value={3}
                onClick={(e) => dispatch(applyNumber(parseInt(e.target.value)))}
              />
            </div>

            <div className="row">
              <CalcButton
                value={4}
                onClick={(e) => dispatch(applyNumber(parseInt(e.target.value)))}
              />
              <CalcButton
                value={5}
                onClick={(e) => dispatch(applyNumber(parseInt(e.target.value)))}
              />
              <CalcButton
                value={6}
                onClick={(e) => dispatch(applyNumber(parseInt(e.target.value)))}
              />
            </div>

            <div className="row">
              <CalcButton
                value={7}
                onClick={(e) => dispatch(applyNumber(parseInt(e.target.value)))}
              />
              <CalcButton
                value={8}
                onClick={(e) => dispatch(applyNumber(parseInt(e.target.value)))}
              />
              <CalcButton
                value={9}
                onClick={(e) => dispatch(applyNumber(parseInt(e.target.value)))}
              />
            </div>

            <div className="row">
              <CalcButton
                value={"+"}
                onClick={(e) => dispatch(changeOperation(e.target.value))}
              />
              <CalcButton
                value={"*"}
                onClick={(e) => dispatch(changeOperation(e.target.value))}
              />
              <CalcButton
                value={"-"}
                onClick={(e) => dispatch(changeOperation(e.target.value))}
              />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => dispatch(clear())} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
