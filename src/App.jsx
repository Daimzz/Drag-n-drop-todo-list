import "./App.css";
import { useEffect, useState } from "react";
import { TextInput } from "./components/TextInput.jsx";
import { StateButton } from "./components/StateButton.jsx";
import { TodoList } from "./components/TodoList.jsx";
import { Title } from "./components/Title.jsx";
import { createTodo } from "./utils.js";
function App() {
  const [itemText, setItemText] = useState("");
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items"))?.filter(
      (item) => item.checked === false,
    ) || [],
  );
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const inputHandler = (e) => {
    setItemText(e.target.value);
  };

  const closeAllHandler = () => {
    setItems([]);
  };

  return (
    <>
      <Title />
      <div className={"wrapper"}>
        <TodoList setItems={setItems} items={items} />

        <TextInput
          onKeyPress={(e) =>
            e.key === "Enter" && createTodo(itemText, setItemText, setItems)
          }
          onChange={inputHandler}
          value={itemText}
          className={"input-enter"}
          type="text"
          placeholder={"Enter something..."}
        />
        <StateButton
          onClick={() => createTodo(itemText, setItemText, setItems)}
          className={"btn-enter"}
        >
          Enter
        </StateButton>
        <StateButton onClick={closeAllHandler} className={"btn-closeAll"}>
          Close all
        </StateButton>
      </div>
    </>
  );
}

export default App;
