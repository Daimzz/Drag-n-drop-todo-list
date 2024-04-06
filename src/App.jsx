import "./App.css";
import { useEffect, useState } from "react";
import { v4 } from "uuid";
import { randomColor } from "randomcolor";
import { TextInput } from "./components/TextInput.jsx";
import { StateButton } from "./components/StateButton.jsx";
import { TodoList } from "./components/TodoList.jsx";
import { Title } from "./components/Title.jsx";
function App() {
  const [itemText, setItemText] = useState("");
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")) || [],
  );
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const inputHandler = (e) => {
    setItemText(e.target.value);
  };
  const enterHandler = () => {
    if (itemText.length > 0) {
      const newItem = {
        id: v4(),
        text: itemText,
        color: randomColor({
          luminosity: "light",
        }),
        checked: false,
        defaultPosition: { x: -100, y: -100 },
        position: {
          x: Math.floor(Math.random() * 300),
          y: Math.floor(Math.random() * 300),
        },
      };
      setItems((prevItems) => [...prevItems, newItem]);
      setItemText("");
    } else {
      alert("Please enter something");
      setItemText("");
    }
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
          onChange={inputHandler}
          value={itemText}
          className={"input-enter"}
          type="text"
          placeholder={"Enter something..."}
        />
        <StateButton onClick={enterHandler} className={"btn-enter"}>
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
