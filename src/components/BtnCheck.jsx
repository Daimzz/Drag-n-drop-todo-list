import { useRef, useState } from "react";
import { Check } from "./Check.jsx";

/**
 * Компонент кнопки проверки (BtnCheck).
 * @param {function} setItems - Функция для установки нового списка элементов.
 * @param {string} itemId - Идентификатор элемента, который будет изменен.
 * @param {string} itemColor - Исходный цвет элемента.
 * @returns {JSX.Element} Компонент кнопки проверки.
 */
export const BtnCheck = ({ setItems, itemId, itemColor }) => {
  const [check, setCheck] = useState(false);
  //чтобы сохранить изначальный цвет фона
  const initialColor = useRef(itemColor);
  const checkHandler = () => {
    setCheck(!check);
    const newColor = check ? initialColor.current : "#333";
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId
          ? { ...item, checked: !check, color: newColor }
          : item,
      ),
    );
  };
  return (
    <button className={"btn-check"} onClick={checkHandler}>
      <Check color={check ? "#38D15C" : "#333"} />
    </button>
  );
};
