import Draggable from "react-draggable";
import { CloseIcon } from "./CloseIcon.jsx";
import { BtnCheck } from "./BtnCheck.jsx";

/**
 * Компонент TodoList для отображения списка перетаскиваемых элементов.
 * @param {Array<object>} items - Массив элементов списка.
 * @param {Function} setItems - Функция для обновления списка элементов.
 * @returns {JSX.Element} Список перетаскиваемых элементов.
 */
export const TodoList = ({ items, setItems }) => {
  return (
    <div>
      {items.length > 0 &&
        items.map((item) => {
          return (
            <Draggable
              key={item.id}
              positionOffset={item.position}
              defaultPosition={item.defaultPosition}
              grid={[24, 12]}
              scale={1}
            >
              <div className={"draggable-wrapper"}>
                <div
                  title={"Drag me!"}
                  className={"draggable"}
                  style={
                    item.checked
                      ? {
                          backgroundColor: item.color,
                          textDecoration: "line-through",
                          color: "#cbc1c1",
                        }
                      : {
                          backgroundColor: item.color,
                          textDecoration: "none",
                        }
                  }
                >
                  {item.text}
                  <button
                    className={"btn-close"}
                    onClick={() =>
                      setItems(items.filter((i) => i.id !== item.id))
                    }
                  >
                    <CloseIcon />
                  </button>
                  <BtnCheck
                    itemColor={item.color}
                    itemId={item.id}
                    setItems={setItems}
                  />
                </div>
              </div>
            </Draggable>
          );
        })}
    </div>
  );
};
