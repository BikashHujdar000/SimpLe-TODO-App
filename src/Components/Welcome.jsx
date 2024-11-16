import { useContext } from "react";
import styles from "./Welcome.module.css";
import { TodoItemsContext } from "../store/todoiItemsStore";
const Welcome = () => {
  const itemsObj = useContext(TodoItemsContext);

  const items = itemsObj.items;
  return items.length === 0 && <p className={styles.wel}>Enjoy Your Day</p>;
};
export default Welcome;
