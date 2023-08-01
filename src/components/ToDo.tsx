import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faTrash,
  faSquareCheck,
  faSquare,
} from "@fortawesome/free-solid-svg-icons";

import { ToDoPropsInterface } from "../interface";

const ToDo: React.FC<ToDoPropsInterface> = ({ todo, toggleComplete, deleteTodo, editTodo }) => {
  const handleToggleComplete = () => {
    toggleComplete(todo.id);
  };

  const handleEdit = () => {
    editTodo(todo.id);
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  const handleChecked = () => {
    toggleComplete(todo.id);
  };
  return (
    <div className="to-do">
      <div>
        {todo.completed ? (
          <FontAwesomeIcon icon={faSquareCheck} aria-label="Complete" onClick={handleChecked} />
        ) : (
          <FontAwesomeIcon icon={faSquare} aria-label="Incomplete" onClick={handleChecked} />
        )}
      </div>
      <p
        onClick={handleToggleComplete}
        className={`${todo.completed ? "completed" : ""}`}
      >
        {todo.task}
      </p>
      <div className="todo-icons">
        <FontAwesomeIcon icon={faPenToSquare} aria-label="Edit" onClick={handleEdit} />
        <FontAwesomeIcon icon={faTrash} aria-label="Delete" onClick={handleDelete} />
      </div>
    </div>
  );
};

export default ToDo;
