import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos, setTodos, filteredTodos }) {
  return (
    <div>
      <div className="todo-container">
        <ul className="todo-list">
          {filteredTodos.map((el) => {
            return (
              <Todo key={el.id} todo={el} setTodos={setTodos} todos={todos} />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
