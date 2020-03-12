import React, { useState } from "react";
import TodoList from "./TodoList";

const App: React.FC = () => {
  // NOTE: Init State
  const [todos, setTodos] = useState<ItodoObject[]>([
    {
      id: 1,
      title: "do something",
      completed: false,
      editing: false
    },
    {
      id: 2,
      title: "do something again and over again",
      completed: false,
      editing: false
    }
  ]);

  const [currentId, setCurrentId] = useState<number>(3);

  const [inputs, setInputs] = useState<IinputsInterface>({ newTodo: "" });

  // NOTE: General Functions
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [e.currentTarget.name]: e.currentTarget.value });
    console.log(inputs);
  };

  // NOTE: CRUD Operations
  const addTodo = (text: string) => {
    if (inputs.newTodo.length) {
      setTodos([
        ...todos,
        {
          id: currentId,
          title: text,
          completed: false,
          editing: false
        }
      ]);
    }

    setCurrentId(currentId + 1);

    setInputs({ ...inputs, newTodo: "" });
  };

  const removeTodo = (index: number) => {
    setTodos(todos.splice(index, 1));
  };

  const toggleTodoState = (index: number) => {
    let newTodos = [...todos];
    let targetTodo = newTodos[index];
    targetTodo.completed = targetTodo.completed ? false : true;
    setTodos(newTodos);
  };

  const modifyTodo = (newTxt: string, index: number) => {
    if (newTxt.length) {
      let newTodos = [...todos];
      newTodos[index].title = newTxt;
      setTodos(newTodos);
    }
  };

  // NOTE: UI Management
  return (
    <div className="mt-5">
      <input
        type="text"
        placeholder="New Todo"
        name="newTodo"
        value={inputs.newTodo}
        onChange={handleChange}
      ></input>
      <button onClick={() => addTodo(inputs.newTodo)}>Add</button>

      {/* TODO: handle modifyTodo, toggleTodoState, and removeTodo from the UI */}

      <TodoList
        todos={todos}
        handleChange={() => handleChange}
        modifyTodo={() => modifyTodo}
        removeTodo={() => removeTodo}
        toggleTodoState={() => toggleTodoState}
      ></TodoList>
    </div>
  );
};

// NOTE: Interfaces
interface ItodoObject {
  id: number;
  title: string;
  completed: boolean;
  editing: boolean;
}

interface IinputsInterface {
  newTodo: string;
}

export default App;
