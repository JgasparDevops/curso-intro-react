import {useContext} from "react";
import '../css/CreateTodoButton.css'
import { TodoContext } from "../TodoContext";
function CreateTodoButton() {
  const { openModal, setOpenModal } = useContext(TodoContext);

  const onClickButton = () => {
    setOpenModal(!openModal);
  };

  return (
    <button className="CreateTodoButton" onClick={onClickButton}>
      +
    </button>
  );
}

export { CreateTodoButton }