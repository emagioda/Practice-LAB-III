import { useState } from "react";
import TaskList from "./Components/TaskList"; 
import Task from "./Components/Task"; 
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Permite agregar una nueva tarea a la lista. 
  const addTask = (taskText) => {
    setTasks([...tasks, { id: Date.now(), text: taskText, completed: false }]);
  };

  // Cambia el estado de completado de una tarea. Si el ID de la tarea coincide con el que recibo, cambio su propiedad `completed` al valor opuesto.
  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  // Permite eliminar una tarea. Recibo el ID de la tarea que quiero eliminar y filtro las que no coinciden con ese ID para quedarme solo con las demás.
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="app">
      <h1>Lista de Tareas</h1>
      <Task addTask={addTask} />
      <TaskList tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
