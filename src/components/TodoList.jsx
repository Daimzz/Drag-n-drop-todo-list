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
  //После перезагрузки страницы координаты х и у обновляются
  const updatePosition = (data, index) => {
    let newItems = [...items];
    newItems[index].defaultPosition = { x: data.x, y: data.y };
    setItems((_) => newItems);
  };
  return (
    <div className={"todo-wrapper"}>
      {items.length > 0 &&
        items.map((item, index) => {
          return (
            <Draggable
              key={item.id}
              positionOffset={item.position}
              defaultPosition={item.defaultPosition}
              onStop={(_, data) => {
                updatePosition(data, index);
              }}
              grid={[1, 1]}
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
                          color: "#e8e4e4",
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
