import check from "../assets/img/icon-check.svg";
import cross from "../assets/img/icon-cross.svg";
import { useState, useEffect } from "react";

const Todo = ({ theme }) => {
  const todoList = [
    { id: 1, content: "Tomar agua", completed: true },
    { id: 2, content: "Finalizar práctica de estados y props", completed: false },
    { id: 3, content: "Tomar agua", completed: false },
    { id: 4, content: "Compartir lo aprendido con algún compañero", completed: false },
    { id: 5, content: "Probar pizza italiana", completed: false },
    { id: 6, content: "Completar el desafío del sprint 3", completed: false },
  ];
  const [List, setList] = useState(todoList);
  const [filtrados, setFiltrados] = useState(List);

  useEffect(() => {
    handleFilterChange("all"); // Actualizar filtrados cuando List cambie
  }, [List]);

  const handleFilterChange = (newFilter) => {
    let tareasFiltradas = [];
    switch (newFilter) {
      case "completed":
        tareasFiltradas = List.filter((tarea) => tarea.completed);
        break;
      case "active":
        tareasFiltradas = List.filter((tarea) => !tarea.completed);
        break;
      case "all":
        tareasFiltradas = List;
        break;
    }
    
    setFiltrados(tareasFiltradas);
    
  };

  function setComplete(id) {
    setList((prevList) =>
      prevList.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  }

  function ClearComplete() {
    const incompleteTasks = List.filter((task) => !task.completed);
    setList(incompleteTasks);
    setFiltrados(incompleteTasks);
  }


  console.log(filtrados);
  return (
    <div className={`lista`}>
      <input
        type="text"
        placeholder="Create a new task..."
        onKeyDown={(event) => {
          if (event.keyCode === 13) {
            // 1. Capturamos el valor y eliminamos los espacios vacíos de los extremos
            const textValue = event.target.value.trim();
            // 2. Si el string está vacío, salimos de la función sin hacer nada
            if (textValue === "") {
              return;
            }

            const id = List.length > 0 ? List[List.length - 1].id + 1 : 1;
            const newTask = {
              id: id,
              content: textValue,
              completed: false,
            };
            setList((prevList) => [...prevList, newTask]);
            event.target.value = "";
          }
        }}
      />
      <ul className={`tareas ${theme}`}>
        {filtrados.map((item) => {
          return (
            <li key={item.id} className={item.completed ? `taskComplete` : ``}>
              <button
                className={item.completed ? `buttonComplete` : `buttonIncomplete`}
                onClick={() => setComplete(item.id)}
              >
                {item.completed && <img src={check} alt="" />}
              </button>
              <label htmlFor={item.id}></label>
              <span>{item.content}</span>
            </li>
          );
        })}
        <li className="botones">
          <span>{List.filter(tarea => !tarea.completed).length} tasks left</span>
          <div className="bigScreen">
            <button onClick={() => handleFilterChange("all")}>All</button>
            <button onClick={() => handleFilterChange("active")}>Active</button>
            <button onClick={() => handleFilterChange("completed")}>Completed</button>
          </div>
          <button onClick={() => ClearComplete()}>Clear Completed</button>
        </li>
        <li className="botones smallScreen">
          <div className="">
            <button onClick={() => handleFilterChange("all")}>All</button>
            <button onClick={() => handleFilterChange("active")}>Active</button>
            <button onClick={() => handleFilterChange("completed")}>Completed</button>
          </div>
        </li>
        

      </ul>
    </div>
  );
};

export default Todo;
