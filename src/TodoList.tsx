import React from "react";

const TodoList = (props: iProps) => {
  return (
    <div>
      {props.todos.map(todo => (
        <div>Todo</div>
      ))}
    </div>
  );
};

interface iProps {
  todos: Object[];
  handleChange: () => void;
  removeTodo: () => void;
  toggleTodoState: () => void;
  modifyTodo: () => void;
}

export default TodoList;
