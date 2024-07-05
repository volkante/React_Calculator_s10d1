import React, { useReducer } from "react";
import TotalDisplay from "./components/TotalDisplay.jsx";
import CalcButton from "./components/CalcButton.jsx";
import reducer, { initialState } from "./store/reducers.jsx";
import {
  // applyNumber,
  changeOperation,
  clearDisplay,
  equals,
  typeToScreen,
  memoryAdd,
  memoryClear,
  memoryRecall,
} from "./store/actions.jsx";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleButtonClick(event) {
    dispatch(typeToScreen(event.target.value));
  }

  function handleOperationChange(event) {
    dispatch(changeOperation(event.target.value));
  }

  function handleClearDisplay() {
    dispatch(clearDisplay());
  }

  function handleEquals() {
    dispatch(equals());
  }

  function handleMemoryAdd() {
    dispatch(memoryAdd());
  }

  function handleMemoryClear() {
    dispatch(memoryClear());
  }

  function handleMemoryRecall() {
    dispatch(memoryRecall());
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
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
              <CalcButton value={"M+"} onClick={handleMemoryAdd} />
              <CalcButton value={"MR"} onClick={handleMemoryRecall} />
              <CalcButton value={"MC"} onClick={handleMemoryClear} />
            </div>
            <div className="row">
              <CalcButton value={1} onClick={handleButtonClick} />
              <CalcButton value={2} onClick={handleButtonClick} />
              <CalcButton value={3} onClick={handleButtonClick} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={handleButtonClick} />
              <CalcButton value={5} onClick={handleButtonClick} />
              <CalcButton value={6} onClick={handleButtonClick} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={handleButtonClick} />
              <CalcButton value={8} onClick={handleButtonClick} />
              <CalcButton value={9} onClick={handleButtonClick} />
            </div>
            <div className="row">
              <CalcButton value={"+"} onClick={handleOperationChange} />
              <CalcButton value={0} onClick={handleButtonClick} />
              <CalcButton value={"-"} onClick={handleOperationChange} />
            </div>
            <div className="row">
              <CalcButton value={"*"} onClick={handleOperationChange} />
              <CalcButton value={"/"} onClick={handleOperationChange} />
              <CalcButton value={"CE"} onClick={handleClearDisplay} />
            </div>

            <div className="row eq_button">
              <CalcButton value={"="} onClick={handleEquals} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
