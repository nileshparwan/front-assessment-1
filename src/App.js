import React, { useState } from "react";

function App() {
  const [userInput, userInputState] = useState("");
  const [shoppingLists, setshoppingLists] = useState([]);

  const OnSubmit = (event) => {
    event.preventDefault();
    userInput !== "" && setshoppingLists(props => [...props, userInput]);
  };

  const MemoizeUserInputValue = React.useCallback((value) => {
    userInputState(value);
  }, []);

  const DeleteItemHandler = (e, index) => {
    e.preventDefault();
    const list = [...shoppingLists];
    list.splice(index, 1);
    setshoppingLists(list);
  };

  return (
    <div className="App">
      <h1>My shopping List</h1>
      <form style={{ marginBottom: "30px", display: "flex" }}>
        <label htmlFor="list">
          Enter a new item: 
          <input type="text" name="list" value={userInput} onChange={(e) => MemoizeUserInputValue(e.currentTarget.value)} />
        </label>
        <button onClick={OnSubmit}>Add</button>
      </form>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {
          shoppingLists.map((item, index) => {
            return (
              <div style={{ maxWidth: "308px", flexGrow: 0, flexShrink: 1, display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                <span>{item}</span>
                <button onClick={(e) => DeleteItemHandler(e, index)}>remove</button>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default App;
