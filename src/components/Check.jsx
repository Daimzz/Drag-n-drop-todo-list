import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
/**
 * @param {string} color - Массив элементов списка.
 * @returns {JSX.Element} Список перетаскиваемых элементов.
 */
export const Check = ({ color }) => {
  return <FontAwesomeIcon color={color} icon={faCheck} size={"lg"} />;
};
