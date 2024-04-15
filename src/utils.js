import { v4 } from "uuid";
import { randomColor } from "randomcolor";

export const createTodo = (itemText, setItemText, setItems) => {
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
        y: Math.floor(Math.random() * -300),
      },
    };
    setItems((prevItems) => [...prevItems, newItem]);
    setItemText("");
  } else {
    alert("Please enter something");
    setItemText("");
  }
};
